import { Component, OnInit } from '@angular/core';
import { TopicSerivice } from './topic.service';
import { Topic } from './topic.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  topicLists:Topic[]
  constructor( private topicService: TopicSerivice,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.topicLists = this.topicService.getTopicLists();
    // console.log(this.topicLists)
  }
  getTopicData(name){
    let getName = name.split(" ");
    let fn = getName.join("-")
    this.router.navigate(['/learn',fn])
  }

}
