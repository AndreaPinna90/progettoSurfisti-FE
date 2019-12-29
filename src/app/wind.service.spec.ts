import { TestBed } from '@angular/core/testing';

import { WindService } from './shared/services/wind.service';

describe('WindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindService = TestBed.get(WindService);
    expect(service).toBeTruthy();
  });
});
