import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DisplayContentService } from './display-content.service';
import {
  MsalService,
  MsalBroadcastService,
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
import {
  InteractionStatus,
  RedirectRequest,
  EventMessage,
  EventType,
} from '@azure/msal-browser';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/internal/Subject';
import { filter, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('nav') nav: ElementRef;
  title = 'Neurodiversity in Business';
  navActiveId = 1;
  isContentShown = true;
  isMenuCollapsed = window.innerWidth <= 991;
  loginDisplay = false;
  username = '';
  private readonly _destroying$ = new Subject<void>();

  public isMobileLayout = false;
  history: string[];

  constructor(
    private displayContentService: DisplayContentService,
    private router: Router,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private angularLocation: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.history != undefined) {
          this.history.push(event.urlAfterRedirects);
        }
      }
    });
  }

  ngOnInit() {
    if (window.innerWidth <= 991) {
      this.isMobileLayout = true;
    }
    window.onresize = () => {
      this.isMobileLayout = window.innerWidth <= 991;
      this.isMenuCollapsed = this.isMobileLayout;
    };
    this.setLoginDisplay();
    this.authService.handleRedirectObservable().subscribe((res) => {
      this.isContentShown = true;
      this.username = this.authService.instance.getActiveAccount()?.name!;
      console.log(res);
    });

    this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.ACCOUNT_ADDED ||
            msg.eventType === EventType.ACCOUNT_REMOVED
        )
      )
      .subscribe((result: EventMessage) => {
        if (this.authService.instance.getAllAccounts().length === 0) {
          window.location.pathname = '/';
        } else {
          this.setLoginDisplay();
        }
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      });
  }

  ngAfterViewInit(): void {
    let this$ = this;

    if (window.location.hash == '#/' || window.location.hash.length == 0) {
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
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (
      !activeAccount &&
      this.authService.instance.getAllAccounts().length > 0
    ) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }
  loginRedirect() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginRedirect({
        ...this.msalGuardConfig.authRequest,
      } as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: '/',
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
  toggleContent(flag: string) {
    if (flag == 'hide') {
      this.isContentShown = false;
    } else {
      this.isContentShown = true;
    }
  }
  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.angularLocation.back();
    } else {
      this.router.navigate([this.angularLocation.path()]);
    }
  }
}
