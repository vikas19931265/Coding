package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSearchPopup, {}, 0)
  }
  
  function pickValueAndCommit (value :  Object) : void {
    __widgetOf(this, pcf.ClaimSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSearchPopup, {}, 0).push()
  }
  
  
}