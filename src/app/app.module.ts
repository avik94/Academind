import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { TopicSerivice } from './learn/topic.service';
import { TopicComponent } from './learn/topic/topic.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { EachCourseComponent } from './all-courses/each-course/each-course.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { FooterComponent } from './footer/footer.component';

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
    LearnComponent,
    HomeComponent,
    TopicComponent,
    AllCoursesComponent,
    EachCourseComponent,
    SingleCourseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TopicSerivice],
  bootstrap: [AppComponent]
})
export class AppModule { }
