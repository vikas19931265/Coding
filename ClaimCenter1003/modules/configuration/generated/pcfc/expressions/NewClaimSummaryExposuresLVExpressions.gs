package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimSummaryExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimSummaryExposuresLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimSummaryExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewClaimSummaryExposuresLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at NewClaimSummaryExposuresLV.pcf: line 30, column 40
    function action_22 () : void {
      NewClaimWizard_ExposurePagePopup.push(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at NewClaimSummaryExposuresLV.pcf: line 36, column 45
    function action_27 () : void {
      NewClaimWizard_ExposurePagePopup.push(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at NewClaimSummaryExposuresLV.pcf: line 30, column 40
    function action_dest_23 () : pcf.api.Destination {
      return pcf.NewClaimWizard_ExposurePagePopup.createDestination(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at NewClaimSummaryExposuresLV.pcf: line 36, column 45
    function action_dest_28 () : pcf.api.Destination {
      return pcf.NewClaimWizard_ExposurePagePopup.createDestination(Claim, Exposure, Wizard)
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposures_Order_Cell) at NewClaimSummaryExposuresLV.pcf: line 30, column 40
    function outputConversion_24 (VALUE :  entity.Exposure) : java.lang.String {
      return VALUE.ClaimOrder as String
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at NewClaimSummaryExposuresLV.pcf: line 36, column 45
    function valueRoot_30 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_RemainingReserves_Cell) at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function valueRoot_45 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at NewClaimSummaryExposuresLV.pcf: line 30, column 40
    function value_25 () : entity.Exposure {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at NewClaimSummaryExposuresLV.pcf: line 36, column 45
    function value_29 () : typekey.ExposureType {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at NewClaimSummaryExposuresLV.pcf: line 41, column 45
    function value_32 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Exposures_Claimant_Cell) at NewClaimSummaryExposuresLV.pcf: line 47, column 39
    function value_35 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextCell (id=Exposures_Assignee_Cell) at NewClaimSummaryExposuresLV.pcf: line 52, column 51
    function value_38 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Status_Cell) at NewClaimSummaryExposuresLV.pcf: line 57, column 46
    function value_41 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_RemainingReserves_Cell) at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function value_44 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_FuturePayments_Cell) at NewClaimSummaryExposuresLV.pcf: line 71, column 53
    function value_48 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_Paid_Cell) at NewClaimSummaryExposuresLV.pcf: line 78, column 53
    function value_52 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_RemainingReserves_Cell) at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function visible_46 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_FuturePayments_Cell) at NewClaimSummaryExposuresLV.pcf: line 71, column 53
    function visible_50 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    property get Exposure () : entity.Exposure {
      return getIteratedValue(1) as entity.Exposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimSummaryExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimSummaryExposuresLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at NewClaimSummaryExposuresLV.pcf: line 30, column 40
    function sortValue_0 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at NewClaimSummaryExposuresLV.pcf: line 36, column 45
    function sortValue_1 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_Paid_Cell) at NewClaimSummaryExposuresLV.pcf: line 78, column 53
    function sortValue_11 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at NewClaimSummaryExposuresLV.pcf: line 41, column 45
    function sortValue_2 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.PrimaryCoverage
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_Assignee_Cell) at NewClaimSummaryExposuresLV.pcf: line 52, column 51
    function sortValue_3 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_Assignee_Cell) at NewClaimSummaryExposuresLV.pcf: line 52, column 51
    function sortValue_4 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_Assignee_Cell) at NewClaimSummaryExposuresLV.pcf: line 52, column 51
    function sortValue_5 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.AssignedQueue
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Status_Cell) at NewClaimSummaryExposuresLV.pcf: line 57, column 46
    function sortValue_6 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.State
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_RemainingReserves_Cell) at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function sortValue_7 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_FuturePayments_Cell) at NewClaimSummaryExposuresLV.pcf: line 71, column 53
    function sortValue_9 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // '$$sumValue' attribute on RowIterator at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function sumValueRoot_14 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'footerSumValue' attribute on RowIterator at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function sumValue_13 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'footerSumValue' attribute on RowIterator at NewClaimSummaryExposuresLV.pcf: line 71, column 53
    function sumValue_16 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'footerSumValue' attribute on RowIterator at NewClaimSummaryExposuresLV.pcf: line 78, column 53
    function sumValue_19 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on RowIterator at NewClaimSummaryExposuresLV.pcf: line 21, column 37
    function value_56 () : entity.Exposure[] {
      return ExposureList
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_FuturePayments_Cell) at NewClaimSummaryExposuresLV.pcf: line 71, column 53
    function visible_10 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_RemainingReserves_Cell) at NewClaimSummaryExposuresLV.pcf: line 64, column 53
    function visible_8 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
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
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    
  }
  
  
}