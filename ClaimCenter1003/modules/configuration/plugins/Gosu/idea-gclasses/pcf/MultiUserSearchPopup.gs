package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/usersearch/MultiUserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MultiUserSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MultiUserSearchPopup, {}, 0)
  }
  
  static function createDestination (Organization :  Organization) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MultiUserSearchPopup, {Organization}, 1)
  }
  
  function pickValueAndCommit (value :  User[]) : void {
    __widgetOf(this, pcf.MultiUserSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.MultiUserSearchPopup, {}, 0).push()
  }
  
  static function push (Organization :  Organization) : pcf.api.Location {
    return __newDestinationForLocation(pcf.MultiUserSearchPopup, {Organization}, 1).push()
  }
  
  
}