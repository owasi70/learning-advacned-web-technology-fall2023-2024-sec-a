import { Student} from "./student";

export class Course{

    courseid: number ;
    name: string ;
    courseinfo : string ;
    EnrolledStudent: Student [];


    constructor(courseid: number , name : string , courseinfo : string , EnrolledStudent : Student[] )
{
    this.courseid = courseid ;
    this.name = name ;
    this.courseinfo = courseinfo ;
    this.EnrolledStudent = EnrolledStudent ; 
}
    getCourseInfo(): string {
        return this.courseinfo ;
    }
}