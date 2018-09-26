

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LookUpService } from '../platform/look-up.service';



@Injectable()
export class ToDoStatusTypeService extends LookUpService {

    constructor(protected _httpClient: HttpClient) {
        super(_httpClient, 'lookUp/ToDoStatusType/');
    }


}
