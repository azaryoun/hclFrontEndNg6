
import { HttpClient } from '@angular/common/http';
import { AppSettings } from "../../app.setting"
import { Result } from '../../models/platform/result';
import { LookUp } from '../../models/platform/look-up';


//the base class for our lookUp services )
export class LookUpService {

    constructor(
        protected _httpClient: HttpClient,
        public serverControllerName: string,
    ) {
        this.serverControllerName = AppSettings.SERVER_IP + this.serverControllerName;
    }

    // RESTful Services

    public getLookUps() {

        let strUrl = this.serverControllerName + 'getLookUps';
        return this._httpClient.get<Result<LookUp[]>>(strUrl);

    }




}
