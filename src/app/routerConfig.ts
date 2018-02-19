import { Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NosproduitsComponent } from './pages/nosproduits/nosproduits.component';
import { AproposComponent } from './pages/apropos/apropos.component';

export const appRoutes: Routes = [
    
  { path: 'accueil', 
    component: AccueilComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  { path: 'nosproduits',
    component: NosproduitsComponent
  },
  { path: 'apropos',
  component: AproposComponent
},
];
