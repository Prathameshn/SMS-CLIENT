import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

import {
  IconModule,
  IconSetModule,
  IconSetService,
} from "@coreui/icons-angular";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { AppComponent } from "./app.component";

// Import containers
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

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";

// Import routing module
import { AppRoutingModule } from "./app.routing";

// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MaterialModule } from './angular-material.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppAsideModule,
    MaterialModule,
    AppBreadcrumbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    ConfirmationDialogComponent,
    StoreListComponent,
    AddStoreComponent,
    EditStoreComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    FilterCoursesComponent
  ],
  entryComponents:[ConfirmationDialogComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
