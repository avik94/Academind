import { Component, OnInit } from '@angular/core';
import { TopicSerivice } from './learn/topic.service';
import { ServerService } from './shared/server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'academind';

  constructor( private serverService: ServerService,
    private topicService:TopicSerivice ){}

  ngOnInit(){    
    this.serverService.getAllData().then( );    
  }
}
