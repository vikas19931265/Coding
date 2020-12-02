package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/vacation/MyVacationExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MyVacationExposuresLVExpressions {
  @javax.annotation.Generated("config/web/pcf/vacation/MyVacationExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MyVacationExposuresLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Exposures_CaseID_Cell) at MyVacationExposuresLV.pcf: line 58, column 25
    function action_18 () : void {
      pcf.Claim.go(ExposureVacationView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at MyVacationExposuresLV.pcf: line 66, column 42
    function action_23 () : void {
      ExposureDetailForward.go(ExposureVacationView.ExposureClaim, ExposureVacationView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at MyVacationExposuresLV.pcf: line 73, column 45
    function action_28 () : void {
      ExposureDetailForward.go(ExposureVacationView.ExposureClaim, ExposureVacationView.Exposure)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Claimant_Cell) at MyVacationExposuresLV.pcf: line 86, column 54
    function action_36 () : void {
      ClaimContactDetailPopup.push(ExposureVacationView.Claimant, ExposureVacationView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Exposures_CaseID_Cell) at MyVacationExposuresLV.pcf: line 58, column 25
    function action_dest_19 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ExposureVacationView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at MyVacationExposuresLV.pcf: line 66, column 42
    function action_dest_24 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(ExposureVacationView.ExposureClaim, ExposureVacationView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at MyVacationExposuresLV.pcf: line 73, column 45
    function action_dest_29 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(ExposureVacationView.ExposureClaim, ExposureVacationView.Exposure)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Claimant_Cell) at MyVacationExposuresLV.pcf: line 86, column 54
    function action_dest_37 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ExposureVacationView.Claimant, ExposureVacationView.ExposureClaim)
    }
    
    // 'value' attribute on TextCell (id=Exposures_AssignedUser_Cell) at MyVacationExposuresLV.pcf: line 50, column 63
    function valueRoot_16 () : java.lang.Object {
      return ExposureVacationView
    }
    
    // 'value' attribute on TextCell (id=Exposures_AssignedUser_Cell) at MyVacationExposuresLV.pcf: line 50, column 63
    function value_15 () : java.lang.String {
      return ExposureVacationView.AssigneeDisplayString
    }
    
    // 'value' attribute on TextCell (id=Exposures_CaseID_Cell) at MyVacationExposuresLV.pcf: line 58, column 25
    function value_20 () : java.lang.String {
      return ExposureVacationView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at MyVacationExposuresLV.pcf: line 66, column 42
    function value_25 () : java.lang.Integer {
      return ExposureVacationView.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at MyVacationExposuresLV.pcf: line 73, column 45
    function value_30 () : typekey.ExposureType {
      return ExposureVacationView.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at MyVacationExposuresLV.pcf: line 79, column 45
    function value_33 () : typekey.CoverageType {
      return ExposureVacationView.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Exposures_Claimant_Cell) at MyVacationExposuresLV.pcf: line 86, column 54
    function value_38 () : java.lang.String {
      return ExposureVacationView.ClaimantName
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Status_Cell) at MyVacationExposuresLV.pcf: line 92, column 46
    function value_41 () : typekey.ExposureState {
      return ExposureVacationView.State
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at MyVacationExposuresLV.pcf: line 99, column 61
    function value_44 () : gw.api.financials.CurrencyAmount {
      return ExposureVacationView.TotalIncurredNet
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at MyVacationExposuresLV.pcf: line 99, column 61
    function visible_46 () : java.lang.Boolean {
      return perm.Claim.genericviewnettotalincurred
    }
    
    property get ExposureVacationView () : entity.ExposureVacationView {
      return getIteratedValue(1) as entity.ExposureVacationView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/vacation/MyVacationExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MyVacationExposuresLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at MyVacationExposuresLV.pcf: line 33, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MyVacationExposuresLV.pcf: line 36, column 86
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MyVacationExposuresLV.pcf: line 39, column 83
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.OpenRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MyVacationExposuresLV.pcf: line 42, column 83
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewRelatedFilter
    }
    
    // 'initialValue' attribute on Variable at MyVacationExposuresLV.pcf: line 18, column 57
    function initialValue_0 () : gw.api.vacation.VacationExposureFilterSet {
      return new gw.api.vacation.VacationExposureFilterSet()
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at MyVacationExposuresLV.pcf: line 73, column 45
    function sortValue_10 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at MyVacationExposuresLV.pcf: line 79, column 45
    function sortValue_11 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Status_Cell) at MyVacationExposuresLV.pcf: line 92, column 46
    function sortValue_12 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.State
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at MyVacationExposuresLV.pcf: line 99, column 61
    function sortValue_13 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.TotalIncurredNet
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_AssignedUser_Cell) at MyVacationExposuresLV.pcf: line 50, column 63
    function sortValue_5 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_AssignedUser_Cell) at MyVacationExposuresLV.pcf: line 50, column 63
    function sortValue_6 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_AssignedUser_Cell) at MyVacationExposuresLV.pcf: line 50, column 63
    function sortValue_7 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.AssignedQueue
    }
    
    // 'value' attribute on TextCell (id=Exposures_CaseID_Cell) at MyVacationExposuresLV.pcf: line 58, column 25
    function sortValue_8 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at MyVacationExposuresLV.pcf: line 66, column 42
    function sortValue_9 (ExposureVacationView :  entity.ExposureVacationView) : java.lang.Object {
      return ExposureVacationView.ClaimOrder
    }
    
    // 'value' attribute on RowIterator at MyVacationExposuresLV.pcf: line 25, column 87
    function value_48 () : gw.api.database.IQueryBeanResult<entity.ExposureVacationView> {
      return ExposureVacationViewList
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at MyVacationExposuresLV.pcf: line 99, column 61
    function visible_14 () : java.lang.Boolean {
      return perm.Claim.genericviewnettotalincurred
    }
    
    property get ExposureVacationViewList () : gw.api.database.IQueryBeanResult<ExposureVacationView> {
      return getRequireValue("ExposureVacationViewList", 0) as gw.api.database.IQueryBeanResult<ExposureVacationView>
    }
    
    property set ExposureVacationViewList ($arg :  gw.api.database.IQueryBeanResult<ExposureVacationView>) {
      setRequireValue("ExposureVacationViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.vacation.VacationExposureFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.vacation.VacationExposureFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.vacation.VacationExposureFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}