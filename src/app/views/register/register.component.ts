import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account/account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
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
      name: ["", Validators.required],
      // lastName: ["", Validators.required],
      email: ["", Validators.required],
      // mobile: ["", Validators.required],
      role: ["USER", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log("enter", this.form);
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log("this", this.form);
    this.loading = true;
    this.account.register(this.form.value).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/login"]);
        console.log("user logged in");
      },
      error: (error) => {
        console.log("error", error);
        // this.alertService.error(error);
        // this.loading = false;
      },
    });
  }
}
