package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyGeneral500DetailPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral500DetailPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 88, column 48
    function sortValue_26 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 93, column 48
    function sortValue_27 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.CoveredPartyType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 117, column 48
    function sortValue_35 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 22, column 40
    function valueRoot_1 () : java.lang.Object {
      return asPolicy()
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 56, column 40
    function valueRoot_18 () : java.lang.Object {
      return asPolicy().Insured
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 62, column 40
    function valueRoot_21 () : java.lang.Object {
      return asPolicy().Insured.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 129, column 40
    function valueRoot_41 () : java.lang.Object {
      return asPolicy().Agent
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 142, column 40
    function valueRoot_47 () : java.lang.Object {
      return asPolicy().Underwriter
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 22, column 40
    function value_0 () : dynamic.Dynamic {
      return asPolicy().PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=CancellationDate_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 39, column 75
    function value_10 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().CancellationDate)
    }
    
    // 'value' attribute on TextInput (id=OrigEffectiveDate_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 43, column 76
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().OrigEffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 48, column 40
    function value_14 () : dynamic.Dynamic {
      return asPolicy().Status
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 56, column 40
    function value_17 () : dynamic.Dynamic {
      return asPolicy().Insured.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 62, column 40
    function value_20 () : dynamic.Dynamic {
      return asPolicy().Insured.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Account_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 67, column 40
    function value_23 () : dynamic.Dynamic {
      return asPolicy().Account
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 27, column 40
    function value_3 () : dynamic.Dynamic {
      return asPolicy().PolicyType
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 82, column 46
    function value_34 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_COVEREDPARTY.Code)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 111, column 46
    function value_39 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_EXCLUDEDPARTY.Code)
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 129, column 40
    function value_40 () : dynamic.Dynamic {
      return asPolicy().Agent.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 134, column 40
    function value_43 () : dynamic.Dynamic {
      return asPolicy().ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 142, column 40
    function value_46 () : dynamic.Dynamic {
      return asPolicy().Underwriter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=UnderwritingCo_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 147, column 40
    function value_49 () : dynamic.Dynamic {
      return asPolicy().UnderwritingCo
    }
    
    // 'value' attribute on TextInput (id=UnderwritingGroup_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 152, column 40
    function value_52 () : dynamic.Dynamic {
      return asPolicy().UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Verified_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 162, column 40
    function value_55 () : dynamic.Dynamic {
      return asPolicy().Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForeignCoverage_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 169, column 40
    function value_58 () : dynamic.Dynamic {
      return asPolicy().ForeignCoverage
    }
    
    // 'value' attribute on TextInput (id=EffectiveDate_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 31, column 72
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().EffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=FinancialInterests_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 174, column 40
    function value_61 () : dynamic.Dynamic {
      return asPolicy().FinancialInterests
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 179, column 40
    function value_64 () : dynamic.Dynamic {
      return asPolicy().Notes
    }
    
    // 'value' attribute on TextInput (id=InsuredSICCode_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 189, column 42
    function value_67 () : dynamic.Dynamic {
      return asPolicy().InsuredSICCode
    }
    
    // 'value' attribute on TextInput (id=PolicyRatingPlan_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 194, column 42
    function value_70 () : dynamic.Dynamic {
      return asPolicy().PolicyRatingPlan
    }
    
    // 'value' attribute on TextInput (id=WCStates_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 199, column 42
    function value_73 () : dynamic.Dynamic {
      return asPolicy().WCStates
    }
    
    // 'value' attribute on TextInput (id=WCOtherStates_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 204, column 42
    function value_76 () : dynamic.Dynamic {
      return asPolicy().WCOtherStates
    }
    
    // 'value' attribute on TextInput (id=ExpirationDate_Input) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 35, column 73
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().ExpirationDate)
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 181, column 85
    function visible_79 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral500LDPExpressionsImpl extends ClaimSnapshotPolicyGeneral500DetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 277, column 54
    function sortValue_101 (CovTerm :  dynamic.Dynamic) : java.lang.Object {
      return CovTerm.Type
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 282, column 54
    function sortValue_102 (CovTerm :  dynamic.Dynamic) : java.lang.Object {
      return CovTerm.Value
    }
    
    // 'value' attribute on TextCell (id=ValueType_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 287, column 54
    function sortValue_103 (CovTerm :  dynamic.Dynamic) : java.lang.Object {
      return CovTerm.ValueType
    }
    
    // 'value' attribute on TextCell (id=AggregationModel_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 292, column 54
    function sortValue_104 (CovTerm :  dynamic.Dynamic) : java.lang.Object {
      return CovTerm.AggregationModel
    }
    
    // 'value' attribute on TextCell (id=RestrictionModel_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 297, column 54
    function sortValue_105 (CovTerm :  dynamic.Dynamic) : java.lang.Object {
      return CovTerm.RestrictionModel
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 228, column 46
    function sortValue_80 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 233, column 46
    function sortValue_81 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 238, column 46
    function sortValue_82 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 243, column 46
    function sortValue_83 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 248, column 46
    function sortValue_84 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Notes
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 222, column 41
    function value_100 () : dynamic.Dynamic {
      return asPolicy().Coverages
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 270, column 49
    function value_121 () : dynamic.Dynamic {
      return SelectedCoverage.CovTerms
    }
    
    // 'visible' attribute on Card (id=CovTermsDetail) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 257, column 81
    function visible_122 () : java.lang.Boolean {
      return SelectedCoverage.CovTerms.length as java.lang.Double > 0
    }
    
    property get SelectedCoverage () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set SelectedCoverage ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPolicyGeneral500DetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 117, column 48
    function valueRoot_37 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 117, column 48
    function value_36 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotPolicyGeneral500LDPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 228, column 46
    function valueRoot_86 () : java.lang.Object {
      return Coverage
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 228, column 46
    function value_85 () : dynamic.Dynamic {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 233, column 46
    function value_88 () : dynamic.Dynamic {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 238, column 46
    function value_91 () : dynamic.Dynamic {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 243, column 46
    function value_94 () : dynamic.Dynamic {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 248, column 46
    function value_97 () : dynamic.Dynamic {
      return Coverage.Notes
    }
    
    property get Coverage () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotPolicyGeneral500LDPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 277, column 54
    function valueRoot_107 () : java.lang.Object {
      return CovTerm
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 277, column 54
    function value_106 () : dynamic.Dynamic {
      return CovTerm.Type
    }
    
    // 'value' attribute on TextCell (id=Value_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 282, column 54
    function value_109 () : dynamic.Dynamic {
      return CovTerm.Value
    }
    
    // 'value' attribute on TextCell (id=ValueType_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 287, column 54
    function value_112 () : dynamic.Dynamic {
      return CovTerm.ValueType
    }
    
    // 'value' attribute on TextCell (id=AggregationModel_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 292, column 54
    function value_115 () : dynamic.Dynamic {
      return CovTerm.AggregationModel
    }
    
    // 'value' attribute on TextCell (id=RestrictionModel_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 297, column 54
    function value_118 () : dynamic.Dynamic {
      return CovTerm.RestrictionModel
    }
    
    property get CovTerm () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyGeneral500DetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 88, column 48
    function valueRoot_29 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 93, column 48
    function valueRoot_32 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 88, column 48
    function value_28 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral500DetailPanelSet.pcf: line 93, column 48
    function value_31 () : dynamic.Dynamic {
      return ClaimContactRole.CoveredPartyType
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}