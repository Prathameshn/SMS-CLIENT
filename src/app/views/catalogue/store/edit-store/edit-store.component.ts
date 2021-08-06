import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SubCategoryService } from "../../../../services/store/store.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-edit-store",
  templateUrl: "./edit-store.component.html",
  styleUrls: ["./edit-store.component.scss"],
})
export class EditStoreComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  id: String;
  subCategoryForm: FormGroup;
  loading = false;
  submitted = false;
  myControl = new FormControl();
  attributesList: any = [];
  totalAttributes: any = [];
  selectedAttributes: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private subCategory: SubCategoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["storeId"];
    this.subCategoryForm = this.formBuilder.group({
      name: ["", Validators.required],
      minimum_gre_score: ["", Validators.required],
      minimum_gpa: ["", Validators.required],
      country: ["", Validators.required],
      description: ["", Validators.required]
    });
    this.getSubCategoryById();
  }

  onKeyUpEvent(event: any) {
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.selectedAttributes,
      event.previousIndex,
      event.currentIndex
    );
  }

  deleteAttribute(event) {
    this.selectedAttributes = this.selectedAttributes.filter(
      (x) => x.id !== event.id
    );
  }

  attributeSelect(event) {
    this.selectedAttributes = []
    this.selectedAttributes.push(event)
    this.myControl.reset("");
    // let duplicateValue = this.selectedAttributes.find((x) => x.id === event.id);
    // if (duplicateValue == undefined) {
    //   this.selectedAttributes.push(event);
    //   this.myControl.reset("");
    // } else {
    //   this._snackBar.open(`${event.name} is already Selected.`, "End now", {
    //     duration: 1000,
    //     horizontalPosition: this.horizontalPosition,
    //     verticalPosition: this.verticalPosition,
    //   });
    // }
    // console.log("_duplicate", this.selectedAttributes);
  }

  get f() {
    return this.subCategoryForm.controls;
  }

  getSubCategoryById() {
    this.subCategory.getSubCategoryById(this.id).subscribe(
      (res) => {
        // console.log("res", res);
        this.subCategoryForm.patchValue({
          name: res.name,
          minimum_gre_score:res.minimum_gre_score,
          minimum_gpa:res.minimum_gpa,
          country:res.country,
          description:res.description
        });
      },
      (err) => {
        console.log("data", err);
      }
    );
  }
  onSubmit() {
    this.submitted = true;
    if (this.subCategoryForm.invalid) {
      return;
    }
    let obj = {
      ...this.subCategoryForm.value,
    };
    this.loading = true;
    this.subCategory.updateSubCategory(this.id, obj).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/universities"]);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  }
}
