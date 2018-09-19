import { TestBed, inject } from '@angular/core/testing';
import { ToDoStatusTypeService } from './to-do-status-type.service';



// unit testing for ToDoStatusType Service

describe('ToDoStatusType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoStatusTypeService]
    });
  });


  it('getLookUps', inject([ToDoStatusTypeService], (service: ToDoStatusTypeService) => {

    service.getLookUps().subscribe(res => {

      expect(res.isDone).toBe(true)

    }, err => {
      return false;
    });

  }));


});
