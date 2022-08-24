import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnonGuardService implements CanActivate {

  constructor(
    private router: Router
    ) { }

  canActivate() : boolean{
    if (sessionStorage.getItem('accountid')) {
      //this.router.navigate(['']);
      //return false;
      console.log("anon-guard.services.ts > penakut makan ikan mama ye");return false;
    }
    console.log("anon-guard.services.ts > meow penakut 2");
    return true;
  }
}
