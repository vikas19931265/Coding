package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workload/NewWorkloadClassificationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewWorkloadClassificationPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (entityType :  Type) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewWorkloadClassificationPopup, {entityType}, 0)
  }
  
  static function push (entityType :  Type) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewWorkloadClassificationPopup, {entityType}, 0).push()
  }
  
  
}