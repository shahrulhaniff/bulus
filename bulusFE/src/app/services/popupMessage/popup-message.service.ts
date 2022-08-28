import { Injectable } from '@angular/core';
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class PopupMessageService {

  constructor() { }

  private buluskatogapo = "aku nok derak kato si bulus";
  pobulus() {
    swal({
      title: 'MUTIARA KATA BULUS',
      text: 'Warning : '+ this.buluskatogapo,
      type: 'warning'
    }).catch(swal.noop);
  } 

  warnMsg(ttl:string,msj:string) {
    swal({
      title: ttl,
      text:  msj,
      type: 'warning'
    }).catch(swal.noop);
  }
  susMsg(ttl:string,msj:string) {
    swal({
      title: ttl,
      text:  msj,
      type: 'success'
    }).catch(swal.noop);
  }
}
