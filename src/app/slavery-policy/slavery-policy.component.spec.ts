import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaveryPolicyComponent } from './slavery-policy.component';

describe('SlaveryPolicyComponent', () => {
  let component: SlaveryPolicyComponent;
  let fixture: ComponentFixture<SlaveryPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlaveryPolicyComponent]
    });
    fixture = TestBed.createComponent(SlaveryPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
