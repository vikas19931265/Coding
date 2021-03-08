package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryExposuresLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryExposuresLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'icon' attribute on LinkCell (id=Status) at ClaimSummaryExposuresLV.pcf: line 26, column 35
    function icon_0 () : java.lang.String {
      return "closed" 
    }
    
    // 'sortBy' attribute on LinkCell (id=Status) at ClaimSummaryExposuresLV.pcf: line 26, column 35
    function sortValue_1 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.State
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at ClaimSummaryExposuresLV.pcf: line 42, column 42
    function sortValue_2 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ClaimSummaryExposuresLV.pcf: line 50, column 25
    function sortValue_3 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at ClaimSummaryExposuresLV.pcf: line 57, column 45
    function sortValue_4 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.PrimaryCoverage
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ClaimSummaryExposuresLV.pcf: line 74, column 25
    function sortValue_5 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ClaimSummaryExposuresLV.pcf: line 74, column 25
    function sortValue_6 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ClaimSummaryExposuresLV.pcf: line 74, column 25
    function sortValue_7 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at ClaimSummaryExposuresLV.pcf: line 18, column 37
    function value_53 () : entity.Exposure[] {
      return ExposureList
    }
    
    // 'visible' attribute on CurrencyCell (id=TotalRecoveries_Cell) at ClaimSummaryExposuresLV.pcf: line 109, column 25
    function visible_11 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=RemainingReserves_Cell) at ClaimSummaryExposuresLV.pcf: line 82, column 53
    function visible_8 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=FuturePayments_Cell) at ClaimSummaryExposuresLV.pcf: line 91, column 25
    function visible_9 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get ExposureList () : Exposure[] {
      return getRequireValue("ExposureList", 0) as Exposure[]
    }
    
    property set ExposureList ($arg :  Exposure[]) {
      setRequireValue("ExposureList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSummaryExposuresLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Order_Cell) at ClaimSummaryExposuresLV.pcf: line 42, column 42
    function action_15 () : void {
      ExposureDetailForward.drilldown(Claim, Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at ClaimSummaryExposuresLV.pcf: line 50, column 25
    function action_20 () : void {
      ExposureDetailForward.drilldown(Claim, Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claimant_Cell) at ClaimSummaryExposuresLV.pcf: line 66, column 25
    function action_28 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Claim)
    }
    
    // 'action' attribute on TextCell (id=Assignee_Cell) at ClaimSummaryExposuresLV.pcf: line 74, column 25
    function action_32 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on TextCell (id=Order_Cell) at ClaimSummaryExposuresLV.pcf: line 42, column 42
    function action_dest_16 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at ClaimSummaryExposuresLV.pcf: line 50, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claimant_Cell) at ClaimSummaryExposuresLV.pcf: line 66, column 25
    function action_dest_29 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Claim)
    }
    
    // 'action' attribute on TextCell (id=Assignee_Cell) at ClaimSummaryExposuresLV.pcf: line 74, column 25
    function action_dest_33 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'iconColor' attribute on Link (id=StatusIcon) at ClaimSummaryExposuresLV.pcf: line 32, column 51
    function iconColor_14 () : gw.api.web.color.GWColor {
      return Exposure.Closed ? null : gw.api.web.color.GWColor.THEME_ALERT_INFO
    }
    
    // 'icon' attribute on Link (id=StatusIcon) at ClaimSummaryExposuresLV.pcf: line 32, column 51
    function icon_13 () : java.lang.String {
      return Exposure.Closed ? "closed" : "circle"
    }
    
    // 'tooltip' attribute on Link (id=StatusIcon) at ClaimSummaryExposuresLV.pcf: line 32, column 51
    function tooltip_12 () : java.lang.String {
      return Exposure.State.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at ClaimSummaryExposuresLV.pcf: line 42, column 42
    function valueRoot_18 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves_Cell) at ClaimSummaryExposuresLV.pcf: line 82, column 53
    function valueRoot_38 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextCell (id=Order_Cell) at ClaimSummaryExposuresLV.pcf: line 42, column 42
    function value_17 () : java.lang.Integer {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ClaimSummaryExposuresLV.pcf: line 50, column 25
    function value_22 () : typekey.ExposureType {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at ClaimSummaryExposuresLV.pcf: line 57, column 45
    function value_25 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSummaryExposuresLV.pcf: line 66, column 25
    function value_30 () : entity.Contact {
      return Exposure.Claim.LossType.equals(LossType.TC_WC) ? Exposure.Claim.ClaimantDenorm : Exposure.Claimant
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ClaimSummaryExposuresLV.pcf: line 74, column 25
    function value_34 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves_Cell) at ClaimSummaryExposuresLV.pcf: line 82, column 53
    function value_37 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=FuturePayments_Cell) at ClaimSummaryExposuresLV.pcf: line 91, column 25
    function value_41 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyCell (id=Paid_Cell) at ClaimSummaryExposuresLV.pcf: line 100, column 25
    function value_45 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyCell (id=TotalRecoveries_Cell) at ClaimSummaryExposuresLV.pcf: line 109, column 25
    function value_49 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'visible' attribute on CurrencyCell (id=RemainingReserves_Cell) at ClaimSummaryExposuresLV.pcf: line 82, column 53
    function visible_39 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=FuturePayments_Cell) at ClaimSummaryExposuresLV.pcf: line 91, column 25
    function visible_43 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=TotalRecoveries_Cell) at ClaimSummaryExposuresLV.pcf: line 109, column 25
    function visible_51 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    property get Exposure () : entity.Exposure {
      return getIteratedValue(1) as entity.Exposure
    }
    
    
  }
  
  
}