package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditableWorkersCompPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableWorkersCompPolicyCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableWorkersCompPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableWorkersCompPolicyCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at EditableWorkersCompPolicyCoveragesLV.pcf: line 23, column 43
    function editable_9 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'label' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function label_1 () : java.lang.Object {
      return DisplayKey.get("LV.Policy.PolicyCoverages.Currency")
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 33, column 44
    function sortValue_0 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function sortValue_2 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 53, column 69
    function sortValue_4 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 59, column 49
    function sortValue_6 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 65, column 49
    function sortValue_7 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 71, column 41
    function sortValue_8 (PolicyCoverage :  entity.PolicyCoverage) : java.lang.Object {
      return PolicyCoverage.Notes
    }
    
    // 'toAdd' attribute on RowIterator at EditableWorkersCompPolicyCoveragesLV.pcf: line 23, column 43
    function toAdd_39 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.addCoverage(PolicyCoverage)
    }
    
    // 'toRemove' attribute on RowIterator at EditableWorkersCompPolicyCoveragesLV.pcf: line 23, column 43
    function toRemove_40 (PolicyCoverage :  entity.PolicyCoverage) : void {
      Policy.removeCoverage(PolicyCoverage)
    }
    
    // 'value' attribute on RowIterator at EditableWorkersCompPolicyCoveragesLV.pcf: line 23, column 43
    function value_41 () : entity.PolicyCoverage[] {
      return Policy.Coverages
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function visible_3 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 53, column 69
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
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableWorkersCompPolicyCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableWorkersCompPolicyCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 33, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Type = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 59, column 49
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.ExposureLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 65, column 49
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.IncidentLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 71, column 41
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicyCoverage.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function editable_14 () : java.lang.Boolean {
      return PolicyCoverage.allowCurrencyChange()
    }
    
    // 'label' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function label_15 () : java.lang.Object {
      return DisplayKey.get("LV.Policy.PolicyCoverages.Currency")
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 33, column 44
    function valueRoot_12 () : java.lang.Object {
      return PolicyCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 33, column 44
    function value_10 () : typekey.CoverageType {
      return PolicyCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function value_16 () : typekey.Currency {
      return PolicyCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 53, column 69
    function value_23 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 59, column 49
    function value_27 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 65, column 49
    function value_31 () : gw.api.financials.CurrencyAmount {
      return PolicyCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 71, column 41
    function value_35 () : java.lang.String {
      return PolicyCoverage.Notes
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 44, column 64
    function visible_20 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableWorkersCompPolicyCoveragesLV.pcf: line 53, column 69
    function visible_25 () : java.lang.Boolean {
      return gw.pcf.PolicyUtils.isDeductiblePresent(Policy)
    }
    
    property get PolicyCoverage () : entity.PolicyCoverage {
      return getIteratedValue(1) as entity.PolicyCoverage
    }
    
    
  }
  
  
}