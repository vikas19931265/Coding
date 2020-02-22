package Practise_WEBSERVICE.CaculatorAPI

uses gw.xml.ws.annotation.WsiExportable
uses java.lang.Double

@WsiExportable
public final  class CalculatorResponse {
  public  var result: Double;
}




/*
Gosu scratchpad code run

    uses consumewebservice.wsical.calculatorprocessor.CalculatorProcessor
    uses consumewebservice.wsical.calculatorprocessor.types.complex.CalculatorRequest
    uses consumewebservice.wsical.calculatorprocessor.types.complex.CalculatorResponse

    print("hello world");
    var process= new CalculatorProcessor();
    var request= new CalculatorRequest();
    request.FirstNumber=10;
    request.SecondNumber=20;
    var response=process.doCalculation(request)
    print(response.Result);
 */




