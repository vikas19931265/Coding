package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/review/ContactReviewPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ContactReviewPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (review :  Review) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ContactReviewPopup, {review}, 0)
  }
  
  static function push (review :  Review) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ContactReviewPopup, {review}, 0).push()
  }
  
  
}