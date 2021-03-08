package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionSetSummaryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionSetSummaryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionSetSummaryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionSetSummaryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ApprovableBean_CreateUser_Input) at TransactionSetSummaryInputSet.pcf: line 16, column 62
    function valueRoot_1 () : java.lang.Object {
      return TransactionSet.CreateUser.Contact
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionSetSummaryInputSet.pcf: line 21, column 31
    function valueRoot_4 () : java.lang.Object {
      return TransactionSet
    }
    
    // 'value' attribute on TextInput (id=ApprovableBean_CreateUser_Input) at TransactionSetSummaryInputSet.pcf: line 16, column 62
    function value_0 () : java.lang.String {
      return TransactionSet.CreateUser.Contact.DisplayName
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionSetSummaryInputSet.pcf: line 21, column 31
    function value_3 () : CreatedVia {
      return TransactionSet.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=ApprovableBean_CreateTime_Input) at TransactionSetSummaryInputSet.pcf: line 25, column 42
    function value_7 () : java.util.Date {
      return TransactionSet.CreateTime
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionSetSummaryInputSet.pcf: line 21, column 31
    function verifyValueType_6 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get TransactionSet () : TransactionSet {
      return getRequireValue("TransactionSet", 0) as TransactionSet
    }
    
    property set TransactionSet ($arg :  TransactionSet) {
      setRequireValue("TransactionSet", 0, $arg)
    }
    
    
  }
  
  
}