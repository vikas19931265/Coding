package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactDocumentDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactDocumentDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (documentInfo :  ContactDocumentInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactDocumentDetailsPopup, {documentInfo}, 0)
  }
  
  static function push (documentInfo :  ContactDocumentInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactDocumentDetailsPopup, {documentInfo}, 0).push()
  }
  
  
}