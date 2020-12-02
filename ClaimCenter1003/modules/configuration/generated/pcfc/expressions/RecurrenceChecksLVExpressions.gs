package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/RecurrenceChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RecurrenceChecksLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/RecurrenceChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RecurrenceChecksLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at RecurrenceChecksLV.pcf: line 22, column 44
    function valueRoot_5 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextCell (id=PayTo_Cell) at RecurrenceChecksLV.pcf: line 32, column 32
    function value_10 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at RecurrenceChecksLV.pcf: line 37, column 50
    function value_13 () : typekey.TransactionStatus {
      return Check.Status
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at RecurrenceChecksLV.pcf: line 22, column 44
    function value_4 () : java.util.Date {
      return Check.ScheduledSendDate
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at RecurrenceChecksLV.pcf: line 28, column 61
    function value_7 () : gw.api.financials.CurrencyAmountPair {
      return Check.GrossAmountPair
    }
    
    property get Check () : entity.Check {
      return getIteratedValue(1) as entity.Check
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/RecurrenceChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RecurrenceChecksLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=ScheduledSendDate_Cell) at RecurrenceChecksLV.pcf: line 22, column 44
    function sortValue_0 (Check :  entity.Check) : java.lang.Object {
      return Check.ScheduledSendDate
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at RecurrenceChecksLV.pcf: line 28, column 61
    function sortValue_1 (Check :  entity.Check) : java.lang.Object {
      return Check.GrossAmountPair
    }
    
    // 'value' attribute on TextCell (id=PayTo_Cell) at RecurrenceChecksLV.pcf: line 32, column 32
    function sortValue_2 (Check :  entity.Check) : java.lang.Object {
      return Check.PayTo
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at RecurrenceChecksLV.pcf: line 37, column 50
    function sortValue_3 (Check :  entity.Check) : java.lang.Object {
      return Check.Status
    }
    
    // 'value' attribute on RowIterator at RecurrenceChecksLV.pcf: line 16, column 34
    function value_16 () : entity.Check[] {
      return CheckSet.Checks
    }
    
    property get CheckSet () : CheckSet {
      return getRequireValue("CheckSet", 0) as CheckSet
    }
    
    property set CheckSet ($arg :  CheckSet) {
      setRequireValue("CheckSet", 0, $arg)
    }
    
    
  }
  
  
}