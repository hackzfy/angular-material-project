import { TestBed } from '@angular/core/testing';

import { ProjectBaseService } from './project-base.service';

describe('ProjectBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectBaseService = TestBed.get(ProjectBaseService);
    expect(service).toBeTruthy();
  });
});
