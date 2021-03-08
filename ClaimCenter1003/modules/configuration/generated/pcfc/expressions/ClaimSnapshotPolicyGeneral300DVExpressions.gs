package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotPolicyGeneral300DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyGeneral300DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotPolicyGeneral300DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 105, column 46
    function sortValue_37 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 110, column 46
    function sortValue_38 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 115, column 46
    function sortValue_39 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 120, column 46
    function sortValue_40 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 125, column 46
    function sortValue_41 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Notes
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 149, column 74
    function sortValue_58 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ClaimContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 172, column 74
    function sortValue_62 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ClaimContact.Contact)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return asPolicy()
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return asPolicy().PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=CancellationDate_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 37, column 73
    function value_10 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().CancellationDate)
    }
    
    // 'value' attribute on TextInput (id=WCOtherStates_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 257, column 40
    function value_100 () : dynamic.Dynamic {
      return asPolicy().WCOtherStates
    }
    
    // 'value' attribute on TextInput (id=OrigEffectiveDate_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 41, column 74
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().OrigEffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 46, column 38
    function value_14 () : dynamic.Dynamic {
      return asPolicy().Status
    }
    
    // 'value' attribute on TextInput (id=CoverageForm_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 51, column 38
    function value_17 () : dynamic.Dynamic {
      return asPolicy().CoverageForm
    }
    
    // 'value' attribute on TextInput (id=Participation_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 56, column 38
    function value_20 () : dynamic.Dynamic {
      return asPolicy().Participation
    }
    
    // 'value' attribute on TextInput (id=ReportingDate_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 61, column 38
    function value_23 () : dynamic.Dynamic {
      return asPolicy().ReportingDate
    }
    
    // 'value' attribute on TextInput (id=RetroactiveDate_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 66, column 38
    function value_26 () : dynamic.Dynamic {
      return asPolicy().RetroactiveDate
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 73, column 129
    function value_29 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPolicyClaimContact(SnapshotParam, asPolicy(), "insured"))
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 25, column 38
    function value_3 () : dynamic.Dynamic {
      return asPolicy().PolicyType
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 78, column 157
    function value_31 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPolicyClaimContact(SnapshotParam, asPolicy(), "insured")["PrimaryAddress"])
    }
    
    // 'value' attribute on TextInput (id=PolicyHolder_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 82, column 134
    function value_33 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPolicyClaimContact(SnapshotParam, asPolicy(), "policyholder"))
    }
    
    // 'value' attribute on TextInput (id=DoingBusinessAs_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 86, column 137
    function value_35 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPolicyClaimContact(SnapshotParam, asPolicy(), "doingbusinessas"))
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral300DV.pcf: line 99, column 41
    function value_57 () : dynamic.Dynamic {
      return asPolicy().Coverages
    }
    
    // 'value' attribute on TextInput (id=EffectiveDate_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 29, column 70
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().EffectiveDate)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral300DV.pcf: line 144, column 44
    function value_61 () : java.lang.Object[] {
      return util.Snapshot.getCoveredParties(SnapshotParam, asPolicy())
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral300DV.pcf: line 167, column 44
    function value_65 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactsByOwnerAndRole(SnapshotParam, "Policy", asPolicy(), "excludedparty")
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 183, column 127
    function value_66 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPolicyClaimContact(SnapshotParam, asPolicy(), "agent"))
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 188, column 38
    function value_68 () : dynamic.Dynamic {
      return asPolicy().ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 195, column 133
    function value_71 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPolicyClaimContact(SnapshotParam, asPolicy(), "underwriter"))
    }
    
    // 'value' attribute on TextInput (id=UnderwritingCo_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 200, column 38
    function value_73 () : dynamic.Dynamic {
      return asPolicy().UnderwritingCo
    }
    
    // 'value' attribute on TextInput (id=UnderwritingGroup_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 205, column 38
    function value_76 () : dynamic.Dynamic {
      return asPolicy().UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Verified_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 215, column 38
    function value_79 () : dynamic.Dynamic {
      return asPolicy().Verified
    }
    
    // 'value' attribute on TextInput (id=ExpirationDate_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 33, column 71
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().ExpirationDate)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForeignCoverage_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 222, column 38
    function value_82 () : dynamic.Dynamic {
      return asPolicy().ForeignCoverage
    }
    
    // 'value' attribute on TextInput (id=FinancialInterests_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 227, column 38
    function value_85 () : dynamic.Dynamic {
      return asPolicy().FinancialInterests
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 232, column 38
    function value_88 () : dynamic.Dynamic {
      return asPolicy().Notes
    }
    
    // 'value' attribute on TextInput (id=InsuredSICCode_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 242, column 40
    function value_91 () : dynamic.Dynamic {
      return asPolicy().InsuredSICCode
    }
    
    // 'value' attribute on TextInput (id=PolicyRatingPlan_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 247, column 40
    function value_94 () : dynamic.Dynamic {
      return asPolicy().PolicyRatingPlan
    }
    
    // 'value' attribute on TextInput (id=WCStates_Input) at ClaimSnapshotPolicyGeneral300DV.pcf: line 252, column 40
    function value_97 () : dynamic.Dynamic {
      return asPolicy().WCStates
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotPolicyGeneral300DV.pcf: line 234, column 73
    function visible_103 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotPolicyGeneral300DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPolicyGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 149, column 74
    function value_59 () : java.lang.String {
      return util.Snapshot.renderValue(ClaimContact.Contact)
    }
    
    property get ClaimContact () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotPolicyGeneral300DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotPolicyGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 172, column 74
    function value_63 () : java.lang.String {
      return util.Snapshot.renderValue(ClaimContact.Contact)
    }
    
    property get ClaimContact () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotPolicyGeneral300DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 105, column 46
    function valueRoot_43 () : java.lang.Object {
      return Coverage
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 105, column 46
    function value_42 () : dynamic.Dynamic {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 110, column 46
    function value_45 () : dynamic.Dynamic {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 115, column 46
    function value_48 () : dynamic.Dynamic {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 120, column 46
    function value_51 () : dynamic.Dynamic {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral300DV.pcf: line 125, column 46
    function value_54 () : dynamic.Dynamic {
      return Coverage.Notes
    }
    
    property get Coverage () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}