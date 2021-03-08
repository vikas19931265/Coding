package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressBookContactDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddressBookContactDetail, {externalContact}, 0)
  }
  
  static function drilldown (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetail, {externalContact}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetail, {externalContact}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetail, {externalContact}, 0).goInMain()
  }
  
  static function printPage (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetail, {externalContact}, 0).printPage()
  }
  
  static function push (externalContact :  gw.api.contact.ExternalContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddressBookContactDetail, {externalContact}, 0).push()
  }
  
  
}