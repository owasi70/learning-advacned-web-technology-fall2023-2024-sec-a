import {Course } from "./course"

export class Student {

    studentname : string ;
    studentid: number;
    courses : Course [] ;

    constructor( studentname :string ,studentid: number,  courses : Course[] ){
        this.studentname= studentname;
        this.studentid = studentid;
        this.courses = courses ;
    }

    displaycourses (course: Course) : string {

        return course.courseinfo ;
    }
}