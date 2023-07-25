import { Component } from '@angular/core';

@Component({
  selector: 'app-member-start',
  templateUrl: './member-start.component.html',
  styleUrls: ['./member-start.component.css'],
})
export class MemberStartComponent {
  navigateToForm(locationName: string) {
    switch (locationName) {
      case 'member':
        location.href =
          'https://neurodiversityinbusiness.org/partner-member-signup/';
        break;
      case 'corp':
        location.href =
          'https://neurodiversityinbusiness.org/corporate-member-signup/';
        break;
      case 'individual':
        location.href =
          'https://neurodiversityinbusiness.org/individual-member-signup/';
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
