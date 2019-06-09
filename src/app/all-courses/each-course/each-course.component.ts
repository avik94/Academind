import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-course',
  templateUrl: './each-course.component.html',
  styleUrls: ['./each-course.component.css']
})
export class EachCourseComponent implements OnInit {
  @Input() courseDetails;
  constructor() { }

  ngOnInit() {
  }

}
