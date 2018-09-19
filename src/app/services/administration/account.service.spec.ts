import { TestBed, inject } from '@angular/core/testing';
import { AccountService } from './account.service';
import { Login } from '../../models/administration/account';


// unit testing for Account Service

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService]
    });
  });


  it('login', inject([AccountService], (service: AccountService) => {

    let oLogin = new Login('09122764983', '1');
    service.login(oLogin).subscribe(res => {

      expect(res.isDone).toBe(true)

    }, err => {
      return false;
    });

  }));

  it('getUserProfile', inject([AccountService], (service: AccountService) => {


    service.getUserProfile().subscribe(res => {

      expect(res.isDone).toBe(true);

    }, err => {
      return false;
    });

  }));
});
