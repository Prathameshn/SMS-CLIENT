import { AccountService } from "../services/account/account.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap, tap } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private AUTH_HEADER = "Authorization";
  constructor(private account: AccountService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (!req.headers.has("Content-Type")) {
    //   req = req.clone({
    //     headers: req.headers.set("Content-Type", "application/json"),
    //   });
    // }
    req = this.addAuthenticationToken(req);
    return next.handle(req).pipe(
      tap(
        () => {},
        (err: any) => {
          console.log("token error", err);
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            this.router.navigate(["login"]);
            //   if (err.status === 401) {
            //   }
          }
        }
      )
    );
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    let token = this.account.getToken();
    // console.log("token", token);
    if (token !== undefined && token !== null) {
      return request.clone({
        headers: request.headers.set(this.AUTH_HEADER, "Bearer " + token),
      });
    } else {
      return request;
    }
  }
}
