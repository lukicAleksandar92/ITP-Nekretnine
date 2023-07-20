import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle} from "ng-apexcharts";
import { User, ChartOptions, UserName } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Agencije } from 'src/app/models/Agencije';
import { AgencijeService } from 'src/app/services/agencije.service';
import { Listing, NumberOfSold } from 'src/app/models/Listing';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-og-moj-profil',
  templateUrl: './og-moj-profil.component.html',
  styleUrls: ['./og-moj-profil.component.css'],
})
export class OgMojProfilComponent implements OnInit {
  chartOptions: ChartOptions;

  arrowRight = faArrowRight;
  x = faX;
  mailSeMenja: boolean = false;
  promeniMail() {
    this.mailSeMenja = !this.mailSeMenja;
  }
  telefonSeMenja: boolean = false;
  promeniTelefon() {
    this.telefonSeMenja = !this.telefonSeMenja;
  }
  agencijaSeMenja: boolean = false;
  promeniAgenciju() {
    this.agencijaSeMenja = !this.agencijaSeMenja;
  }
  lozinkaSeMenja: boolean = false;
  promeniLozinku() {
    this.lozinkaSeMenja = !this.lozinkaSeMenja;
  }

  constructor(private userService: UserService, private listingService: ListingService, private agencijeService: AgencijeService) {
    this.chartOptions = {
      series: [
        {
          name: "br. prod. nekretnina",
          data: [],
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: ['#FF0000'],
      title: {
        text: "BROJ PRODATIH NEKRETNINA",
        align: "center"
      },
      xaxis: {
        categories: []
      }
    };
  }

  @Input() user: User = new User();
  @Output() updateUser = new EventEmitter<User>()


  ngOnInit(): void {
    // hvatamo iz baze agencije i smestamo ih u niz agencije[]
    this.dohvatiAgencije();

    //ucitavamo podatke ulogovanog korisnika
    //this.ucitajInfoKorisnika();
    //parsiranje korisnika iz localstorage i dovlacenje svih informacija o njemu iz base
    this.userService.parseLoggedUser()?.then((resUsers) => {
      this.user = JSON.parse(JSON.stringify(resUsers));
      
      // postavljaja se x-osa
      let categories:string[] = this.setCategories();
      this.chartOptions.xaxis = {categories};
      
      
      switch(this.user.tip) {
        case "agent": {
          // dohvata sva kor.imena agenata te agencije
          this.userService.getAllAgents(this.user.selectedAgency).then((resAgents) => {
            this.allAgents = this.userNameObjToUserNameArr(JSON.parse(JSON.stringify(resAgents)));
            // dohvata sve prodate nekretnine, format {_id: mesec_prodaje, ukupno: }
            this.listingService.getAllSellByAgency(this.allAgents).then((resSell) => {
              let soldListings:NumberOfSold[] = JSON.parse(JSON.stringify(resSell));
              // postavlaju se serije
              let series:number[] = this.setSeries(soldListings, categories.length);
              let seriesA:ApexAxisChartSeries = [{data: series}];
              this.chartOptions.series = seriesA;
            });
          });
          break;
        }
        case "samostalniProdavac": {
          // dohvata oglas od datog usera
           this.listingService.getListingByOglasivac(this.user.kor_ime).then((resListing) => {
            let listing:Listing = JSON.parse(JSON.stringify(resListing));
            // dohvata sve prodate nekretnine za tu lokaciju
            this.listingService.getAllSellByLocation(listing.lokacija).then((resSell) => {
              let soldListings:NumberOfSold[] = JSON.parse(JSON.stringify(resSell));
              // postavlaju se serije
              let series:number[] = this.setSeries(soldListings, categories.length);
              let seriesA:ApexAxisChartSeries = [{data: series}];
              this.chartOptions.series = seriesA;
            });
          });
          break;
        }
      }
    });
  }

  dohvatiAgencije():void {
    this.agencijeService.getAgencije().then((res) => {
      this.agencije = JSON.parse(JSON.stringify(res));
    });
  }

   ucitajInfoKorisnika () {
    //parsiranje korisnika iz localstorage i dovlacenje svih informacija o njemu iz base
    this.userService.parseLoggedUser()?.then((res) => {
      this.user = JSON.parse(JSON.stringify(res));
    })
}

  newMail!: string;
  kor_ime!: string;
  newTel!: number;
  agencije!: Agencije[];
  allAgents!: string[];
  newSelectedAgency!: string;
  meseci!: string[];

  ngOnChanges(changes: SimpleChanges) {
    this.newMail = this.user.email;
    this.newTel = this.user.telefon;
  }
  izmenaMail(){ 
    let changedUser = new User();
    changedUser.email = this.newMail;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUserEmail(changedUser)
    .then((res) => {
      alert("Uspesno izmenjena email adresa");
      this.ucitajInfoKorisnika();
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })
  }

  izmenaTel(){ 
    let changedUser = new User();
    changedUser.telefon = this.newTel;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUserTel(changedUser)
    .then((res) => {
      alert("Uspesno izmenjen broj telefona");
      this.ucitajInfoKorisnika();
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })
  }

  izmenaAgencije() {
    let changedUser = new User();
    changedUser.selectedAgency = this.newSelectedAgency;
    changedUser.kor_ime = this.user.kor_ime
    console.log(changedUser)
    this.userService.updateUserAgency(changedUser)
    .then((res) => {
      alert("Uspesno izmenjena agencija");
      this.ucitajInfoKorisnika();
      this.updateUser.emit(changedUser);
    })
    .catch((res) => {
      alert(res.error);
    })

  }

  userNameObjToUserNameArr(agenti: UserName[]):string[]{
    let rezultat: string[] = [];
    for (let index in agenti){
      rezultat[index] = agenti[index].kor_ime;
    }
    return rezultat;
  }
  datesToMeseci(datumiProdaje: string[]):string[]{
    let rezultat:string[] = [];
    //alert(datumiProdaje[0]);
    return rezultat;
  }
  setCategories():string[] {
    let rezultat:string[] = [];
    let currentDate = new Date();
    let currentManth:number = currentDate.getMonth();
    switch (currentManth) {
      case 0:
        return rezultat = ['Jan'];
        case 1:
          return rezultat = ['Jan', 'Feb'];
        case 2:
           return rezultat = ['Jan', 'Feb', 'Mar'];
        case 3:
          return rezultat = ['Jan', 'Feb', 'Mar', 'Apr'];
        case 4:
          return rezultat = ['Jan', 'Feb'];
        case 5:
          return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        case 6:
            return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        case 7:
          return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
        case 8:
          return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        case 9:
              return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt'];
        case 10:
              return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov'];
        case 11:
          return rezultat = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    }
    return rezultat;
  }

  setSeries(soldListings:NumberOfSold[], length:number ):number[]{
    let rezultat:number[] = this.setInitArray(length);
    for (let listing of soldListings ) {
      rezultat[listing._id-1] = listing.ukupno;
    }
    return rezultat;
  }

  setInitArray(length:number):number[]{
    let rezultat: number[] = [];
    for (let i = 0; i < length; i++)
      rezultat[i] = 0;
    return rezultat; 
  }

  setCharOptions(categories1:string[], series1:number[]):void {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: series1
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      colors: ['#FF0000'],
      title: {
        text: "Graf"
      },
      xaxis: {
        categories: categories1
      }
    };
  }


}
