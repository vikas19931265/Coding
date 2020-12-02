package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/FixPropContentItemLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FixPropContentItemLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/FixPropContentItemLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FixPropContentItemLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at FixPropContentItemLV.pcf: line 21, column 50
    function pickLocation_48 () : void {
      NewFixPropContentItemPopup.push(FixedPropertyIncident)
    }
    
    // 'value' attribute on TypeKeyCell (id=Schedule_Cell) at FixPropContentItemLV.pcf: line 27, column 56
    function sortValue_0 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.ContentSchedule
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at FixPropContentItemLV.pcf: line 32, column 56
    function sortValue_1 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.ContentCategory
    }
    
    // 'value' attribute on TextCell (id=NumberOfItems_Cell) at FixPropContentItemLV.pcf: line 38, column 42
    function sortValue_2 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=Brand_Cell) at FixPropContentItemLV.pcf: line 42, column 48
    function sortValue_3 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.Brand
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FixPropContentItemLV.pcf: line 48, column 54
    function sortValue_4 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.Description
    }
    
    // 'value' attribute on DateCell (id=DateAcquired_Cell) at FixPropContentItemLV.pcf: line 52, column 55
    function sortValue_5 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.DateAcquired
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at FixPropContentItemLV.pcf: line 58, column 56
    function sortValue_6 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.Action
    }
    
    // 'value' attribute on CurrencyCell (id=PurchaseCost_Cell) at FixPropContentItemLV.pcf: line 63, column 55
    function sortValue_7 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.PurchaseCost
    }
    
    // 'value' attribute on CurrencyCell (id=CalcItemValue_Cell) at FixPropContentItemLV.pcf: line 68, column 61
    function sortValue_8 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.contentItemValue()
    }
    
    // 'value' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function sortValue_9 (AssessmentContentItem :  entity.AssessmentContentItem) : java.lang.Object {
      return AssessmentContentItem.AssessmentSource
    }
    
    // 'toAdd' attribute on RowIterator at FixPropContentItemLV.pcf: line 21, column 50
    function toAdd_49 (AssessmentContentItem :  entity.AssessmentContentItem) : void {
      FixedPropertyIncident.addToContentItemLine(AssessmentContentItem)
    }
    
    // 'toRemove' attribute on RowIterator at FixPropContentItemLV.pcf: line 21, column 50
    function toRemove_50 (AssessmentContentItem :  entity.AssessmentContentItem) : void {
      FixedPropertyIncident.removeFromContentItemLine(AssessmentContentItem)
    }
    
    // 'value' attribute on RowIterator at FixPropContentItemLV.pcf: line 21, column 50
    function value_51 () : entity.AssessmentContentItem[] {
      return FixedPropertyIncident.ContentItemLine
    }
    
    property get FixedPropertyIncident () : FixedPropertyIncident {
      return getRequireValue("FixedPropertyIncident", 0) as FixedPropertyIncident
    }
    
    property set FixedPropertyIncident ($arg :  FixedPropertyIncident) {
      setRequireValue("FixedPropertyIncident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/FixPropContentItemLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FixPropContentItemLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at FixPropContentItemLV.pcf: line 48, column 54
    function action_23 () : void {
      FixPropContentItemPopup.push(AssessmentContentItem)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at FixPropContentItemLV.pcf: line 48, column 54
    function action_dest_24 () : pcf.api.Destination {
      return pcf.FixPropContentItemPopup.createDestination(AssessmentContentItem)
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at FixPropContentItemLV.pcf: line 58, column 56
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.Action = (__VALUE_TO_SET as typekey.AssessmentContentAction)
    }
    
    // 'value' attribute on CurrencyCell (id=PurchaseCost_Cell) at FixPropContentItemLV.pcf: line 63, column 55
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.PurchaseCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.AssessmentSource = (__VALUE_TO_SET as entity.AssessmentSource)
    }
    
    // 'format' attribute on TextCell (id=NumberOfItems_Cell) at FixPropContentItemLV.pcf: line 38, column 42
    function format_16 () : java.lang.String {
      return FixedPropertyIncident.IntegerFormat
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function valueRange_44 () : java.lang.Object {
      return AssessmentContentItem.Incident.SourceLine
    }
    
    // 'value' attribute on TypeKeyCell (id=Schedule_Cell) at FixPropContentItemLV.pcf: line 27, column 56
    function valueRoot_11 () : java.lang.Object {
      return AssessmentContentItem
    }
    
    // 'value' attribute on TypeKeyCell (id=Schedule_Cell) at FixPropContentItemLV.pcf: line 27, column 56
    function value_10 () : typekey.ContentLineItemSchedule {
      return AssessmentContentItem.ContentSchedule
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at FixPropContentItemLV.pcf: line 32, column 56
    function value_13 () : typekey.ContentLineItemCategory {
      return AssessmentContentItem.ContentCategory
    }
    
    // 'value' attribute on TextCell (id=NumberOfItems_Cell) at FixPropContentItemLV.pcf: line 38, column 42
    function value_17 () : java.lang.Integer {
      return AssessmentContentItem.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=Brand_Cell) at FixPropContentItemLV.pcf: line 42, column 48
    function value_20 () : java.lang.String {
      return AssessmentContentItem.Brand
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at FixPropContentItemLV.pcf: line 48, column 54
    function value_25 () : java.lang.String {
      return AssessmentContentItem.Description
    }
    
    // 'value' attribute on DateCell (id=DateAcquired_Cell) at FixPropContentItemLV.pcf: line 52, column 55
    function value_28 () : java.util.Date {
      return AssessmentContentItem.DateAcquired
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at FixPropContentItemLV.pcf: line 58, column 56
    function value_31 () : typekey.AssessmentContentAction {
      return AssessmentContentItem.Action
    }
    
    // 'value' attribute on CurrencyCell (id=PurchaseCost_Cell) at FixPropContentItemLV.pcf: line 63, column 55
    function value_35 () : gw.api.financials.CurrencyAmount {
      return AssessmentContentItem.PurchaseCost
    }
    
    // 'value' attribute on CurrencyCell (id=CalcItemValue_Cell) at FixPropContentItemLV.pcf: line 68, column 61
    function value_39 () : gw.api.financials.CurrencyAmount {
      return AssessmentContentItem.contentItemValue()
    }
    
    // 'value' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function value_41 () : entity.AssessmentSource {
      return AssessmentContentItem.AssessmentSource
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function verifyValueRangeIsAllowedType_45 ($$arg :  entity.AssessmentSource[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function verifyValueRangeIsAllowedType_45 ($$arg :  gw.api.database.IQueryBeanResult<entity.AssessmentSource>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssessmentSource_Cell) at FixPropContentItemLV.pcf: line 75, column 48
    function verifyValueRange_46 () : void {
      var __valueRangeArg = AssessmentContentItem.Incident.SourceLine
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_45(__valueRangeArg)
    }
    
    property get AssessmentContentItem () : entity.AssessmentContentItem {
      return getIteratedValue(1) as entity.AssessmentContentItem
    }
    
    
  }
  
  
}