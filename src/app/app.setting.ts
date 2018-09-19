
import { JasonWebToken } from "./models/platform/jason-web-token";


// this is a public static class which holds general configurations,setting, methods of the platfom
export class AppSettings {

    //Important !!!!!!
    public static SERVER_IP = "http://localhost:22511/api/"; //the IP and Path of Back-End must be set here !!!!
    // please change SERVER_IP carefully (you should not remove "/api/" from the path normally)

    public static BACK_END_VERSION: number = 1.01; //the compatible back-end version (useful in mobile applications)

    public static projectName = "NG6 Platform"; // the project name

    public static ownerName = "HCL company"; // the company or owner name

    public static currentYear = (new Date()).getFullYear(); //calculating current year to be used later by the platfom

    public static fileVersion = '?tmplv=' + Date.now(); //for preventing caching

    public static AUTH_KEY = "authKey"; //the key by which JWT payload in sessionStorage will be stored.



    //logout method by removing JWT from sessionStorage
    public static logout(): boolean {
        sessionStorage.removeItem(AppSettings.AUTH_KEY);
        return false;
    }

    //checking if user is logged in or not  by getting JWT from sessionStorage
    public static isLoggedIn(): boolean {
        return sessionStorage.getItem(AppSettings.AUTH_KEY) != null;
    }


    //setAuth by setting JWT into sessionStorage
    public static setAuth(jasonWebToken: JasonWebToken) {

        sessionStorage.removeItem(AppSettings.AUTH_KEY);
        sessionStorage.setItem(AppSettings.AUTH_KEY, JSON.stringify(jasonWebToken));

    }

    //gets current JWT storred in sessionStorage
    public static getAuth(): JasonWebToken {
        let authKey = sessionStorage.getItem(AppSettings.AUTH_KEY);
        if (authKey) {
            return JSON.parse(authKey);
        }
        else {
            this.logout();
            return null;
        }
    }


}