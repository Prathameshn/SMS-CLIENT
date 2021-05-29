import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account/account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private account: AccountService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ["prathmesh@gmail.com", Validators.required],
      password: ["123123", [Validators.required, Validators.minLength(6)]],
      admin:[true, Validators.required],
    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(!this.f.admin.value){
      this.account.subUserLogin(this.f.email.value, this.f.password.value).subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          console.log("user logged in");
          this.router.navigate(["/stores"]);
        },
        error: (error) => {
          console.log("error", error);
          // this.router.navigate(["/users"]);
          // this.alertService.error(error);
          // this.loading = false;
        },
      });
    }
    else if (this.form.invalid) {
      return;
    } else if(this.f.admin.value){
      // this.loading = true;
      this.account.login(this.f.email.value, this.f.password.value).subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          console.log("user logged in");
          this.router.navigate(["/users"]);
        },
        error: (error) => {
          console.log("error", error);
          // this.router.navigate(["/users"]);
          // this.alertService.error(error);
          // this.loading = false;
        },
      });
    }
  }
}
