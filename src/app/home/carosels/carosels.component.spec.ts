import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselsComponent } from './carosels.component';

describe('CaroselsComponent', () => {
  let component: CaroselsComponent;
  let fixture: ComponentFixture<CaroselsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaroselsComponent],
    });
    fixture = TestBed.createComponent(CaroselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
