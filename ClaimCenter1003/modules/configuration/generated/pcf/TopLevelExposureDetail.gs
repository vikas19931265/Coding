package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/TopLevelExposureDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TopLevelExposureDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Exposure :  Exposure) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TopLevelExposureDetail, {Exposure}, 0)
  }
  
  static function drilldown (Exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TopLevelExposureDetail, {Exposure}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TopLevelExposureDetail, {Exposure}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TopLevelExposureDetail, {Exposure}, 0).goInMain()
  }
  
  static function printPage (Exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TopLevelExposureDetail, {Exposure}, 0).printPage()
  }
  
  static function push (Exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TopLevelExposureDetail, {Exposure}, 0).push()
  }
  
  
}