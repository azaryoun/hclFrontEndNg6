

import { RouterModule } from '@angular/router';


//Services
import { AuthGuardService } from './services/platform/auth-guard.service';


//Pages
import { LoginPageComponent } from './components/page-components/administration/login-page/login-page.component';
import { NavPageComponent } from './components/page-components/platform/nav-page/nav-page.component';
import { ToDoPageComponent } from './components/page-components/administration/to-do-page/to-do-page.component';


// setting routing ...
export const AppRouting = RouterModule.forRoot([
    { path: '', component: LoginPageComponent },
    {
        path: 'nav', component: NavPageComponent, canActivate: [AuthGuardService], children: [
            { path: 'toDo', component: ToDoPageComponent },
            { path: '**', redirectTo: 'toDo' },
        ]
    },
    { path: '**', component: LoginPageComponent },

]);

