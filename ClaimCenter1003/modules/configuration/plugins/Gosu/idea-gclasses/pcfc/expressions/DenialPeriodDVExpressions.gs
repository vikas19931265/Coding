package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.document.SymbolProvider
uses gw.document.GosuCaseInsensitiveBackwardsCompatibleSymbolProvider
@javax.annotation.Generated("config/web/pcf/admin/statutes/DenialPeriodDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DenialPeriodDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/statutes/DenialPeriodDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DenialPeriodDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=AcceptDocumentTemplate_Input) at DenialPeriodDV.pcf: line 87, column 39
    function action_44 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=RejectDocumentTemplate_Input) at DenialPeriodDV.pcf: line 96, column 39
    function action_51 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=AcceptDocumentTemplate_Input) at DenialPeriodDV.pcf: line 87, column 39
    function action_dest_45 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=RejectDocumentTemplate_Input) at DenialPeriodDV.pcf: line 96, column 39
    function action_dest_52 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=AcceptDocumentTemplate_Input) at DenialPeriodDV.pcf: line 87, column 39
    function conversionExpression_46 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'value' attribute on DateInput (id=ExpiryDate_Input) at DenialPeriodDV.pcf: line 38, column 44
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.ExpiryDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BenefitPaymentAcceptance_Input) at DenialPeriodDV.pcf: line 43, column 58
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.BenefitPaymentAcceptance = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at DenialPeriodDV.pcf: line 24, column 43
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyInput (id=DueDateFormula_Input) at DenialPeriodDV.pcf: line 53, column 51
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.DueDateFormula = (__VALUE_TO_SET as typekey.JurisdictionalFormula)
    }
    
    // 'value' attribute on TextInput (id=TargetDaysFromLoss_Input) at DenialPeriodDV.pcf: line 63, column 40
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.TargetDaysFromLoss = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=TargetDaysFromNotice_Input) at DenialPeriodDV.pcf: line 71, column 40
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.TargetDaysFromNotice = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetIncludeDays_Input) at DenialPeriodDV.pcf: line 78, column 46
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.TargetIncludeDays = (__VALUE_TO_SET as typekey.IncludeDaysType)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=AcceptDocumentTemplate_Input) at DenialPeriodDV.pcf: line 87, column 39
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.AcceptDocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=RejectDocumentTemplate_Input) at DenialPeriodDV.pcf: line 96, column 39
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.RejectDocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at DenialPeriodDV.pcf: line 31, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCDenialPeriod.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at DenialPeriodDV.pcf: line 24, column 43
    function filter_4 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'initialValue' attribute on Variable at DenialPeriodDV.pcf: line 13, column 46
    function initialValue_0 () : gw.document.SymbolProvider {
      return createSymbolProvider()
    }
    
    // 'required' attribute on TextInput (id=TargetDaysFromLoss_Input) at DenialPeriodDV.pcf: line 63, column 40
    function required_27 () : java.lang.Boolean {
      return WCDenialPeriod.DueDateFormula == TC_AFTERLOSSDATE or  WCDenialPeriod.DueDateFormula == TC_AFTERLOSSANDNOTICE 
    }
    
    // 'required' attribute on TextInput (id=TargetDaysFromNotice_Input) at DenialPeriodDV.pcf: line 71, column 40
    function required_34 () : java.lang.Boolean {
      return WCDenialPeriod.DueDateFormula == TC_AFTERNOTICEDATE or  WCDenialPeriod.DueDateFormula == TC_AFTERLOSSANDNOTICE
    }
    
    // 'validationExpression' attribute on TextInput (id=TargetDaysFromLoss_Input) at DenialPeriodDV.pcf: line 63, column 40
    function validationExpression_26 () : java.lang.Object {
      return (WCDenialPeriod.TargetDaysFromNotice < 0 ? DisplayKey.get("Rules.Validation.Admin.Denial.NoNegativeValue") : null)
    }
    
    // 'validationExpression' attribute on DateInput (id=EffectiveDate_Input) at DenialPeriodDV.pcf: line 31, column 47
    function validationExpression_6 () : java.lang.Object {
      return validateDate()
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at DenialPeriodDV.pcf: line 24, column 43
    function valueRoot_3 () : java.lang.Object {
      return WCDenialPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at DenialPeriodDV.pcf: line 24, column 43
    function value_1 () : typekey.Jurisdiction {
      return WCDenialPeriod.JurisdictionState
    }
    
    // 'value' attribute on DateInput (id=ExpiryDate_Input) at DenialPeriodDV.pcf: line 38, column 44
    function value_13 () : java.util.Date {
      return WCDenialPeriod.ExpiryDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=BenefitPaymentAcceptance_Input) at DenialPeriodDV.pcf: line 43, column 58
    function value_18 () : java.lang.Boolean {
      return WCDenialPeriod.BenefitPaymentAcceptance
    }
    
    // 'value' attribute on TypeKeyInput (id=DueDateFormula_Input) at DenialPeriodDV.pcf: line 53, column 51
    function value_22 () : typekey.JurisdictionalFormula {
      return WCDenialPeriod.DueDateFormula
    }
    
    // 'value' attribute on TextInput (id=TargetDaysFromLoss_Input) at DenialPeriodDV.pcf: line 63, column 40
    function value_28 () : java.lang.Integer {
      return WCDenialPeriod.TargetDaysFromLoss
    }
    
    // 'value' attribute on TextInput (id=TargetDaysFromNotice_Input) at DenialPeriodDV.pcf: line 71, column 40
    function value_35 () : java.lang.Integer {
      return WCDenialPeriod.TargetDaysFromNotice
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetIncludeDays_Input) at DenialPeriodDV.pcf: line 78, column 46
    function value_40 () : typekey.IncludeDaysType {
      return WCDenialPeriod.TargetIncludeDays
    }
    
    // 'value' attribute on DocumentTemplateInput (id=AcceptDocumentTemplate_Input) at DenialPeriodDV.pcf: line 87, column 39
    function value_47 () : java.lang.String {
      return WCDenialPeriod.AcceptDocumentTemplate
    }
    
    // 'value' attribute on DocumentTemplateInput (id=RejectDocumentTemplate_Input) at DenialPeriodDV.pcf: line 96, column 39
    function value_54 () : java.lang.String {
      return WCDenialPeriod.RejectDocumentTemplate
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at DenialPeriodDV.pcf: line 31, column 47
    function value_7 () : java.util.Date {
      return WCDenialPeriod.EffectiveDate
    }
    
    property get WCDenialPeriod () : WCDenialPeriod {
      return getRequireValue("WCDenialPeriod", 0) as WCDenialPeriod
    }
    
    property set WCDenialPeriod ($arg :  WCDenialPeriod) {
      setRequireValue("WCDenialPeriod", 0, $arg)
    }
    
    property get symbolProvider () : gw.document.SymbolProvider {
      return getVariableValue("symbolProvider", 0) as gw.document.SymbolProvider
    }
    
    property set symbolProvider ($arg :  gw.document.SymbolProvider) {
      setVariableValue("symbolProvider", 0, $arg)
    }
    
    
          function createSymbolProvider(): SymbolProvider {
            return new GosuCaseInsensitiveBackwardsCompatibleSymbolProvider({
              "WCDenialPeriod"->WCDenialPeriod
            })
          }
    
          function validateDate(): String {
            if (WCDenialPeriod.EffectiveDate > WCDenialPeriod.ExpiryDate) {
              return DisplayKey.get("Rules.Validation.Admin.EffDateGTExpiryDate")
            } else {
              return null
            }
          }
          
        
    
    
  }
  
  
}