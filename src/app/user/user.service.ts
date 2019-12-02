import { Injectable, Injector } from '@angular/core';
import { BaseModuleService } from '@base';
import { IUser } from './user.model';

@Injectable()
export class UserService extends BaseModuleService {

  constructor(protected  injector: Injector) {
    super(injector);
  }


  getUsers() {
    return this.http.get('users');
  }

  getUseById(id: string) {
    return this.http.get(id);
  }

  createUser(user: IUser) {
    return this.http.post('', user);
  }

  updateUser(user: IUser) {
    return this.http.post('', user);
  }
}
