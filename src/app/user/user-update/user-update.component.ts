import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@base';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent extends BasePage implements OnInit {

  constructor(protected  injector: Injector, protected  moduleService: UserService) {
    super(injector);
  }

  ngOnInit() {
  }

}
