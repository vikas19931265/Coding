package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/ICDCodePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ICDCodePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (codeParam :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ICDCodePopup, {codeParam}, 0)
  }
  
  function pickValueAndCommit (value :  ICDCode) : void {
    __widgetOf(this, pcf.ICDCodePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (codeParam :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ICDCodePopup, {codeParam}, 0).push()
  }
  
  
}