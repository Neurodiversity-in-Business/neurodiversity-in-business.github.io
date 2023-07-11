import { Component, Input, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { CompanyLogoImage } from './company-logo-image';

@Component({
  selector: 'app-carosels',
  templateUrl: './carosels.component.html',
  styleUrls: ['./carosels.component.css'],
})
export class CaroselsComponent {
  @Input('images') images: Array<CompanyLogoImage>;
  @Input('paused') paused: boolean;
  @Input('unpauseOnArrow') unpauseOnArrow: boolean;
  @Input('pauseOnIndicator') pauseOnIndicator: boolean;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
