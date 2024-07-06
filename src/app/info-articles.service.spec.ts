import { TestBed } from '@angular/core/testing';

import { InfoArticlesService } from './info-articles.service';

describe('InfoArticlesService', () => {
  let service: InfoArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
