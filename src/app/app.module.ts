import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MemberStartComponent } from './member-start/member-start.component';
import { ResearchComponent } from './research/research.component';
import { VolunteerStartComponent } from './volunteer-start/volunteer-start.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HubComponent } from './hub/hub.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CompanyLogosCaroselComponent } from './home/carosels/company-logos-carosel/company-logos-carosel.component';
import { CommunityLogosCaroselComponent } from './home/carosels/community-logos-carosel/community-logos-carosel.component';
import { CaroselsComponent } from './home/carosels/carosels.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { SlaveryPolicyComponent } from './slavery-policy/slavery-policy.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MemberStartComponent,
    ResearchComponent,
    VolunteerStartComponent,
    ContactUsComponent,
    HubComponent,
    CompanyLogosCaroselComponent,
    CommunityLogosCaroselComponent,
    CaroselsComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    SlaveryPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgbCarouselModule,
  ],
  exports: [],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
