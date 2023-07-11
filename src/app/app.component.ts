import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
  }
  toggleContent(flag: string) {
    console.log('hiding navoutlet');
    if (flag == 'hide') {
      this.isContentShown = false;
    }
    else {
      this.isContentShown = true;
    }
  }
}
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(brands);
