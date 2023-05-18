import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { DetaljnaPretragaComponent } from './detaljna-pretraga/detaljna-pretraga.component';
import { RezultatPretrageComponent } from './rezultat-pretrage/rezultat-pretrage.component';
import { PostaviOglasComponent } from './oglasivac/postavi-oglas/postavi-oglas.component';
import { MojiOglasiComponent } from './oglasivac/moji-oglasi/moji-oglasi.component';
import { OgMojProfilComponent } from './oglasivac/og-moj-profil/og-moj-profil.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent },
  { path: 'promena-lozinke', component: PromenaLozinkeComponent },
  { path: 'naslovna', component: NaslovnaComponent },
  { path: 'detaljna-pretraga', component: DetaljnaPretragaComponent },
  { path: 'rezultat-pretrage', component: RezultatPretrageComponent },

  { path: 'moji-oglasi', component: MojiOglasiComponent },
  { path: 'postavi-oglas', component: PostaviOglasComponent },
  { path: 'moj-profil', component: OgMojProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
