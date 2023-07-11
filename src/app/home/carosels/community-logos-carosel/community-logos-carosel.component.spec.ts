import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityLogosCaroselComponent } from './community-logos-carosel.component';

describe('CommunitLogosCaroselComponent', () => {
  let component: CommunityLogosCaroselComponent;
  let fixture: ComponentFixture<CommunityLogosCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityLogosCaroselComponent],
    });
    fixture = TestBed.createComponent(CommunityLogosCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
