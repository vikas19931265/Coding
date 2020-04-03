var Students = /** @class */ (function () {
    function Students(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    Students.prototype.getNumber1 = function () {
        return this.number1;
    };
    Students.prototype.getNumber2 = function () {
        return this.number2;
    };
    Students.prototype.sum = function () {
        return this.number1 + this.number2;
    };
    return Students;
}());
var obj = new Students(10, 30);
document.write("sum is " + obj.sum());
console.log("addition of two numbers");
console.log("sum is " + obj.sum());

