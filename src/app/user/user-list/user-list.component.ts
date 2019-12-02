import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@base';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BasePage implements OnInit {

  constructor(protected  injector: Injector, protected moduleService: UserService) {
    super(injector);
  }

  ngOnInit() {
  }

}
