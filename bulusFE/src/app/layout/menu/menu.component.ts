import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
//import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
//import {MenuItems} from '../../shared/menu-items/menu-items';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
//import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user/user.service';
import swal from 'sweetalert2';
import { BnNgIdleService } from 'bn-ng-idle';
//import * as io from 'socket.io-client';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: []
})
export class MenuComponent implements OnInit, OnDestroy {

  //@ViewChild('modalIdle', {static: false}) modalIdle;
  public config: any;

  registered: any;

  currencyCode = "MYR";
  firstname: any;
  username: any;
  profilePic: any;
  role: any;
  arole: any;
  imageUrl = environment.url + "/user/";
  selectedLang = {
    name: "MY",
    image: "assets/images/flags/MALAYSIA.jpg"
  };
  goldData = {
    infovalue: null,
    last_updated: null
  };
  activestatus: any;
  notiBadge: any;
  
  tier1 = false;
  tier2 = false;
  tier3 = false;

  logoutTimer: any;
  

  private socket: any;
  public data: any;
  private jwt: any;

  constructor(
    //public menuItems: MenuItems,
    private router: Router,
    private userService: UserService,
    private bnIdle: BnNgIdleService
    ) {

      this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
        if (isTimedOut) {
          //this.modalIdle.show();
          const self = this;
          this.logoutTimer = setTimeout(function(){
            swal({
              title: "sesi bulus timeout",//self.translate.instant('general.sessionTimeout'),
              text: "kebulusan melanda",//self.translate.instant('general.timeoutMsg'),
              type: 'warning',
            }).catch(swal.noop);
            self.logout();
          }, 5000);


        }
      });

      // this.socket = io(environment.serverUrl);
      // const token = sessionStorage.getItem("token");
      // this.jwt = token;

      
      this.role = sessionStorage.getItem('role');
      this.arole = sessionStorage.getItem('arole');


      // this.userService.getGoldPrice().subscribe((response) => {
      //   if (response.success === 1) {
      //     this.goldData = response.data;
      //   }
      // });



      this.currencyCode = localStorage.getItem("currency") === "USD" ? "USD" : "MYR";
      this.firstname = sessionStorage.getItem('firstname');
      this.username = sessionStorage.getItem('username');
      this.activestatus = sessionStorage.getItem('activestatus');
      this.profilePic = sessionStorage.getItem('image') === "null" ? this.imageUrl + 'default.png' : this.imageUrl + sessionStorage.getItem('image');




  }

  ngOnInit() {

    // this.socket.on('auth', data => {
    //   this.data = data;
    //   if (this.jwt === data) {
    //     swal({
    //       title: this.translate.instant('general.error'),
    //       text: this.translate.instant('general.anotherDevice'),
    //       type: 'warning',
    //     }).catch(swal.noop);
    //     this.logout();
    //   }
    // });
  }

  redirectNotiBadge() {
    this.router.navigate(['/notification']);
    this.notiBadge = undefined;
  }






  logout() {
    if (sessionStorage.getItem('role') === 'tg-admin-only') {
      this.router.navigate(['/assalamualaikum']);
    } else if (sessionStorage.getItem('role') === 'partner') {
      this.router.navigate(['/partnerlogin']);
    } else {
      this.router.navigate(['/login']);
    }
    sessionStorage.clear();
    this.socket.disconnect();
    this.bnIdle.stopTimer();
  }

  stay() {
    clearTimeout(this.logoutTimer);
    //this.modalIdle.hide();
    this.bnIdle.resetTimer();
  }

  //changeLang(language: string) {  bla bla bla ...
  //changeCurrency() {  bla bla bla ...
  //checkVIPTier(id) {  bla bla bla ...
  //checkAccStatus(id) {  bla bla bla ...


  ngOnDestroy() {
    this.socket.disconnect();
    this.bnIdle.stopTimer();
  }

}
