package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/IncidentAssessItemLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IncidentAssessItemLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/IncidentAssessItemLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IncidentAssessItemLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at IncidentAssessItemLV.pcf: line 21, column 43
    function pickLocation_34 () : void {
      NewIncidentAssessItemPopup.push(incident)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessItemLV.pcf: line 28, column 57
    function sortValue_0 (assessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return assessmentItem.PropertyCategory
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessItemLV.pcf: line 34, column 47
    function sortValue_1 (assessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return assessmentItem.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at IncidentAssessItemLV.pcf: line 40, column 49
    function sortValue_2 (assessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return assessmentItem.Action
    }
    
    // 'value' attribute on CurrencyCell (id=EstimateAmount_Cell) at IncidentAssessItemLV.pcf: line 47, column 27
    function sortValue_3 (assessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return assessmentItem.EstimateAmount
    }
    
    // 'value' attribute on TextCell (id=Comment_Cell) at IncidentAssessItemLV.pcf: line 52, column 47
    function sortValue_4 (assessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return assessmentItem.ItemComment
    }
    
    // 'value' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function sortValue_5 (assessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return assessmentItem.AssessmentSource
    }
    
    // 'toAdd' attribute on RowIterator at IncidentAssessItemLV.pcf: line 21, column 43
    function toAdd_35 (assessmentItem :  entity.AssessmentItem) : void {
      incident.addToItemLine(assessmentItem)
    }
    
    // 'toRemove' attribute on RowIterator at IncidentAssessItemLV.pcf: line 21, column 43
    function toRemove_36 (assessmentItem :  entity.AssessmentItem) : void {
      incident.removeFromItemLine(assessmentItem)
    }
    
    // 'value' attribute on RowIterator at IncidentAssessItemLV.pcf: line 21, column 43
    function value_37 () : entity.AssessmentItem[] {
      return incident.ItemLine
    }
    
    property get incident () : Incident {
      return getRequireValue("incident", 0) as Incident
    }
    
    property set incident ($arg :  Incident) {
      setRequireValue("incident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/IncidentAssessItemLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IncidentAssessItemLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at IncidentAssessItemLV.pcf: line 34, column 47
    function action_10 () : void {
      IncidentAssessItemPopup.push(assessmentItem)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at IncidentAssessItemLV.pcf: line 34, column 47
    function action_dest_11 () : pcf.api.Destination {
      return pcf.IncidentAssessItemPopup.createDestination(assessmentItem)
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at IncidentAssessItemLV.pcf: line 40, column 49
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.Action = (__VALUE_TO_SET as typekey.AssessmentAction)
    }
    
    // 'value' attribute on CurrencyCell (id=EstimateAmount_Cell) at IncidentAssessItemLV.pcf: line 47, column 27
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.EstimateAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=Comment_Cell) at IncidentAssessItemLV.pcf: line 52, column 47
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.ItemComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.AssessmentSource = (__VALUE_TO_SET as entity.AssessmentSource)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessItemLV.pcf: line 28, column 57
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentItem.PropertyCategory = (__VALUE_TO_SET as typekey.PropertyLineItemCategory)
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function valueRange_30 () : java.lang.Object {
      return assessmentItem.Incident.SourceLine
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessItemLV.pcf: line 28, column 57
    function valueRoot_8 () : java.lang.Object {
      return assessmentItem
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessItemLV.pcf: line 34, column 47
    function value_12 () : java.lang.String {
      return assessmentItem.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at IncidentAssessItemLV.pcf: line 40, column 49
    function value_15 () : typekey.AssessmentAction {
      return assessmentItem.Action
    }
    
    // 'value' attribute on CurrencyCell (id=EstimateAmount_Cell) at IncidentAssessItemLV.pcf: line 47, column 27
    function value_19 () : gw.api.financials.CurrencyAmount {
      return assessmentItem.EstimateAmount
    }
    
    // 'value' attribute on TextCell (id=Comment_Cell) at IncidentAssessItemLV.pcf: line 52, column 47
    function value_23 () : java.lang.String {
      return assessmentItem.ItemComment
    }
    
    // 'value' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function value_27 () : entity.AssessmentSource {
      return assessmentItem.AssessmentSource
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessItemLV.pcf: line 28, column 57
    function value_6 () : typekey.PropertyLineItemCategory {
      return assessmentItem.PropertyCategory
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  entity.AssessmentSource[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  gw.api.database.IQueryBeanResult<entity.AssessmentSource>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at IncidentAssessItemLV.pcf: line 59, column 48
    function verifyValueRange_32 () : void {
      var __valueRangeArg = assessmentItem.Incident.SourceLine
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    property get assessmentItem () : entity.AssessmentItem {
      return getIteratedValue(1) as entity.AssessmentItem
    }
    
    
  }
  
  
}