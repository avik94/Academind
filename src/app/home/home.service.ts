import { Injectable } from '@angular/core';
import { TopicSerivice } from '../learn/topic.service';
import { CourseModel } from '../learn/course.model';

@Injectable()
export class HomeService{
    topicCourseId = [
        {topic: 1,course:2},
        {topic: 2,course:2},
        {topic: 0,course:1}
    ]
    
    listOfCourses = [ ]

    constructor( private topicService:TopicSerivice){}

    placeCourses(){
        for (let item of this.topicCourseId){
            let body = {
                topicId: item.topic,
                courseId: item.course,
                courseBody: this.topicService.getSingleCourses(item.topic,item.course)
            }
            this.listOfCourses.push(body);
        }
    }

    getAllHomePageCourse(){        
        return this.listOfCourses.slice();
    }
}