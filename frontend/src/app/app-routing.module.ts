import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { NaslovnaComponent } from './kupac/naslovna/naslovna.component';
import { DetaljnaPretragaComponent } from './kupac/detaljna-pretraga/detaljna-pretraga.component';
import { RezultatPretrageComponent } from './kupac/rezultat-pretrage/rezultat-pretrage.component';
import { PostaviOglasComponent } from './oglasivac/postavi-oglas/postavi-oglas.component';
import { MojiOglasiComponent } from './oglasivac/moji-oglasi/moji-oglasi.component';
import { OgMojProfilComponent } from './oglasivac/og-moj-profil/og-moj-profil.component';
import { KupacMojProfilComponent } from './kupac/kupac-moj-profil/kupac-moj-profil.component';
import { OmiljeneNekretnineComponent } from './kupac/omiljene-nekretnine/omiljene-nekretnine.component';
import { StranicaOglasaComponent } from './kupac/stranica-oglasa/stranica-oglasa.component';
import { IzmeniOglasComponent } from './oglasivac/izmeni-oglas/izmeni-oglas.component';
import { KupacGuard } from './guards/kupac.guard';
import { ProdavacGuard } from './guards/prodavac.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'promena-lozinke', component: PromenaLozinkeComponent },
  { path: 'stranica-oglasa/:id', component: StranicaOglasaComponent },

  //kupac
  { path: 'naslovna', component: NaslovnaComponent, canActivate: [KupacGuard] },
  { path: 'detaljna-pretraga', component: DetaljnaPretragaComponent, canActivate: [KupacGuard] },
  { path: 'rezultat-pretrage', component: RezultatPretrageComponent, canActivate: [KupacGuard] },
  { path: 'kupac-moj-profil', component: KupacMojProfilComponent, canActivate: [KupacGuard] },
  { path: 'omiljene-nekretnine', component: OmiljeneNekretnineComponent, canActivate: [KupacGuard] },
  
  //prodavac
  { path: 'moji-oglasi', component: MojiOglasiComponent, canActivate: [ProdavacGuard] },
  { path: 'postavi-oglas', component: PostaviOglasComponent, canActivate: [ProdavacGuard] },
  { path: 'izmeni-oglas/:id', component: IzmeniOglasComponent, canActivate: [ProdavacGuard] },
  { path: 'moj-profil', component: OgMojProfilComponent, canActivate: [ProdavacGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
