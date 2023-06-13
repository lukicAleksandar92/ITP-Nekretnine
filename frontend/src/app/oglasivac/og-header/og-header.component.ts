import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
  faHouse,
  faPlus,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User';
import { SharedCurrUserService } from 'src/app/services/shared-curr-user.service';
@Component({
  selector: 'app-og-header',
  templateUrl: './og-header.component.html',
  styleUrls: ['./og-header.component.css'],
})
export class OgHeaderComponent implements OnInit{


  userIcon = faCircleUser;
  houseIcon = faHouse;
  plusIcon = faPlus;
  arrowRighIcon = faArrowRight;

  user = new User();
  
  constructor(private router: Router,
    private sharedCurrUserService: SharedCurrUserService){}

  ngOnInit(): void {
    
  }

  
  logout() {
    localStorage.clear();
    this.user == null;
    this.router.navigate(['']);
  }
}

