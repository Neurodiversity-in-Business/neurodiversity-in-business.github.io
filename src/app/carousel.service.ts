import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CarouselData } from './home/carousel-data';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private _corpCarouselState: boolean = true;
  public corpSubject = new BehaviorSubject<CarouselData>(new CarouselData());
  public corporateCarouselObservable$ = this.corpSubject.asObservable();
  private _partCarouselState: boolean = true;
  public partSubject = new BehaviorSubject<CarouselData>(new CarouselData());
  public partnercorpCarouselObservable$ = this.partSubject.asObservable();

  constructor() {}
}
