import { Component, OnInit } from "@angular/core";
import { AttributeService } from "../../../services/user/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  id: String;
  editAttributeForm: FormGroup;
  loading = false;
  submitted = false;
  attributeType = "";
  min: any;
  max: any;
  text = "";
  number = 0;
  options = [
    {
      label: "",
      value: "",
    },
  ];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private attribute: AttributeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["userId"];
    this.editAttributeForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      isEnabled: [false, Validators.required],
      type: ["", Validators.required],
      role: ["", Validators.required],
      description: ["", Validators.required],
    });
    this.editAttributeForm.controls["type"].valueChanges.subscribe((value) => {
      if (value === "RANGE" || value === "AREA") {
        this.min;
        this.max;
      }
      if (value === "CURRENCY" || value === "NUMBER") {
        this.number;
      }
      if (value === "TEXT") {
        this.text;
      }
      this.attributeType = value;
    });
    this.getAttributeById();
  }
  getAttributeById() {
    this.attribute.getAttributeById(this.id).subscribe(
      (res) => {
        // this.attributeType = res.type;
        // if (res.type === "RANGE" || res.type === "AREA") {
        //   this.min = res.value.min;
        //   this.max = res.value.max;
        // } else if (res.type === "CURRENCY" || res.type === "NUMBER") {
        //   this.number = res.value.data;
        // } else if (res.type === "TEXT") {
        //   this.text = res.value.data;
        // } else if (res.type === "OPTIONS") {
        //   this.options = res.options;
        // }
        this.editAttributeForm.patchValue({
          name: res.name,
          email: res.email,
          password: res.password,
          role: res.role,
          description: res.description,
        });
      },
      (err) => {
        console.log("data", err);
      }
    );
  }

  get f() {
    return this.editAttributeForm.controls;
  }
  addOption() {
    this.options.push({
      label: "",
      value: "",
    });
  }
  removeOption(i) {
    this.options.splice(i, 1);
  }
  onSubmit() {
    this.submitted = true;
    let obj = {
      ...this.editAttributeForm.value,
      options: [],
    };
    this.loading = true;
    this.attribute.updateAttribute(this.id, obj).subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        this.router.navigate(["/users"]);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  }
}
