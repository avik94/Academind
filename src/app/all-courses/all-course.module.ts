import { NgModule } from '@angular/core';
import { AllCoursesComponent } from './all-courses.component';
import { EachCourseComponent } from './each-course/each-course.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        AllCoursesComponent,
    ],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        EachCourseComponent
    ]
})
export class AllCourseModule{}