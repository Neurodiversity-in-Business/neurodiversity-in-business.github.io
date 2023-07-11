import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Output() alertParentToHideContent = new EventEmitter<string>();

  sendCloseEventToLanding(){
    this.alertParentToHideContent.emit('hide');
  }
}
