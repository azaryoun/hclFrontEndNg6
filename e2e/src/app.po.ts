import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSignInTitle() {
    return element(by.xpath('(.//*[normalize-space(text()) and normalize-space(.)=\'mobile no.\'])[1]/preceding::div[1]')).getText();
  }
  getBrowserTitle() {
    return browser.getTitle();
  }
  getMobileElement() {
    return element(by.id('mat-input-0'));
  }
  getPasswordElement() {
    return element(by.id('mat-input-1'));
  }

  getSignInButton() {
    return element(by.xpath('.//*[normalize-space(text()) and normalize-space(.)=\'vpn_key\'])[1]/following::button[1]'));
  }

  getSignOutButton() {
    return element(by.xpath('//*[normalize-space(text()) and normalize-space(.)=\'Person 2\'])[2]/following::button[4]'));
  }
  getNewToDoButton() {
    return element(by.xpath('(.//*[normalize-space(text()) and normalize-space(.)=\'Link 3\'])[1]/following::span[2]'));
  }

  getAppDialogToDoWebElement() {
    return element(by.tagName('app-dialog-to-do-web'));
  }

  getTaskElement() {
    return element(by.id('mat-input-26'));
  }
  getStatusElement() {
    return element(by.xpath('.//*[normalize-space(text()) and normalize-space(.)=\'task\'])[1]/following::span[2]'));
  }

  getPriorityElement() {
    return element(by.id('.//*[normalize-space(text()) and normalize-space(.)=\'Pending\'])[5]/preceding::span[1]'));
  }

  getChooseDateButton() {
    return element(by.css('svg.mat-datepicker-toggle-default-icon.ng-star-inserted'));
  }

  getADateButton() {
    return element(by.xpath('.//*[normalize-space(text()) and normalize-space(.)=\'S\'])[2]/following::div[12]'));
  }

  getAssigneeElement() {
    return element(by.id('.//*[normalize-space(text()) and normalize-space(.)=\'choose due date\'])[1]/following::span[3]'));
  }

  getbtnSave() {
    return element(by.xpath('.//*[normalize-space(text()) and normalize-space(.)=\'notes\'])[1]/following::span[2]'));
  }
  getSnackBarInsertTitle() {
    return element(by.xpath('(.//*[normalize-space(text()) and normalize-space(.)=\'Person 2\'])[2]/following::simple-snack-bar[1]')).getText();
  }



}
