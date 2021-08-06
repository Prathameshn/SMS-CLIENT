import { Component, OnInit } from "@angular/core";
import { navItems, subUserNavItems } from "../../_nav";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems: any;

  constructor(private router: Router) {}
  ngOnInit() {
      this.navItems =  navItems ? navItems : subUserNavItems;
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
