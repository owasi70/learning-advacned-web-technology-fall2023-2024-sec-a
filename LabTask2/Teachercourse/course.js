"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(courseid, name, courseinfo, EnrolledStudent) {
        this.courseid = courseid;
        this.name = name;
        this.courseinfo = courseinfo;
        this.EnrolledStudent = EnrolledStudent;
    }
    Course.prototype.getCourseInfo = function () {
        return this.courseinfo;
    };
    return Course;
}());
exports.Course = Course;
