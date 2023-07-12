import { TestBed } from '@angular/core/testing';

import { DisplayContentService } from './display-content.service';

describe('DisplayContentService', () => {
  let service: DisplayContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
