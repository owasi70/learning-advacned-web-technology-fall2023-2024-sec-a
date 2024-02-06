var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.display = function () {
        console.log("Id =".concat(this.id, ", Name = ").concat(this.name));
    };
    return Employee;
}());
var emp1 = new Employee(1, " steve");
emp1.display();
