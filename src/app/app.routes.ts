import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { MarketplaceComponent } from './features/marketplace/pages/marketplace/marketplace.component';
import { ProductDetailsComponent } from './features/product/pages/product-details/product-details.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { CartComponent } from './features/cart/pages/cart/cart.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './features/profile/profile/profile.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  {
  path: 'eco-score',
  loadComponent: () =>
    import('./features/eco-score/pages/eco-score/eco-score.component')
      .then(m => m.EcoScoreComponent)
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
},
  { path: '**', redirectTo: '' }  // 👈 ВСЕГДА ПОСЛЕДНИЙ
];

