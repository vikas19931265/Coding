package Practise_WEBSERVICE.CaculatorAPI

uses gw.xml.ws.annotation.WsiWebService
uses gw.xml.ws.annotation.WsiPermissions

@WsiWebService
@WsiPermissions({})
public class CalculatorProcessor {

   public function doCalculation(req:CalculatorRequest):CalculatorResponse
   {
     var response= new CalculatorResponse();
     var res=req.firstNumber+req.secondNumber;
     response.result=res;
     return response;
  }
}
