package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/ISOMatchReportDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ISOMatchReportDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (isoMatchReport :  ISOMatchReport) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ISOMatchReportDetailPopup, {isoMatchReport}, 0)
  }
  
  static function push (isoMatchReport :  ISOMatchReport) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ISOMatchReportDetailPopup, {isoMatchReport}, 0).push()
  }
  
  
}