class ClassesAndObjects {
  number1: number
  number2: number
  constructor(number1: number, number2: number) {
    this.number1 = number1;
    this.number2 = number2;
  }
  public getNumber1() {
    return this.number1
  }
  public getNumber2() {
    return this.number2
  }
  public sum() {
    return this.number1 + this.number2
  }
}

var object = new ClassesAndObjects(10, 30);
document.write("sum is " + object.sum())
console.log("addition of two numbers");
console.log("sum is " + object.sum());

/*
addition of two numbers
sum is 40
*/

