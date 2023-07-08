import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerStartComponent } from './volunteer-start.component';

describe('VolunteerStartComponent', () => {
  let component: VolunteerStartComponent;
  let fixture: ComponentFixture<VolunteerStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerStartComponent],
    });
    fixture = TestBed.createComponent(VolunteerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
