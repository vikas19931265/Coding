package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newnote/NewNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewNoteWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewNoteWorksheet, {Claim}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewNoteWorksheet, {Claim}, 0).goInWorkspace()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewNoteWorksheet, {Claim}, 0).push()
  }
  
  
}