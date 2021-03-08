package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/documents/DocumentDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DocumentDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (DocumentParam :  Document) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DocumentDetailsPopup, {DocumentParam}, 0)
  }
  
  static function createDestination (DocumentParam :  Document, editMetadata :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DocumentDetailsPopup, {DocumentParam, editMetadata}, 1)
  }
  
  static function push (DocumentParam :  Document) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPopup, {DocumentParam}, 0).push()
  }
  
  static function push (DocumentParam :  Document, editMetadata :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPopup, {DocumentParam, editMetadata}, 1).push()
  }
  
  
}