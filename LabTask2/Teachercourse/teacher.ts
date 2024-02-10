import { Course } from "./course";
import { Student } from "./student";

export class teacher {
   teachername : string ;
    id : number ;

   constructor (teachername: string ,id :number)
   {
    this.teachername = teachername ;
    this.id = id ;
    
   }

   studentenrollment(student : Student ,course : Course):void 
   {
    course.EnrolledStudent.push(student);
    student.courses.push(course);
   }

   displayenrolledstrudent(course: Course):Student []
   {
    return course.EnrolledStudent;
   }

}