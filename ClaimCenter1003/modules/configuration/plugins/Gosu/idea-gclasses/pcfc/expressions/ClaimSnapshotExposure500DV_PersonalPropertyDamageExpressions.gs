package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure500DV_PersonalPropertyDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 179, column 46
    function sortValue_69 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 184, column 46
    function sortValue_70 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 189, column 46
    function sortValue_71 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 195, column 46
    function sortValue_72 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 200, column 46
    function sortValue_73 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 71, column 38
    function valueRoot_25 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextAreaInput (id=DamageDescription_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 85, column 38
    function valueRoot_31 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 100, column 38
    function valueRoot_37 () : java.lang.Object {
      return Exposure.MobilePropertyIncident
    }
    
    // 'value' attribute on TextInput (id=LocationStreet_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 110, column 38
    function valueRoot_43 () : java.lang.Object {
      return Exposure.MobilePropertyIncident.LocationAddress
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 39, column 65
    function value_11 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 43, column 63
    function value_13 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.StatLine)
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 50, column 63
    function value_15 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 55, column 38
    function value_17 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 62, column 38
    function value_20 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 66, column 67
    function value_22 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 71, column 38
    function value_24 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PropertyDesc_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 79, column 38
    function value_27 () : dynamic.Dynamic {
      return Exposure.PropertyDesc
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextAreaInput (id=DamageDescription_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 85, column 38
    function value_30 () : dynamic.Dynamic {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 90, column 38
    function value_33 () : dynamic.Dynamic {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 100, column 38
    function value_36 () : dynamic.Dynamic {
      return Exposure.MobilePropertyIncident.InspectionRequired
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 105, column 38
    function value_39 () : dynamic.Dynamic {
      return Exposure.WhenToView
    }
    
    // 'value' attribute on TextInput (id=LocationStreet_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 110, column 38
    function value_42 () : dynamic.Dynamic {
      return Exposure.MobilePropertyIncident.LocationAddress.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=LocationCity_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 115, column 38
    function value_45 () : dynamic.Dynamic {
      return Exposure.MobilePropertyIncident.LocationAddress.City
    }
    
    // 'value' attribute on TextInput (id=LocationState_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 120, column 38
    function value_48 () : dynamic.Dynamic {
      return Exposure.MobilePropertyIncident.LocationAddress.State
    }
    
    // 'value' attribute on TextInput (id=LocationZip_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 125, column 38
    function value_51 () : dynamic.Dynamic {
      return Exposure.MobilePropertyIncident.LocationAddress.PostalCode
    }
    
    // 'value' attribute on TextInput (id=EstimatesReceived_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 133, column 38
    function value_54 () : dynamic.Dynamic {
      return Exposure.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstRepairCost_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 138, column 38
    function value_57 () : dynamic.Dynamic {
      return Exposure.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=EstRepairTime_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 143, column 38
    function value_60 () : dynamic.Dynamic {
      return Exposure.EstRepairTime
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 153, column 38
    function value_63 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 163, column 38
    function value_66 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 173, column 41
    function value_89 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 35, column 63
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 179, column 46
    function valueRoot_75 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 179, column 46
    function value_74 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 184, column 46
    function value_77 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 189, column 46
    function value_80 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 195, column 46
    function value_83 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure500DV.PersonalPropertyDamage.pcf: line 200, column 46
    function value_86 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}