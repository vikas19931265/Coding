package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/notes/NewNotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewNotePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim}, 3)
  }
  
  static function createDestination (claim :  Claim, relatedTo :  KeyableBean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim, relatedTo}, 0)
  }
  
  static function createDestination (claim :  Claim, relatedTo :  KeyableBean, topic :  NoteTopicType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim, relatedTo, topic}, 2)
  }
  
  static function createDestination (claim :  Claim, topic :  NoteTopicType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim, topic}, 1)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim}, 3).push()
  }
  
  static function push (claim :  Claim, relatedTo :  KeyableBean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim, relatedTo}, 0).push()
  }
  
  static function push (claim :  Claim, relatedTo :  KeyableBean, topic :  NoteTopicType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim, relatedTo, topic}, 2).push()
  }
  
  static function push (claim :  Claim, topic :  NoteTopicType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewNotePopup, {claim, topic}, 1).push()
  }
  
  
}