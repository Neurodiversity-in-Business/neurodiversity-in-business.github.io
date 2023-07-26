import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { SlaveryPolicyComponent } from './slavery-policy/slavery-policy.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'cookie', component: CookiePolicyComponent },
  { path: 'slavery', component: SlaveryPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
