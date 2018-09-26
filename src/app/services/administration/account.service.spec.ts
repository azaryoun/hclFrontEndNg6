import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { Login, UserProfile } from '../../models/administration/account';
import { Result } from '../../models/platform/result';
import { JasonWebToken } from '../../models/platform/jason-web-token';



describe('Account Service', () => {
  let injector: TestBed;
  let service: AccountService;
  let httpMock: HttpTestingController;
  let serverControllerName = '';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    injector = getTestBed();
    service = injector.get(AccountService);
    httpMock = injector.get(HttpTestingController);
    serverControllerName = service.serverControllerName;
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('login', () => {

    const oDatum = new JasonWebToken('testPayLoad');
    const oResult = new Result<JasonWebToken>(true, false, null, null, null, null, oDatum);

    const oLogin = new Login('mobileNo', 'password');

    service.login(oLogin).subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual(oDatum);
    });

    const req = httpMock.expectOne(serverControllerName + 'login');
    expect(req.request.method).toBe('POST');
    req.flush(oResult);
  });

  it('getUserProfile', () => {

    const oDatum = new UserProfile('firstname', 'lastname', 'mobileNo', 'email@email.com');
    const oResult = new Result<UserProfile>(true, false, null, null, null, null, oDatum);

    service.getUserProfile().subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual(oDatum);
    });

    const req = httpMock.expectOne(serverControllerName + 'getUserProfile');
    expect(req.request.method).toBe('GET');
    req.flush(oResult);
  });

});



