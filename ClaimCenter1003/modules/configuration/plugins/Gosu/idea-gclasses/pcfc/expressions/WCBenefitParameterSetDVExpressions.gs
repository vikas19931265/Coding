package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/wcparms/WCBenefitParameterSetDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCBenefitParameterSetDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/wcparms/WCBenefitParameterSetDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCBenefitParameterSetDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=Factors) at WCBenefitParameterSetDV.pcf: line 195, column 27
    function def_onEnter_121 (def :  pcf.WCBenefitFactorsLV) : void {
      def.onEnter(WCBenefitParameterSet)
    }
    
    // 'def' attribute on ListViewInput (id=Factors) at WCBenefitParameterSetDV.pcf: line 195, column 27
    function def_refreshVariables_122 (def :  pcf.WCBenefitFactorsLV) : void {
      def.refreshVariables(WCBenefitParameterSet)
    }
    
    // 'value' attribute on TypeKeyInput (id=Jurisdiction_Input) at WCBenefitParameterSetDV.pcf: line 22, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TextInput (id=PPDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 168, column 43
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PPDPercentOfWages = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=PPDMax_Input) at WCBenefitParameterSetDV.pcf: line 175, column 43
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PPDMax = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=PPDMin_Input) at WCBenefitParameterSetDV.pcf: line 182, column 43
    function defaultSetter_113 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PPDMin = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PPDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 187, column 55
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PPDMinAdjToAWW = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=EndDate_Input) at WCBenefitParameterSetDV.pcf: line 36, column 48
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=RateCommentsw_Input) at WCBenefitParameterSetDV.pcf: line 41, column 53
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.RateComments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TTDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 51, column 43
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TTDPercentOfWages = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=TTDMax_Input) at WCBenefitParameterSetDV.pcf: line 58, column 43
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TTDMax = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=TTDMin_Input) at WCBenefitParameterSetDV.pcf: line 65, column 43
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TTDMin = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TTDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 70, column 55
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TTDMinAdjToAWW = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=TPDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 80, column 43
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TPDPercentOfWages = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=TPDMax_Input) at WCBenefitParameterSetDV.pcf: line 87, column 43
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TPDMax = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=TPDMin_Input) at WCBenefitParameterSetDV.pcf: line 94, column 43
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TPDMin = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TPDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 99, column 55
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.TPDMinAdjToAWW = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=WaitingPeriodDays_Input) at WCBenefitParameterSetDV.pcf: line 112, column 40
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.WaitingPeriodDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=RetroactivePeriod_Input) at WCBenefitParameterSetDV.pcf: line 119, column 40
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.RetroactivePeriod = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on DateInput (id=StartDate_Input) at WCBenefitParameterSetDV.pcf: line 29, column 50
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=WPNotAppliedToPTD_Input) at WCBenefitParameterSetDV.pcf: line 124, column 58
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.WPNotAppliedToPTD = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=WPNotAppliedToPPD_Input) at WCBenefitParameterSetDV.pcf: line 129, column 58
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.WPNotAppliedToPPD = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PTDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 139, column 43
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PTDPercentOfWages = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=TPTDMax_Input) at WCBenefitParameterSetDV.pcf: line 146, column 43
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PTDMax = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=PTDMin_Input) at WCBenefitParameterSetDV.pcf: line 153, column 43
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PTDMin = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PTDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 158, column 55
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitParameterSet.PTDMinAdjToAWW = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Jurisdiction_Input) at WCBenefitParameterSetDV.pcf: line 22, column 43
    function filter_3 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'validationExpression' attribute on TextInput (id=PPDMax_Input) at WCBenefitParameterSetDV.pcf: line 175, column 43
    function validationExpression_105 () : java.lang.Object {
      return validatePPDBenefit(WCBenefitParameterSet.PPDMin, WCBenefitParameterSet.PPDMax)
    }
    
    // 'validationExpression' attribute on TextInput (id=TTDMax_Input) at WCBenefitParameterSetDV.pcf: line 58, column 43
    function validationExpression_25 () : java.lang.Object {
      return validateTTDBenefit(WCBenefitParameterSet.TTDMin, WCBenefitParameterSet.TTDMax)
    }
    
    // 'validationExpression' attribute on TextInput (id=TPDMax_Input) at WCBenefitParameterSetDV.pcf: line 87, column 43
    function validationExpression_45 () : java.lang.Object {
      return validateTPDBenefit(WCBenefitParameterSet.TPDMin, WCBenefitParameterSet.TPDMax)
    }
    
    // 'validationExpression' attribute on DateInput (id=StartDate_Input) at WCBenefitParameterSetDV.pcf: line 29, column 50
    function validationExpression_5 () : java.lang.Object {
      return validateThisDate()
    }
    
    // 'validationExpression' attribute on TextInput (id=WaitingPeriodDays_Input) at WCBenefitParameterSetDV.pcf: line 112, column 40
    function validationExpression_61 () : java.lang.Object {
      return WCBenefitParameterSet.WaitingPeriodDays < 0 ? DisplayKey.get("DV.Admin.WCBenefitParameterSet.Message.NegativeNumberOfDays") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=RetroactivePeriod_Input) at WCBenefitParameterSetDV.pcf: line 119, column 40
    function validationExpression_67 () : java.lang.Object {
      return WCBenefitParameterSet.RetroactivePeriod < 0 ?  DisplayKey.get("DV.Admin.WCBenefitParameterSet.Message.NegativeRetroactivePeriod") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=TPTDMax_Input) at WCBenefitParameterSetDV.pcf: line 146, column 43
    function validationExpression_85 () : java.lang.Object {
      return validatePTDBenefit(WCBenefitParameterSet.PTDMin, WCBenefitParameterSet.PTDMax)
    }
    
    // 'value' attribute on TypeKeyInput (id=Jurisdiction_Input) at WCBenefitParameterSetDV.pcf: line 22, column 43
    function valueRoot_2 () : java.lang.Object {
      return WCBenefitParameterSet
    }
    
    // 'value' attribute on TypeKeyInput (id=Jurisdiction_Input) at WCBenefitParameterSetDV.pcf: line 22, column 43
    function value_0 () : typekey.Jurisdiction {
      return WCBenefitParameterSet.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=PPDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 168, column 43
    function value_101 () : java.math.BigDecimal {
      return WCBenefitParameterSet.PPDPercentOfWages
    }
    
    // 'value' attribute on TextInput (id=PPDMax_Input) at WCBenefitParameterSetDV.pcf: line 175, column 43
    function value_106 () : java.math.BigDecimal {
      return WCBenefitParameterSet.PPDMax
    }
    
    // 'value' attribute on TextInput (id=PPDMin_Input) at WCBenefitParameterSetDV.pcf: line 182, column 43
    function value_112 () : java.math.BigDecimal {
      return WCBenefitParameterSet.PPDMin
    }
    
    // 'value' attribute on BooleanRadioInput (id=PPDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 187, column 55
    function value_117 () : java.lang.Boolean {
      return WCBenefitParameterSet.PPDMinAdjToAWW
    }
    
    // 'value' attribute on DateInput (id=EndDate_Input) at WCBenefitParameterSetDV.pcf: line 36, column 48
    function value_12 () : java.util.Date {
      return WCBenefitParameterSet.EndDate
    }
    
    // 'value' attribute on TextInput (id=RateCommentsw_Input) at WCBenefitParameterSetDV.pcf: line 41, column 53
    function value_17 () : java.lang.String {
      return WCBenefitParameterSet.RateComments
    }
    
    // 'value' attribute on TextInput (id=TTDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 51, column 43
    function value_21 () : java.math.BigDecimal {
      return WCBenefitParameterSet.TTDPercentOfWages
    }
    
    // 'value' attribute on TextInput (id=TTDMax_Input) at WCBenefitParameterSetDV.pcf: line 58, column 43
    function value_26 () : java.math.BigDecimal {
      return WCBenefitParameterSet.TTDMax
    }
    
    // 'value' attribute on TextInput (id=TTDMin_Input) at WCBenefitParameterSetDV.pcf: line 65, column 43
    function value_32 () : java.math.BigDecimal {
      return WCBenefitParameterSet.TTDMin
    }
    
    // 'value' attribute on BooleanRadioInput (id=TTDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 70, column 55
    function value_37 () : java.lang.Boolean {
      return WCBenefitParameterSet.TTDMinAdjToAWW
    }
    
    // 'value' attribute on TextInput (id=TPDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 80, column 43
    function value_41 () : java.math.BigDecimal {
      return WCBenefitParameterSet.TPDPercentOfWages
    }
    
    // 'value' attribute on TextInput (id=TPDMax_Input) at WCBenefitParameterSetDV.pcf: line 87, column 43
    function value_46 () : java.math.BigDecimal {
      return WCBenefitParameterSet.TPDMax
    }
    
    // 'value' attribute on TextInput (id=TPDMin_Input) at WCBenefitParameterSetDV.pcf: line 94, column 43
    function value_52 () : java.math.BigDecimal {
      return WCBenefitParameterSet.TPDMin
    }
    
    // 'value' attribute on BooleanRadioInput (id=TPDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 99, column 55
    function value_57 () : java.lang.Boolean {
      return WCBenefitParameterSet.TPDMinAdjToAWW
    }
    
    // 'value' attribute on DateInput (id=StartDate_Input) at WCBenefitParameterSetDV.pcf: line 29, column 50
    function value_6 () : java.util.Date {
      return WCBenefitParameterSet.StartDate
    }
    
    // 'value' attribute on TextInput (id=WaitingPeriodDays_Input) at WCBenefitParameterSetDV.pcf: line 112, column 40
    function value_62 () : java.lang.Integer {
      return WCBenefitParameterSet.WaitingPeriodDays
    }
    
    // 'value' attribute on TextInput (id=RetroactivePeriod_Input) at WCBenefitParameterSetDV.pcf: line 119, column 40
    function value_68 () : java.lang.Integer {
      return WCBenefitParameterSet.RetroactivePeriod
    }
    
    // 'value' attribute on CheckBoxInput (id=WPNotAppliedToPTD_Input) at WCBenefitParameterSetDV.pcf: line 124, column 58
    function value_73 () : java.lang.Boolean {
      return WCBenefitParameterSet.WPNotAppliedToPTD
    }
    
    // 'value' attribute on CheckBoxInput (id=WPNotAppliedToPPD_Input) at WCBenefitParameterSetDV.pcf: line 129, column 58
    function value_77 () : java.lang.Boolean {
      return WCBenefitParameterSet.WPNotAppliedToPPD
    }
    
    // 'value' attribute on TextInput (id=PTDPercentOfWages_Input) at WCBenefitParameterSetDV.pcf: line 139, column 43
    function value_81 () : java.math.BigDecimal {
      return WCBenefitParameterSet.PTDPercentOfWages
    }
    
    // 'value' attribute on TextInput (id=TPTDMax_Input) at WCBenefitParameterSetDV.pcf: line 146, column 43
    function value_86 () : java.math.BigDecimal {
      return WCBenefitParameterSet.PTDMax
    }
    
    // 'value' attribute on TextInput (id=PTDMin_Input) at WCBenefitParameterSetDV.pcf: line 153, column 43
    function value_92 () : java.math.BigDecimal {
      return WCBenefitParameterSet.PTDMin
    }
    
    // 'value' attribute on BooleanRadioInput (id=PTDMinAdjToAWW_Input) at WCBenefitParameterSetDV.pcf: line 158, column 55
    function value_97 () : java.lang.Boolean {
      return WCBenefitParameterSet.PTDMinAdjToAWW
    }
    
    property get WCBenefitParameterSet () : WCBenefitParameterSet {
      return getRequireValue("WCBenefitParameterSet", 0) as WCBenefitParameterSet
    }
    
    property set WCBenefitParameterSet ($arg :  WCBenefitParameterSet) {
      setRequireValue("WCBenefitParameterSet", 0, $arg)
    }
    
    
    function validateThisDate() : String {
      if (WCBenefitParameterSet.StartDate > WCBenefitParameterSet.EndDate ) {
         return DisplayKey.get("Rules.Validation.Admin.EffDateGTExpiryDate")
      } else {
        return null
      }
    }
    
    function validateTTDBenefit(min : java.math.BigDecimal, max : java.math.BigDecimal) : String {
      if (testMinMax( min, max )) {
        return DisplayKey.get("DV.Admin.WCBenefitParameterSet.TTD.MinMaxException")
      } else {    
        return null
      }
    }
    
    function validateTPDBenefit(min : java.math.BigDecimal, max : java.math.BigDecimal) : String {
      if (testMinMax( min, max )) {
        return DisplayKey.get("DV.Admin.WCBenefitParameterSet.TPD.MinMaxException")
      } else {
        return null
      }
    }
    
    function validatePTDBenefit(min : java.math.BigDecimal, max : java.math.BigDecimal) : String {
      if (testMinMax( min, max )) {
        return DisplayKey.get("DV.Admin.WCBenefitParameterSet.PTD.MinMaxException")
      } else {
        return null
      }
    }
    
    function validatePPDBenefit(min : java.math.BigDecimal, max : java.math.BigDecimal) : String {
      if (testMinMax( min, max )) {
        return DisplayKey.get("DV.Admin.WCBenefitParameterSet.PPD.MinMaxException")
      } else {
        return null
      }
    }
    
    private function testMinMax(min : java.math.BigDecimal, max : java.math.BigDecimal) : boolean {
      return (min != null and max != null) and (min > max)  
    }
          
        
    
    
  }
  
  
}