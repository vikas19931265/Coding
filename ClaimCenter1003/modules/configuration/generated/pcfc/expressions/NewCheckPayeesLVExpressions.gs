package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/NewCheckPayeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewCheckPayeesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/NewCheckPayeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewCheckPayeesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at NewCheckPayeesLV.pcf: line 29, column 33
    function condition_7 () : java.lang.Boolean {
      return !Check.Primary
    }
    
    // 'value' attribute on TextCell (id=Check_Portion_Cell) at NewCheckPayeesLV.pcf: line 62, column 63
    function valueRoot_22 () : java.lang.Object {
      return Check.Portion
    }
    
    // 'value' attribute on BooleanRadioCell (id=Check_Primary_Cell) at NewCheckPayeesLV.pcf: line 40, column 34
    function valueRoot_9 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextCell (id=Check_PayTo_Cell) at NewCheckPayeesLV.pcf: line 45, column 32
    function value_11 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on TypeKeyCell (id=Check_DeductionType_Cell) at NewCheckPayeesLV.pcf: line 51, column 63
    function value_14 () : typekey.DeductionType {
      return Check.DeductionType
    }
    
    // 'value' attribute on TypeKeyCell (id=Check_DeliverMethod_Cell) at NewCheckPayeesLV.pcf: line 56, column 47
    function value_18 () : typekey.DeliveryMethod {
      return Check.DeliveryMethod
    }
    
    // 'value' attribute on TextCell (id=Check_Portion_Cell) at NewCheckPayeesLV.pcf: line 62, column 63
    function value_21 () : java.lang.String {
      return Check.Portion.DisplayName
    }
    
    // 'value' attribute on BooleanRadioCell (id=Check_Primary_Cell) at NewCheckPayeesLV.pcf: line 40, column 34
    function value_8 () : java.lang.Boolean {
      return Check.Primary
    }
    
    // 'visible' attribute on TypeKeyCell (id=Check_DeductionType_Cell) at NewCheckPayeesLV.pcf: line 51, column 63
    function visible_16 () : java.lang.Boolean {
      return not Wizard.Check.LinkedToServiceRequests
    }
    
    property get Check () : entity.Check {
      return getIteratedValue(1) as entity.Check
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/NewCheckPayeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewCheckPayeesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Check_Primary_Cell) at NewCheckPayeesLV.pcf: line 40, column 34
    function sortValue_0 (Check :  entity.Check) : java.lang.Object {
      return Check.Primary
    }
    
    // 'value' attribute on TextCell (id=Check_PayTo_Cell) at NewCheckPayeesLV.pcf: line 45, column 32
    function sortValue_1 (Check :  entity.Check) : java.lang.Object {
      return Check.PayTo
    }
    
    // 'value' attribute on TypeKeyCell (id=Check_DeductionType_Cell) at NewCheckPayeesLV.pcf: line 51, column 63
    function sortValue_2 (Check :  entity.Check) : java.lang.Object {
      return Check.DeductionType
    }
    
    // 'value' attribute on TypeKeyCell (id=Check_DeliverMethod_Cell) at NewCheckPayeesLV.pcf: line 56, column 47
    function sortValue_4 (Check :  entity.Check) : java.lang.Object {
      return Check.DeliveryMethod
    }
    
    // 'value' attribute on TextCell (id=Check_Portion_Cell) at NewCheckPayeesLV.pcf: line 62, column 63
    function sortValue_5 (Check :  entity.Check) : java.lang.Object {
      return Check.Portion.DisplayName
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at NewCheckPayeesLV.pcf: line 26, column 34
    function toCreateAndAdd_26 () : entity.Check {
      return Wizard.addAdditionalPayee(CheckGroup)
    }
    
    // 'toRemove' attribute on RowIterator at NewCheckPayeesLV.pcf: line 26, column 34
    function toRemove_27 (Check :  entity.Check) : void {
      Wizard.deleteCheck(Check)
    }
    
    // 'value' attribute on RowIterator at NewCheckPayeesLV.pcf: line 26, column 34
    function value_28 () : entity.Check[] {
      return CheckGroup != null ? CheckGroup.DisplayableChecks : new Check[]{Wizard.Check}
    }
    
    // 'visible' attribute on TypeKeyCell (id=Check_DeductionType_Cell) at NewCheckPayeesLV.pcf: line 51, column 63
    function visible_3 () : java.lang.Boolean {
      return not Wizard.Check.LinkedToServiceRequests
    }
    
    property get CheckGroup () : CheckGroup {
      return getRequireValue("CheckGroup", 0) as CheckGroup
    }
    
    property set CheckGroup ($arg :  CheckGroup) {
      setRequireValue("CheckGroup", 0, $arg)
    }
    
    property get Wizard () : gw.api.financials.CheckWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.financials.CheckWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.financials.CheckWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    
  }
  
  
}