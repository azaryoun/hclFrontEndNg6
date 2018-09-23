import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Result } from '../../models/platform/result';
import { LookUp } from '../../models/platform/look-up';
import { ToDoStatusTypeService } from './to-do-status-type.service';



describe('To Do Status Type Service', () => {
  let injector: TestBed;
  let service: ToDoStatusTypeService;
  let httpMock: HttpTestingController;
  let serverControllerName = '';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToDoStatusTypeService]
    });
    injector = getTestBed();
    service = injector.get(ToDoStatusTypeService);
    httpMock = injector.get(HttpTestingController);
    serverControllerName = service.serverControllerName;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getLookUps', () => {

    const oLookUp = new LookUp(1, 'title');
 
    const oResult = new Result<any>(true, false, null, null, null, null, [oLookUp]);
 
    service.getLookUps().subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual([oLookUp]);
    });

    const req = httpMock.expectOne(serverControllerName + 'getLookUps');
    expect(req.request.method).toBe("GET");
    req.flush(oResult);
  });


});



