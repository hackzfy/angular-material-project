import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseComponent } from '@base';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.scss']
})
export class DynamicItemComponent extends BaseComponent implements OnInit {

  @Input() options: any;

  constructor(protected injector: Injector) {
    super(injector);
  }

  ngOnInit() {

  }

}
