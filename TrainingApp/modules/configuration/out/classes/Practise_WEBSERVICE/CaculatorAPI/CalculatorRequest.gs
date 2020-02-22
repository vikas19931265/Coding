package Practise_WEBSERVICE.CaculatorAPI

uses gw.xml.ws.annotation.WsiExportable
uses java.lang.Double

@WsiExportable
public final class CalculatorRequest {
  public  var firstNumber: Double;
  public  var secondNumber: Double;
}


