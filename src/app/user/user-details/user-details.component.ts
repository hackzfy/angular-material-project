import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '@base';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent extends BasePage implements OnInit {

  constructor(protected  injector: Injector, protected moduleService: UserService) {
    super(injector);
  }

  ngOnInit() {
  }

}
