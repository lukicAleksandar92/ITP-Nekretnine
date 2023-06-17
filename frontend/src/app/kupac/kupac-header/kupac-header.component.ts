import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/User";


@Component({
  selector: 'app-kupac-header',
  templateUrl: './kupac-header.component.html',
  styleUrls: ['./kupac-header.component.css']
})
export class KupacHeaderComponent implements OnInit{

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
