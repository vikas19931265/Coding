package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotPolicyGeneral400DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyGeneral400DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotPolicyGeneral400DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral400DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 84, column 46
    function sortValue_26 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 89, column 46
    function sortValue_27 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 94, column 46
    function sortValue_28 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 99, column 46
    function sortValue_29 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 104, column 46
    function sortValue_30 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Notes
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 130, column 46
    function sortValue_47 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 135, column 46
    function sortValue_48 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.CoveredPartyType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 159, column 46
    function sortValue_56 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return asPolicy()
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 54, column 38
    function valueRoot_18 () : java.lang.Object {
      return asPolicy().Insured
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 60, column 38
    function valueRoot_21 () : java.lang.Object {
      return asPolicy().Insured.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 171, column 38
    function valueRoot_62 () : java.lang.Object {
      return asPolicy().Agent
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 184, column 38
    function valueRoot_68 () : java.lang.Object {
      return asPolicy().Underwriter
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return asPolicy().PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=CancellationDate_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 37, column 73
    function value_10 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().CancellationDate)
    }
    
    // 'value' attribute on TextInput (id=OrigEffectiveDate_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 41, column 74
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().OrigEffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 46, column 38
    function value_14 () : dynamic.Dynamic {
      return asPolicy().Status
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 54, column 38
    function value_17 () : dynamic.Dynamic {
      return asPolicy().Insured.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 60, column 38
    function value_20 () : dynamic.Dynamic {
      return asPolicy().Insured.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Account_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 65, column 38
    function value_23 () : dynamic.Dynamic {
      return asPolicy().Account
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 25, column 38
    function value_3 () : dynamic.Dynamic {
      return asPolicy().PolicyType
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral400DV.pcf: line 78, column 41
    function value_46 () : dynamic.Dynamic {
      return asPolicy().Coverages
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral400DV.pcf: line 124, column 44
    function value_55 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_COVEREDPARTY.Code)
    }
    
    // 'value' attribute on TextInput (id=EffectiveDate_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 29, column 70
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().EffectiveDate)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral400DV.pcf: line 153, column 44
    function value_60 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_EXCLUDEDPARTY.Code)
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 171, column 38
    function value_61 () : dynamic.Dynamic {
      return asPolicy().Agent.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 176, column 38
    function value_64 () : dynamic.Dynamic {
      return asPolicy().ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 184, column 38
    function value_67 () : dynamic.Dynamic {
      return asPolicy().Underwriter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=UnderwritingCo_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 189, column 38
    function value_70 () : dynamic.Dynamic {
      return asPolicy().UnderwritingCo
    }
    
    // 'value' attribute on TextInput (id=UnderwritingGroup_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 194, column 38
    function value_73 () : dynamic.Dynamic {
      return asPolicy().UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Verified_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 204, column 38
    function value_76 () : dynamic.Dynamic {
      return asPolicy().Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForeignCoverage_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 211, column 38
    function value_79 () : dynamic.Dynamic {
      return asPolicy().ForeignCoverage
    }
    
    // 'value' attribute on TextInput (id=ExpirationDate_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 33, column 71
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().ExpirationDate)
    }
    
    // 'value' attribute on TextInput (id=FinancialInterests_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 216, column 38
    function value_82 () : dynamic.Dynamic {
      return asPolicy().FinancialInterests
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 221, column 38
    function value_85 () : dynamic.Dynamic {
      return asPolicy().Notes
    }
    
    // 'value' attribute on TextInput (id=InsuredSICCode_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 231, column 40
    function value_88 () : dynamic.Dynamic {
      return asPolicy().InsuredSICCode
    }
    
    // 'value' attribute on TextInput (id=PolicyRatingPlan_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 236, column 40
    function value_91 () : dynamic.Dynamic {
      return asPolicy().PolicyRatingPlan
    }
    
    // 'value' attribute on TextInput (id=WCStates_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 241, column 40
    function value_94 () : dynamic.Dynamic {
      return asPolicy().WCStates
    }
    
    // 'value' attribute on TextInput (id=WCOtherStates_Input) at ClaimSnapshotPolicyGeneral400DV.pcf: line 246, column 40
    function value_97 () : dynamic.Dynamic {
      return asPolicy().WCOtherStates
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotPolicyGeneral400DV.pcf: line 223, column 83
    function visible_100 () : java.lang.Boolean {
      return "Workers' Comp" == (SnapshotParam).LossType as String
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotPolicyGeneral400DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPolicyGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 130, column 46
    function valueRoot_50 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 135, column 46
    function valueRoot_53 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 130, column 46
    function value_49 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 135, column 46
    function value_52 () : dynamic.Dynamic {
      return ClaimContactRole.CoveredPartyType
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotPolicyGeneral400DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotPolicyGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 159, column 46
    function valueRoot_58 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 159, column 46
    function value_57 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotPolicyGeneral400DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 84, column 46
    function valueRoot_32 () : java.lang.Object {
      return Coverage
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 84, column 46
    function value_31 () : dynamic.Dynamic {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 89, column 46
    function value_34 () : dynamic.Dynamic {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 94, column 46
    function value_37 () : dynamic.Dynamic {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 99, column 46
    function value_40 () : dynamic.Dynamic {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral400DV.pcf: line 104, column 46
    function value_43 () : dynamic.Dynamic {
      return Coverage.Notes
    }
    
    property get Coverage () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}