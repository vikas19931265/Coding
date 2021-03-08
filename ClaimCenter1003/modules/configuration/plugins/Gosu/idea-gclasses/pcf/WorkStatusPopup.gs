package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/WorkStatusPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class WorkStatusPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (specificWorkStatus :  WorkStatus, willStartInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.WorkStatusPopup, {specificWorkStatus, willStartInEditMode}, 0)
  }
  
  static function push (specificWorkStatus :  WorkStatus, willStartInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WorkStatusPopup, {specificWorkStatus, willStartInEditMode}, 0).push()
  }
  
  
}