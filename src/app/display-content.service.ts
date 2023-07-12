import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayContentService {
  private _displayContentState: boolean = true;
  private _displayContentSubject = new BehaviorSubject<string>('show');
  public displayContentObservable$ = this._displayContentSubject.asObservable();
  constructor() {}

  hideContent() {
    this._displayContentSubject.next('hide');
    this._displayContentState = false;
  }

  showContent() {
    this._displayContentSubject.next('show');
    this._displayContentState = true;
  }

  isContentVisibleState() {
    return this._displayContentState;
  }
}
