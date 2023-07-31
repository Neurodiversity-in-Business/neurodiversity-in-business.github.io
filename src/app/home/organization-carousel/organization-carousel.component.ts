import { Component, Input, OnInit } from '@angular/core';
import { CarouselData } from '../carousel-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-organization-carousel',
  templateUrl: './organization-carousel.component.html',
  styleUrls: ['./organization-carousel.component.css'],
})
export class OrganizationCarouselComponent implements OnInit {
  @Input('carouselDataObservable')
  carouselDataObervable: Observable<CarouselData>;
  carouselData: CarouselData;
  ngOnInit(): void {
    this.carouselDataObervable.subscribe((data) => {
      console.log(data);
      this.carouselData = data;
    });
  }
}
