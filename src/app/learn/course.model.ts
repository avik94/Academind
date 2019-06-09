export class CourseModel{
    constructor(
        public name:string,
        public image:string,
        public date:string,
        public description:string,
        public author:string,
        public videoUrl:string,
        public body:string,
        public udemyUrl:string,
        public relatedCourse
                
    ){

    }
}