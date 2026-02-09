import { Routes } from '@angular/router';
import { MarketplaceComponent } from './features/marketplace/pages/marketplace/marketplace.component';

export const routes: Routes = [
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: '',
    redirectTo: 'marketplace',
    pathMatch: 'full'
  }
];
