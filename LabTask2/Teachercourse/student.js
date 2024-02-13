"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(studentname, studentid, courses) {
        this.studentname = studentname;
        this.studentid = studentid;
        this.courses = courses;
    }
    Student.prototype.displaycourses = function (course) {
        return course.courseinfo;
    };
    return Student;
}());
exports.Student = Student;
