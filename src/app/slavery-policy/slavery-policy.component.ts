import { Component } from '@angular/core';
import { DisplayContentService } from '../display-content.service';

@Component({
  selector: 'app-slavery-policy',
  templateUrl: './slavery-policy.component.html',
  styleUrls: ['./slavery-policy.component.css'],
})
export class SlaveryPolicyComponent {
  constructor(private displayContentService: DisplayContentService) {}
  showContent() {
    this.displayContentService.showContent();
  }
}
