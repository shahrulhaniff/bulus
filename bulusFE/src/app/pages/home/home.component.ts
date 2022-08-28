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
  infoFetched = false;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }


}
