import { TestBed, inject } from '@angular/core/testing';
import { AssigneeService } from './assignee.service';



// unit testing for Assignee Service

describe('Assignee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssigneeService]
    });
  });


  it('getLookUps', inject([AssigneeService], (service: AssigneeService) => {

    service.getLookUps().subscribe(res => {

      expect(res.isDone).toBe(true)

    }, err => {
      return false;
    });

  }));


});
