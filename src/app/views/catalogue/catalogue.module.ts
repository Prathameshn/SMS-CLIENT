import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./users/users.component";
import { AttributeSetComponent } from "./attribute-set/attribute-set.component";
import { CatalogueRoutingModule } from "./catalogue-routing.module";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MaterialModule } from "../../angular-material.module";
import { TokenInterceptor } from "../../helpers/token.interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// import { ConfirmationDialogComponent } from "../../shared/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  imports: [
    CatalogueRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
  ],
  declarations: [
    UserComponent,
    // ConfirmationDialogComponent,
    AttributeSetComponent,
    AddUserComponent,
    EditUserComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ]
  // entryComponents: [ConfirmationDialogComponent],
})
export class CatalogueModule {}
