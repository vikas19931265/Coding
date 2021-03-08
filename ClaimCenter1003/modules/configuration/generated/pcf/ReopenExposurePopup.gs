package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/ReopenExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ReopenExposurePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (exposureToReopen :  Exposure) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ReopenExposurePopup, {exposureToReopen}, 0)
  }
  
  static function push (exposureToReopen :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ReopenExposurePopup, {exposureToReopen}, 0).push()
  }
  
  
}