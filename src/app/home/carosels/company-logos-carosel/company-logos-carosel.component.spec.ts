import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogosCaroselComponent } from './company-logos-carosel.component';

describe('CompanyLogosCaroselComponent', () => {
  let component: CompanyLogosCaroselComponent;
  let fixture: ComponentFixture<CompanyLogosCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyLogosCaroselComponent],
    });
    fixture = TestBed.createComponent(CompanyLogosCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
