package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/AttachStatementDocumentsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AttachStatementDocumentsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (createdStatement :  ServiceRequestStatement) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AttachStatementDocumentsPopup, {createdStatement}, 0)
  }
  
  static function push (createdStatement :  ServiceRequestStatement) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AttachStatementDocumentsPopup, {createdStatement}, 0).push()
  }
  
  
}