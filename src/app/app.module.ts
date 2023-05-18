import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { OgHeaderComponent } from './oglasivac/og-header/og-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OgFooterComponent } from './oglasivac/og-footer/og-footer.component';
import { PostaviOglasComponent } from './oglasivac/postavi-oglas/postavi-oglas.component';

@NgModule({
  declarations: [AppComponent, OgHeaderComponent, OgFooterComponent, PostaviOglasComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
