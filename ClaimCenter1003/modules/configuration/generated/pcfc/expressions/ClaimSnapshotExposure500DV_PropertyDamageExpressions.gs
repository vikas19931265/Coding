package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposure500DV.PropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure500DV_PropertyDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposure500DV.PropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=Property_Incident_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 80, column 38
    function action_27 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, Exposure.FixedPropertyIncident)
    }
    
    // 'action' attribute on TextInput (id=Property_Incident_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 80, column 38
    function action_dest_28 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, Exposure.FixedPropertyIncident)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 115, column 46
    function sortValue_38 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 120, column 46
    function sortValue_39 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 125, column 46
    function sortValue_40 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 131, column 46
    function sortValue_41 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 136, column 46
    function sortValue_42 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 71, column 38
    function valueRoot_25 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=Property_Incident_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 80, column 38
    function valueRoot_30 () : java.lang.Object {
      return Exposure.FixedPropertyIncident
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 39, column 65
    function value_11 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 43, column 63
    function value_13 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.StatLine)
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 50, column 63
    function value_15 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 55, column 38
    function value_17 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 62, column 38
    function value_20 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 66, column 67
    function value_22 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 71, column 38
    function value_24 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Property_Incident_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 80, column 38
    function value_29 () : dynamic.Dynamic {
      return Exposure.FixedPropertyIncident.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 89, column 38
    function value_32 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 99, column 38
    function value_35 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 109, column 41
    function value_58 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 35, column 63
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Coverage)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getRequireValue("Exposure", 0) as dynamic.Dynamic
    }
    
    property set Exposure ($arg :  dynamic.Dynamic) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposure500DV.PropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 115, column 46
    function valueRoot_44 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 115, column 46
    function value_43 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 120, column 46
    function value_46 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 125, column 46
    function value_49 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 131, column 46
    function value_52 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure500DV.PropertyDamage.pcf: line 136, column 46
    function value_55 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}