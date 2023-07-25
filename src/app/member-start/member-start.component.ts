import { Component } from '@angular/core';

@Component({
  selector: 'app-member-start',
  templateUrl: './member-start.component.html',
  styleUrls: ['./member-start.component.css'],
})
export class MemberStartComponent {
  showContent:boolean = true;
  showOrgForm:boolean = false;
  showCorpForm:boolean = false;
  showIndividualForm:boolean = false;
  navigateToForm(locationName: string) {
    switch (locationName) {
      case 'member':
        this.showContent = false;
        this.showOrgForm = true;
        break;
      case 'corp':
        this.showContent = false;
        this.showCorpForm = true;
        break;
      case 'individual':
        this.showContent = false;
        this.showIndividualForm = true;
        break;
    }
  }

  navigateToEvents() {
    location.href =
      'https://www.eventbrite.co.uk/o/neurodiversity-in-business-49723785973';
  }

  navigateToHub() {
    //TODO: Navigate to new site Resource Hub when ready
    location.href = 'https://neurodiversityinbusiness.org/ndresourcehub/';
  }
}
