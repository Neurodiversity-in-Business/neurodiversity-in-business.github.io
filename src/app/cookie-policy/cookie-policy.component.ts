import { Component, OnInit } from '@angular/core';
import { DisplayContentService } from '../display-content.service';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css'],
})
export class CookiePolicyComponent implements OnInit {
  constructor(private displayContentService: DisplayContentService) {}

  ngOnInit() {}

  showContent() {
    this.displayContentService.showContent();
  }
}
