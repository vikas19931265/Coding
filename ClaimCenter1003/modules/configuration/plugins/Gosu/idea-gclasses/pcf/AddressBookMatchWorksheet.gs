package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookMatchWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressBookMatchWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (addressBookMatch :  gw.api.contact.AddressBookMatch) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddressBookMatchWorksheet, {addressBookMatch}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (addressBookMatch :  gw.api.contact.AddressBookMatch) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookMatchWorksheet, {addressBookMatch}, 0).goInWorkspace()
  }
  
  static function push (addressBookMatch :  gw.api.contact.AddressBookMatch) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookMatchWorksheet, {addressBookMatch}, 0).push()
  }
  
  
}