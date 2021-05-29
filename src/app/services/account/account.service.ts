import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient) {}
  login(email, password) {
    console.log("email", email, password);
    return this.http
      .post<any>(`${environment.base_url}auth/login`, {
        email,
        password,
      })
      .pipe(
        map((loginResponse) => {
          console.log("login", loginResponse);
          if (loginResponse.accessToken) {
            localStorage.setItem(
              "accessToken",
              loginResponse.accessToken
            );
          }
          if (loginResponse.user) {
            localStorage.setItem("user", JSON.stringify(loginResponse.user));
            localStorage.setItem("role", loginResponse.user.role);
          }
          return loginResponse;
        })
      );
  }

  subUserLogin(email, password) {
    console.log("email", email, password);
    return this.http
      .post<any>(`${environment.base_url}auth/subUserlogin`, {
        email,
        password,
      })
      .pipe(
        map((loginResponse) => {
          console.log("subUserlogin", loginResponse);
          if (loginResponse.accessToken) {
            localStorage.setItem(
              "accessToken",
              loginResponse.accessToken
            );
          }
          if (loginResponse.user) {
            localStorage.setItem("user", JSON.stringify(loginResponse.user));
            localStorage.setItem("role", loginResponse.user.role);
          }
          return loginResponse;
        })
      );
  }

  getToken() {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken !== undefined && accessToken !== null) {
      return accessToken;
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem("user");
    // this.userSubject.next(null);
    // this.router.navigate(["/account/login"]);
  }

  register(user: any) {
    return this.http.post(`${environment.base_url}users`, user).pipe(
      map((userResponse: any) => {
        if (userResponse.token && userResponse.accessToken) {
          localStorage.setItem("accessToken", userResponse.accessToken);
        }
        if (userResponse.user) {
          localStorage.setItem("user", JSON.stringify(userResponse.user));
        }
        // console.log("register", user);
      })
    );
  }
}
