import { Component, OnInit } from "@angular/core";
import { AttributeService } from "../../../services/user/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  attributeForm: FormGroup;
  loading = false;
  submitted = false;
  attributeType = "";
  min = 0;
  max = 0;
  text = "";
  number = 0;
  options = [
    {
      email: "",
      value: "",
    },
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private attribute: AttributeService
  ) {}

  ngOnInit(): void {
    this.attributeForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      isEnabled: [false, Validators.required],
      role: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.attributeForm.controls;
  }
  addOption() {
    this.options.push({
      email: "",
      value: "",
    });
  }
  removeOption(i) {
    this.options.splice(i, 1);
  }
  onSubmit() {
    this.submitted = true;
    if (this.attributeForm.invalid) {
      return;
    }
    let obj = {
      ...this.attributeForm.value,
      options: [],
    };
    this.loading = true;
    this.attribute.addAttribute(obj).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/users"]);
      },
      error: (error) => {
        console.log("error", error);
        // this.alertService.error(error);
        // this.loading = false;
      },
    });
  }
}
