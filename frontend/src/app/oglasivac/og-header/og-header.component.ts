import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
  faHouse,
  faPlus,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-og-header',
  templateUrl: './og-header.component.html',
  styleUrls: ['./og-header.component.css'],
})
export class OgHeaderComponent implements OnInit{

  //upravljanje ikonicama
  userIcon = faCircleUser;
  houseIcon = faHouse;
  plusIcon = faPlus;
  arrowRighIcon = faArrowRight;

  // Kreiranje nove instance klase User i dodeljivanje vrednosti promenljivoj user
  user = new User();
  
  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  // Odjava korisnika
  logout() {
    localStorage.clear();
    this.user == null;
    this.router.navigate(['']);
  }
}

