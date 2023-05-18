import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostaviOglasComponent } from './oglasivac/postavi-oglas/postavi-oglas.component';
import { MojiOglasiComponent } from './oglasivac/moji-oglasi/moji-oglasi.component';
import { OgMojProfilComponent } from './oglasivac/og-moj-profil/og-moj-profil.component';

const routes: Routes = [
  { path: 'moji-oglasi', component: MojiOglasiComponent },
  { path: 'postavi-oglas', component: PostaviOglasComponent },
  { path: 'moj-profil', component: OgMojProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
