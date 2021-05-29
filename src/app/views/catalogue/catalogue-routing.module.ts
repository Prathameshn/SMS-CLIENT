import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductComponent } from "./product/product.component";
import { UserComponent } from "./users/users.component";
import { AttributeSetComponent } from "./attribute-set/attribute-set.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { StoreListComponent } from "./store/sub-store/sub-store-list.component";
import { AddStoreComponent } from "./store/add-store/add-store.component";
import { EditStoreComponent } from "./store/edit-store/edit-store.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Catalogue",
    },
    children: [
      {
        path: "",
        redirectTo: "attributes",
      },
      {
        path: "product",
        component: ProductComponent,
        data: {
          title: "Product",
        },
      },
      {
        path: "add-category",
        component: AddProductComponent,
        data: {
          title: "Create Product",
        },
      },
      {
        path: "edit-category/:categoryId",
        component: EditProductComponent,
        data: {
          title: "Edit Product",
        },
      },
      {
        path: "users",
        component: UserComponent,
        data: {
          title: "User",
        },
      },
      {
        path: "add-user",
        component: AddUserComponent,
        data: {
          title: "Create User",
        },
      },
      {
        path: "edit-user/:attributeId",
        component: EditProductComponent,
        data: {
          title: "Edit User",
        },
      },
      {
        path: "sub-categories",
        component: StoreListComponent,
        data: {
          title: "Store",
        },
      },
      {
        path: "add-sub-category",
        component: AddStoreComponent,
        data: {
          title: "Create Store",
        },
      },
      {
        path: "edit-sub-category/:subCategoryId",
        component: EditStoreComponent,
        data: {
          title: "Edit Store",
        },
      },
      {
        path: "attributes-set",
        component: AttributeSetComponent,
        data: {
          title: "Attribute Set",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
