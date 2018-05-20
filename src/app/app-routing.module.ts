import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainUserComponent} from './main-user/main-user.component';
import {MainAdminComponent} from './main-admin/main-admin.component';
import {UserListComponent} from './main-admin/user-list/user-list.component';
import {SurveyListComponent} from './main-admin/survey-list/survey-list.component';
import {LecturesManagementComponent} from './main-admin/lectures-management/lectures-management.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: MainUserComponent },
    {path: 'admin', component: MainAdminComponent, children: [
            {path: 'user', component: UserListComponent},
            {path: 'survey', component: SurveyListComponent},
            {path: 'lectures', component: LecturesManagementComponent},
        ]},
    {path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}