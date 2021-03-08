package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NullClaimContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NullClaimContactDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NullClaimContactDetailPopup, {}, 0)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.NullClaimContactDetailPopup, {}, 0).push()
  }
  
  
}