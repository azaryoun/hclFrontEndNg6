
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AppSettings } from '../../app.setting';

import { Login, UserProfile } from '../../models/administration/account';

import { JasonWebToken } from '../../models/platform/jason-web-token';
import { Result } from '../../models/platform/result';


@Injectable()
export class AccountService {

    public serverControllerName = 'administration/Account/';

    constructor(private _httpClient: HttpClient) {
        this.serverControllerName = AppSettings.SERVER_IP + this.serverControllerName;
    }


    public login(login: Login) {

        const strUrl = this.serverControllerName + 'login';

        return this._httpClient.post<Result<JasonWebToken>>(strUrl, JSON.stringify(login));

    }

    public getUserProfile() {

        const strUrl = this.serverControllerName + 'getUserProfile';

        return this._httpClient.get<Result<UserProfile>>(strUrl);

    }

}
