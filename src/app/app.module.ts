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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HubComponent } from './hub/hub.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
