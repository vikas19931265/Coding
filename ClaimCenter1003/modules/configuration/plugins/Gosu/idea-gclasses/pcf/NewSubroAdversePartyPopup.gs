package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/NewSubroAdversePartyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewSubroAdversePartyPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewSubroAdversePartyPopup, {claim}, 0)
  }
  
  function pickValueAndCommit (value :  entity.SubroAdverseParty) : void {
    __widgetOf(this, pcf.NewSubroAdversePartyPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewSubroAdversePartyPopup, {claim}, 0).push()
  }
  
  
}