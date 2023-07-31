import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { SlaveryPolicyComponent } from './slavery-policy/slavery-policy.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MemberStartComponent } from './member-start/member-start.component';
import { VolunteerStartComponent } from './volunteer-start/volunteer-start.component';
import { HubComponent } from './hub/hub.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'cookie', component: CookiePolicyComponent },
  { path: 'slavery', component: SlaveryPolicyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'member-start', component: MemberStartComponent },
  { path: 'research', component: HomeComponent },
  { path: 'volunteer-start', component: VolunteerStartComponent },
  { path: 'hub', component: HubComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
