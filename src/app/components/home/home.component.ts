import { AuthService } from 'src/app/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
   
  }
  
  isUserAuthenticated = false
   
}
