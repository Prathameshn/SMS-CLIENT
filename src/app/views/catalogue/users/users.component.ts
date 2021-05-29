import { Component, OnInit } from "@angular/core";
import { AttributeService } from "../../../services/user/user.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-attributes",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UserComponent implements OnInit {
  attributesList: Array<any> = [];
  count: Number = 0;
  public pageSize = 8;
  public currentPage = 1;
  searchValue: String = "";

  constructor(
    private attribute: AttributeService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log("called");
    this.getListAttributes();
  }

  getListAttributes() {
    this.attribute.getAttributesList(this.currentPage, this.pageSize).subscribe(
      (res) => {
        console.log("res", res);
        if (res.users && res.users.length > 0) {
          this.attributesList = res.users;
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
    this.getListAttributes();
  }

  onChangeAttributeType(role) {
    this.searchValue = "";
    this.currentPage = 1;
    // console.log("type", isEnabled);
    if (role !== "All") {
      console.log("enter");
      this.attribute
        .getAttributesBySearch(
          this.currentPage,
          this.pageSize,
          this.searchValue,
          role
        )
        .subscribe(
          (res) => {
            this.attributesList = res.users;
            this.count = res.count;
            // if (res.categorys && res.categorys.length > 0) {
            // }
          },
          (err) => {
            console.log("err", err);
          }
        );
    } else {
      console.log("else");
      this.clearSearch();
    }
  }

  onChangeCategoryType(type) {
    this.searchValue = "";
    this.currentPage = 1;
    let isEnabled: any = type === "false" ? false : true;
    // console.log("type", isEnabled);
    if (type === "true" || type === "false") {
      console.log("enter");
      this.attribute
        .getAttributesBySearch(
          this.currentPage,
          this.pageSize,
          this.searchValue,
          isEnabled
        )
        .subscribe(
          (res) => {
            this.attributesList = res.attributes;
            this.count = res.count;
            // if (res.categorys && res.categorys.length > 0) {
            // }
          },
          (err) => {
            console.log("err", err);
          }
        );
    } else {
      console.log("else");
      this.clearSearch();
    }
  }

  categorySearch() {
    this.attribute
      .getAttributesBySearch(this.currentPage, this.pageSize, this.searchValue)
      .subscribe(
        (res) => {
          if (res.attributes && res.attributes.length > 0) {
            this.attributesList = res.attributes;
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
    this.attribute.changePage(this.currentPage, this.pageSize).subscribe(
      (res) => {
        // console.log("res", res);
        if (res.attributes && res.attributes.length > 0) {
          this.attributesList = res.attributes;
          this.count = res.count;
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  openDialogForAttribute(id, name): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: "350px",
      data: `Do you really want to delete ${name} ?`,
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.attribute.deleteAttribute(id).subscribe((res) => {
            this.attributesList = this.attributesList.filter(
              (item) => item.id !== id
            );
            this.getListAttributes();
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

  updateIsEnabled(id, name, isEnabled): void {
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
          this.attribute.updateAttribute(id, obj).subscribe({
            next: () => {
              this.getListAttributes();
            },
            error: (error) => {
              console.log("error", error);
            },
          });
          // DO SOMETHING
        } else {
          this.getListAttributes();
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  // enableChanged(id, isEnabled) {
  //   // console.log("err", id, isEnabled);
  //   let obj = {
  //     isEnabled: isEnabled,
  //   };
  //   this.attribute.updateAttribute(id, obj).subscribe({
  //     next: () => {
  //       this.getListAttributes();
  //     },
  //     error: (error) => {
  //       console.log("error", error);
  //     },
  //   });
  // }

  deleteAttribute(id) {
    this.attribute.deleteAttribute(id).subscribe((res) => {
      this.attributesList = this.attributesList.filter(
        (item) => item.id !== id
      );
      this.getListAttributes();
      console.log("Attributes deleted successfully!");
    });
  }

  navigateToAddAtrribute() {
    this.router.navigate(["/add-user"]);
  }
}
