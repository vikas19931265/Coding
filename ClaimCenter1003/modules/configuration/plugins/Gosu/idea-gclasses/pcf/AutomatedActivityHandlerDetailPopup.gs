package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/specialhandling/AutomatedActivityHandlerDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AutomatedActivityHandlerDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (automatedHandler :  AutomatedActivityHandler, startInEditMode :  boolean, canEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AutomatedActivityHandlerDetailPopup, {automatedHandler, startInEditMode, canEdit}, 0)
  }
  
  static function push (automatedHandler :  AutomatedActivityHandler, startInEditMode :  boolean, canEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AutomatedActivityHandlerDetailPopup, {automatedHandler, startInEditMode, canEdit}, 0).push()
  }
  
  
}