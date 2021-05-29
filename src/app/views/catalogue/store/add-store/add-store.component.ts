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
      location: ["", Validators.required],
      phone: ["", Validators.required],
      attributes: [[""]],
    });
  }

  onKeyUpEvent(event: any) {
    // console.log(event.target.value);
    this.subCategory.getAttributesList(event.target.value).subscribe(
      (res) => {
        console.log("data", res);
        this.attributesList = res.users;
      },
      (error) => {
        console.log("error", error);
      }
    );
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
    // // console.log("_duplicate", duplicateValue);
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
  onSubmit() {
    this.submitted = true;
    if (this.subCategoryForm.invalid) {
      return;
    }
    let obj = {
      ...this.subCategoryForm.value,
      storeKeeper: this.selectedAttributes[0].id,
    };
    this.loading = true;
    this.subCategory.addSubCategory(obj).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/stores"]);
      },
      error: (error) => {
        console.log("error", error);
        // this.alertService.error(error);
        // this.loading = false;
      },
    });
  }
}