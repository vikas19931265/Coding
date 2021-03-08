package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure300DV_BodilyInjuryDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 207, column 46
    function sortValue_64 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 212, column 46
    function sortValue_65 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 217, column 46
    function sortValue_66 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 223, column 46
    function sortValue_67 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 228, column 46
    function sortValue_68 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 24, column 38
    function value_0 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LossParty")
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 48, column 38
    function value_10 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "State")
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 266, column 59
    function value_103 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["TotalIncurredNet"]
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 52, column 112
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "CreateTime") )
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 56, column 111
    function value_14 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "CloseDate") )
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 60, column 112
    function value_16 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "ReOpenDate") )
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 65, column 38
    function value_18 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ClosedOutcome")
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 29, column 38
    function value_2 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "PrimaryCoverage")
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 69, column 110
    function value_20 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "StatLine") )
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 76, column 119
    function value_22 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 81, column 38
    function value_24 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ClaimantType")
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 88, column 38
    function value_26 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(SnapshotParam, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 92, column 123
    function value_28 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=ClaimantAddress_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 96, column 147
    function value_30 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"]["PrimaryAddress"] )
    }
    
    // 'value' attribute on TextInput (id=AltContact_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 101, column 110
    function value_32 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPropertyValue(Exposure, "AltContact"))
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 110, column 38
    function value_34 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Severity")
    }
    
    // 'value' attribute on TextInput (id=LeadingInjury_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 115, column 38
    function value_36 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LeadingInjury")
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 120, column 38
    function value_38 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "DetailedInjury")
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 34, column 38
    function value_4 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "CoverageSubType")
    }
    
    // 'value' attribute on TextInput (id=PrimaryBodyPart_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 125, column 38
    function value_40 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "PrimaryBodyPart")
    }
    
    // 'value' attribute on TextInput (id=DetailedBodyPart_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 130, column 38
    function value_42 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "DetailedBodyPart")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 136, column 38
    function value_44 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Description")
    }
    
    // 'value' attribute on TextInput (id=Doctor_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 140, column 106
    function value_46 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPropertyValue(Exposure, "Doctor"))
    }
    
    // 'value' attribute on TextInput (id=MedicalTreatment_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 145, column 38
    function value_48 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "MedicalTreatment")
    }
    
    // 'value' attribute on BooleanRadioInput (id=LostWages_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 152, column 38
    function value_50 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LostWages")
    }
    
    // 'value' attribute on TextInput (id=Impairment_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 157, column 38
    function value_52 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Impairment")
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 162, column 38
    function value_54 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LossEstimate")
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 170, column 38
    function value_56 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Segment")
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 175, column 38
    function value_58 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Strategy")
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 38, column 127
    function value_6 () : java.lang.String {
      return util.Snapshot.getCoverageName(SnapshotParam, util.Snapshot.getPropertyValue(Exposure, "Coverage"))
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 180, column 38
    function value_60 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "JurisdictionState")
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 190, column 38
    function value_62 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "OtherCoverage")
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 43, column 38
    function value_8 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "AssignedUser")["Contact"]
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 201, column 44
    function value_84 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Exposure, "OtherCoverageDet") as Object[]
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 242, column 51
    function value_87 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["RemainingReserves"]
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 248, column 51
    function value_91 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["FuturePayments"]
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 254, column 51
    function value_95 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["TotalPayments"]
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 260, column 53
    function value_99 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "TotalRecoveries")
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 266, column 59
    function visible_102 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Claim)
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 236, column 61
    function visible_85 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 242, column 51
    function visible_86 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 248, column 51
    function visible_90 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 260, column 53
    function visible_98 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
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
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 207, column 46
    function valueRoot_70 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 207, column 46
    function value_69 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 212, column 46
    function value_72 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 217, column 46
    function value_75 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 223, column 46
    function value_78 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure300DV.BodilyInjuryDamage.pcf: line 228, column 46
    function value_81 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}