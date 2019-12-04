import { ConfigOption } from '@ngx-formly/core';
import { GridItemWrapperComponent } from './wrapper/grid-item-wrapper.component';
import { FormlyInputComponent } from '@shared/formly-shared/component/formly-input/formly-input.component';

export const config: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyInputComponent,
      wrappers: ['grid-item-wrapper']
    }
  ],
  wrappers: [
    {
      name: 'grid-item-wrapper',
      component: GridItemWrapperComponent
    }
  ]
};
