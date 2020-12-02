package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/ChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ChecksLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/ChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ChecksLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ChecksLV.pcf: line 14, column 65
    function initialValue_0 () : gw.api.database.IQueryBeanResult<CheckView> {
      return gw.api.financials.ClaimFinancialsTransactionsUtil.getChecksQuery(Claim)
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at ChecksLV.pcf: line 27, column 42
    function sortValue_1 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.CheckNumber
    }
    
    // 'value' attribute on TextCell (id=PayTo_Cell) at ChecksLV.pcf: line 33, column 36
    function sortValue_2 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.PayTo
    }
    
    // 'sortBy' attribute on CurrencyCell (id=GrossAmount_Cell) at ChecksLV.pcf: line 42, column 61
    function sortValue_3 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.GrossClaimAmount
    }
    
    // 'value' attribute on DateCell (id=IssueDate_Cell) at ChecksLV.pcf: line 49, column 40
    function sortValue_4 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.IssueDate
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at ChecksLV.pcf: line 56, column 48
    function sortValue_5 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.ScheduledSendDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ChecksLV.pcf: line 63, column 50
    function sortValue_6 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.Status
    }
    
    // 'sortBy' attribute on TextCell (id=BulkInvoice_Cell) at ChecksLV.pcf: line 72, column 57
    function sortValue_7 (CheckView :  entity.CheckView) : java.lang.Object {
      return CheckView.BulkInvoiceNumber
    }
    
    // 'value' attribute on RowIterator at ChecksLV.pcf: line 19, column 76
    function value_37 () : gw.api.database.IQueryBeanResult<entity.CheckView> {
      return CheckViewList
    }
    
    property get CheckViewList () : gw.api.database.IQueryBeanResult<CheckView> {
      return getVariableValue("CheckViewList", 0) as gw.api.database.IQueryBeanResult<CheckView>
    }
    
    property set CheckViewList ($arg :  gw.api.database.IQueryBeanResult<CheckView>) {
      setVariableValue("CheckViewList", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/ChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ChecksLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on CurrencyCell (id=GrossAmount_Cell) at ChecksLV.pcf: line 42, column 61
    function action_16 () : void {
      ClaimFinancialsChecksDetail.go(Claim, CheckView.Check)
    }
    
    // 'action' attribute on TextCell (id=BulkInvoice_Cell) at ChecksLV.pcf: line 72, column 57
    function action_31 () : void {
      EditBulkInvoiceDetail.go(CheckView.BulkInvoice)
    }
    
    // 'action' attribute on TextCell (id=CheckNumber_Cell) at ChecksLV.pcf: line 27, column 42
    function action_8 () : void {
      ClaimFinancialsChecksDetail.go(Claim, CheckView.Check)
    }
    
    // 'action' attribute on CurrencyCell (id=GrossAmount_Cell) at ChecksLV.pcf: line 42, column 61
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetail.createDestination(Claim, CheckView.Check)
    }
    
    // 'action' attribute on TextCell (id=BulkInvoice_Cell) at ChecksLV.pcf: line 72, column 57
    function action_dest_32 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(CheckView.BulkInvoice)
    }
    
    // 'action' attribute on TextCell (id=CheckNumber_Cell) at ChecksLV.pcf: line 27, column 42
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetail.createDestination(Claim, CheckView.Check)
    }
    
    // 'available' attribute on TextCell (id=BulkInvoice_Cell) at ChecksLV.pcf: line 72, column 57
    function available_30 () : java.lang.Boolean {
      return CheckView.isBulked()
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at ChecksLV.pcf: line 27, column 42
    function valueRoot_11 () : java.lang.Object {
      return CheckView
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at ChecksLV.pcf: line 27, column 42
    function value_10 () : java.lang.String {
      return CheckView.CheckNumber
    }
    
    // 'value' attribute on TextCell (id=PayTo_Cell) at ChecksLV.pcf: line 33, column 36
    function value_13 () : java.lang.String {
      return CheckView.PayTo
    }
    
    // 'value' attribute on CurrencyCell (id=GrossAmount_Cell) at ChecksLV.pcf: line 42, column 61
    function value_18 () : gw.api.financials.CurrencyAmountPair {
      return CheckView.GrossCurrencyAmount
    }
    
    // 'value' attribute on DateCell (id=IssueDate_Cell) at ChecksLV.pcf: line 49, column 40
    function value_21 () : java.util.Date {
      return CheckView.IssueDate
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at ChecksLV.pcf: line 56, column 48
    function value_24 () : java.util.Date {
      return CheckView.ScheduledSendDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ChecksLV.pcf: line 63, column 50
    function value_27 () : typekey.TransactionStatus {
      return CheckView.Status
    }
    
    // 'value' attribute on TextCell (id=BulkInvoice_Cell) at ChecksLV.pcf: line 72, column 57
    function value_33 () : java.lang.String {
      return CheckView.DisplayedBulkInvoiceNumber
    }
    
    property get CheckView () : entity.CheckView {
      return getIteratedValue(1) as entity.CheckView
    }
    
    
  }
  
  
}