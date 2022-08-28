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
    private router: Router) { 
      if (sessionStorage.getItem('token')) {
        this.authState.next(true);
      }
    }
    //private baseUrl = environment.url + "/bulus";
    private baseUrl = environment.url + "/auth";
    authState = new BehaviorSubject(false);

    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else { 
      swal({
        title: 'BULUS HANDLE ERROR 2',
        text: 'Attention! '+ error.error,
        type: 'success'
      }).catch(swal.noop);
    }
    return throwError("Something happened in BE;");
  }

  getUserbyId(payload: { userid: string; passwrd: string; }): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/buluslogin", JSON.stringify(payload), this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  login(token: string,  firstname: string,  userid: string,  role: string) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('firstname', firstname);
    sessionStorage.setItem('username', userid);
    sessionStorage.setItem('role', role);
    this.authState.next(true);
  }

  isAuthenticated() {
    return this.authState.value;
  }
}