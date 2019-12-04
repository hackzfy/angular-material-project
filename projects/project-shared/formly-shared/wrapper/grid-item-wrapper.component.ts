import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-grid-item-wrapper-component',
  templateUrl: 'grid-item-wrapper.component.html'
})

export class GridItemWrapperComponent extends FieldWrapper {

  get item() {
    return this.to.item;
  }
}
