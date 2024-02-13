"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var course_1 = require("./course");
var teacher1 = new teacher_1.teacher("Alan", 2244);
var student1 = new student_1.Student("Alex", 1111, []);
var student2 = new student_1.Student("Jessica", 1112, []);
var course1 = new course_1.Course(2111, "English", "Grammer Basic", []);
var course2 = new course_1.Course(4113, "History", "History Basic", []);
var course3 = new course_1.Course(8111, "Biology", "Biology Basic", []);
teacher1.studentenrollment(student1, course2);
teacher1.studentenrollment(student1, course1);
teacher1.studentenrollment(student2, course3);
var studentenrollmentcourse2 = teacher1.displayenrolledstrudent(course2);
console.log("Student Enrolled In History: ");
studentenrollmentcourse2.forEach(function (Student) {
    console.log("Name: ".concat(Student.studentname, ", ID: ").concat(Student.studentid));
});
