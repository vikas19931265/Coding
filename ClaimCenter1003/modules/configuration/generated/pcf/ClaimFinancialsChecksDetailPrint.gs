package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/print/ClaimFinancialsChecksDetailPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimFinancialsChecksDetailPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, checkView :  CheckView) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimFinancialsChecksDetailPrint, {claim, checkView}, 0)
  }
  
  static function drilldown (claim :  Claim, checkView :  CheckView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsChecksDetailPrint, {claim, checkView}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claim :  Claim, checkView :  CheckView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsChecksDetailPrint, {claim, checkView}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claim :  Claim, checkView :  CheckView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsChecksDetailPrint, {claim, checkView}, 0).goInMain()
  }
  
  static function printPage (claim :  Claim, checkView :  CheckView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsChecksDetailPrint, {claim, checkView}, 0).printPage()
  }
  
  static function push (claim :  Claim, checkView :  CheckView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsChecksDetailPrint, {claim, checkView}, 0).push()
  }
  
  
}