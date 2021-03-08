package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/IncidentAssessItemDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IncidentAssessItemDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/IncidentAssessItemDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IncidentAssessItemDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at IncidentAssessItemDetailsDV.pcf: line 18, column 55
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.PropertyCategory = (__VALUE_TO_SET as typekey.PropertyLineItemCategory)
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateAmount_Input) at IncidentAssessItemDetailsDV.pcf: line 35, column 48
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.EstimateAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=Comment_Input) at IncidentAssessItemDetailsDV.pcf: line 44, column 45
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.ItemComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.AssessmentSource = (__VALUE_TO_SET as entity.AssessmentSource)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at IncidentAssessItemDetailsDV.pcf: line 24, column 45
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Action_Input) at IncidentAssessItemDetailsDV.pcf: line 30, column 47
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.Action = (__VALUE_TO_SET as typekey.AssessmentAction)
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function valueRange_26 () : java.lang.Object {
      return assessmentItem.Incident.SourceLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at IncidentAssessItemDetailsDV.pcf: line 18, column 55
    function valueRoot_2 () : java.lang.Object {
      return assessmentItem
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at IncidentAssessItemDetailsDV.pcf: line 18, column 55
    function value_0 () : typekey.PropertyLineItemCategory {
      return assessmentItem.PropertyCategory
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateAmount_Input) at IncidentAssessItemDetailsDV.pcf: line 35, column 48
    function value_12 () : gw.api.financials.CurrencyAmount {
      return assessmentItem.EstimateAmount
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at IncidentAssessItemDetailsDV.pcf: line 39, column 44
    function value_16 () : java.util.Date {
      return assessmentItem.CreateTime
    }
    
    // 'value' attribute on TextInput (id=Comment_Input) at IncidentAssessItemDetailsDV.pcf: line 44, column 45
    function value_19 () : java.lang.String {
      return assessmentItem.ItemComment
    }
    
    // 'value' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function value_23 () : entity.AssessmentSource {
      return assessmentItem.AssessmentSource
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at IncidentAssessItemDetailsDV.pcf: line 24, column 45
    function value_4 () : java.lang.String {
      return assessmentItem.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Action_Input) at IncidentAssessItemDetailsDV.pcf: line 30, column 47
    function value_8 () : typekey.AssessmentAction {
      return assessmentItem.Action
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function verifyValueRangeIsAllowedType_27 ($$arg :  entity.AssessmentSource[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function verifyValueRangeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult<entity.AssessmentSource>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at IncidentAssessItemDetailsDV.pcf: line 51, column 46
    function verifyValueRange_28 () : void {
      var __valueRangeArg = assessmentItem.Incident.SourceLine
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    property get assessmentItem () : AssessmentItem {
      return getRequireValue("assessmentItem", 0) as AssessmentItem
    }
    
    property set assessmentItem ($arg :  AssessmentItem) {
      setRequireValue("assessmentItem", 0, $arg)
    }
    
    
  }
  
  
}