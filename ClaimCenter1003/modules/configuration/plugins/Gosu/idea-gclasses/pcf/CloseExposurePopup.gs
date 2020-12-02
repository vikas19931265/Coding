package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/CloseExposurePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CloseExposurePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (exposure :  Exposure) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CloseExposurePopup, {exposure}, 0)
  }
  
  static function push (exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CloseExposurePopup, {exposure}, 0).push()
  }
  
  
}