package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/AddSelectedDuplicatePartiesInvolvedPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddSelectedDuplicatePartiesInvolvedPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, tempContact :  gw.api.contact.TemporaryContact, roles :  gw.api.contact.ClaimContactRoleWrapper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddSelectedDuplicatePartiesInvolvedPopup, {claim, tempContact, roles}, 0)
  }
  
  function pickValueAndCommit (value :  Contact) : void {
    __widgetOf(this, pcf.AddSelectedDuplicatePartiesInvolvedPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim, tempContact :  gw.api.contact.TemporaryContact, roles :  gw.api.contact.ClaimContactRoleWrapper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddSelectedDuplicatePartiesInvolvedPopup, {claim, tempContact, roles}, 0).push()
  }
  
  
}