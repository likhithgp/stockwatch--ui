import { TestBed } from '@angular/core/testing';

import { StockwatchServiceService } from './stockwatch-service.service';

describe('StockwatchServiceService', () => {
  let service: StockwatchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockwatchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
