package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BulkInvoicesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BulkInvoicesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoicesLV.pcf: line 45, column 46
    function sortValue_0 (bulkInvoice :  entity.BulkInvoice) : java.lang.Object {
      return bulkInvoice.InvoiceNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at BulkInvoicesLV.pcf: line 51, column 50
    function sortValue_1 (bulkInvoice :  entity.BulkInvoice) : java.lang.Object {
      return bulkInvoice.Status
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Cell) at BulkInvoicesLV.pcf: line 55, column 45
    function sortValue_2 (bulkInvoice :  entity.BulkInvoice) : java.lang.Object {
      return bulkInvoice.ReceivedDate
    }
    
    // 'value' attribute on DateCell (id=ApprovalDate_Cell) at BulkInvoicesLV.pcf: line 59, column 45
    function sortValue_3 (bulkInvoice :  entity.BulkInvoice) : java.lang.Object {
      return bulkInvoice.ApprovalDate
    }
    
    // 'value' attribute on CurrencyCell (id=TotalAmount_Cell) at BulkInvoicesLV.pcf: line 65, column 55
    function sortValue_4 (bulkInvoice :  entity.BulkInvoice) : java.lang.Object {
      return bulkInvoice.TotalTransactionAmount
    }
    
    // 'value' attribute on RowIterator at BulkInvoicesLV.pcf: line 20, column 78
    function value_33 () : gw.api.database.IQueryBeanResult<entity.BulkInvoice> {
      return bulkInvoices
    }
    
    property get bulkInvoices () : gw.api.database.IQueryBeanResult<BulkInvoice> {
      return getRequireValue("bulkInvoices", 0) as gw.api.database.IQueryBeanResult<BulkInvoice>
    }
    
    property set bulkInvoices ($arg :  gw.api.database.IQueryBeanResult<BulkInvoice>) {
      setRequireValue("bulkInvoices", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BulkInvoicesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoicesLV.pcf: line 45, column 46
    function action_11 () : void {
      EditBulkInvoiceDetail.drilldown(bulkInvoice)
    }
    
    // 'action' attribute on TypeKeyCell (id=Status_Cell) at BulkInvoicesLV.pcf: line 51, column 50
    function action_16 () : void {
      EditBulkInvoiceDetail.drilldown(bulkInvoice)
    }
    
    // 'action' attribute on CurrencyCell (id=TotalAmount_Cell) at BulkInvoicesLV.pcf: line 65, column 55
    function action_27 () : void {
      EditBulkInvoiceDetail.drilldown(bulkInvoice)
    }
    
    // 'action' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoicesLV.pcf: line 45, column 46
    function action_dest_12 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(bulkInvoice)
    }
    
    // 'action' attribute on TypeKeyCell (id=Status_Cell) at BulkInvoicesLV.pcf: line 51, column 50
    function action_dest_17 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(bulkInvoice)
    }
    
    // 'action' attribute on CurrencyCell (id=TotalAmount_Cell) at BulkInvoicesLV.pcf: line 65, column 55
    function action_dest_28 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(bulkInvoice)
    }
    
    // 'condition' attribute on ToolbarFlag at BulkInvoicesLV.pcf: line 38, column 42
    function condition_10 () : java.lang.Boolean {
      return bulkInvoice.ValidatableOrSubmittable
    }
    
    // 'condition' attribute on ToolbarFlag at BulkInvoicesLV.pcf: line 23, column 27
    function condition_5 () : java.lang.Boolean {
      return bulkInvoice.Deletable
    }
    
    // 'condition' attribute on ToolbarFlag at BulkInvoicesLV.pcf: line 26, column 30
    function condition_6 () : java.lang.Boolean {
      return bulkInvoice.Validateable
    }
    
    // 'condition' attribute on ToolbarFlag at BulkInvoicesLV.pcf: line 29, column 29
    function condition_7 () : java.lang.Boolean {
      return bulkInvoice.Submittable
    }
    
    // 'condition' attribute on ToolbarFlag at BulkInvoicesLV.pcf: line 32, column 27
    function condition_8 () : java.lang.Boolean {
      return bulkInvoice.Stoppable
    }
    
    // 'condition' attribute on ToolbarFlag at BulkInvoicesLV.pcf: line 35, column 26
    function condition_9 () : java.lang.Boolean {
      return bulkInvoice.Voidable
    }
    
    // 'highlighted' attribute on Row at BulkInvoicesLV.pcf: line 40, column 60
    function highlighted_32 () : java.lang.Boolean {
      return bulkInvoice.hasInvalidInvoiceItems()
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoicesLV.pcf: line 45, column 46
    function valueRoot_14 () : java.lang.Object {
      return bulkInvoice
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoicesLV.pcf: line 45, column 46
    function value_13 () : java.lang.String {
      return bulkInvoice.InvoiceNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at BulkInvoicesLV.pcf: line 51, column 50
    function value_18 () : typekey.BulkInvoiceStatus {
      return bulkInvoice.Status
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Cell) at BulkInvoicesLV.pcf: line 55, column 45
    function value_21 () : java.util.Date {
      return bulkInvoice.ReceivedDate
    }
    
    // 'value' attribute on DateCell (id=ApprovalDate_Cell) at BulkInvoicesLV.pcf: line 59, column 45
    function value_24 () : java.util.Date {
      return bulkInvoice.ApprovalDate
    }
    
    // 'value' attribute on CurrencyCell (id=TotalAmount_Cell) at BulkInvoicesLV.pcf: line 65, column 55
    function value_29 () : gw.api.financials.CurrencyAmount {
      return bulkInvoice.TotalTransactionAmount
    }
    
    property get bulkInvoice () : entity.BulkInvoice {
      return getIteratedValue(1) as entity.BulkInvoice
    }
    
    
  }
  
  
}