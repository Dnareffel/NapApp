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


import { QsnComponent } from './pages/apropos/qsn/qsn.component';
import { EquipeComponent } from './pages/apropos/equipe/equipe.component';
import { ServicesComponent } from './pages/apropos/services/services.component';
import { FaqComponent } from './pages/apropos/faq/faq.component';


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
    QsnComponent,
    EquipeComponent,
    ServicesComponent,
    FaqComponent,
  
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
