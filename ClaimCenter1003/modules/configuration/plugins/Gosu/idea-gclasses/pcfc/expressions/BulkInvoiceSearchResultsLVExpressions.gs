package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/bulkpay/BulkInvoiceSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BulkInvoiceSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/bulkpay/BulkInvoiceSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BulkInvoiceSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'footerSumFormat' attribute on RowIterator at BulkInvoiceSearchResultsLV.pcf: line 37, column 68
    function format_7 () : java.lang.String {
      return gw.api.util.CCCurrencyUtil.getCurrencyFormatExpressionForRender(criteria.CurrencyForLastSearch)
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 25, column 56
    function sortValue_0 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.InvoiceNumber
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 30, column 54
    function sortValue_1 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.CheckNumber
    }
    
    // 'value' attribute on CurrencyCell (id=ApprovedAmount_Cell) at BulkInvoiceSearchResultsLV.pcf: line 37, column 68
    function sortValue_2 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.ApprovedTransactionAmount
    }
    
    // 'value' attribute on TextCell (id=PayTo_Cell) at BulkInvoiceSearchResultsLV.pcf: line 50, column 48
    function sortValue_3 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.PayTo
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at BulkInvoiceSearchResultsLV.pcf: line 54, column 60
    function sortValue_4 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.ScheduledSendDate
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Cell) at BulkInvoiceSearchResultsLV.pcf: line 58, column 55
    function sortValue_5 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.ReceivedDate
    }
    
    // '$$sumValue' attribute on RowIterator at BulkInvoiceSearchResultsLV.pcf: line 37, column 68
    function sumValueRoot_9 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView
    }
    
    // 'footerSumValue' attribute on RowIterator at BulkInvoiceSearchResultsLV.pcf: line 46, column 61
    function sumValue_11 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.TotalTransactionAmount
    }
    
    // 'footerSumValue' attribute on RowIterator at BulkInvoiceSearchResultsLV.pcf: line 37, column 68
    function sumValue_8 (BulkInvoiceSearchView :  entity.BulkInvoiceSearchView) : java.lang.Object {
      return BulkInvoiceSearchView.ApprovedTransactionAmount
    }
    
    // 'value' attribute on RowIterator at BulkInvoiceSearchResultsLV.pcf: line 18, column 88
    function value_38 () : gw.api.database.IQueryBeanResult<entity.BulkInvoiceSearchView> {
      return BulkInvoiceSearchViewList
    }
    
    // 'footerLabel' attribute on RowIterator at BulkInvoiceSearchResultsLV.pcf: line 25, column 56
    function value_6 () : java.lang.Object {
      return criteria.ShowSumRowForLastSearch ? DisplayKey.get("Financials.BulkPay.Search.SearchResults.Total") : null
    }
    
    property get BulkInvoiceSearchViewList () : gw.api.database.IQueryBeanResult<BulkInvoiceSearchView> {
      return getRequireValue("BulkInvoiceSearchViewList", 0) as gw.api.database.IQueryBeanResult<BulkInvoiceSearchView>
    }
    
    property set BulkInvoiceSearchViewList ($arg :  gw.api.database.IQueryBeanResult<BulkInvoiceSearchView>) {
      setRequireValue("BulkInvoiceSearchViewList", 0, $arg)
    }
    
    property get criteria () : BulkInvoiceSearchCriteria {
      return getRequireValue("criteria", 0) as BulkInvoiceSearchCriteria
    }
    
    property set criteria ($arg :  BulkInvoiceSearchCriteria) {
      setRequireValue("criteria", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/bulkpay/BulkInvoiceSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BulkInvoiceSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 25, column 56
    function action_13 () : void {
      EditBulkInvoiceDetail.go(BulkInvoiceSearchView.BulkInvoice)
    }
    
    // 'action' attribute on TextCell (id=CheckNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 30, column 54
    function action_18 () : void {
      EditBulkInvoiceDetail.go(BulkInvoiceSearchView.BulkInvoice)
    }
    
    // 'action' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 25, column 56
    function action_dest_14 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(BulkInvoiceSearchView.BulkInvoice)
    }
    
    // 'action' attribute on TextCell (id=CheckNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 30, column 54
    function action_dest_19 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(BulkInvoiceSearchView.BulkInvoice)
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 25, column 56
    function valueRoot_16 () : java.lang.Object {
      return BulkInvoiceSearchView
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 25, column 56
    function value_15 () : java.lang.String {
      return BulkInvoiceSearchView.InvoiceNumber
    }
    
    // 'value' attribute on TextCell (id=CheckNumber_Cell) at BulkInvoiceSearchResultsLV.pcf: line 30, column 54
    function value_20 () : java.lang.String {
      return BulkInvoiceSearchView.CheckNumber
    }
    
    // 'value' attribute on CurrencyCell (id=ApprovedAmount_Cell) at BulkInvoiceSearchResultsLV.pcf: line 37, column 68
    function value_23 () : gw.api.financials.CurrencyAmount {
      return BulkInvoiceSearchView.ApprovedTransactionAmount
    }
    
    // 'value' attribute on CurrencyCell (id=TotalAmount_Cell) at BulkInvoiceSearchResultsLV.pcf: line 46, column 61
    function value_26 () : gw.api.financials.CurrencyAmountPair {
      return BulkInvoiceSearchView.TotalCurrencyAmount
    }
    
    // 'value' attribute on TextCell (id=PayTo_Cell) at BulkInvoiceSearchResultsLV.pcf: line 50, column 48
    function value_29 () : java.lang.String {
      return BulkInvoiceSearchView.PayTo
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at BulkInvoiceSearchResultsLV.pcf: line 54, column 60
    function value_32 () : java.util.Date {
      return BulkInvoiceSearchView.ScheduledSendDate
    }
    
    // 'value' attribute on DateCell (id=ReceivedDate_Cell) at BulkInvoiceSearchResultsLV.pcf: line 58, column 55
    function value_35 () : java.util.Date {
      return BulkInvoiceSearchView.ReceivedDate
    }
    
    property get BulkInvoiceSearchView () : entity.BulkInvoiceSearchView {
      return getIteratedValue(1) as entity.BulkInvoiceSearchView
    }
    
    
  }
  
  
}