import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NosproduitsComponent } from './pages/nosproduits/nosproduits.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AproposComponent } from './pages/apropos/apropos.component';

import { RouterModule } from '@angular/router';
import { appRoutes }  from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    NosproduitsComponent,
    ContactComponent,
    AproposComponent,
  
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
