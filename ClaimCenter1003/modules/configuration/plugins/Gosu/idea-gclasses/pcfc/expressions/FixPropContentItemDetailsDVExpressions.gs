package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/FixPropContentItemDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FixPropContentItemDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/FixPropContentItemDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FixPropContentItemDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Schedule_Input) at FixPropContentItemDetailsDV.pcf: line 18, column 54
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.ContentSchedule = (__VALUE_TO_SET as typekey.ContentLineItemSchedule)
    }
    
    // 'value' attribute on TextInput (id=Brand_Input) at FixPropContentItemDetailsDV.pcf: line 35, column 46
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.Brand = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at FixPropContentItemDetailsDV.pcf: line 41, column 52
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=DateAcquired_Input) at FixPropContentItemDetailsDV.pcf: line 46, column 53
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.DateAcquired = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Action_Input) at FixPropContentItemDetailsDV.pcf: line 52, column 54
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.Action = (__VALUE_TO_SET as typekey.AssessmentContentAction)
    }
    
    // 'value' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.AssessmentSource = (__VALUE_TO_SET as entity.AssessmentSource)
    }
    
    // 'value' attribute on TextInput (id=Comment_Input) at FixPropContentItemDetailsDV.pcf: line 68, column 52
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.ItemComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=PurchaseCost_Input) at FixPropContentItemDetailsDV.pcf: line 77, column 52
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.PurchaseCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=Depreciation_Input) at FixPropContentItemDetailsDV.pcf: line 85, column 52
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.Depreciation = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at FixPropContentItemDetailsDV.pcf: line 24, column 54
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.ContentCategory = (__VALUE_TO_SET as typekey.ContentLineItemCategory)
    }
    
    // 'value' attribute on CurrencyInput (id=Salvage_Input) at FixPropContentItemDetailsDV.pcf: line 93, column 47
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.Salvage = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=NumberOfItems_Input) at FixPropContentItemDetailsDV.pcf: line 30, column 40
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentContentItem.NumberOfItems = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function valueRange_31 () : java.lang.Object {
      return AssessmentContentItem.Incident.SourceLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Schedule_Input) at FixPropContentItemDetailsDV.pcf: line 18, column 54
    function valueRoot_2 () : java.lang.Object {
      return AssessmentContentItem
    }
    
    // 'value' attribute on TypeKeyInput (id=Schedule_Input) at FixPropContentItemDetailsDV.pcf: line 18, column 54
    function value_0 () : typekey.ContentLineItemSchedule {
      return AssessmentContentItem.ContentSchedule
    }
    
    // 'value' attribute on TextInput (id=Brand_Input) at FixPropContentItemDetailsDV.pcf: line 35, column 46
    function value_12 () : java.lang.String {
      return AssessmentContentItem.Brand
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at FixPropContentItemDetailsDV.pcf: line 41, column 52
    function value_16 () : java.lang.String {
      return AssessmentContentItem.Description
    }
    
    // 'value' attribute on DateInput (id=DateAcquired_Input) at FixPropContentItemDetailsDV.pcf: line 46, column 53
    function value_20 () : java.util.Date {
      return AssessmentContentItem.DateAcquired
    }
    
    // 'value' attribute on TypeKeyInput (id=Action_Input) at FixPropContentItemDetailsDV.pcf: line 52, column 54
    function value_24 () : typekey.AssessmentContentAction {
      return AssessmentContentItem.Action
    }
    
    // 'value' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function value_28 () : entity.AssessmentSource {
      return AssessmentContentItem.AssessmentSource
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at FixPropContentItemDetailsDV.pcf: line 63, column 51
    function value_35 () : java.util.Date {
      return AssessmentContentItem.CreateTime
    }
    
    // 'value' attribute on TextInput (id=Comment_Input) at FixPropContentItemDetailsDV.pcf: line 68, column 52
    function value_38 () : java.lang.String {
      return AssessmentContentItem.ItemComment
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at FixPropContentItemDetailsDV.pcf: line 24, column 54
    function value_4 () : typekey.ContentLineItemCategory {
      return AssessmentContentItem.ContentCategory
    }
    
    // 'value' attribute on CurrencyInput (id=PurchaseCost_Input) at FixPropContentItemDetailsDV.pcf: line 77, column 52
    function value_42 () : gw.api.financials.CurrencyAmount {
      return AssessmentContentItem.PurchaseCost
    }
    
    // 'value' attribute on CurrencyInput (id=Depreciation_Input) at FixPropContentItemDetailsDV.pcf: line 85, column 52
    function value_46 () : gw.api.financials.CurrencyAmount {
      return AssessmentContentItem.Depreciation
    }
    
    // 'value' attribute on CurrencyInput (id=Salvage_Input) at FixPropContentItemDetailsDV.pcf: line 93, column 47
    function value_50 () : gw.api.financials.CurrencyAmount {
      return AssessmentContentItem.Salvage
    }
    
    // 'value' attribute on CurrencyInput (id=ItemValue_Input) at FixPropContentItemDetailsDV.pcf: line 102, column 59
    function value_54 () : gw.api.financials.CurrencyAmount {
      return AssessmentContentItem.contentItemValue()
    }
    
    // 'value' attribute on TextInput (id=NumberOfItems_Input) at FixPropContentItemDetailsDV.pcf: line 30, column 40
    function value_8 () : java.lang.Integer {
      return AssessmentContentItem.NumberOfItems
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function verifyValueRangeIsAllowedType_32 ($$arg :  entity.AssessmentSource[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult<entity.AssessmentSource>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssessmentSource_Input) at FixPropContentItemDetailsDV.pcf: line 59, column 46
    function verifyValueRange_33 () : void {
      var __valueRangeArg = AssessmentContentItem.Incident.SourceLine
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    property get AssessmentContentItem () : AssessmentContentItem {
      return getRequireValue("AssessmentContentItem", 0) as AssessmentContentItem
    }
    
    property set AssessmentContentItem ($arg :  AssessmentContentItem) {
      setRequireValue("AssessmentContentItem", 0, $arg)
    }
    
    
  }
  
  
}