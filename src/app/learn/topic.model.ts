import { CourseModel } from './course.model';

export class Topic{
    constructor(
        public name:string,
        public image:string,
        public course:CourseModel[]
    ){}
}
