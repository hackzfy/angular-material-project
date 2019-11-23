import { TestBed } from '@angular/core/testing';

import { ProjectCommonService } from './project-common.service';

describe('ProjectCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectCommonService = TestBed.get(ProjectCommonService);
    expect(service).toBeTruthy();
  });
});
