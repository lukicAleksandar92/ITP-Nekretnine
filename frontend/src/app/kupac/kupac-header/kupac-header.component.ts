import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/User";
import { SharedCurrUserService } from "src/app/services/shared-curr-user.service";

@Component({
  selector: 'app-kupac-header',
  templateUrl: './kupac-header.component.html',
  styleUrls: ['./kupac-header.component.css']
})
export class KupacHeaderComponent implements OnInit{

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
