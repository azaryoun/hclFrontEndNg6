
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AppSettings } from "../../app.setting"

import { Login, UserProfile } from "../../models/administration/account";

import { JasonWebToken } from '../../models/platform/jason-web-token';
import { Result } from '../../models/platform/result';


@Injectable()
export class AccountService {

    private _serverControllerName = 'administration/Account/';

    constructor(private _httpClient: HttpClient) {
        this._serverControllerName = AppSettings.SERVER_IP + this._serverControllerName;
    }


    public login(login: Login) {

        let strUrl = this._serverControllerName + 'login'

        return this._httpClient.post<Result<JasonWebToken>>(strUrl, JSON.stringify(login));

    }

    public getUserProfile() {

        let strUrl = this._serverControllerName + 'getUserProfile'

        return this._httpClient.get<Result<UserProfile>>(strUrl);

    }




}