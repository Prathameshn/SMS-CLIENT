import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../../../services/product/product.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-category",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  categoryList: Array<any> = [];
  myAllStore:Array<any> = [];
  count: Number = 0;
  public pageSize = 8;
  public currentPage = 1;
  searchValue: String = "";

  constructor(
    private _category: CategoryService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListCategories()
  }

  getListCategories() {
    this._category.getCategoryList(this.currentPage, this.pageSize).subscribe(
      (res) => {
        // console.log("res", res);
        if (res.courses && res.courses.length > 0) {
          this.categoryList = res.courses;
          this.count = res.count;
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  getListOfStores() {
    this._category
      .getSubcategoryListByQuery("")
      .subscribe(
        (res) => {
          // console.log("res", res);
          if (res.courses && res.courses.length > 0) {
            this.myAllStore = res.courses;
            this.count = res.count;
            this.onChangeCategoryType(this.myAllStore[0].id);
          }
        },
        (err) => {
          console.log("err", err);
        }
      );
  }

  clearSearch() {
    this.searchValue = "";
    this.currentPage = 1;
    this.getListCategories();
  }

  onChangeCategoryType(store) {
    this.searchValue = "";
    this.currentPage = 1;
    // console.log("type", isEnabled);
      this._category
        .getCategoriesBySearch(
          this.currentPage,
          this.pageSize,
          this.searchValue,
          store
        )
        .subscribe(
          (res) => {
            this.categoryList = res.products;
            this.count = res.count;
            // if (res.categorys && res.categorys.length > 0) {
            // }
          },
          (err) => {
            console.log("err", err);
          }
        );
  }

  categorySearch() {
    this._category
      .getCategoriesBySearch(this.currentPage, this.pageSize, this.searchValue)
      .subscribe(
        (res) => {
          if (res.prooducts && res.prooducts.length > 0) {
            this.categoryList = res.prooducts;
            this.count = res.count;
          }
        },
        (err) => {
          console.log("err", err);
        }
      );
  }

  handlePage(event) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    // console.log("event", event);
    this._category.changePage(this.currentPage, this.pageSize).subscribe(
      (res) => {
        // console.log("res", res);
        if (res.prooducts && res.prooducts.length > 0) {
          this.categoryList = res.prooducts;
          this.count = res.count;
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  updateIsEnabledForCategory(id, name, isEnabled): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "350px",
      data: `Do you really want to Update ${name} ?`,
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          let obj = {
            isEnabled: isEnabled,
          };
          this._category.updateCategory(id, obj).subscribe({
            next: () => {
              this.getListCategories();
            },
            error: (error) => {
              console.log("error", error);
            },
          });
          // DO SOMETHING
        } else {
          this.getListCategories();
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  openDialogForCategories(id, name): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "350px",
      data: `Do you really want to delete ${name} ?`,
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this._category.deleteCategory(id).subscribe((res) => {
            this.categoryList = this.categoryList.filter(
              (item) => item.id !== id
            );
            this.getListCategories();
            console.log("Attributes deleted successfully!");
          });
          // DO SOMETHING
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  deleteCategory(id) {
    this._category.deleteCategory(id).subscribe((res) => {
      this.categoryList = this.categoryList.filter((item) => item.id !== id);
      this.getListCategories();
      console.log("Attributes deleted successfully!");
    });
  }

  navigateToAddCategory() {
    this.router.navigate(["/add-courses"]);
  }
}
