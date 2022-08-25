import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {
 
  constructor(
    public authenticationService : AuthenticationService,
    private router: Router
  ) { }

  private haha = "user";

  canActivate() : boolean{
    if( (this.haha) !== 'user')
    {
    console.log("haha!"); this.router.navigate(['login']);
    return false;
    } 
    /*if (sessionStorage.getItem('role') !== 'user') {
      this.router.navigate(['login']);
      return false;
    }*/
    return true; 
  }
}
