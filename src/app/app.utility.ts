
import { JasonWebToken } from './models/platform/jason-web-token';
import { AppSetting } from './app.setting';


// this is a public static class which holds general configurations,setting, methods of the platfom
export class AppUtility {

    // logout method by removing JWT from sessionStorage
    public static logout(): boolean {
        sessionStorage.removeItem(AppSetting.AUTH_KEY);
        return false;
    }

    // checking if user is logged in or not  by getting JWT from sessionStorage
    public static isLoggedIn(): boolean {
        return sessionStorage.getItem(AppSetting.AUTH_KEY) != null;
    }


    // setAuth by setting JWT into sessionStorage
    public static setAuth(jasonWebToken: JasonWebToken) {

        sessionStorage.removeItem(AppSetting.AUTH_KEY);
        sessionStorage.setItem(AppSetting.AUTH_KEY, JSON.stringify(jasonWebToken));

    }

    // gets current JWT storred in sessionStorage
    public static getAuth(): JasonWebToken {
        const authKey = sessionStorage.getItem(AppSetting.AUTH_KEY);
        if (authKey) {
            return JSON.parse(authKey);
        } else {
            this.logout();
            return null;
        }
    }


}
