package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/PolicySummaryPropertyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySummaryPropertyLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/PolicySummaryPropertyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicySummaryPropertyLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function available_8 () : java.lang.Boolean {
      return checkboxesAvailable
    }
    
    // 'value' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      prop.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function editable_9 () : java.lang.Boolean {
      return showCheckboxes
    }
    
    // 'value' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function valueRoot_12 () : java.lang.Object {
      return prop
    }
    
    // 'value' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function value_10 () : java.lang.Boolean {
      return prop.Selected
    }
    
    // 'value' attribute on TextCell (id=PropertyNumber_Cell) at PolicySummaryPropertyLV.pcf: line 37, column 42
    function value_17 () : java.lang.Integer {
      return prop.PropertyNumber
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at PolicySummaryPropertyLV.pcf: line 41, column 34
    function value_20 () : java.lang.String {
      return prop.Location
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at PolicySummaryPropertyLV.pcf: line 45, column 40
    function value_23 () : java.lang.String {
      return prop.BuildingNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicySummaryPropertyLV.pcf: line 49, column 37
    function value_26 () : java.lang.String {
      return prop.Description
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PolicySummaryPropertyLV.pcf: line 54, column 40
    function value_29 () : java.lang.String {
      return prop.DisplayAddress
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at PolicySummaryPropertyLV.pcf: line 59, column 37
    function value_32 () : java.lang.String {
      return prop.DisplayCity
    }
    
    property get prop () : entity.PolicySummaryProperty {
      return getIteratedValue(1) as entity.PolicySummaryProperty
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/PolicySummaryPropertyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySummaryPropertyLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function sortValue_0 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.Selected
    }
    
    // 'value' attribute on TextCell (id=PropertyNumber_Cell) at PolicySummaryPropertyLV.pcf: line 37, column 42
    function sortValue_2 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.PropertyNumber
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at PolicySummaryPropertyLV.pcf: line 41, column 34
    function sortValue_3 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.Location
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at PolicySummaryPropertyLV.pcf: line 45, column 40
    function sortValue_4 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.BuildingNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicySummaryPropertyLV.pcf: line 49, column 37
    function sortValue_5 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.Description
    }
    
    // 'sortBy' attribute on TextCell (id=Address_Cell) at PolicySummaryPropertyLV.pcf: line 54, column 40
    function sortValue_6 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=City_Cell) at PolicySummaryPropertyLV.pcf: line 59, column 37
    function sortValue_7 (prop :  entity.PolicySummaryProperty) : java.lang.Object {
      return prop.City
    }
    
    // 'value' attribute on RowIterator at PolicySummaryPropertyLV.pcf: line 21, column 50
    function value_35 () : entity.PolicySummaryProperty[] {
      return policySummary.Properties
    }
    
    // 'visible' attribute on CheckBoxCell (id=PropertySelected_Cell) at PolicySummaryPropertyLV.pcf: line 31, column 37
    function visible_1 () : java.lang.Boolean {
      return showCheckboxes
    }
    
    property get checkboxesAvailable () : boolean {
      return getRequireValue("checkboxesAvailable", 0) as java.lang.Boolean
    }
    
    property set checkboxesAvailable ($arg :  boolean) {
      setRequireValue("checkboxesAvailable", 0, $arg)
    }
    
    property get policySummary () : PolicySummary {
      return getRequireValue("policySummary", 0) as PolicySummary
    }
    
    property set policySummary ($arg :  PolicySummary) {
      setRequireValue("policySummary", 0, $arg)
    }
    
    property get showCheckboxes () : boolean {
      return getRequireValue("showCheckboxes", 0) as java.lang.Boolean
    }
    
    property set showCheckboxes ($arg :  boolean) {
      setRequireValue("showCheckboxes", 0, $arg)
    }
    
    
  }
  
  
}