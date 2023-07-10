import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent  } from 'rxjs';

import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Neurodiversity in Business';
  navActiveId = 1;
  isMenuCollapsed = false;
  public isMobileLayout = false;
  ngOnInit() {
    window.onresize = () => {this.isMobileLayout = window.innerWidth <= 991;
      this.isMenuCollapsed=this.isMobileLayout;
    }
  }
}
