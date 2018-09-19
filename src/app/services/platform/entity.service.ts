
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import { AppSettings } from "../../app.setting"

import { Result } from '../../models/platform/result';

//the base class for our services (except lookUp services)
export class EntityService<TModel, TModelManagement> {

    constructor(
        protected _httpClient: HttpClient,
        protected _serverControllerName: string,
    ) {
        this._serverControllerName = AppSettings.SERVER_IP + this._serverControllerName;
    }

    @Output() refresh: EventEmitter<any> = new EventEmitter();

    public makeReferesh() {
        this.refresh.emit();
    }


    // RESTful Services

    public getManagementEntities() {

        let strUrl = this._serverControllerName + 'getManagementEntities'
        return this._httpClient.get<Result<TModelManagement[]>>(strUrl);

    }
    public getEntity(id: number) {

        let strUrl = this._serverControllerName + 'getEntity/' + id;
        return this._httpClient.get<Result<TModel>>(strUrl);

    }

    public insertEntity(entity: TModel) {

        let strUrl = this._serverControllerName + 'insertEntity';

        return this._httpClient.post<Result<any>>(strUrl, JSON.stringify(entity));

    }

    public updateEntity(id: number, entity: TModel) {

        let strUrl = this._serverControllerName + 'updateEntity/' + id;
        return this._httpClient.put<Result<any>>(strUrl, JSON.stringify(entity));

    }

    public deleteEntity(id: number) {

        let strUrl = this._serverControllerName + 'deleteEntity/' + id;
        return this._httpClient.delete<Result<any>>(strUrl);

    }




}
