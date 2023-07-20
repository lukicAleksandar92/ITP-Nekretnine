import { Component } from '@angular/core';
import { OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { User } from './models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ITP-Nekretnine';


  user = new User();
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  
  logout() {
    localStorage.clear();
    this.user == null;
    this.router.navigate(['']);
  }

}
