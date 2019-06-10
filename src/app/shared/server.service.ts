import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicSerivice } from '../learn/topic.service';

@Injectable()
export class ServerService{

    constructor( private http: HttpClient,
        private topicService:TopicSerivice ){}

    getAllData(){
        return new Promise<any>(resolve=>{
            const resp = this.http.get('http://localhost:2000/data');
            resolve(resp)
        })
    }
}

