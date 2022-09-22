import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {CardModule} from "primeng/card";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { JournalsComponent } from './journals/journals.component';
import { ClassesComponent } from './classes/classes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AccountComponent } from './account/account.component';
import {TableModule} from "primeng/table";
import { ClassComponent } from './class/class.component';
import { StudentComponent } from './student/student.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'journals', component: JournalsComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'account', component: AccountComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'class/:id', component: ClassComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    SideMenuComponent,
    HomeComponent,
    JournalsComponent,
    ClassesComponent,
    NotFoundComponent,
    ScheduleComponent,
    AccountComponent,
    ClassComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
