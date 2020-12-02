package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/specialhandling/OtherInstructionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class OtherInstructionPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (otherInstructionParam :  OtherInstruction, specialHandling :  SpecialHandling, editMode :  boolean, canEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OtherInstructionPopup, {otherInstructionParam, specialHandling, editMode, canEdit}, 0)
  }
  
  function pickValueAndCommit (value :  OtherInstruction) : void {
    __widgetOf(this, pcf.OtherInstructionPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (otherInstructionParam :  OtherInstruction, specialHandling :  SpecialHandling, editMode :  boolean, canEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.OtherInstructionPopup, {otherInstructionParam, specialHandling, editMode, canEdit}, 0).push()
  }
  
  
}