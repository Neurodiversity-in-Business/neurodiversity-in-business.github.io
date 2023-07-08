import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberStartComponent } from './member-start.component';

describe('MemberStartComponent', () => {
  let component: MemberStartComponent;
  let fixture: ComponentFixture<MemberStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberStartComponent],
    });
    fixture = TestBed.createComponent(MemberStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
