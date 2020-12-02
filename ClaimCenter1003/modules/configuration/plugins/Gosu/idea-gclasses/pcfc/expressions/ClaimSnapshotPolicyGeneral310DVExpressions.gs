package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotPolicyGeneral310DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyGeneral310DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotPolicyGeneral310DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 114, column 46
    function sortValue_44 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 119, column 46
    function sortValue_45 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 124, column 46
    function sortValue_46 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 129, column 46
    function sortValue_47 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 134, column 46
    function sortValue_48 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Notes
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 159, column 46
    function sortValue_65 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 164, column 46
    function sortValue_66 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.CoveredPartyType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 188, column 46
    function sortValue_74 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return asPolicy()
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 74, column 38
    function valueRoot_30 () : java.lang.Object {
      return asPolicy().Insured
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 80, column 38
    function valueRoot_33 () : java.lang.Object {
      return asPolicy().Insured.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=PolicyHolder_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 90, column 38
    function valueRoot_39 () : java.lang.Object {
      return asPolicy().PolicyHolder
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 200, column 38
    function valueRoot_80 () : java.lang.Object {
      return asPolicy().Agent
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 213, column 38
    function valueRoot_86 () : java.lang.Object {
      return asPolicy().Underwriter
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return asPolicy().PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=CancellationDate_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 37, column 73
    function value_10 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().CancellationDate)
    }
    
    // 'value' attribute on TextInput (id=FinancialInterests_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 245, column 38
    function value_100 () : dynamic.Dynamic {
      return asPolicy().FinancialInterests
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 250, column 38
    function value_103 () : dynamic.Dynamic {
      return asPolicy().Notes
    }
    
    // 'value' attribute on TextInput (id=InsuredSICCode_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 260, column 40
    function value_106 () : dynamic.Dynamic {
      return asPolicy().InsuredSICCode
    }
    
    // 'value' attribute on TextInput (id=PolicyRatingPlan_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 265, column 40
    function value_109 () : dynamic.Dynamic {
      return asPolicy().PolicyRatingPlan
    }
    
    // 'value' attribute on TextInput (id=WCStates_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 270, column 40
    function value_112 () : dynamic.Dynamic {
      return asPolicy().WCStates
    }
    
    // 'value' attribute on TextInput (id=WCOtherStates_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 275, column 40
    function value_115 () : dynamic.Dynamic {
      return asPolicy().WCOtherStates
    }
    
    // 'value' attribute on TextInput (id=OrigEffectiveDate_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 41, column 74
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().OrigEffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 46, column 38
    function value_14 () : dynamic.Dynamic {
      return asPolicy().Status
    }
    
    // 'value' attribute on TextInput (id=CoverageForm_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 51, column 38
    function value_17 () : dynamic.Dynamic {
      return asPolicy().CoverageForm
    }
    
    // 'value' attribute on TextInput (id=Participation_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 56, column 38
    function value_20 () : dynamic.Dynamic {
      return asPolicy().Participation
    }
    
    // 'value' attribute on TextInput (id=ReportingDate_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 61, column 38
    function value_23 () : dynamic.Dynamic {
      return asPolicy().ReportingDate
    }
    
    // 'value' attribute on TextInput (id=RetroactiveDate_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 66, column 38
    function value_26 () : dynamic.Dynamic {
      return asPolicy().RetroactiveDate
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 74, column 38
    function value_29 () : dynamic.Dynamic {
      return asPolicy().Insured.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 25, column 38
    function value_3 () : dynamic.Dynamic {
      return asPolicy().PolicyType
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 80, column 38
    function value_32 () : dynamic.Dynamic {
      return asPolicy().Insured.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Account_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 85, column 38
    function value_35 () : dynamic.Dynamic {
      return asPolicy().Account
    }
    
    // 'value' attribute on TextInput (id=PolicyHolder_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 90, column 38
    function value_38 () : dynamic.Dynamic {
      return asPolicy().PolicyHolder.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 95, column 38
    function value_41 () : dynamic.Dynamic {
      return asPolicy().DoingBusinessAs
    }
    
    // 'value' attribute on TextInput (id=EffectiveDate_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 29, column 70
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().EffectiveDate)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral310DV.pcf: line 108, column 41
    function value_64 () : dynamic.Dynamic {
      return asPolicy().Coverages
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral310DV.pcf: line 153, column 44
    function value_73 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_COVEREDPARTY.Code)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral310DV.pcf: line 182, column 44
    function value_78 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_EXCLUDEDPARTY.Code)
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 200, column 38
    function value_79 () : dynamic.Dynamic {
      return asPolicy().Agent.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ExpirationDate_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 33, column 71
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().ExpirationDate)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 205, column 38
    function value_82 () : dynamic.Dynamic {
      return asPolicy().ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 213, column 38
    function value_85 () : dynamic.Dynamic {
      return asPolicy().Underwriter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=UnderwritingCo_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 218, column 38
    function value_88 () : dynamic.Dynamic {
      return asPolicy().UnderwritingCo
    }
    
    // 'value' attribute on TextInput (id=UnderwritingGroup_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 223, column 38
    function value_91 () : dynamic.Dynamic {
      return asPolicy().UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Verified_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 233, column 38
    function value_94 () : dynamic.Dynamic {
      return asPolicy().Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForeignCoverage_Input) at ClaimSnapshotPolicyGeneral310DV.pcf: line 240, column 38
    function value_97 () : dynamic.Dynamic {
      return asPolicy().ForeignCoverage
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotPolicyGeneral310DV.pcf: line 252, column 73
    function visible_118 () : java.lang.Boolean {
      return (SnapshotParam).LossType == "Workers' Comp"
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
          function asPolicy() : dynamic.Dynamic {
            return (SnapshotParam).Policy;
          }
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotPolicyGeneral310DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPolicyGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 159, column 46
    function valueRoot_68 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 164, column 46
    function valueRoot_71 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 159, column 46
    function value_67 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 164, column 46
    function value_70 () : dynamic.Dynamic {
      return ClaimContactRole.CoveredPartyType
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotPolicyGeneral310DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotPolicyGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 188, column 46
    function valueRoot_76 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 188, column 46
    function value_75 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotPolicyGeneral310DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 114, column 46
    function valueRoot_50 () : java.lang.Object {
      return Coverage
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 114, column 46
    function value_49 () : dynamic.Dynamic {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 119, column 46
    function value_52 () : dynamic.Dynamic {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 124, column 46
    function value_55 () : dynamic.Dynamic {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 129, column 46
    function value_58 () : dynamic.Dynamic {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral310DV.pcf: line 134, column 46
    function value_61 () : dynamic.Dynamic {
      return Coverage.Notes
    }
    
    property get Coverage () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}