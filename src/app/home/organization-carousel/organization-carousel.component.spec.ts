import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCarouselComponent } from './organization-carousel.component';

describe('OrganizationCarouselComponent', () => {
  let component: OrganizationCarouselComponent;
  let fixture: ComponentFixture<OrganizationCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationCarouselComponent]
    });
    fixture = TestBed.createComponent(OrganizationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
