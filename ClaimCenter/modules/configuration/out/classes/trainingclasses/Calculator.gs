/*
 This program is written in order to to create a pcf which will do calculation two number
*/
package trainingclasses

class Calculator {
  var firstNumber: int
  var secondNumber: int
  public  var result: int
  var sum: int;
  property  get FirstNumber(): int
  {
    return this.firstNumber;
  }

  property  get SecondNumber(): int
  {
    return this.secondNumber;
  }

  property  set FirstNumber(_fnumber: int): void
  {
    this.firstNumber = _fnumber;
  }

  property  set SecondNumber(_snumber: int): void
  {
    this.secondNumber = _snumber;
  }

  function add(_firstNumber: int, _secondNumber: int)
  {
    this.firstNumber = _firstNumber;
    this.secondNumber = _secondNumber;
    this.sum = firstNumber + secondNumber;
    this.result = this.sum;
    print(this.result);
  }

  /*property get Result(): int{
    return this.result;
  }
  property set Result(Sum:int){
    this.result=Sum;
  }*/
}