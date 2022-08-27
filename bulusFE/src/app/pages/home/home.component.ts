import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tajukbuku = 'BULUS';
  //idbuku = '2';
  idbuku: any;
  infoFetched = false;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    //this.userService.pobulus();
    //this.ng();
  }


  ng(){
    this.userService.getBook({bookid: this.idbuku}).subscribe((response) => {
      this.infoFetched = true;
      if (response.success === 1) {
        this.tajukbuku = response.data.title;
        if(this.tajukbuku==null){this.tajukbuku="Bulus missing gi derak!";}
      }
    }); 
  }

  anakabu(){
    this.idbuku = '15';
    this.ng();
    this.userService.pobulus();
  }
  
  checkBulus() {
    if ((this.idbuku == "bulus"  )||(this.idbuku == "abu")) {
      this.anakabu();
      this.idbuku = "15";
    } 
  }

  /* *****submit record***** */
  warning(msg : any) {
    swal({
      title: "Meow!",
      text: msg
    }).catch(swal.noop);
  }

  sumbitRekod() {
    const self = this;
    if (!this.idbuku) {
      swal("Wait!","We need a Bulus!",'error');
    } else if (this.idbuku =="BULUS") {
      this.warning("BULUS GI DERAK!");
      this.idbuku = undefined;
    } else {
      swal({
        title: "Confirm input : "+this.idbuku+" ?",
        text: "BULUS BALIK",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0366fc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(function (value) {
        if (value.value === true) {
          self.submitRefundGold();
        }
      }).catch(swal.noop);
  }
  }
  
  submitRefundGold() {
    swal("Tom says","Leo got input of "+this.idbuku,'success');
    this.ng();
  }



}
