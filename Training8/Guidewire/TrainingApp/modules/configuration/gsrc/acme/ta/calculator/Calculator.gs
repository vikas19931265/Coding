package acme.ta.calculator


class Calculator {

  var number11: java.lang.Double
  var number21: java.lang.Double

  var result: java.lang.Double

  property get number1(): java.lang.Double
  {
    return this.number11
  }

  property get number2(): java.lang.Double
  {
    return this.number21
  }

  property set number1(num1: java.lang.Double)
  {
    this.number11=num1
  }

  property  set number2(num2: java.lang.Double)
  {
    this.number21=num2
  }

  function calculate()
  {
    this.result=this.number11+this.number21
  }

  property get results(): java.lang.Double
  {
    return this.result
  }

}