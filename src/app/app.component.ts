import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private displayContentService: DisplayContentService) {}
  title = 'Neurodiversity in Business';
  navActiveId = 1;
  isContentShown = true;
  isMenuCollapsed = false;
  public isMobileLayout = false;
  ngOnInit() {
    window.onresize = () => {
      this.isMobileLayout = window.innerWidth <= 991;
      this.isMenuCollapsed = this.isMobileLayout;
    };
    let this$ = this;
    this.displayContentService.displayContentObservable$.subscribe({
      next(flag) {
        if (flag == 'hide') {
          this$.isContentShown = false;
          //this.isContentShown = false;
        } else {
          this$.isContentShown = true;
          //this.displayContentService.showContent();
        }
      },
    });
  }
  toggleContent(flag: string) {
    if (flag == 'hide') {
      this.isContentShown = !this.isContentShown;
    } else {
      this.isContentShown = !this.isContentShown;
    }
  }
}
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { DisplayContentService } from './display-content.service';

fontawesome.library.add(brands);
