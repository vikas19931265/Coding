package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimAssociationSearchPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimAssociationSearchPopup, {Claim}, 0)
  }
  
  function pickValueAndCommit (value :  ClaimAssociation) : void {
    __widgetOf(this, pcf.ClaimAssociationSearchPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationSearchPopup, {Claim}, 0).push()
  }
  
  
}