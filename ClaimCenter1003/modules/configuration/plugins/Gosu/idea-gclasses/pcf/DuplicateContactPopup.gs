package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/DuplicateContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DuplicateContactPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (addressBookMatch :  gw.api.contact.AddressBookMatch, claimContact :  ClaimContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DuplicateContactPopup, {addressBookMatch, claimContact}, 0)
  }
  
  static function createDestination (addressBookMatch :  gw.api.contact.AddressBookMatch, claimContact :  ClaimContact, wizard :  gw.api.claim.NewClaimWizardInfoBase) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DuplicateContactPopup, {addressBookMatch, claimContact, wizard}, 1)
  }
  
  static function push (addressBookMatch :  gw.api.contact.AddressBookMatch, claimContact :  ClaimContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DuplicateContactPopup, {addressBookMatch, claimContact}, 0).push()
  }
  
  static function push (addressBookMatch :  gw.api.contact.AddressBookMatch, claimContact :  ClaimContact, wizard :  gw.api.claim.NewClaimWizardInfoBase) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DuplicateContactPopup, {addressBookMatch, claimContact, wizard}, 1).push()
  }
  
  
}