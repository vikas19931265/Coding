class Student12 {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        var id = 1234;  // this is a private variable and cant be accessed directly.
        this.getRollNo = function () {  // this is also a property accessible through a function only.
            return id;
        }
    }
    detail() {        // we can create a function here just like java but no need to use function keyword
        return this.name;
    }

}

var stu1 = new Student12("vikas", 1234);
console.log(stu1.name); //1234
console.log(stu1.getRollNo());