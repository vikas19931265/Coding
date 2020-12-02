package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/PaymentTransferPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PaymentTransferPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Payment :  Payment, Claim :  Claim, reserveLineInputSetHelper :  gw.api.financials.ReserveLineInputSetHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PaymentTransferPopup, {Payment, Claim, reserveLineInputSetHelper}, 0)
  }
  
  static function push (Payment :  Payment, Claim :  Claim, reserveLineInputSetHelper :  gw.api.financials.ReserveLineInputSetHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PaymentTransferPopup, {Payment, Claim, reserveLineInputSetHelper}, 0).push()
  }
  
  
}