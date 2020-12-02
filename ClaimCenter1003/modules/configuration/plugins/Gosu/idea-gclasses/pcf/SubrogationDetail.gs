package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SubrogationDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (subrogation :  Subrogation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SubrogationDetail, {subrogation}, 0)
  }
  
  static function drilldown (subrogation :  Subrogation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationDetail, {subrogation}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (subrogation :  Subrogation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationDetail, {subrogation}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (subrogation :  Subrogation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationDetail, {subrogation}, 0).goInMain()
  }
  
  static function printPage (subrogation :  Subrogation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationDetail, {subrogation}, 0).printPage()
  }
  
  static function push (subrogation :  Subrogation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationDetail, {subrogation}, 0).push()
  }
  
  
}