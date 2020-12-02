package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/wcparms/WCBenefitParameterSetPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class WCBenefitParameterSetPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.WCBenefitParameterSetPopup, {}, 0)
  }
  
  static function createDestination (specificWCBenefitParameterSet :  WCBenefitParameterSet, willStartInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.WCBenefitParameterSetPopup, {specificWCBenefitParameterSet, willStartInEditMode}, 1)
  }
  
  function pickValueAndCommit (value :  WCBenefitParameterSet) : void {
    __widgetOf(this, pcf.WCBenefitParameterSetPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.WCBenefitParameterSetPopup, {}, 0).push()
  }
  
  static function push (specificWCBenefitParameterSet :  WCBenefitParameterSet, willStartInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.WCBenefitParameterSetPopup, {specificWCBenefitParameterSet, willStartInEditMode}, 1).push()
  }
  
  
}