
import { AppUtility } from './app.utility';
import { AppSetting } from './app.setting';
import { JasonWebToken } from './models/platform/jason-web-token';



describe('Assignee Service', () => {


  beforeEach(() => { });

  afterEach(() => { });

  it('logout', () => {
    const blnResult = AppUtility.logout();
    const strJasonWebToken = sessionStorage.getItem(AppSetting.AUTH_KEY);
    expect(blnResult).toBeFalsy();
    expect(strJasonWebToken).toBeNull();

  });

  it('isLoggedIn', () => {
    const blnResult = AppUtility.isLoggedIn();
    expect(blnResult).toBeDefined();
  });

  it('getAuth', () => {
    const strJasonWebToken = sessionStorage.getItem(AppSetting.AUTH_KEY);
    let oJasonWebToken: JasonWebToken = null;
    if (strJasonWebToken != null) {
      oJasonWebToken = JSON.parse(strJasonWebToken);
    }
    const oResult = AppUtility.getAuth();
    expect(oResult === oJasonWebToken || oResult === null).toBeTruthy();

  });


  it('setAuth', () => {
    const oJasonWebToken = new JasonWebToken('payLoad');
    AppUtility.setAuth(oJasonWebToken);
    const strJasonWebToken = sessionStorage.getItem(AppSetting.AUTH_KEY);
    expect(strJasonWebToken).toBeDefined();
    expect(strJasonWebToken).toEqual(JSON.stringify(oJasonWebToken));
  });
});



