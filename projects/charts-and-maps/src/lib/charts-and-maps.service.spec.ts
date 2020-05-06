import { TestBed } from '@angular/core/testing';

import { ChartsAndMapsService } from './charts-and-maps.service';

describe('ChartsAndMapsService', () => {
  let service: ChartsAndMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsAndMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
