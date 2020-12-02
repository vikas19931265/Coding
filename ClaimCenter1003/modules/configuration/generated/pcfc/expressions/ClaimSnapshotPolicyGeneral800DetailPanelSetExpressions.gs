package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyGeneral800DetailPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral800DetailPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 99, column 48
    function sortValue_34 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 104, column 48
    function sortValue_35 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.CoveredPartyType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 128, column 48
    function sortValue_43 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 22, column 40
    function valueRoot_1 () : java.lang.Object {
      return asPolicy()
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 62, column 40
    function valueRoot_23 () : java.lang.Object {
      return asPolicy().Insured
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 68, column 40
    function valueRoot_26 () : java.lang.Object {
      return asPolicy().Insured.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 140, column 40
    function valueRoot_49 () : java.lang.Object {
      return asPolicy().Agent
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 153, column 40
    function valueRoot_55 () : java.lang.Object {
      return asPolicy().Underwriter
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 22, column 40
    function value_0 () : dynamic.Dynamic {
      return asPolicy().PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=CancellationDate_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 39, column 75
    function value_10 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().CancellationDate)
    }
    
    // 'value' attribute on TextInput (id=OrigEffectiveDate_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 43, column 76
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().OrigEffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=Status_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 48, column 40
    function value_14 () : dynamic.Dynamic {
      return asPolicy().Status
    }
    
    // 'value' attribute on TextInput (id=Currency_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 54, column 69
    function value_18 () : dynamic.Dynamic {
      return asPolicy().Currency
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 62, column 40
    function value_22 () : dynamic.Dynamic {
      return asPolicy().Insured.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=Address_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 68, column 40
    function value_25 () : dynamic.Dynamic {
      return asPolicy().Insured.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Account_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 73, column 40
    function value_28 () : dynamic.Dynamic {
      return asPolicy().AccountNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyType_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 27, column 40
    function value_3 () : dynamic.Dynamic {
      return asPolicy().PolicyType
    }
    
    // 'value' attribute on TextInput (id=CustomerServiceTier_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 78, column 40
    function value_31 () : dynamic.Dynamic {
      return asPolicy().CustomerServiceTier
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 93, column 46
    function value_42 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_COVEREDPARTY.Code)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 122, column 46
    function value_47 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(SnapshotParam, ContactRole.TC_EXCLUDEDPARTY.Code)
    }
    
    // 'value' attribute on TextInput (id=Agent_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 140, column 40
    function value_48 () : dynamic.Dynamic {
      return asPolicy().Agent.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 145, column 40
    function value_51 () : dynamic.Dynamic {
      return asPolicy().ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Underwriter_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 153, column 40
    function value_54 () : dynamic.Dynamic {
      return asPolicy().Underwriter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=UnderwritingCo_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 158, column 40
    function value_57 () : dynamic.Dynamic {
      return asPolicy().UnderwritingCo
    }
    
    // 'value' attribute on TextInput (id=EffectiveDate_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 31, column 72
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().EffectiveDate)
    }
    
    // 'value' attribute on TextInput (id=UnderwritingGroup_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 163, column 40
    function value_60 () : dynamic.Dynamic {
      return asPolicy().UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Verified_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 173, column 40
    function value_63 () : dynamic.Dynamic {
      return asPolicy().Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForeignCoverage_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 180, column 40
    function value_66 () : dynamic.Dynamic {
      return asPolicy().ForeignCoverage
    }
    
    // 'value' attribute on TextInput (id=FinancialInterests_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 185, column 40
    function value_69 () : dynamic.Dynamic {
      return asPolicy().FinancialInterests
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 190, column 40
    function value_72 () : dynamic.Dynamic {
      return asPolicy().Notes
    }
    
    // 'value' attribute on TextInput (id=InsuredSICCode_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 200, column 42
    function value_75 () : dynamic.Dynamic {
      return asPolicy().InsuredSICCode
    }
    
    // 'value' attribute on TextInput (id=PolicyRatingPlan_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 205, column 42
    function value_78 () : dynamic.Dynamic {
      return asPolicy().PolicyRatingPlan
    }
    
    // 'value' attribute on TextInput (id=ExpirationDate_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 35, column 73
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(asPolicy().ExpirationDate)
    }
    
    // 'value' attribute on TextInput (id=WCStates_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 210, column 42
    function value_81 () : dynamic.Dynamic {
      return asPolicy().WCStates
    }
    
    // 'value' attribute on TextInput (id=WCOtherStates_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 215, column 42
    function value_84 () : dynamic.Dynamic {
      return asPolicy().WCOtherStates
    }
    
    // 'visible' attribute on TextInput (id=Currency_Input) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 54, column 69
    function visible_17 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 192, column 85
    function visible_87 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyGeneral800LDPExpressionsImpl extends ClaimSnapshotPolicyGeneral800DetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function def_onEnter_115 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_700) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function def_onEnter_117 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_800) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function def_onEnter_119 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_default) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function def_refreshVariables_116 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_700) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function def_refreshVariables_118 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_800) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function def_refreshVariables_120 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_default) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 273, column 21
    function mode_121 () : java.lang.Object {
      return 800
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 239, column 46
    function sortValue_88 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 246, column 71
    function sortValue_89 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Currency
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 251, column 46
    function sortValue_91 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 256, column 46
    function sortValue_92 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 261, column 46
    function sortValue_93 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 266, column 46
    function sortValue_94 (Coverage :  dynamic.Dynamic) : java.lang.Object {
      return Coverage.Notes
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 233, column 41
    function value_114 () : dynamic.Dynamic {
      return asPolicy().Coverages
    }
    
    // 'visible' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 246, column 71
    function visible_90 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    property get SelectedCoverage () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set SelectedCoverage ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPolicyGeneral800DetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 128, column 48
    function valueRoot_45 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 128, column 48
    function value_44 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotPolicyGeneral800LDPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 239, column 46
    function valueRoot_96 () : java.lang.Object {
      return Coverage
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 251, column 46
    function value_102 () : dynamic.Dynamic {
      return Coverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 256, column 46
    function value_105 () : dynamic.Dynamic {
      return Coverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 261, column 46
    function value_108 () : dynamic.Dynamic {
      return Coverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 266, column 46
    function value_111 () : dynamic.Dynamic {
      return Coverage.Notes
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 239, column 46
    function value_95 () : dynamic.Dynamic {
      return Coverage.Type
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 246, column 71
    function value_98 () : dynamic.Dynamic {
      return Coverage.Currency
    }
    
    // 'visible' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 246, column 71
    function visible_100 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    property get Coverage () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyGeneral800DetailPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 99, column 48
    function valueRoot_37 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 104, column 48
    function valueRoot_40 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 99, column 48
    function value_36 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotPolicyGeneral800DetailPanelSet.pcf: line 104, column 48
    function value_39 () : dynamic.Dynamic {
      return ClaimContactRole.CoveredPartyType
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}