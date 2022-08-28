import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { PopupMessageService } from 'src/app/services/popupMessage/popup-message.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginfailed = false;
  userid  : any ;
  passwrd : any ;
  usersession : any ;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService,
    private popupMessage : PopupMessageService,
    private router: Router,
    ) { }

  public title : any ;

  ngOnInit(): void {
    this.title="Oyen";
  }

  validatelogin(){
    this.authService.getUserbyId({userid: this.userid,passwrd: this.passwrd}).subscribe((response) => {
      if (response.success === 1) {
        console.log(response); 
        if(response==undefined) { 
          console.log("response success 1 but undefine"); 
          this.loginfailed = true;
        }
        else { 
          console.log("token dah berjaya apply: ",response.token); 
          this.loginfailed = false;
          this.authService.login(response.token,response.firstname,response.userid,response.role);
          this.router.navigate(['']);
          this.popupMessage.susMsg("Booloose is success, sambung cara token, logout, etc...",response.message);
        }
      }
      if (response.success === 0) { 
        this.loginfailed = true;
        this.popupMessage.warnMsg("DATA XDOK","BULUS MANA BULUS? XDE DATA NI...");
       } 
      //else { console.log("Something else"); }
    }); 
  }
  login(){
    this.validatelogin();
    //console.log(this.usersession);
    //this.popupMessage.pobulus();
  }

}
