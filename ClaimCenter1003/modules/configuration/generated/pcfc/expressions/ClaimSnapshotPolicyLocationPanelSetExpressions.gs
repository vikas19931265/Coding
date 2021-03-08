package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.cc.policy.entity.*
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyLocationPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyLocationLDPExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyLocationPanelSet.pcf: line 254, column 43
    function def_onEnter_115 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_700) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyLocationPanelSet.pcf: line 254, column 43
    function def_onEnter_117 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_800) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyLocationPanelSet.pcf: line 254, column 43
    function def_onEnter_119 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_default) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyLocationPanelSet.pcf: line 254, column 43
    function def_refreshVariables_116 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_700) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyLocationPanelSet.pcf: line 254, column 43
    function def_refreshVariables_118 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_800) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyLocationPanelSet.pcf: line 254, column 43
    function def_refreshVariables_120 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_default) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'label' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 208, column 77
    function label_72 () : java.lang.Object {
      return DisplayKey.get("Web.ClaimSnapshotPolicyLocationDV.Currency")
    }
    
    // 'value' attribute on TextCell (id=CoverageType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 201, column 52
    function sortValue_71 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.Type
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 208, column 77
    function sortValue_73 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.Currency
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 215, column 94
    function sortValue_75 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 221, column 52
    function sortValue_77 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 227, column 52
    function sortValue_78 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 232, column 52
    function sortValue_79 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.Coinsurance
    }
    
    // 'value' attribute on TextCell (id=CoverageBasis_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 237, column 52
    function sortValue_80 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.CoverageBasis
    }
    
    // 'value' attribute on TextCell (id=LimitsIndicator_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 242, column 52
    function sortValue_81 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=CoverageNotes_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 247, column 52
    function sortValue_82 (PropertyCoverage :  dynamic.Dynamic) : java.lang.Object {
      return PropertyCoverage.Notes
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyLocationPanelSet.pcf: line 194, column 47
    function value_114 () : dynamic.Dynamic {
      return riskUnitSelection.Coverages
    }
    
    // 'visible' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 208, column 77
    function visible_74 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 215, column 94
    function visible_76 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(riskUnitSelection)
    }
    
    property get SelectedCoverage () : dynamic.Dynamic {
      return getCurrentSelection(2) as dynamic.Dynamic
    }
    
    property set SelectedCoverage ($arg :  dynamic.Dynamic) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyLocationPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get PolicyLocation () : dynamic.Dynamic {
      return getRequireValue("PolicyLocation", 0) as dynamic.Dynamic
    }
    
    property set PolicyLocation ($arg :  dynamic.Dynamic) {
      setRequireValue("PolicyLocation", 0, $arg)
    }
    
    
          function getRULienHolders(riskUnit: dynamic.Dynamic): dynamic.Dynamic {
            var list = new java.util.ArrayList()
            for (lienHolder in (riskUnit.Lienholders)) {
              list.add(lienHolder)
            }
            return list.toArray()
          }
    
          function getClassCodeAsArray(riskUnit: dynamic.Dynamic): dynamic.Dynamic {
            if (riskUnit.ClassCode != null) {
              return new Object[]{riskUnit.ClassCode}
            } else {
              return new Object[]{}
            }
          }
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 135, column 86
    function value_53 () : java.lang.String {
      return util.Snapshot.renderValue(PropertyOwner.Lienholder)
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 139, column 85
    function value_55 () : java.lang.String {
      return util.Snapshot.renderValue(PropertyOwner.OwnerType)
    }
    
    property get PropertyOwner () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotPolicyLocationLDPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 208, column 77
    function label_86 () : java.lang.Object {
      return DisplayKey.get("Web.ClaimSnapshotPolicyLocationDV.Currency")
    }
    
    // 'value' attribute on TextCell (id=CoverageType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 201, column 52
    function valueRoot_84 () : java.lang.Object {
      return PropertyCoverage
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 232, column 52
    function value_102 () : dynamic.Dynamic {
      return PropertyCoverage.Coinsurance
    }
    
    // 'value' attribute on TextCell (id=CoverageBasis_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 237, column 52
    function value_105 () : dynamic.Dynamic {
      return PropertyCoverage.CoverageBasis
    }
    
    // 'value' attribute on TextCell (id=LimitsIndicator_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 242, column 52
    function value_108 () : dynamic.Dynamic {
      return PropertyCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=CoverageNotes_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 247, column 52
    function value_111 () : dynamic.Dynamic {
      return PropertyCoverage.Notes
    }
    
    // 'value' attribute on TextCell (id=CoverageType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 201, column 52
    function value_83 () : dynamic.Dynamic {
      return PropertyCoverage.Type
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 208, column 77
    function value_87 () : dynamic.Dynamic {
      return PropertyCoverage.Currency
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 215, column 94
    function value_92 () : dynamic.Dynamic {
      return PropertyCoverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 221, column 52
    function value_96 () : dynamic.Dynamic {
      return PropertyCoverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 227, column 52
    function value_99 () : dynamic.Dynamic {
      return PropertyCoverage.IncidentLimit
    }
    
    // 'visible' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 208, column 77
    function visible_89 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 215, column 94
    function visible_94 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(riskUnitSelection)
    }
    
    property get PropertyCoverage () : dynamic.Dynamic {
      return getIteratedValue(3) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 50, column 81
    function valueRoot_17 () : java.lang.Object {
      return riskUnitRow.Building
    }
    
    // 'value' attribute on TextCell (id=RUNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 34, column 46
    function valueRoot_8 () : java.lang.Object {
      return riskUnitRow
    }
    
    // 'value' attribute on TextCell (id=RUDescription_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 39, column 46
    function value_10 () : dynamic.Dynamic {
      return riskUnitRow.Description
    }
    
    // 'value' attribute on TextCell (id=RUType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 44, column 46
    function value_13 () : dynamic.Dynamic {
      return riskUnitRow.Subtype
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 50, column 81
    function value_16 () : dynamic.Dynamic {
      return riskUnitRow.Building.BuildingNumber
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 55, column 81
    function value_20 () : java.lang.String {
      return util.Snapshot.renderValue(getRULienHolders(riskUnitRow))
    }
    
    // 'value' attribute on TextCell (id=RUNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 34, column 46
    function value_7 () : dynamic.Dynamic {
      return riskUnitRow.RUNumber
    }
    
    // 'visible' attribute on TextCell (id=BuildingNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 50, column 81
    function visible_18 () : java.lang.Boolean {
      return Claim.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    property get riskUnitRow () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyLocationPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimSnapshotPolicyLocationPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RUNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 34, column 46
    function sortValue_0 (riskUnitRow :  dynamic.Dynamic) : java.lang.Object {
      return riskUnitRow.RUNumber
    }
    
    // 'value' attribute on TextCell (id=RUDescription_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 39, column 46
    function sortValue_1 (riskUnitRow :  dynamic.Dynamic) : java.lang.Object {
      return riskUnitRow.Description
    }
    
    // 'value' attribute on TextCell (id=RUType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 44, column 46
    function sortValue_2 (riskUnitRow :  dynamic.Dynamic) : java.lang.Object {
      return riskUnitRow.Subtype
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 50, column 81
    function sortValue_3 (riskUnitRow :  dynamic.Dynamic) : java.lang.Object {
      return riskUnitRow.Building.BuildingNumber
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 55, column 81
    function sortValue_5 (riskUnitRow :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(getRULienHolders(riskUnitRow))
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 135, column 86
    function sortValue_51 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(PropertyOwner.Lienholder)
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 139, column 85
    function sortValue_52 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(PropertyOwner.OwnerType)
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 72, column 46
    function valueRoot_25 () : java.lang.Object {
      return riskUnitSelection
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 108, column 48
    function valueRoot_44 () : java.lang.Object {
      return riskUnitSelection.Building
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 157, column 50
    function valueRoot_60 () : java.lang.Object {
      return riskUnitSelection.ClassCode
    }
    
    // 'value' attribute on RowIterator (id=LocationBasedRUIterator) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 28, column 41
    function value_23 () : dynamic.Dynamic {
      return PolicyLocation.LocationBasedRisks
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 72, column 46
    function value_24 () : dynamic.Dynamic {
      return riskUnitSelection.RUNumber
    }
    
    // 'value' attribute on TextInput (id=OtherRiskType_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 78, column 123
    function value_28 () : dynamic.Dynamic {
      return riskUnitSelection.OtherRiskType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 83, column 46
    function value_32 () : dynamic.Dynamic {
      return riskUnitSelection.Description
    }
    
    // 'value' attribute on TextInput (id=CoverageForm_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 90, column 37
    function value_36 () : String {
      return gw.pcf.RiskUnitUtils.getCoverageForm(riskUnitSelection)
    }
    
    // 'value' attribute on TextInput (id=CoveragePartTypes_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 97, column 37
    function value_40 () : String {
      return gw.pcf.RiskUnitUtils.getCoveragePartTypes(riskUnitSelection)
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 108, column 48
    function value_43 () : dynamic.Dynamic {
      return riskUnitSelection.Building.BuildingNumber
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 113, column 48
    function value_46 () : dynamic.Dynamic {
      return riskUnitSelection.Building.Notes
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyLocationPanelSet.pcf: line 130, column 49
    function value_57 () : dynamic.Dynamic {
      return riskUnitSelection.Lienholders
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 157, column 50
    function value_59 () : dynamic.Dynamic {
      return riskUnitSelection.ClassCode.Code
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 163, column 50
    function value_62 () : dynamic.Dynamic {
      return riskUnitSelection.ClassCode.Description
    }
    
    // 'value' attribute on TextAreaInput (id=Comments_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 169, column 50
    function value_65 () : dynamic.Dynamic {
      return riskUnitSelection.ClassCode.Comments
    }
    
    // 'visible' attribute on TextInput (id=OtherRiskType_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 78, column 123
    function visible_27 () : java.lang.Boolean {
      return (riskUnitSelection.Subtype as String).contains(typekey.RiskUnit.TC_LOCATIONMISCRU.DisplayName)
    }
    
    // 'visible' attribute on TextInput (id=CoverageForm_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 90, column 37
    function visible_35 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.hasCoverageForm(riskUnitSelection)
    }
    
    // 'visible' attribute on TextInput (id=CoveragePartTypes_Input) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 97, column 37
    function visible_39 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.hasCoveragePartTypes(riskUnitSelection)
    }
    
    // 'visible' attribute on TextCell (id=BuildingNumber_Cell) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 50, column 81
    function visible_4 () : java.lang.Boolean {
      return Claim.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotPolicyLocationPanelSet.pcf: line 101, column 119
    function visible_49 () : java.lang.Boolean {
      return riskUnitSelection.Building != null and Claim.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    // 'visible' attribute on InputDivider at ClaimSnapshotPolicyLocationPanelSet.pcf: line 116, column 63
    function visible_50 () : java.lang.Boolean {
      return riskUnitSelection.Building != null
    }
    
    // 'childrenVisible' attribute on InputGroup (id=ClassCodeInputGroup) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 150, column 80
    function visible_68 () : java.lang.Boolean {
      return riskUnitSelection.ClassCode != null
    }
    
    // 'visible' attribute on InputGroup (id=ClassCodeInputGroup) at ClaimSnapshotPolicyLocationPanelSet.pcf: line 150, column 80
    function visible_70 () : java.lang.Boolean {
      return Claim.Policy.PolicyType == PolicyType.TC_WORKERSCOMP
    }
    
    property get riskUnitSelection () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set riskUnitSelection ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}