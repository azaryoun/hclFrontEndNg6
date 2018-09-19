
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityService } from '../platform/entity.service';
import { ToDo, ToDoManagement } from '../../models/administration/to-do';


@Injectable()
export class ToDoService extends EntityService<ToDo, ToDoManagement> {

    constructor(protected _httpClient: HttpClient) {
        super(_httpClient, "administration/ToDo/");
    }

}