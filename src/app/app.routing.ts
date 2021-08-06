import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { StoreListComponent } from "./views/catalogue/store/sub-store/sub-store-list.component";
import { AddStoreComponent } from "./views/catalogue/store/add-store/add-store.component";
import { EditStoreComponent } from "./views/catalogue/store/edit-store/edit-store.component";
import { ProductComponent } from './views/catalogue/product/product.component';
import { AddProductComponent } from './views/catalogue/add-product/add-product.component';
import { EditProductComponent } from './views/catalogue/edit-product/edit-product.component';
import { FilterCoursesComponent } from './views/catalogue/filterCourses/filterCourses.component'

export const routes: Routes = [
  {
    path: "",
    redirectTo: "universities",
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
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "filter",
        component: FilterCoursesComponent,
        data: {
          title: "Filtered Courses",
        }
      },
      {
        path: "universities",
        component: StoreListComponent,
        data: {
          title: "Universities",
        },
      },
      {
        path: "add-universities",
        component: AddStoreComponent,
        data: {
          title: "Create Universities",
        },
      },
      {
        path: "edit-universities/:storeId",
        component: EditStoreComponent,
        data: {
          title: "Edit Universities",
        },
      },
      {
        path: "courses",
        component: ProductComponent,
        data: {
          title: "Courses",
        },
      },
      {
        path: "add-courses",
        component: AddProductComponent,
        data: {
          title: "Create Courses",
        },
      },
      {
        path: "edit-courses/:productId",
        component: EditProductComponent,
        data: {
          title: "Edit Courses",
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
