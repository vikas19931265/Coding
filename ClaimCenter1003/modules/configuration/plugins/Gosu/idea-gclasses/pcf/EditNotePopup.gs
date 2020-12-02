package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/notes/EditNotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditNotePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (note :  entity.Note) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditNotePopup, {note}, 0)
  }
  
  static function createDestination (note :  entity.Note, topicEditable :  boolean, relatedToEditable :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditNotePopup, {note, topicEditable, relatedToEditable}, 1)
  }
  
  static function push (note :  entity.Note) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNotePopup, {note}, 0).push()
  }
  
  static function push (note :  entity.Note, topicEditable :  boolean, relatedToEditable :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditNotePopup, {note, topicEditable, relatedToEditable}, 1).push()
  }
  
  
}