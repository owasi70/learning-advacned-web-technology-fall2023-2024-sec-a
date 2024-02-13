"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
var teacher = /** @class */ (function () {
    function teacher(teachername, id) {
        this.teachername = teachername;
        this.id = id;
    }
    teacher.prototype.studentenrollment = function (student, course) {
        course.EnrolledStudent.push(student);
        student.courses.push(course);
    };
    teacher.prototype.displayenrolledstrudent = function (course) {
        return course.EnrolledStudent;
    };
    return teacher;
}());
exports.teacher = teacher;
