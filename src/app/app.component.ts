import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DisplayContentService } from './display-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private displayContentService: DisplayContentService) {}
  @ViewChild('nav') nav: ElementRef;
  title = 'Neurodiversity in Business';
  navActiveId = 1;
  isContentShown = true;
  isMenuCollapsed = window.innerWidth <= 991;
  public isMobileLayout = false;
  ngOnInit() {
    if (window.innerWidth <= 991) {
      this.isMobileLayout = true;
    }
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
      this.isContentShown = false;
    } else {
      this.isContentShown = true;
    }
  }
}
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);
