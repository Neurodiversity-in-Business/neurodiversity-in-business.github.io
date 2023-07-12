import { Component } from '@angular/core';
import { DisplayContentService } from '../display-content.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
})
export class PrivacyPolicyComponent {
  constructor(private displayContentService: DisplayContentService) {}
  showContent() {
    this.displayContentService.showContent();
  }
}
