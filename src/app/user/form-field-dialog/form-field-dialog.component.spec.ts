import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldDialogComponent } from './form-field-dialog.component';

describe('FormFieldDialogComponent', () => {
  let component: FormFieldDialogComponent;
  let fixture: ComponentFixture<FormFieldDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
