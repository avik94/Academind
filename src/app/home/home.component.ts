import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { TopicSerivice } from '../learn/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  
  listOfCourse = this.homeService.getAllHomePageCourse();
  constructor( private homeService:HomeService,
    private topicService: TopicSerivice) { }

  ngOnInit() {
    console.log(this.listOfCourse)
  }

  getCourseData(i,course){
    if(course.udemyUrl === ""){
      // this.router.navigate(['/course/details/'+this.index, i]);
    }else{
      window.open(course.udemyUrl)
    }
  }

}
