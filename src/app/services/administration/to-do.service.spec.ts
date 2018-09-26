import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Result } from '../../models/platform/result';
import { ToDoService } from './to-do.service';
import { ToDo, ToDoManagement } from '../../models/administration/to-do';



describe('To Do Service', () => {
  let injector: TestBed;
  let service: ToDoService;
  let httpMock: HttpTestingController;
  let serverControllerName = '';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToDoService]
    });
    injector = getTestBed();
    service = injector.get(ToDoService);
    httpMock = injector.get(HttpTestingController);
    serverControllerName = service.serverControllerName;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deleteEntity', () => {

    const numId = 10;
    const oResult = new Result<any>(true, false, null, null, null, null, null);

    service.deleteEntity(numId).subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual(null);
    });

    const req = httpMock.expectOne(serverControllerName + 'deleteEntity/' + numId);
    expect(req.request.method).toBe('DELETE');
    req.flush(oResult);
  });

  it('getEntity', () => {

    const numId = 10;
    const oTodo = new ToDo('tast', 1, 'High', new Date(), 1, 'notes');

    const oResult = new Result<ToDo>(true, false, null, null, null, null, oTodo);

    service.getEntity(numId).subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual(oTodo);
    });

    const req = httpMock.expectOne(serverControllerName + 'getEntity/' + numId);
    expect(req.request.method).toBe('GET');
    req.flush(oResult);
  });

  it('getManagementEntities', () => {

    const oToDoManagement = new ToDoManagement(1, 'tast', 'New', 'High', (new Date()).toDateString(), 'assignee title');

    const oResult = new Result<ToDoManagement[]>(true, false, null, null, null, null, [oToDoManagement]);

    service.getManagementEntities().subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual([oToDoManagement]);
    });

    const req = httpMock.expectOne(serverControllerName + 'getManagementEntities');
    expect(req.request.method).toBe('GET');
    req.flush(oResult);
  });

  it('insertEntity', () => {


    const oTodo = new ToDo('tast', 1, 'High', new Date(), 1, 'notes');

    const oResult = new Result<any>(true, false, null, null, null, null, null);

    service.insertEntity(oTodo).subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual(null);
    });

    const req = httpMock.expectOne(serverControllerName + 'insertEntity');
    expect(req.request.method).toBe('POST');
    req.flush(oResult);
  });

  it('updateEntity', () => {

    const numId = 10;
    const oTodo = new ToDo('tast', 1, 'High', new Date(), 1, 'notes');

    const oResult = new Result<any>(true, false, null, null, null, null, null);

    service.updateEntity(numId, oTodo).subscribe(res => {
      expect(res.isDone).toBe(true);
      expect(res.datum).toEqual(null);
    });

    const req = httpMock.expectOne(serverControllerName + 'updateEntity/' + numId);
    expect(req.request.method).toBe('PUT');
    req.flush(oResult);
  });




});



