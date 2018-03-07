import { TestBed, inject } from '@angular/core/testing';

import { DataQuestionService } from './data-question.service';

describe('DataQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataQuestionService]
    });
  });

  it('should be created', inject([DataQuestionService], (service: DataQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
