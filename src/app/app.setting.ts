

// this is a public static class which holds general configurations,setting, methods of the platfom
export class AppSetting {


    public static BACK_END_VERSION = 1.01; // the compatible back-end version (useful in mobile applications)

    public static projectName = 'NG6 Platform'; // the project name

    public static ownerName = 'HCL company'; // the company or owner name

    public static currentYear = (new Date()).getFullYear(); // calculating current year to be used later by the platfom

    public static fileVersion = '?tmplv=' + Date.now(); // for preventing caching

    public static AUTH_KEY = 'authKey'; // the key by which JWT payload in sessionStorage will be stored.



}
