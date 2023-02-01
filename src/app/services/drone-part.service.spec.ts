import { TestBed } from '@angular/core/testing';

import { DronePartService } from './drone-part.service';

describe('DronePartService', () => {
  let service: DronePartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DronePartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
