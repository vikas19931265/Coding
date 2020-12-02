package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/litigation/CloseMatterPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CloseMatterPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (matter :  Matter) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CloseMatterPopup, {matter}, 0)
  }
  
  static function push (matter :  Matter) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CloseMatterPopup, {matter}, 0).push()
  }
  
  
}