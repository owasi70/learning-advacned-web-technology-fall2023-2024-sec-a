var Employee1 = /** @class */ (function () {
    function Employee1(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee1.prototype.display = function () {
        console.log("Id = ".concat(this.id, ", Name = ").concat(this.name, ",Age = ").concat(this.age, ",IsOkay = ").concat(this.isOkay));
    };
    return Employee1;
}());
var emp2 = new Employee1(1, "Steve", 21, true);
emp2.display();
