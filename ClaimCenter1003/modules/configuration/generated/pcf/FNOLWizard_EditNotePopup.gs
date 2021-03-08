package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_EditNotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLWizard_EditNotePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (note :  Note, claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FNOLWizard_EditNotePopup, {note, claim}, 0)
  }
  
  static function push (note :  Note, claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLWizard_EditNotePopup, {note, claim}, 0).push()
  }
  
  
}