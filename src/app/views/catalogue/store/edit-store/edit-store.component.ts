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
import { AttributeService } from "../../../../services/user/user.service";
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
    private attribute: AttributeService,
    private formBuilder: FormBuilder,
    private subCategory: SubCategoryService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["storeId"];
    this.subCategoryForm = this.formBuilder.group({
      name: ["", Validators.required],
      location: ["", Validators.required],
      phone: ["", Validators.required],
      attributes: [[""]]
    });
    this.getSubCategoryById();
  }

  onKeyUpEvent(event: any) {
    this.subCategory.getAttributesList(event.target.value).subscribe(
      (res) => {
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
          location: res.location,
          phone: res.phone,
          storeKeeper: res.storeKeeper,
        });
        this.selectedAttributes = [res.storeKeeper]
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
      storeKeeper: this.selectedAttributes[0].id,
    };
    this.loading = true;
    this.subCategory.updateSubCategory(this.id, obj).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/stores"]);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  }
}
