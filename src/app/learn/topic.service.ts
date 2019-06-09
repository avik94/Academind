import { Topic } from './topic.model';
import { CourseModel } from './course.model';
import { EventEmitter } from '@angular/core';

export class TopicSerivice{
    topicLists = [
        new Topic('our course','https://academind.com/static/9a651c92d3fc01a0795faa4aa22eab70/efbba/our-courses.jpg',[
            new CourseModel('Angular - The Complete Guide','https://academind.com/static/c7eaf8acd7782b01d0cd5f8d0b1afe46/66ede/the-complete-guide.jpg',new Date().toString(),'Join our comprehensive 28h+ course and find out why Angular is an awesome JavaScript framework for building modern and engaging web apps!','','','','https://www.udemy.com/the-complete-guide-to-angular-2/?couponCode=ACAD_W',[]),
            new CourseModel('Svelte.js - The Complete Guide','https://academind.com/static/dad41b699e02f2bdc656279d9c28d17d/66ede/svelte-course-logo.jpg',new Date().toString(),'Build high-performance web applications with SvelteJS - a lightweight JavaScript compiler!','','','','https://www.udemy.com/sveltejs-the-complete-guide/?couponCode=ACAD_W',[]),
            new CourseModel('Learn Flutter & Dart to Build iOS & Android Apps','https://academind.com/static/b84a30188c46d0c464cb3f1ead019945/df73d/learn-flutter-to-create-ios--android-apps.png',new Date().toString(),'Flutter - a framework developed by Google - allows you to learn one language (Dart) and build beautiful native mobile apps in no time.','','','','https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/?couponCode=ACAD_W',[])

        ]),
        new Topic('react','https://academind.com/static/fed0193342ff516298b6c4af61c2ff53/efbba/react-thumb.jpg',[
            new CourseModel('React Native in 2019 & Beyond','https://academind.com/static/1b7aa29cbf4d790316a04ba59d59c221/66ede/react-hooks-introduction.jpg',new Date().toString(),'React Native is a great solution for building native mobile apps for iOS and Android with React. Should you still learn it?','author','videoUrl','body','',[{url:'url1',image:"image",description:"description"},{url:'url1',image:"image",description:"description"}]),
            new CourseModel('React.js in 2019 & Beyond','https://academind.com/static/2567bcc864fe3f2f84d46da195a8150e/66ede/redux-vs-react-context.jpg',new Date().toString(),'A thorough look at how ReactJS will do in 2019 and beyond. Will it win the frontend framework battle?','author','videoUrl','body','',['url1','url2']),
            new CourseModel('Context API + Hooks','https://academind.com/static/70baf8087a499cfd37cce95f9fdd4f0e/66ede/the-complete-guide.jpg',new Date().toString(),'React Hooks seem to be a real game changer. Combine that with the Context API for more awesomeness?','','','','https://www.udemy.com/react-the-complete-guide-incl-redux/?couponCode=ACAD_W',[])

        ]),
        new Topic('angular','https://academind.com/static/21eb97c726710c0744037077f049b5cf/efbba/angular-thumb.jpg',[
            new CourseModel("Angular 8 - What's new, what changed?",'https://academind.com/static/90958557bf03bc2905064bff825fe1a8/66ede/angular-8-thumb.jpg',new Date().toString(),"Angular 8 was released - here's what's new, what broke and what will change in the future!",'Maximullar','videoUrl','body','',[{url:'url1',image:"image",description:"description"},{url:'url1',image:"image",description:"description"}]),
            new CourseModel("Angular - The Complete Guide",'https://academind.com/static/c7eaf8acd7782b01d0cd5f8d0b1afe46/66ede/the-complete-guide.jpg',new Date().toString(),"Join our comprehensive 28h+ course and find out why Angular is an awesome JavaScript framework for building modern and engaging web apps!",'','','','https://www.udemy.com/the-complete-guide-to-angular-2/?couponCode=ACAD_W',[]),
            new CourseModel("Angular in 2019 & Beyond",'https://academind.com/static/240027b843bebbe3484173f486ffbd55/66ede/angulars-future.jpg',new Date('12-5-2019').toString(),"A thorough look at how Angular will do in 2019 and beyond. Will React win?",'author','videoUrl','body','',[{url:'url1',image:"image",description:"description"},{url:'url1',image:"image",description:"description"}])
        ])
    ]
    changeOnTopicList = new EventEmitter(); //when some change happen in topic
    sendingDataTosingleDetailPage = new EventEmitter();

    getTopicLists(){
        return this.topicLists.slice();
    }
    getTopicCourses(id){
        return this.topicLists[id].course.slice();
    }
    getSingleCourses(topicId:number,courseId:number){
        return this.topicLists[topicId].course[courseId]
    }
}