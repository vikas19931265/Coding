package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditablePropertyPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditablePropertyPolicyCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditablePropertyPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditablePropertyPolicyCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on ListViewPanel (id=EditablePropertyPolicyCoveragesLV) at EditablePropertyPolicyCoveragesLV.pcf: line 9, column 20
    function editable_39 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 35, column 24
    function sortValue_0 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 46, column 64
    function sortValue_1 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 55, column 69
    function sortValue_3 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 61, column 49
    function sortValue_5 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 67, column 49
    function sortValue_6 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 73, column 41
    function sortValue_7 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Notes
    }
    
    // 'toAdd' attribute on RowIterator at EditablePropertyPolicyCoveragesLV.pcf: line 23, column 43
    function toAdd_36 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.addCoverage(PolicyCoverage)
    }
    
    // 'toRemove' attribute on RowIterator at EditablePropertyPolicyCoveragesLV.pcf: line 23, column 43
    function toRemove_37 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.removeCoverage(PolicyCoverage)
    }
    
    // 'value' attribute on RowIterator at EditablePropertyPolicyCoveragesLV.pcf: line 23, column 43
    function value_38 () : entity.PolicyCoverage[] {
      return Policy.Coverages
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 46, column 64
    function visible_2 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 55, column 69
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
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditablePropertyPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditablePropertyPolicyCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 46, column 64
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 61, column 49
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.ExposureLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 67, column 49
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.IncidentLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 73, column 41
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 35, column 24
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Type = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Currency_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 46, column 64
    function editable_12 () : java.lang.Boolean {
      return PolicyCoverage.allowCurrencyChange()
    }
    
    // 'editable' attribute on Row at EditablePropertyPolicyCoveragesLV.pcf: line 25, column 37
    function editable_35 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 35, column 24
    function valueRoot_10 () : java.lang.Object {
      return PolicyCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 46, column 64
    function value_13 () : typekey.Currency {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 55, column 69
    function value_19 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 61, column 49
    function value_23 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 67, column 49
    function value_27 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 73, column 41
    function value_31 () : java.lang.String {
      return PolicyCoverage.Notes
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 35, column 24
    function value_8 () : typekey.CoverageType {
      return PolicyCoverage.Type
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 46, column 64
    function visible_17 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditablePropertyPolicyCoveragesLV.pcf: line 55, column 69
    function visible_21 () : java.lang.Boolean {
      return gw.pcf.PolicyUtils.isDeductiblePresent(Policy)
    }
    
    property get PolicyCoverage () : entity.PolicyCoverage {
      return getIteratedValue(1) as entity.PolicyCoverage
    }
    
    
  }
  
  
}