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


  canActivate() : boolean{
    
    if (sessionStorage.getItem('role') !== 'user') {
      this.router.navigate(['login']);
      return false;
    }
    return true; 
  }
}
