package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workload/WorkloadClassificationDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class WorkloadClassificationDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (classification :  entity.WorkloadClassification) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.WorkloadClassificationDetailPopup, {classification}, 0)
  }
  
  static function drilldown (classification :  entity.WorkloadClassification) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WorkloadClassificationDetailPopup, {classification}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (classification :  entity.WorkloadClassification) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WorkloadClassificationDetailPopup, {classification}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (classification :  entity.WorkloadClassification) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WorkloadClassificationDetailPopup, {classification}, 0).goInMain()
  }
  
  static function printPage (classification :  entity.WorkloadClassification) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WorkloadClassificationDetailPopup, {classification}, 0).printPage()
  }
  
  static function push (classification :  entity.WorkloadClassification) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WorkloadClassificationDetailPopup, {classification}, 0).push()
  }
  
  
}