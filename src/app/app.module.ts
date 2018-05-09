import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import {MainAdminComponent} from './main-admin/main-admin.component';
import {MainUserComponent} from './main-user/main-user.component';
import {UserListComponent} from './main-admin/user-list/user-list.component';
import {SurveyListComponent} from './main-admin/survey-list/survey-list.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainAdminComponent,
        MainUserComponent,
        UserListComponent,
        SurveyListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
