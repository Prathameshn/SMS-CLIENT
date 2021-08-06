import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(attrObj) {
    return this.http
      .post<any>(`${environment.base_url}course`, attrObj)
      .pipe(
        map((response) => {
          //   console.log("attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getCategoryList(page, perPage) {
    return this.http
      .get<any>(
        `${environment.base_url}course?page=${page}&perPage=${perPage}`
      )
      .pipe(
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
        `${environment.base_url}course?page=${page}&perPage=${perPage}`
      )
      .pipe(
        map((response) => {
          // console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getSubcategoryListByQuery(query) {
    return this.http
      .get<any>(`${environment.base_url}university?search=${query}`)
      .pipe(
        map((response) => {
          // console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }

  getCategoriesBySearch(page, perPage, query?, store?) {
    let url;
    if (store !== undefined) {
      url = `${environment.base_url}course?page=${page}&perPage=${perPage}&search=${query}&store=${store}`;
    } else {
      url = `${environment.base_url}course?page=${page}&perPage=${perPage}&search=${query}`;
    }
    return this.http.get<any>(`${url}`).pipe(
      map((response) => {
        // console.log("get attribute", response);
        return response;
      }),
      catchError(this.errorHandler)
    );
  }

  getCategoryById(id) {
    return this.http
      .get<any>(`${environment.base_url}course/${id}`)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(this.errorHandler)
      );
  }

  updateCategory(id, attribute) {
    return this.http
      .patch<any>(`${environment.base_url}course/${id}`, attribute)
      .pipe(catchError(this.errorHandler));
  }

  deleteCategory(id) {
    return this.http
      .delete<any>(`${environment.base_url}course/${id}`)
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

  getAllFilterCourses(gpa?, gre?, country?, course?){
    return this.http
      .get<any>(
        `${environment.base_url}/university/filter?GPA=${gpa}&GRE=${gre}&country=${country}&course=${course}`
      )
      .pipe(
        map((response) => {
          console.log("get attribute", response);
          return response;
        }),
        catchError(this.errorHandler)
      );
  }
}
