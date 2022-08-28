import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  //@ViewChild('modalIdle', {static: false}) modalIdle;
  logoutTimer: any;

  constructor(
    private router: Router,
    private bnIdle: BnNgIdleService
  ) {
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        //this.modalIdle.show();
        const self = this;
        this.logoutTimer = setTimeout(function(){
          swal({
            title: "sessionTimeout",//self.translate.instant('general.sessionTimeout'),
            text: "timeoutMsg",//self.translate.instant('general.timeoutMsg'),
            type: 'warning',
          }).catch(swal.noop);
          self.logout();
        }, 5000);


      }
    });
   }

  ngOnInit() { }

  logout() {
    if (sessionStorage.getItem('role') === 'tg-admin-only') {
      this.router.navigate(['/assalamualaikum']);
    } else if (sessionStorage.getItem('role') === 'partner') {
      this.router.navigate(['/partnerlogin']);
    } else {
      this.router.navigate(['/login']);
    }
    console.error("logout success");
    sessionStorage.clear();
    //this.socket.disconnect();
    this.bnIdle.stopTimer();
  }

  stay() {
    clearTimeout(this.logoutTimer);
    //this.modalIdle.hide();
    this.bnIdle.resetTimer();
  }

}
