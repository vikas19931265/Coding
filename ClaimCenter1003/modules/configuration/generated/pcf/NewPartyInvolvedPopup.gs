package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/NewPartyInvolvedPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewPartyInvolvedPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, contactSubtype :  typekey.Contact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewPartyInvolvedPopup, {claim, contactSubtype}, 0)
  }
  
  function pickValueAndCommit (value :  Contact) : void {
    __widgetOf(this, pcf.NewPartyInvolvedPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim, contactSubtype :  typekey.Contact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewPartyInvolvedPopup, {claim, contactSubtype}, 0).push()
  }
  
  
}