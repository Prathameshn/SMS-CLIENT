import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoryService } from "../../../services/product/product.service";
import { SubCategoryService } from "../../../services/store/store.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.scss"],
})
export class EditProductComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  id: String;
  categoryForm: FormGroup;
  loading = false;
  submitted = false;
  myControl = new FormControl();
  subcategoriesList: any = [];
  totalSubcategories: any = [];
  selectedSubcategories: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _category: CategoryService,
    private _subCategory: SubCategoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["productId"];
    this.categoryForm = this.formBuilder.group({
      name: ["", Validators.required],
      university: ["", Validators.required],
      teacherName: ["", Validators.required],
    });
    this.getcategoryById();
  }

  getcategoryById() {
    this._category.getCategoryById(this.id).subscribe(
      (res) => {
        console.log(res)
        this.categoryForm.patchValue({
          name: res.name,
          university: res.university,
          teacherName: res.teacherName,
        });
        this.selectedSubcategories = [res.university]
      },
      (err) => {
        console.log("data", err);
      }
    );
  }

  onKeyUpEvent(event: any) {
    this._category.getSubcategoryListByQuery(event.target.value).subscribe(
      (res) => {
        if (res.Universities && res.Universities.length > 0) {
          this.subcategoriesList = res.Universities;
        }else{
          this.subcategoriesList =[]
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.selectedSubcategories,
      event.previousIndex,
      event.currentIndex
    );
  }

  deleteAttribute(event) {
    this.selectedSubcategories = this.selectedSubcategories.filter(
      (x) => x.id !== event.id
    );
  }

  attributeSelect(event) {
    this.selectedSubcategories = []
    this.selectedSubcategories.push(event)
    this.myControl.reset("");
    // let duplicateValue = this.selectedSubcategories.find(
    //   (x) => x.id === event.id
    // );
    // if (duplicateValue == undefined) {
    //   this.selectedSubcategories.push(event);
    //   this.myControl.reset("");
    // } else {
    //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
    //     duration: 1000,
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    // }
  }

  // getSubCategoryList() {
  //   this._subCategory.getSubCategoryList().subscribe(
  //     (res) => {
  //       // console.log("res", res);
  //       if (res.subSubCategorys && res.subSubCategorys.length > 0) {
  //         this.totalSubcategories = res.subSubCategorys;
  //       }
  //       // console.log("res", this.subCategoriesList);
  //     },
  //     (err) => {
  //       console.log("err", err);
  //     }
  //   );
  // }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onItemSubSelect(item: any) {
    console.log(item);
  }
  onSubSelectAll(items: any) {
    console.log(items);
  }
  get f() {
    return this.categoryForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }
    let obj = {
      ...this.categoryForm.value,
      store: this.selectedSubcategories[0].id,
    };
    this.loading = true;
    this._category.updateCategory(this.id, obj).subscribe({
      next: () => {
        this.router.navigate(["/courses"]);
      },
      error: (error) => {
        console.log("error", error);
        // this.alertService.error(error);
        // this.loading = false;
      },
    });
  }
}
