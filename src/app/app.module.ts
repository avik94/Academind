import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { FooterComponent } from './footer/footer.component';
import { LearnModule } from './learn/learn.module';
import { AllCourseModule } from './all-courses/all-course.module';
import { HomeModule } from './home/home.module';
import { TopicSerivice } from './learn/topic.service';
import { SingleModule } from './single-course/single.module';
import { ServerService } from './shared/server.service';

const appRoutes:Routes=[
    { path:"", component: HomeComponent},
    { path:"learn", component: LearnComponent},
    { path:"learn/:name", component: AllCoursesComponent},
    { path:"course/details/:topic/:id", component: SingleCourseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    LearnModule,
    AllCourseModule,
    SingleModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TopicSerivice,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
