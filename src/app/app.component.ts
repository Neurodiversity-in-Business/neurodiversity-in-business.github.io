import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DisplayContentService } from './display-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('nav') nav: ElementRef;
  title = 'Neurodiversity in Business';
  navActiveId = 1;
  isContentShown = true;
  isMenuCollapsed = window.innerWidth <= 991;
  public isMobileLayout = false;

  constructor(
    private displayContentService: DisplayContentService,
    private router: Router
  ) {}
  
  ngOnInit() {
    if (window.innerWidth <= 991) {
      this.isMobileLayout = true;
    }
    window.onresize = () => {
      this.isMobileLayout = window.innerWidth <= 991;
      this.isMenuCollapsed = this.isMobileLayout;
    };
  }

  ngAfterViewInit(): void {
    let this$ = this;

    if (window.location.hash != '#/' && window.location.hash.length != 0) {
      console.log('triggered');
      this.displayContentService.hideContent();
      this.router.navigate([
        '/',
        window.location.hash.replace('/', '').replace('#', ''),
      ]);
    }

    this.displayContentService.displayContentObservable$.subscribe({
      next(flag) {
        if (flag == 'hide') {
          this$.isContentShown = false;
        } else {
          this$.isContentShown = true;
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
