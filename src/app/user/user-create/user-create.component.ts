import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@base';
import { UserService } from '../user.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { INgxForm } from '@shared/formly-shared/ngx-form.interface';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent extends BasePage implements OnInit, INgxForm<any> {
  gridsterOptions: GridsterConfig;
  dashboard: Array<GridsterItem>;
  fields: FormlyFieldConfig[];
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions;

  constructor(protected injector: Injector, protected moduleService: UserService) {
    super(injector);
  }

  itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
  }

  itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }

  toggleDraggable() {
    this.gridsterOptions = {
      ...this.gridsterOptions,
      draggable: {
        enabled: !this.gridsterOptions.draggable.enabled
      }
    };
  }

  toggleResizable() {
    this.gridsterOptions = {
      ...this.gridsterOptions,
      resizable: {
        enabled: !this.gridsterOptions.resizable.enabled
      }
    };
  }

  ngOnInit() {


    this.gridsterOptions = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.OnDragAndResize,
      maxCols: 48,
      minCols: 24,
      minRows: 24,
      maxRows: 48,
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [

      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
    this.initFields();

  }

  changedOptions() {
    this.gridsterOptions.api.optionsChanged();
  }

  removeItem(e, item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({} as any);
  }

  initFields() {
    this.fields = [
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          placeholder: 'Username',
          required: true,
          item: this.dashboard[0],
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          placeholder: 'Password',
          item: this.dashboard[1],
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          placeholder: 'Email',
          item: this.dashboard[2],

        }
      },
      {
        key: 'address',
        type: 'input',
        templateOptions: {
          placeholder: 'Address',
          item: this.dashboard[3],

        }
      }
    ];
  }
}
