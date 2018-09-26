import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Result } from '../../models/platform/result';
import { AssigneeService } from './assignee.service';
import { LookUp } from '../../models/platform/look-up';



describe('Assignee Service', () => {
  let injector: TestBed;
  let service: AssigneeService;
  let httpMock: HttpTestingController;
  let serverControllerName = '';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssigneeService]
    });
    injector = getTestBed();
    service = injector.get(AssigneeService);
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
    expect(req.request.method).toBe('GET');
    req.flush(oResult);
  });


});



