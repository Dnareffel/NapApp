import { Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NosproduitsComponent } from './pages/nosproduits/nosproduits.component';
import { AproposComponent } from './pages/apropos/apropos.component';

import { QsnComponent } from './pages/apropos/qsn/qsn.component';
import { EquipeComponent } from './pages/apropos/equipe/equipe.component';
import { ServicesComponent } from './pages/apropos/services/services.component';
import { FaqComponent } from './pages/apropos/faq/faq.component';

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
{ path: 'apropos/qsn',
component: QsnComponent
},
{ path: 'apropos/equipe',
component: EquipeComponent
},
{ path: 'apropos/services',
component: ServicesComponent
},
{ path: 'apropos/faq',
component: FaqComponent
},
];
