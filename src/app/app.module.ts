import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FlexLayoutModule} from '@angular/flex-layout';
import {LocalStorage} from '@ngx-pwa/local-storage';

import {AppComponent} from './app.component';
import {MaterialModule} from './shared/material/material.module';
import {MainAdminComponent} from './main-admin/main-admin.component';
import {MainUserComponent} from './main-user/main-user.component';
import {UserListComponent} from './main-admin/user-list/user-list.component';
import {SurveyListComponent} from './main-admin/survey-list/survey-list.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AddSectionComponent} from './shared/modal/add-section/add-section.component';
import {AddQuestionComponent} from './shared/modal/add-question/add-question.component';
import {DeleteComponent} from './shared/modal/delete/delete.component';
import {DataProviderService} from './shared/services/data-provider.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainAdminComponent,
        MainUserComponent,
        UserListComponent,
        SurveyListComponent,
        AddSectionComponent,
        AddQuestionComponent,
        DeleteComponent,
    ],
    entryComponents: [
        AddSectionComponent,
        AddQuestionComponent,
        DeleteComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
        LocalStorage
    ],
    providers: [
        DataProviderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
