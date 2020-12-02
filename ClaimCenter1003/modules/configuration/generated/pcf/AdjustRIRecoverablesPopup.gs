package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/reinsurance/AdjustRIRecoverablesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AdjustRIRecoverablesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Agreement :  RIAgreement, Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AdjustRIRecoverablesPopup, {Agreement, Claim}, 0)
  }
  
  static function push (Agreement :  RIAgreement, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AdjustRIRecoverablesPopup, {Agreement, Claim}, 0).push()
  }
  
  
}