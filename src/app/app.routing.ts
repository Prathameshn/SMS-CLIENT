import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { AdminGuard } from "./admin/admin.guard";
import { UserComponent } from "./views/catalogue/users/users.component";
import { AddUserComponent } from "./views/catalogue/add-user/add-user.component";
import { EditUserComponent } from "./views/catalogue/edit-user/edit-user.component";
import { StoreListComponent } from "./views/catalogue/store/sub-store/sub-store-list.component";
import { AddStoreComponent } from "./views/catalogue/store/add-store/add-store.component";
import { EditStoreComponent } from "./views/catalogue/store/edit-store/edit-store.component";
import { ProductComponent } from './views/catalogue/product/product.component';
import { AddProductComponent } from './views/catalogue/add-product/add-product.component';
import { EditProductComponent } from './views/catalogue/edit-product/edit-product.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404",
    },
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500",
    },
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page",
    },
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page",
    },
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
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
        path: "edit-user/:userId",
        component: EditUserComponent,
        data: {
          title: "Edit User",
        },
      },
      {
        path: "stores",
        component: StoreListComponent,
        data: {
          title: "Store",
        },
      },
      {
        path: "add-stores",
        component: AddStoreComponent,
        data: {
          title: "Create Store",
        },
      },
      {
        path: "edit-stores/:storeId",
        component: EditStoreComponent,
        data: {
          title: "Edit Store",
        },
      },
      {
        path: "products",
        component: ProductComponent,
        data: {
          title: "Product",
        },
      },
      {
        path: "add-product",
        component: AddProductComponent,
        data: {
          title: "Create Product",
        },
      },
      {
        path: "edit-product/:productId",
        component: EditProductComponent,
        data: {
          title: "Edit Product",
        },
      }
    ],
  },
  { path: "**", component: P404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
