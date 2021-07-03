import { TestBed } from '@angular/core/testing';

import { LigneCmdService } from './ligne-cmd.service';

describe('LigneCmdService', () => {
  let service: LigneCmdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneCmdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
