package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/notes/EditNote.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditNote extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Note :  Note, Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditNote, {Note, Claim}, 0)
  }
  
  static function drilldown (Note :  Note, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNote, {Note, Claim}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Note :  Note, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNote, {Note, Claim}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Note :  Note, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNote, {Note, Claim}, 0).goInMain()
  }
  
  static function printPage (Note :  Note, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNote, {Note, Claim}, 0).printPage()
  }
  
  static function push (Note :  Note, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNote, {Note, Claim}, 0).push()
  }
  
  
}