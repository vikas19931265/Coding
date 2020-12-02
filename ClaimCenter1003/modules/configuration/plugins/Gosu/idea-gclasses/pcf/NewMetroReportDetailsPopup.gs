package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/metro/NewMetroReportDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewMetroReportDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewMetroReportDetailsPopup, {claim}, 0)
  }
  
  function pickValueAndCommit (value :  entity.MetroReport) : void {
    __widgetOf(this, pcf.NewMetroReportDetailsPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewMetroReportDetailsPopup, {claim}, 0).push()
  }
  
  
}