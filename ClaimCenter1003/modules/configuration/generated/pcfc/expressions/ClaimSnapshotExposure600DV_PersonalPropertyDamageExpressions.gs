package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure600DV_PersonalPropertyDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure600DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 108, column 27
    function def_onEnter_42 (def :  pcf.AddressSnapshot600InputSet) : void {
      def.onEnter(Exposure.MobilePropertyIncident.LocationAddress, null)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 108, column 27
    function def_refreshVariables_43 (def :  pcf.AddressSnapshot600InputSet) : void {
      def.refreshVariables(Exposure.MobilePropertyIncident.LocationAddress, null)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 162, column 46
    function sortValue_59 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 167, column 46
    function sortValue_60 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 172, column 46
    function sortValue_61 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 178, column 46
    function sortValue_62 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 183, column 46
    function sortValue_63 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 71, column 38
    function valueRoot_25 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextAreaInput (id=DamageDescription_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 85, column 38
    function valueRoot_31 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 100, column 38
    function valueRoot_37 () : java.lang.Object {
      return Exposure.MobilePropertyIncident
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 39, column 65
    function value_11 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 43, column 63
    function value_13 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.StatLine)
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 50, column 63
    function value_15 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 55, column 38
    function value_17 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 62, column 38
    function value_20 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 66, column 67
    function value_22 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 71, column 38
    function value_24 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PropertyDesc_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 79, column 38
    function value_27 () : dynamic.Dynamic {
      return Exposure.PropertyDesc
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextAreaInput (id=DamageDescription_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 85, column 38
    function value_30 () : dynamic.Dynamic {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 90, column 38
    function value_33 () : dynamic.Dynamic {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 100, column 38
    function value_36 () : dynamic.Dynamic {
      return Exposure.MobilePropertyIncident.InspectionRequired
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 105, column 38
    function value_39 () : dynamic.Dynamic {
      return Exposure.WhenToView
    }
    
    // 'value' attribute on TextInput (id=EstimatesReceived_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 116, column 38
    function value_44 () : dynamic.Dynamic {
      return Exposure.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstRepairCost_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 121, column 38
    function value_47 () : dynamic.Dynamic {
      return Exposure.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstRepairTime_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 126, column 38
    function value_50 () : dynamic.Dynamic {
      return Exposure.EstRepairTime
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 136, column 38
    function value_53 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 146, column 38
    function value_56 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 156, column 41
    function value_79 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 35, column 63
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure600DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 162, column 46
    function valueRoot_65 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 162, column 46
    function value_64 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 167, column 46
    function value_67 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 172, column 46
    function value_70 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 178, column 46
    function value_73 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure600DV.PersonalPropertyDamage.pcf: line 183, column 46
    function value_76 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}