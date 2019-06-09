import { Component, OnInit } from '@angular/core';
import { TopicSerivice } from '../learn/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {
  
  details;

  constructor( private topicService:TopicSerivice,
    private route:ActivatedRoute ) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      (data)=>{
        const topicId = +data.topic;
        const id = +data.id;
        this.details = this.topicService.getSingleCourses(topicId,id);      }
    )
    console.log(this.details)
  }

}
