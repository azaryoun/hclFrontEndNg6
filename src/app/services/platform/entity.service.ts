
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

import { Result } from '../../models/platform/result';
import { environment } from '../../../environments/environment.prod';

// the base class for our services (except lookUp services)
export class EntityService<TModel, TModelManagement> {

    constructor(
        protected _httpClient: HttpClient,
        public serverControllerName: string,
    ) {
        this.serverControllerName = environment.BACK_END_IP + this.serverControllerName;
    }

    @Output() refresh: EventEmitter<any> = new EventEmitter();

    public makeReferesh() {
        this.refresh.emit();
    }


    // RESTful Services

    public getManagementEntities() {

        const strUrl = this.serverControllerName + 'getManagementEntities';
        return this._httpClient.get<Result<TModelManagement[]>>(strUrl);

    }
    public getEntity(id: number) {

        const strUrl = this.serverControllerName + 'getEntity/' + id;
        return this._httpClient.get<Result<TModel>>(strUrl);

    }

    public insertEntity(entity: TModel) {

        const strUrl = this.serverControllerName + 'insertEntity';

        return this._httpClient.post<Result<any>>(strUrl, JSON.stringify(entity));

    }

    public updateEntity(id: number, entity: TModel) {

        const strUrl = this.serverControllerName + 'updateEntity/' + id;
        return this._httpClient.put<Result<any>>(strUrl, JSON.stringify(entity));

    }

    public deleteEntity(id: number) {

        const strUrl = this.serverControllerName + 'deleteEntity/' + id;
        return this._httpClient.delete<Result<any>>(strUrl);

    }




}
