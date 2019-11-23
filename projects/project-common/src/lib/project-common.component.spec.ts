import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommonComponent } from './project-common.component';

describe('ProjectCommonComponent', () => {
  let component: ProjectCommonComponent;
  let fixture: ComponentFixture<ProjectCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
