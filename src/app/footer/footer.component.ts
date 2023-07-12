import { Component, EventEmitter, Output } from '@angular/core';
import { DisplayContentService } from '../display-content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private displayContentService: DisplayContentService) {}
  sendCloseEventToLanding() {
    window.scrollTo(0, 0);
    this.displayContentService.hideContent();
  }
}
