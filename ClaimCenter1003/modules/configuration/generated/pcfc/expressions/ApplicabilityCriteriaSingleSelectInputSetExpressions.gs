package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ApplicabilityCriteriaSingleSelectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApplicabilityCriteriaSingleSelectInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ApplicabilityCriteriaSingleSelectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApplicabilityCriteriaSingleSelectInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      listBundle.Selected = (__VALUE_TO_SET as gw.entity.TypeKey)
    }
    
    // 'label' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function label_0 () : java.lang.Object {
      return listBundle.Label
    }
    
    // 'noneSelectedLabel' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function noneSelectedLabel_5 () : java.lang.String {
      return requiredCriteria ? DisplayKey.get("Java.NameValueView.NoneSelected") : DisplayKey.get('Web.BizRules.Rule.ApplicabilityCriteria.All') 
    }
    
    // 'required' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function required_1 () : java.lang.Boolean {
      return requiredCriteria
    }
    
    // 'valueRange' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function valueRange_6 () : java.lang.Object {
      return listBundle.Range
    }
    
    // 'value' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function valueRoot_4 () : java.lang.Object {
      return listBundle
    }
    
    // 'value' attribute on TextInput (id=ReadonlyDisplay_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 30, column 49
    function value_13 () : java.lang.String {
      return listBundle.Selected.DisplayName ?: DisplayKey.get('Web.BizRules.Rule.ApplicabilityCriteria.All') 
    }
    
    // 'value' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function value_2 () : gw.entity.TypeKey {
      return listBundle.Selected
    }
    
    // 'valueRange' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.entity.TypeKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InputWidget_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 23, column 37
    function verifyValueRange_8 () : void {
      var __valueRangeArg = listBundle.Range
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ReadonlyDisplay_Input) at ApplicabilityCriteriaSingleSelectInputSet.pcf: line 30, column 49
    function visible_11 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    property get listBundle () : gw.bizrules.CCRulePanelSetHelper.SingleSelectBundle {
      return getRequireValue("listBundle", 0) as gw.bizrules.CCRulePanelSetHelper.SingleSelectBundle
    }
    
    property set listBundle ($arg :  gw.bizrules.CCRulePanelSetHelper.SingleSelectBundle) {
      setRequireValue("listBundle", 0, $arg)
    }
    
    property get requiredCriteria () : boolean {
      return getRequireValue("requiredCriteria", 0) as java.lang.Boolean
    }
    
    property set requiredCriteria ($arg :  boolean) {
      setRequireValue("requiredCriteria", 0, $arg)
    }
    
    
  }
  
  
}