import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routing';
import { LoginPageComponent } from './components/page-components/administration/login-page/login-page.component';

import { LayoutModule } from '@angular/cdk/layout';
import { NavPageComponent } from './components/page-components/platform/nav-page/nav-page.component';

import { AuthGuardService } from './services/platform/auth-guard.service';
import { JasonWebTokenInterceptor } from './interceptors/platform/jason-web-token.interceptor';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AccountService } from './services/administration/account.service';
import { DialogAlertWebComponent } from './components/web-components/platform/dialog-alert-web/dialog-alert-web.component';
import { DialogConfirmWebComponent } from './components/web-components/platform/dialog-confirm-web/dialog-confirm-web.component';
import { LoadingSpinnerWebComponent } from './components/web-components/platform/loading-spinner-web/loading-spinner-web.component';
import { ToDoPageComponent } from './components/page-components/administration/to-do-page/to-do-page.component';
import { DialogToDoWebComponent } from './components/web-components/administration/dialog-to-do-web/dialog-to-do-web.component';
import { ToDoService } from './services/administration/to-do.service';
import { ToDoStatusTypeService } from './services/look-up/to-do-status-type.service';
import { AssigneeService } from './services/look-up/assignee.service';




@NgModule({
  declarations: [
    AppComponent,

    // Page Components
    LoginPageComponent,
    NavPageComponent,
    ToDoPageComponent,


    // Web Components
    DialogAlertWebComponent,
    DialogConfirmWebComponent,
    LoadingSpinnerWebComponent,
    DialogToDoWebComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    AngularMaterialModule,
    DialogsModule,


    // Import Routing:
    AppRouting,



  ],
  providers: [

    // Registering JWT intercepter here:
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JasonWebTokenInterceptor,
      multi: true
    },

    // services
    AuthGuardService,
    AccountService,
    ToDoService,
    ToDoStatusTypeService,
    AssigneeService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
