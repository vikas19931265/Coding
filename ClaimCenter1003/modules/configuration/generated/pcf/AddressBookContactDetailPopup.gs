package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressBookContactDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddressBookContactDetailPopup, {externalContact}, 0)
  }
  
  static function createDestination (externalContact :  gw.api.contact.ExternalContact, allowEdit :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddressBookContactDetailPopup, {externalContact, allowEdit}, 1)
  }
  
  function pickValueAndCommit (value :  Contact) : void {
    __widgetOf(this, pcf.AddressBookContactDetailPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetailPopup, {externalContact}, 0).push()
  }
  
  static function push (externalContact :  gw.api.contact.ExternalContact, allowEdit :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetailPopup, {externalContact, allowEdit}, 1).push()
  }
  
  
}