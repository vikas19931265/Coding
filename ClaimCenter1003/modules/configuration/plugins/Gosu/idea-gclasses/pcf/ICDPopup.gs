package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/icd/ICDPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ICDPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ICDPopup, {}, 0)
  }
  
  static function createDestination (anICD :  ICDCode) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ICDPopup, {anICD}, 1)
  }
  
  function pickValueAndCommit (value :  ICDCode) : void {
    __widgetOf(this, pcf.ICDPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.ICDPopup, {}, 0).push()
  }
  
  static function push (anICD :  ICDCode) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ICDPopup, {anICD}, 1).push()
  }
  
  
}