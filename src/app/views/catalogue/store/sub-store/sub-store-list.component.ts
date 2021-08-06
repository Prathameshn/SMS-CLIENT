import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SubCategoryService } from "../../../../services/store/store.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../../../../shared/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-sub-store-list",
  templateUrl: "./sub-store-list.component.html",
  styleUrls: ["./sub-store-list.component.scss"],
})
export class StoreListComponent implements OnInit {
  universityList: Array<any> = [];
  count: Number = 0;
  public pageSize = 8;
  public currentPage = 1;
  searchValue: String = "";
  role: String = "";


  constructor(
    private subCategory: SubCategoryService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("called");
    this.getListSubCategories();
    let userRole = localStorage.getItem("role");
    if (userRole != undefined && userRole != null) {
      this.role = userRole;
    }
  }

  getListSubCategories() {
    this.subCategory
      .getSubCategoryList(this.currentPage, this.pageSize)
      .subscribe(
        (res) => {
          // console.log("res", res);
          if (res.Universities && res.Universities.length > 0) {
            this.universityList = res.Universities;
            this.count = res.count;
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
    this.getListSubCategories();
  }

  onChangeCategoryType(type) {
    this.searchValue = "";
    this.currentPage = 1;
    let user:any = localStorage.getItem('user') 
    user = JSON.parse(user)
    let storeKeeper: any = type == "MY" ? user.id : undefined;
    // console.log("type", isEnabled);
      this.subCategory
        .getSubCategoriesBySearch(
          this.currentPage,
          this.pageSize,
          this.searchValue,
          storeKeeper
        )
        .subscribe(
          (res) => {
            this.universityList = res.Universities;
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
    this.subCategory
      .getSubCategoriesBySearch(
        this.currentPage,
        this.pageSize,
        this.searchValue
      )
      .subscribe(
        (res) => {
          if (res.Universities && res.Universities.length > 0) {
            this.universityList = res.Universities;
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
    this.subCategory.changePage(this.currentPage, this.pageSize).subscribe(
      (res) => {
        // console.log("res", res);
        if (res.Universities && res.Universities.length > 0) {
          this.universityList = res.Universities;
          this.count = res.count;
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  openDialogForSubCategories(id, name): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "350px",
      data: `Do you really want to delete ${name} ?`,
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.subCategory.deleteSubCategory(id).subscribe((res) => {
            this.universityList = this.universityList.filter(
              (item) => item.id !== id
            );
            this.getListSubCategories();
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

  updateIsEnabledForSubCategory(id, name, isEnabled): void {
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
          this.subCategory.updateSubCategory(id, obj).subscribe({
            next: () => {
              this.getListSubCategories();
            },
            error: (error) => {
              console.log("error", error);
            },
          });
          // DO SOMETHING
        } else {
          this.getListSubCategories();
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  deleteSubCategory(id) {
    this.subCategory.deleteSubCategory(id).subscribe((res) => {
      this.universityList = this.universityList.filter(
        (item) => item.id !== id
      );
      this.getListSubCategories();
      console.log("Attributes deleted successfully!");
    });
  }

  navigateToAddSubCategory() {
    this.router.navigate(["/add-universities"]);
  }
}
