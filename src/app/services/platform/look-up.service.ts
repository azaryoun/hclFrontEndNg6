
import { HttpClient } from '@angular/common/http';
import { Result } from '../../models/platform/result';
import { LookUp } from '../../models/platform/look-up';
import { environment } from '../../../environments/environment';


// the base class for our lookUp services )
export class LookUpService {

    constructor(
        protected _httpClient: HttpClient,
        public serverControllerName: string,
    ) {
        this.serverControllerName = environment.BACK_END_IP + this.serverControllerName;
    }

    // RESTful Services

    public getLookUps() {

        const strUrl = this.serverControllerName + 'getLookUps';
        return this._httpClient.get<Result<LookUp[]>>(strUrl);

    }




}
