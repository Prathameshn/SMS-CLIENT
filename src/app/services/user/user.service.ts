import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AttributeService {
  constructor(private http: HttpClient) {}

  addAttribute(attrObj) {
    return this.http
      .post<any>(`${environment.base_url}users`, attrObj)
      .pipe(
        map((response) => {
          // console.log("attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getAttributesList(page, perPage) {
    return this.http
      .get<any>(
        `${environment.base_url}users?page=${page}&perPage=${perPage}`
      )
      .pipe(
        map((response) => {
          // console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getAttributesBySearch(page, perPage, query?, role?, isEnabled?) {
    let url;
    if (isEnabled !== undefined) {
      url = `${environment.base_url}users?page=${page}&perPage=${perPage}&search=${query}&isEnabled=${isEnabled}`;
    } else if (role !== undefined) {
      url = `${environment.base_url}users?page=${page}&perPage=${perPage}&search=${query}&role=${role}`;
    } else {
      url = `${environment.base_url}users?page=${page}&perPage=${perPage}&search=${query}`;
    }
    return this.http.get<any>(`${url}`).pipe(
      map((response) => {
        // console.log("get attribute", response);
        return response;
      }),
      catchError(this.errorHandler)
    );
  }

  changePage(page, perPage) {
    return this.http
      .get<any>(
        `${environment.base_url}users?page=${page}&perPage=${perPage}`
      )
      .pipe(
        map((response) => {
          // console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getAttributeById(id) {
    return this.http
      .get<any>(`${environment.base_url}users/${id}`)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(this.errorHandler)
      );
  }

  updateAttribute(id, attribute) {
    return this.http
      .patch<any>(`${environment.base_url}users/${id}`, attribute)
      .pipe(catchError(this.errorHandler));
  }

  deleteAttribute(id) {
    return this.http
      .delete<any>(`${environment.base_url}users/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
