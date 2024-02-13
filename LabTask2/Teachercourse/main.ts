import { teacher } from "./teacher";
import { Student } from "./student";
import { Course } from "./course";

const teacher1 = new teacher("Alan",2244);

const student1 = new Student("Alex",1111,[]);
const student2 = new Student("Jessica",1112,[]);

const course1= new Course(2111,"English","Grammer Basic",[]);
const course2= new Course(4113,"History","History Basic",[]);
const course3= new Course(8111,"Biology","Biology Basic",[]);


teacher1.studentenrollment(student1,course2);
teacher1.studentenrollment(student1,course1);
teacher1.studentenrollment(student2,course3);

const studentenrollmentcourse2 = teacher1.displayenrolledstrudent(course2);
console.log("Student Enrolled In History: ");
studentenrollmentcourse2.forEach(Student => 
    {
        console.log(`Name: ${Student.studentname}, ID: ${Student.studentid}`);
    });




