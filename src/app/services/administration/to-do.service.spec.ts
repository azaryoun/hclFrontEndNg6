import { TestBed, inject } from '@angular/core/testing';
import { ToDoService } from './to-do.service';


// unit testing for ToDo Service

describe('ToDoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService]
    });
  });


  it('getManagementEntities', inject([ToDoService], (service: ToDoService) => {

    service.getManagementEntities().subscribe(res => {

      expect(res.isDone).toBe(true)

    }, err => {
      return false;
    });

  }));


});
