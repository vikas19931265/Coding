package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/icd/NewICDPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewICDPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewICDPopup, {}, 0)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewICDPopup, {}, 0).push()
  }
  
  
}