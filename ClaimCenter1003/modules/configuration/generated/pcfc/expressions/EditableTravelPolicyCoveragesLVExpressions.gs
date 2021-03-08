package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditableTravelPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableTravelPolicyCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableTravelPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableTravelPolicyCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on ListViewPanel (id=EditableTravelPolicyCoveragesLV) at EditableTravelPolicyCoveragesLV.pcf: line 8, column 20
    function editable_44 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'label' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function label_1 () : java.lang.Object {
      return DisplayKey.get("LV.Policy.PolicyCoverages.Currency")
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 34, column 28
    function sortValue_0 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function sortValue_2 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 55, column 69
    function sortValue_4 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 60, column 49
    function sortValue_6 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 65, column 49
    function sortValue_7 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 72, column 29
    function sortValue_8 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Notes
    }
    
    // 'toAdd' attribute on RowIterator at EditableTravelPolicyCoveragesLV.pcf: line 22, column 43
    function toAdd_41 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.addCoverage(PolicyCoverage)
    }
    
    // 'toRemove' attribute on RowIterator at EditableTravelPolicyCoveragesLV.pcf: line 22, column 43
    function toRemove_42 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.removeCoverage(PolicyCoverage)
    }
    
    // 'value' attribute on RowIterator at EditableTravelPolicyCoveragesLV.pcf: line 22, column 43
    function value_43 () : entity.PolicyCoverage[] {
      return Policy.Coverages
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function visible_3 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 55, column 69
    function visible_5 () : java.lang.Boolean {
      return gw.pcf.PolicyUtils.isDeductiblePresent(Policy)
    }
    
    property get Policy () : Policy {
      return getRequireValue("Policy", 0) as Policy
    }
    
    property set Policy ($arg :  Policy) {
      setRequireValue("Policy", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableTravelPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableTravelPolicyCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 34, column 28
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Type = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 60, column 49
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.ExposureLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 65, column 49
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.IncidentLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 72, column 29
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function editable_13 () : java.lang.Boolean {
      return PolicyCoverage.allowCurrencyChange()
    }
    
    // 'editable' attribute on Row at EditableTravelPolicyCoveragesLV.pcf: line 24, column 37
    function editable_40 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'label' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function label_15 () : java.lang.Object {
      return DisplayKey.get("LV.Policy.PolicyCoverages.Currency")
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function validationExpression_14 () : java.lang.Object {
      return util.PolicyUI.handleCoverageCurrencyUpdate(PolicyCoverage)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 34, column 28
    function valueRoot_11 () : java.lang.Object {
      return PolicyCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function value_16 () : typekey.Currency {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 55, column 69
    function value_24 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 60, column 49
    function value_28 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 65, column 49
    function value_32 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 72, column 29
    function value_36 () : java.lang.String {
      return PolicyCoverage.Notes
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 34, column 28
    function value_9 () : typekey.CoverageType {
      return PolicyCoverage.Type
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 46, column 64
    function visible_21 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableTravelPolicyCoveragesLV.pcf: line 55, column 69
    function visible_26 () : java.lang.Boolean {
      return gw.pcf.PolicyUtils.isDeductiblePresent(Policy)
    }
    
    property get PolicyCoverage () : entity.PolicyCoverage {
      return getIteratedValue(1) as entity.PolicyCoverage
    }
    
    
  }
  
  
}