import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ec',
  templateUrl: './login-ec.component.html',
  styleUrls: ['./login-ec.component.css']
})
export class LoginEcComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

}
