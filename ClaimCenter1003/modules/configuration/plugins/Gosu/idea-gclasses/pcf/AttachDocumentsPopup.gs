package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/AttachDocumentsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AttachDocumentsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (serviceRequest :  ServiceRequest, visibleToSpecialist :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AttachDocumentsPopup, {serviceRequest, visibleToSpecialist}, 0)
  }
  
  static function push (serviceRequest :  ServiceRequest, visibleToSpecialist :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AttachDocumentsPopup, {serviceRequest, visibleToSpecialist}, 0).push()
  }
  
  
}