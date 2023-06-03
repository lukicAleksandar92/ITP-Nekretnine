import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaslovnaComponent } from './kupac/naslovna/naslovna.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RezultatPretrageComponent } from './kupac/rezultat-pretrage/rezultat-pretrage.component';
import { DetaljnaPretragaComponent } from './kupac/detaljna-pretraga/detaljna-pretraga.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { OgHeaderComponent } from './oglasivac/og-header/og-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PostaviOglasComponent } from './oglasivac/postavi-oglas/postavi-oglas.component';
import { MojiOglasiComponent } from './oglasivac/moji-oglasi/moji-oglasi.component';
import { OgMojProfilComponent } from './oglasivac/og-moj-profil/og-moj-profil.component';
import { OmiljeneNekretnineComponent } from './kupac/omiljene-nekretnine/omiljene-nekretnine.component';
import { KupacMojProfilComponent } from './kupac/kupac-moj-profil/kupac-moj-profil.component';
import { KupacHeaderComponent } from './kupac/kupac-header/kupac-header.component';
import { StranicaOglasaComponent } from './kupac/stranica-oglasa/stranica-oglasa.component';
import { IzmeniOglasComponent } from './oglasivac/izmeni-oglas/izmeni-oglas.component';

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

    OgHeaderComponent,

    PostaviOglasComponent,
    MojiOglasiComponent,
    OgMojProfilComponent,
    OmiljeneNekretnineComponent,
    KupacMojProfilComponent,
    KupacHeaderComponent,
    StranicaOglasaComponent,
    IzmeniOglasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
