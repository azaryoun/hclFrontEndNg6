import { AppPage } from './app.po';
import { browser, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display NG6Platform on browser title', () => {
    page.navigateTo();
    expect(page.getBrowserTitle()).toEqual('NG6Platform');
  });

  it('should display Sign In to your Account on page', () => {
    page.navigateTo();
    expect(page.getSignInTitle()).toEqual('Sign In to your Account');
  });

  it('should display mobileNo. text box', () => {
    page.navigateTo();
    expect(page.getMobileElement().isPresent()).toBe(true);
  });

  it('should display password text box', () => {
    page.navigateTo();
    expect(page.getPasswordElement().isPresent()).toBe(true);
  });

  it('should display sign in button', () => {
    page.navigateTo();
    expect(page.getSignInButton().getText()).toEqual(' Sign In');
  });

  it('should sign into system', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    expect(browser.getCurrentUrl()).toContain('/nav/toDo');
  });

  it('should sign out button after sign in', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    expect(page.getSignOutButton().isPresent()).toBe(true);
  });

  it('should sign out button works', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getSignOutButton().click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
  });

  it('should display New To Do Button', () => {
    page.navigateTo();
    expect(page.getNewToDoButton().isPresent()).toBe(true);
  });


  it('should open "new to do" dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getAppDialogToDoWebElement().isPresent()).toBe(true);
  });

  it('should open be "task text box" on dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getTaskElement().isPresent()).toBe(true);
  });

  it('should open be "status drop down" on dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getStatusElement().isPresent()).toBe(true);
  });

  it('should open be "priority drop down" on dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getPriorityElement().isPresent()).toBe(true);
  });

  it('should open be "choose date button" on dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getChooseDateButton().isPresent()).toBe(true);
  });

  it('should open be "assignee drop down" on dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getAssigneeElement().isPresent()).toBe(true);
  });
  it('should open be "save button" on dialog page', () => {
    page.navigateTo();
    page.getPasswordElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    expect(page.getbtnSave().isPresent()).toBe(true);
  });

  it('should insert or save a new "to do"', () => {
    page.navigateTo();
    page.getMobileElement().sendKeys('09122764983');
    page.getPasswordElement().sendKeys('1');
    page.getSignInButton().click();
    page.getNewToDoButton().click();
    page.getTaskElement().sendKeys('e2e test task');
    page.getStatusElement().sendKeys(protractor.Key.ARROW_DOWN); //choose an item from status drop down list 
    page.getPriorityElement().sendKeys(protractor.Key.ARROW_DOWN); //choose an item from priority drop down list 
    page.getChooseDateButton().click(); //open date picker and choose a key
    page.getADateButton().sendKeys(protractor.Key.ENTER);
    page.getAssigneeElement().sendKeys(protractor.Key.ARROW_DOWN); //choose an item from assignee drop down list 
    page.getbtnSave().click();
    expect(page.getSnackBarInsertTitle()).toEqual('The To Do inserted successfullyOK');
  });


});
