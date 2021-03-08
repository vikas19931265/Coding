package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckGroupChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckGroupChecksLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckGroupChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckGroupChecksLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Primary_Cell) at CheckGroupChecksLV.pcf: line 27, column 34
    function sortValue_0 (Check :  entity.Check) : java.lang.Object {
      return Check.Primary
    }
    
    // 'value' attribute on TextCell (id=Check_PayTo_Cell) at CheckGroupChecksLV.pcf: line 32, column 32
    function sortValue_1 (Check :  entity.Check) : java.lang.Object {
      return Check.PayTo
    }
    
    // 'value' attribute on TextCell (id=Check_MailingAddress_Cell) at CheckGroupChecksLV.pcf: line 36, column 54
    function sortValue_2 (Check :  entity.Check) : java.lang.Object {
      return Check.FormatAddressSummary(false)
    }
    
    // 'value' attribute on TextCell (id=Check_Portion_Cell) at CheckGroupChecksLV.pcf: line 40, column 69
    function sortValue_3 (Check :  entity.Check) : java.lang.Object {
      return Check.Portion.getMultiCurrencyDisplayName(Check)
    }
    
    // 'value' attribute on CurrencyCell (id=Check_NetAmount_Cell) at CheckGroupChecksLV.pcf: line 46, column 61
    function sortValue_4 (Check :  entity.Check) : java.lang.Object {
      return Check.NetAmountPair
    }
    
    // 'value' attribute on TypeKeyCell (id=Check_Status_Cell) at CheckGroupChecksLV.pcf: line 51, column 50
    function sortValue_5 (Check :  entity.Check) : java.lang.Object {
      return Check.Status
    }
    
    // 'value' attribute on RowIterator at CheckGroupChecksLV.pcf: line 16, column 34
    function value_22 () : entity.Check[] {
      return CheckGroup.Checks
    }
    
    property get CheckGroup () : CheckGroup {
      return getRequireValue("CheckGroup", 0) as CheckGroup
    }
    
    property set CheckGroup ($arg :  CheckGroup) {
      setRequireValue("CheckGroup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckGroupChecksLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CheckGroupChecksLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Primary_Cell) at CheckGroupChecksLV.pcf: line 27, column 34
    function valueRoot_7 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextCell (id=Check_MailingAddress_Cell) at CheckGroupChecksLV.pcf: line 36, column 54
    function value_12 () : java.lang.String {
      return Check.FormatAddressSummary(false)
    }
    
    // 'value' attribute on TextCell (id=Check_Portion_Cell) at CheckGroupChecksLV.pcf: line 40, column 69
    function value_14 () : java.lang.String {
      return Check.Portion.getMultiCurrencyDisplayName(Check)
    }
    
    // 'value' attribute on CurrencyCell (id=Check_NetAmount_Cell) at CheckGroupChecksLV.pcf: line 46, column 61
    function value_16 () : gw.api.financials.CurrencyAmountPair {
      return Check.NetAmountPair
    }
    
    // 'value' attribute on TypeKeyCell (id=Check_Status_Cell) at CheckGroupChecksLV.pcf: line 51, column 50
    function value_19 () : typekey.TransactionStatus {
      return Check.Status
    }
    
    // 'value' attribute on BooleanRadioCell (id=Primary_Cell) at CheckGroupChecksLV.pcf: line 27, column 34
    function value_6 () : java.lang.Boolean {
      return Check.Primary
    }
    
    // 'value' attribute on TextCell (id=Check_PayTo_Cell) at CheckGroupChecksLV.pcf: line 32, column 32
    function value_9 () : java.lang.String {
      return Check.PayTo
    }
    
    property get Check () : entity.Check {
      return getIteratedValue(1) as entity.Check
    }
    
    
  }
  
  
}