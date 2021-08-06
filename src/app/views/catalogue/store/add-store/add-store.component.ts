import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { SubCategoryService } from "../../../../services/store/store.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Component({
  selector: "app-add-store",
  templateUrl: "./add-store.component.html",
  styleUrls: ["./add-store.component.scss"],
})
export class AddStoreComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  subCategoryForm: FormGroup;
  loading = false;
  submitted = false;
  myControl = new FormControl();
  attributesList: any = [];
  selectedAttributes: any = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private subCategory: SubCategoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.subCategoryForm = this.formBuilder.group({
      name: ["", Validators.required],
      minimum_gre_score: ["", Validators.required],
      minimum_gpa: ["", Validators.required],
      country: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  onKeyUpEvent(event: any) {
    // console.log(event.target.value);
    if(event.target.value.length){

    }
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
    console.log(event)
    this.selectedAttributes = []
    this.selectedAttributes.push(event)
    this.myControl.reset("");
  }

  get f() {
    return this.subCategoryForm.controls;
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
    this.subCategory.addSubCategory(obj).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/universities"]);
      },
      error: (error) => {
        console.log("error", error);
        // this.alertService.error(error);
        // this.loading = false;
      },
    });
  }
}
