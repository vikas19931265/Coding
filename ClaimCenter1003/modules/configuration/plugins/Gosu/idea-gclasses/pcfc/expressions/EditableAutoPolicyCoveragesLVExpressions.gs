package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditableAutoPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableAutoPolicyCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableAutoPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableAutoPolicyCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 34, column 28
    function sortValue_0 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function sortValue_1 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 55, column 69
    function sortValue_3 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 60, column 49
    function sortValue_5 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 65, column 49
    function sortValue_6 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 72, column 29
    function sortValue_7 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Notes
    }
    
    // 'toAdd' attribute on RowIterator at EditableAutoPolicyCoveragesLV.pcf: line 22, column 43
    function toAdd_38 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.addCoverage(PolicyCoverage)
    }
    
    // 'toRemove' attribute on RowIterator at EditableAutoPolicyCoveragesLV.pcf: line 22, column 43
    function toRemove_39 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.removeCoverage(PolicyCoverage)
    }
    
    // 'value' attribute on RowIterator at EditableAutoPolicyCoveragesLV.pcf: line 22, column 43
    function value_40 () : entity.PolicyCoverage[] {
      return Policy.Coverages
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function visible_2 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 55, column 69
    function visible_4 () : java.lang.Boolean {
      return gw.pcf.PolicyUtils.isDeductiblePresent(Policy)
    }
    
    property get Policy () : Policy {
      return getRequireValue("Policy", 0) as Policy
    }
    
    property set Policy ($arg :  Policy) {
      setRequireValue("Policy", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableAutoPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableAutoPolicyCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 60, column 49
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.ExposureLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 65, column 49
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.IncidentLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 72, column 29
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 34, column 28
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Type = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function editable_12 () : java.lang.Boolean {
      return PolicyCoverage.allowCurrencyChange()
    }
    
    // 'editable' attribute on Row at EditableAutoPolicyCoveragesLV.pcf: line 24, column 37
    function editable_37 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function validationExpression_13 () : java.lang.Object {
      return util.PolicyUI.handleCoverageCurrencyUpdate(PolicyCoverage)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 34, column 28
    function valueRoot_10 () : java.lang.Object {
      return PolicyCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function value_14 () : typekey.Currency {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 55, column 69
    function value_21 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 60, column 49
    function value_25 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 65, column 49
    function value_29 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 72, column 29
    function value_33 () : java.lang.String {
      return PolicyCoverage.Notes
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 34, column 28
    function value_8 () : typekey.CoverageType {
      return PolicyCoverage.Type
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 46, column 64
    function visible_19 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableAutoPolicyCoveragesLV.pcf: line 55, column 69
    function visible_23 () : java.lang.Boolean {
      return gw.pcf.PolicyUtils.isDeductiblePresent(Policy)
    }
    
    property get PolicyCoverage () : entity.PolicyCoverage {
      return getIteratedValue(1) as entity.PolicyCoverage
    }
    
    
  }
  
  
}