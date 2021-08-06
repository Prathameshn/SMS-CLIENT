import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "../../../services/product/product.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  categoryForm: FormGroup;
  loading = false;
  submitted = false;
  myControl = new FormControl();
  subCategoriesList = [];
  selectedSubcategoryItems = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _category: CategoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: ["", Validators.required],
      university: ["", Validators.required],
      teacherName: ["", Validators.required],
    });
  }

  onKeyUpEvent(event: any) {
    // console.log(event.target.value);
    this._category.getSubcategoryListByQuery(event.target.value).subscribe(
      (res) => {
        // console.log("data", res);
        if (res.Universities && res.Universities.length > 0) {
          this.subCategoriesList = res.Universities;
        }else{
          this.subCategoriesList =[]
        }
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.selectedSubcategoryItems,
      event.previousIndex,
      event.currentIndex
    );
  }

  deleteAttribute(event) {
    this.selectedSubcategoryItems = this.selectedSubcategoryItems.filter(
      (x) => x.id !== event.id
    );
  }

  attributeSelect(event) {
    this.selectedSubcategoryItems = []
    this.selectedSubcategoryItems.push(event)
    this.myControl.reset("");
    // let duplicateValue = this.selectedSubcategoryItems.find(
    //   (x) => x.id === event.id
    // );
    // // console.log("_duplicate", duplicateValue);
    // if (duplicateValue == undefined) {
    //   this.selectedSubcategoryItems.push(event);
    //   this.myControl.reset("");
    // } else {
    //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
    //     duration: 1000,
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    // }
  }

  get f() {
    return this.categoryForm.controls;
  }

  onSubmit() {
    console.log("clcked");
    this.submitted = true;
    // if (this.categoryForm.invalid) {
    //   return;
    // }
    let obj = {
      ...this.categoryForm.value,
      university: this.selectedSubcategoryItems[0].id,
    };
    this.loading = true;
    this._category.addCategory(obj).subscribe({
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
