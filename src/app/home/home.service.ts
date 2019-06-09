import { Injectable } from '@angular/core';
import { TopicSerivice } from '../learn/topic.service';
import { CourseModel } from '../learn/course.model';

@Injectable()
export class HomeService{
    listOfCourses:CourseModel[] = [
        this.topicService.getSingleCourses(1,2),
        this.topicService.getSingleCourses(2,2),
        this.topicService.getSingleCourses(0,1),
    ]
    constructor( private topicService:TopicSerivice){}

    getAllHomePageCourse(){
        return this.listOfCourses.slice();
    }
}