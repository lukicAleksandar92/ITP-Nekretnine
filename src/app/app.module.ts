import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RezultatPretrageComponent } from './rezultat-pretrage/rezultat-pretrage.component';
import { DetaljnaPretragaComponent } from './detaljna-pretraga/detaljna-pretraga.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NaslovnaComponent,
    LoginComponent,
    RegistracijaComponent,
    PromenaLozinkeComponent,
    HeaderComponent,
    FooterComponent,
    RezultatPretrageComponent,
    DetaljnaPretragaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
