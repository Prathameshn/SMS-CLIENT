import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SubCategoryService {
  constructor(private http: HttpClient) {}

  addSubCategory(attrObj) {
    return this.http
      .post<any>(`${environment.base_url}university`, attrObj)
      .pipe(
        map((response) => {
          //   console.log("attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getSubCategoryList(page, perPage) {
    return this.http
      .get<any>(
        `${environment.base_url}university?page=${page}&perPage=${perPage}`
      )
      .pipe(
        map((response) => {
          // console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getSubCategoriesBySearch(page, perPage, query?, storeKeeper?) {
    let url;
    if (storeKeeper !== undefined) {
      url = `${environment.base_url}university?page=${page}&perPage=${perPage}&search=${query}&storeKeeper=${storeKeeper}`;
    } else {
      url = `${environment.base_url}university?page=${page}&perPage=${perPage}&search=${query}`;
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
        `${environment.base_url}university?page=${page}&perPage=${perPage}`
      )
      .pipe(
        map((response) => {
          // console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getSubCategoryById(id) {
    return this.http
      .get<any>(`${environment.base_url}university/${id}`)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(this.errorHandler)
      );
  }

  updateSubCategory(id, attribute) {
    return this.http
      .patch<any>(`${environment.base_url}university/${id}`, attribute)
      .pipe(catchError(this.errorHandler));
  }

  deleteSubCategory(id) {
    return this.http
      .delete<any>(`${environment.base_url}university/${id}`)
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
