import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {} from '@ng-bootstrap/ng-bootstrap';
import { CarouselData } from './carousel-data';
import { CarouselItem } from './carousel-item';
import { CarouselService } from '../carousel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  companyCarouselDataObservable: Observable<CarouselData>;
  partnerCarouselDataObservable: Observable<CarouselData>;
  carouselIsReady:boolean = true;
  constructor(private _carouselService: CarouselService) {}
  ngOnInit(): void {
    this.companyCarouselDataObservable =
      this._carouselService.corporateCarouselObservable$;
    this.partnerCarouselDataObservable =
      this._carouselService.partnercorpCarouselObservable$;

    const corporateData = new CarouselData();
    corporateData.directory= "corporation";
    corporateData.items = [];
    corporateData.items.push(new CarouselItem('Oracle', 'oracle.svg'));
    corporateData.items.push(new CarouselItem('Capita', 'capita.svg'));
    corporateData.items.push(new CarouselItem('Heathrow', 'heathrow.svg'));

    this._carouselService.corpSubject.next(corporateData);
    this.carouselIsReady = true;
  }
}
