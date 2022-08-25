import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError, Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    if (sessionStorage.getItem('token')) {
      this.authState.next(true);
    }
  }

  private baseUrl = environment.url + "/auth";

  authState = new BehaviorSubject(false);

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      // );
      swal({
        title: 'CONNECTION ERROR',
        text: 'Please check your internet connection and try again.',
        type: 'error'
      }).catch(swal.noop);
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  validateLogin(payload : any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/login", JSON.stringify(payload), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  validateLoginAdmin(payload : any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/adminlogin", JSON.stringify(payload), this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  register(user : any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/register", JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  verifyEmail(payload :any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/verify", JSON.stringify(payload), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  
  resendEmail(payload : any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/resendEmail", JSON.stringify(payload), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  login(token:any, accountid:any, registration:any, uploadedReceipt:any, firstname:any, image:any, lastlogin:any, role:any, activestatus:any, username:any) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('accountid', accountid);
    sessionStorage.setItem('registration', registration);
    sessionStorage.setItem('uploadedReceipt', uploadedReceipt);
    sessionStorage.setItem('firstname', firstname);
    sessionStorage.setItem('image', image);
    sessionStorage.setItem('lastlogin', lastlogin);
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('activestatus', activestatus);
    sessionStorage.setItem('username', username);
    this.authState.next(true);
  }

  adminLogin(token:any, accountid:any, lastlogin:any, role:any, arole:any) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('accountid', accountid);
    sessionStorage.setItem('lastlogin', lastlogin);
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('arole', arole);

    sessionStorage.setItem('image', 'default.png');
    sessionStorage.setItem('registration', 'true');
    sessionStorage.setItem('firstname', 'TG Admin');

    localStorage.setItem('lang', 'en');
    this.authState.next(true);
  }


  isAuthenticated() {
    return this.authState.value;
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  refreshToken(user:any) {
    return this.http
      .post<any>(this.baseUrl + '/refreshtoken', JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  forgotPassword(user:any) {
    return this.http
      .post<any>(this.baseUrl + '/forgotPassword', JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  checkResetPass(user:any) {
    return this.http
      .post<any>(this.baseUrl + '/checkResetPass', JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  resetPassword(user:any) {
    return this.http
      .post<any>(this.baseUrl + '/resetPassword', JSON.stringify(user), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
