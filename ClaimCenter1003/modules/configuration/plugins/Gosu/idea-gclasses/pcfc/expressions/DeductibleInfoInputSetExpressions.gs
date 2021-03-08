package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/shared/exposures/DeductibleInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DeductibleInfoInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/shared/exposures/DeductibleInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DeductibleInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CurrencyInput (id=DeductibleAmount_Input) at DeductibleInfoInputSet.pcf: line 38, column 39
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimDeductible.Amount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeductibleOverridden_Input) at DeductibleInfoInputSet.pcf: line 55, column 42
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimDeductible.Overridden = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DeductibleEditReason_Input) at DeductibleInfoInputSet.pcf: line 65, column 71
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimDeductible.EditReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeductibleWaived_Input) at DeductibleInfoInputSet.pcf: line 28, column 38
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimDeductible.Waived = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CurrencyInput (id=DeductibleAmount_Input) at DeductibleInfoInputSet.pcf: line 38, column 39
    function editable_11 () : java.lang.Boolean {
      return claimDeductible.Overridden and !claimDeductible.Waived and canEditDeductible
    }
    
    // 'editable' attribute on BooleanRadioInput (id=DeductibleWaived_Input) at DeductibleInfoInputSet.pcf: line 28, column 38
    function editable_3 () : java.lang.Boolean {
      return claimDeductible.TransactionLineItems.IsEmpty and canEditDeductible
    }
    
    // 'editable' attribute on BooleanRadioInput (id=DeductibleOverridden_Input) at DeductibleInfoInputSet.pcf: line 55, column 42
    function editable_30 () : java.lang.Boolean {
      return !claimDeductible.Waived and canEditDeductible
    }
    
    // 'editable' attribute on TextInput (id=DeductibleEditReason_Input) at DeductibleInfoInputSet.pcf: line 65, column 71
    function editable_36 () : java.lang.Boolean {
      return canEditDeductible
    }
    
    // 'initialValue' attribute on Variable at DeductibleInfoInputSet.pcf: line 15, column 26
    function initialValue_0 () : Deductible {
      return exposure.Coverage.ClaimDeductible
    }
    
    // 'initialValue' attribute on Variable at DeductibleInfoInputSet.pcf: line 20, column 23
    function initialValue_1 () : boolean {
      return perm.Claim.edit(exposure.Claim) and perm.System.editdeductible and gw.api.financials.FinancialsUtil.isUseDeductibleHandling()
    }
    
    // 'onChange' attribute on PostOnChange at DeductibleInfoInputSet.pcf: line 30, column 55
    function onChange_2 () : void {
      claimDeductible.EditReason = null
    }
    
    // 'onChange' attribute on PostOnChange at DeductibleInfoInputSet.pcf: line 57, column 92
    function onChange_29 () : void {
      claimDeductible.recalculateAmount(); claimDeductible.EditReason = null
    }
    
    // 'validationExpression' attribute on CurrencyInput (id=DeductibleAmount_Input) at DeductibleInfoInputSet.pcf: line 38, column 39
    function validationExpression_12 () : java.lang.Object {
      return validateDeductibleAmount()
    }
    
    // 'validationExpression' attribute on BooleanRadioInput (id=DeductibleWaived_Input) at DeductibleInfoInputSet.pcf: line 28, column 38
    function validationExpression_4 () : java.lang.Object {
      return validateDeductibleWaived()
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeductibleWaived_Input) at DeductibleInfoInputSet.pcf: line 28, column 38
    function valueRoot_7 () : java.lang.Object {
      return claimDeductible
    }
    
    // 'value' attribute on CurrencyInput (id=DeductibleAmount_Input) at DeductibleInfoInputSet.pcf: line 38, column 39
    function value_13 () : gw.api.financials.CurrencyAmount {
      return claimDeductible.Amount
    }
    
    // 'value' attribute on CurrencyInput (id=DeductibleAmountApplied_Input) at DeductibleInfoInputSet.pcf: line 44, column 46
    function value_20 () : gw.api.financials.CurrencyAmount {
      return claimDeductible.AmountApplied
    }
    
    // 'value' attribute on CurrencyInput (id=DeductibleAmountRemaining_Input) at DeductibleInfoInputSet.pcf: line 50, column 48
    function value_25 () : gw.api.financials.CurrencyAmount {
      return claimDeductible.AmountRemaining
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeductibleOverridden_Input) at DeductibleInfoInputSet.pcf: line 55, column 42
    function value_31 () : java.lang.Boolean {
      return claimDeductible.Overridden
    }
    
    // 'value' attribute on TextInput (id=DeductibleEditReason_Input) at DeductibleInfoInputSet.pcf: line 65, column 71
    function value_38 () : java.lang.String {
      return claimDeductible.EditReason
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeductibleWaived_Input) at DeductibleInfoInputSet.pcf: line 28, column 38
    function value_5 () : java.lang.Boolean {
      return claimDeductible.Waived
    }
    
    // 'visible' attribute on TextInput (id=DeductibleEditReason_Input) at DeductibleInfoInputSet.pcf: line 65, column 71
    function visible_37 () : java.lang.Boolean {
      return claimDeductible.Overridden or claimDeductible.Waived
    }
    
    // 'visible' attribute on InputSet (id=DeductibleInfoInputSet) at DeductibleInfoInputSet.pcf: line 7, column 39
    function visible_44 () : java.lang.Boolean {
      return claimDeductible != null
    }
    
    property get canEditDeductible () : boolean {
      return getVariableValue("canEditDeductible", 0) as java.lang.Boolean
    }
    
    property set canEditDeductible ($arg :  boolean) {
      setVariableValue("canEditDeductible", 0, $arg)
    }
    
    property get claimDeductible () : Deductible {
      return getVariableValue("claimDeductible", 0) as Deductible
    }
    
    property set claimDeductible ($arg :  Deductible) {
      setVariableValue("claimDeductible", 0, $arg)
    }
    
    property get exposure () : Exposure {
      return getRequireValue("exposure", 0) as Exposure
    }
    
    property set exposure ($arg :  Exposure) {
      setRequireValue("exposure", 0, $arg)
    }
    
    
      function validateDeductibleAmount(): String {
        return claimDeductible.Amount <= claimDeductible.Coverage.DeductibleAmount
          ? null
          : DisplayKey.get("Deductible.AmountCannotExceedOriginal", gw.api.util.CurrencyUtil.renderAsCurrency(claimDeductible.Coverage.DeductibleAmount))
      }
    
      function validateDeductibleWaived(): String {
        if (claimDeductible.Waived) {
          return validateDeductibleAmount()
        }
        return null
      }
    
    
  }
  
  
}