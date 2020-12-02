package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/General/ReferSubrogationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ReferSubrogationPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ReferSubrogationPopup, {claim}, 0)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ReferSubrogationPopup, {claim}, 0).push()
  }
  
  
}