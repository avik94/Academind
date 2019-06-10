import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { TopicSerivice } from '../learn/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  
  listOfCourse = []
  constructor( private homeService:HomeService,
    private topicService: TopicSerivice,
    private router:Router
    ) { }

  ngOnInit() {
    this.homeService.placeCourses();
    this.listOfCourse = this.homeService.getAllHomePageCourse();
    console.log(this.homeService.getAllHomePageCourse())
  }

  getCourseData(topicId,courseId,course){
    if(course.udemyUrl === ""){
      this.router.navigate(['course/details/'+topicId, courseId]);
    }else{
      window.open(course.udemyUrl);
    }
  }

}
