import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@base';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent extends BasePage implements OnInit {

  constructor(protected  injector: Injector, protected  moduleService: UserService) {
    super(injector);
  }

  ngOnInit() {
  }

}
