import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  username: string;
  password: string;
  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.username, this.password);
    this.Auth.getUserDetails(this.username, this.password);

  }

}


