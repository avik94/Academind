import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../learn/course.model';
import { TopicSerivice } from '../learn/topic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  courseList:CourseModel[]
  index:number;

  constructor( private topicService:TopicSerivice,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const topicList = this.topicService.getTopicLists()
    this.route.params.subscribe((data)=>{
      const name = data.name.split('-');
      const fn = name.join(" ");
      let i = 0;
      for(let topic of topicList){
        if(topic.name === fn){
          this.courseList = this.topicService.getTopicCourses(i)
          this.index = i
        }
        i++;
      }
    })
  }
  getCourseData(i){
    const course = this.topicService.getSingleCourses(this.index,i)
    if(course.udemyUrl === ""){
      this.router.navigate(['/course/details/'+this.index, i]);
    }else{
      window.open(course.udemyUrl)
    }
  }

}
