package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/newcheckwizard/AddressBookSearchNewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressBookSearchNewContactPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (searchCriteria :  ContactSearchCriteria, contactSubtype :  typekey.Contact, parentContact :  Contact, claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddressBookSearchNewContactPopup, {searchCriteria, contactSubtype, parentContact, claim}, 0)
  }
  
  function pickValueAndCommit (value :  Contact) : void {
    __widgetOf(this, pcf.AddressBookSearchNewContactPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (searchCriteria :  ContactSearchCriteria, contactSubtype :  typekey.Contact, parentContact :  Contact, claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookSearchNewContactPopup, {searchCriteria, contactSubtype, parentContact, claim}, 0).push()
  }
  
  
}