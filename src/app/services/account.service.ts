import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  accountArray = [{name: 'DaEtc', email: 'daEtc@gmail.com', password: '1234'}
                  ,{name: 'TopEtc', email: 'TopEtc@gmail.com', password: '1234'}
                  ,{name: 'NonEtc', email: 'NonEtc@gmail.com', password: '1234'}];

  constructor() { }

}
