package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/exposures/DesktopExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopExposuresLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/exposures/DesktopExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopExposuresLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'cacheKey' attribute on ToolbarFilter at DesktopExposuresLV.pcf: line 34, column 39
    function cacheKey_7 () : java.lang.String {
      return FilterSet.CacheKey
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopExposuresLV.pcf: line 38, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopExposuresLV.pcf: line 41, column 81
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopExposuresLV.pcf: line 44, column 91
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.getClosedLastNDaysOwnedFilter(90)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopExposuresLV.pcf: line 47, column 83
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.OpenRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopExposuresLV.pcf: line 50, column 83
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewRelatedFilter
    }
    
    // 'initialValue' attribute on Variable at DesktopExposuresLV.pcf: line 22, column 56
    function initialValue_0 () : gw.api.exposure.DesktopExposureFilterSet {
      return new gw.api.exposure.DesktopExposureFilterSet(User)
    }
    
    // 'label' attribute on ToolbarFilterOption at DesktopExposuresLV.pcf: line 44, column 91
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Exposures.ClosedLastNDays", 90)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DesktopExposuresLV.pcf: line 73, column 25
    function sortValue_10 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at DesktopExposuresLV.pcf: line 79, column 45
    function sortValue_11 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopExposuresLV.pcf: line 92, column 25
    function sortValue_12 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.State
    }
    
    // 'value' attribute on TextCell (id=WorkloadWeight_Cell) at DesktopExposuresLV.pcf: line 99, column 25
    function sortValue_13 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.WorkloadWeight
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at DesktopExposuresLV.pcf: line 105, column 61
    function sortValue_15 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.TotalIncurredNet
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopExposuresLV.pcf: line 59, column 25
    function sortValue_8 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at DesktopExposuresLV.pcf: line 66, column 42
    function sortValue_9 (ExposureDesktopView :  entity.ExposureDesktopView) : java.lang.Object {
      return ExposureDesktopView.ClaimOrder
    }
    
    // 'value' attribute on RowIterator at DesktopExposuresLV.pcf: line 29, column 86
    function value_51 () : gw.api.database.IQueryBeanResult<entity.ExposureDesktopView> {
      return ExposureDesktopViewList
    }
    
    // 'visible' attribute on TextCell (id=WorkloadWeight_Cell) at DesktopExposuresLV.pcf: line 99, column 25
    function visible_14 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    // 'visible' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at DesktopExposuresLV.pcf: line 105, column 61
    function visible_16 () : java.lang.Boolean {
      return perm.Claim.genericviewnettotalincurred
    }
    
    property get ExposureDesktopViewList () : gw.api.database.IQueryBeanResult<ExposureDesktopView> {
      return getRequireValue("ExposureDesktopViewList", 0) as gw.api.database.IQueryBeanResult<ExposureDesktopView>
    }
    
    property set ExposureDesktopViewList ($arg :  gw.api.database.IQueryBeanResult<ExposureDesktopView>) {
      setRequireValue("ExposureDesktopViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.exposure.DesktopExposureFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.exposure.DesktopExposureFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.exposure.DesktopExposureFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/exposures/DesktopExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopExposuresLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopExposuresLV.pcf: line 59, column 25
    function action_17 () : void {
      pcf.Claim.go(ExposureDesktopView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Order_Cell) at DesktopExposuresLV.pcf: line 66, column 42
    function action_22 () : void {
      ExposureDetailForward.go(ExposureDesktopView.ExposureClaim, ExposureDesktopView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at DesktopExposuresLV.pcf: line 73, column 25
    function action_27 () : void {
      ExposureDetailForward.go(ExposureDesktopView.ExposureClaim, ExposureDesktopView.Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claimant_Cell) at DesktopExposuresLV.pcf: line 86, column 25
    function action_35 () : void {
      ClaimContactDetailPopup.push(ExposureDesktopView.Claimant, ExposureDesktopView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopExposuresLV.pcf: line 59, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ExposureDesktopView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Order_Cell) at DesktopExposuresLV.pcf: line 66, column 42
    function action_dest_23 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(ExposureDesktopView.ExposureClaim, ExposureDesktopView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at DesktopExposuresLV.pcf: line 73, column 25
    function action_dest_28 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(ExposureDesktopView.ExposureClaim, ExposureDesktopView.Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claimant_Cell) at DesktopExposuresLV.pcf: line 86, column 25
    function action_dest_36 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ExposureDesktopView.Claimant, ExposureDesktopView.ExposureClaim)
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopExposuresLV.pcf: line 59, column 25
    function valueRoot_20 () : java.lang.Object {
      return ExposureDesktopView
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopExposuresLV.pcf: line 59, column 25
    function value_19 () : java.lang.String {
      return ExposureDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at DesktopExposuresLV.pcf: line 66, column 42
    function value_24 () : java.lang.Integer {
      return ExposureDesktopView.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DesktopExposuresLV.pcf: line 73, column 25
    function value_29 () : typekey.ExposureType {
      return ExposureDesktopView.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at DesktopExposuresLV.pcf: line 79, column 45
    function value_32 () : typekey.CoverageType {
      return ExposureDesktopView.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DesktopExposuresLV.pcf: line 86, column 25
    function value_37 () : java.lang.String {
      return ExposureDesktopView.ClaimantName
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopExposuresLV.pcf: line 92, column 25
    function value_40 () : typekey.ExposureState {
      return ExposureDesktopView.State
    }
    
    // 'value' attribute on TextCell (id=WorkloadWeight_Cell) at DesktopExposuresLV.pcf: line 99, column 25
    function value_43 () : java.lang.Integer {
      return ExposureDesktopView.WorkloadWeight
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at DesktopExposuresLV.pcf: line 105, column 61
    function value_47 () : gw.api.financials.CurrencyAmount {
      return ExposureDesktopView.TotalIncurredNet
    }
    
    // 'visible' attribute on TextCell (id=WorkloadWeight_Cell) at DesktopExposuresLV.pcf: line 99, column 25
    function visible_45 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    // 'visible' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at DesktopExposuresLV.pcf: line 105, column 61
    function visible_49 () : java.lang.Boolean {
      return perm.Claim.genericviewnettotalincurred
    }
    
    property get ExposureDesktopView () : entity.ExposureDesktopView {
      return getIteratedValue(1) as entity.ExposureDesktopView
    }
    
    
  }
  
  
}