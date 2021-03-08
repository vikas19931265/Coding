package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/documents/print/DocumentDetailsPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DocumentDetailsPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, DocumentParam :  Document) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DocumentDetailsPrint, {Claim, DocumentParam}, 0)
  }
  
  static function drilldown (Claim :  Claim, DocumentParam :  Document) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPrint, {Claim, DocumentParam}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, DocumentParam :  Document) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPrint, {Claim, DocumentParam}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, DocumentParam :  Document) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPrint, {Claim, DocumentParam}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, DocumentParam :  Document) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPrint, {Claim, DocumentParam}, 0).printPage()
  }
  
  static function push (Claim :  Claim, DocumentParam :  Document) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DocumentDetailsPrint, {Claim, DocumentParam}, 0).push()
  }
  
  
}