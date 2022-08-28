import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { BehaviorSubject, throwError, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { catchError, retry } from "rxjs/operators";
import swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router) { }
    private baseUrl = environment.url + "/bulus";
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
        title: 'BULUS HANDLE ERROR',
        text: 'error mesej : '+ error.error.message,
        type: 'success'
      }).catch(swal.noop);
    }
    return throwError("Something bad happened; please try again later.");
  }

  
  getBook(payload: { bookid: string; }): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + "/gb", JSON.stringify(payload), this.httpOptions)
      .pipe(catchError(this.handleError));
  } 

 
}
