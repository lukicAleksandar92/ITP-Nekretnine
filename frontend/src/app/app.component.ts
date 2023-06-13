import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { SharedCurrUserService } from './services/shared-curr-user.service';
import { User } from './models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ITP-Nekretnine';


  user = new User();
  constructor(private router: Router,
    private sharedCurrUserService: SharedCurrUserService){}

  ngOnInit(): void {

    // this.user = JSON.parse(localStorage.getItem("loggedUser"));
    this.sharedCurrUserService.changeEmetted$.subscribe(user => this.user = user);
    
  }

  
  logout() {
    localStorage.clear();
    this.user == null;
    this.router.navigate(['']);
  }

}
