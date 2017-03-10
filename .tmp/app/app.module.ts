import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AccountLoggedInPage } from '../pages/account-logged-in/account-logged-in';
import { AccountNotLoggedInPage } from '../pages/account-not-logged-in/account-not-logged-in';
import { LoginPage } from '../pages/login/login';
import { AddTaskPage } from '../pages/add-task/add-task';
import { RulebooksPage } from '../pages/rulebooks/rulebooks';
import { HelpPage } from '../pages/help/help';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { PersonalPage } from '../pages/personal/personal';
import { AccountPage } from '../pages/account/account';
import { ChallengePage } from '../pages/challenge/challenge';
import { TaskPage } from '../pages/task/task';
import { ObservePage } from '../pages/observe/observe';
import { HistoryPage } from '../pages/history/history';
import { FiterPage } from '../pages/fiter/fiter';
import { AgreementPage} from '../pages/agreement/agreement';
import { ManualPage } from '../pages/manual/manual';
import { ReportPage } from '../pages/report/report';
import { TaskDetailPage } from '../pages/task-detail/task-detail';

import { Login } from '../providers/login';
import { Storage } from '../providers/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    AccountLoggedInPage,
    AccountNotLoggedInPage,
    LoginPage,
    AddTaskPage,
    RulebooksPage,
    HelpPage,
    ContactUsPage,
    PersonalPage,
    AccountPage,
    ChallengePage,
    TaskPage,
    ObservePage,
    HistoryPage,
    FiterPage,
    AgreementPage,
    ManualPage,
    ReportPage,
    TaskDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      tabsHideOnSubPages: true
    },{}
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    AccountLoggedInPage,
    AccountNotLoggedInPage,
    LoginPage,
    AddTaskPage,
    RulebooksPage,
    HelpPage,
    ContactUsPage,
    PersonalPage,
    AccountPage,
    ChallengePage,
    TaskPage,
    ObservePage,
    HistoryPage,
    FiterPage,
    AgreementPage,
    ManualPage,
    ReportPage,
    TaskDetailPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Login,
    Storage
    ]
})
export class AppModule {}
