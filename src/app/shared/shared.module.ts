import { NgModule } from '@angular/core';
import { EachCourseComponent } from '../all-courses/each-course/each-course.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        EachCourseComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        EachCourseComponent
    ]
})
export class SharedModule{

}