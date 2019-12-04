import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormArray, FormGroup } from '@angular/forms';

export interface INgxForm<T> {
  fields: FormlyFieldConfig[];
  model: T;
  options?: FormlyFormOptions;
  form: FormGroup | FormArray;
}
