package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/reinsurance/AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementDetailsDV_FacExcessOfLossRIAgreementExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/reinsurance/AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 27, column 35
    function def_onEnter_9 (def :  pcf.RISubtypeAndGroupInputSet) : void {
      def.onEnter( agreement.Claim, agreement )
    }
    
    // 'def' attribute on InputSetRef at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 27, column 35
    function def_refreshVariables_10 (def :  pcf.RISubtypeAndGroupInputSet) : void {
      def.refreshVariables( agreement.Claim, agreement )
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 18, column 44
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AgreementNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AgreementCurrency_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 37, column 62
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyInput (id=AttachmentPoint_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 46, column 44
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AttachmentPoint = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=TopOfLayer_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 53, column 39
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.TopOfLayer = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=RecoveryLimit_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 60, column 42
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.RecoveryLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 68, column 43
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CededShare = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyInput (id=NotificationThreshold_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 75, column 50
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.NotificationThreshold = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=AgreementName_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 24, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AgreementName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TypeKeyInput (id=AgreementCurrency_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 37, column 62
    function label_12 () : java.lang.Object {
      return DisplayKey.get("Web.Claim.Reinsurance.Currency")
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 18, column 44
    function valueRoot_2 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextInput (id=AgreementNumber_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 18, column 44
    function value_0 () : java.lang.String {
      return agreement.AgreementNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=AgreementCurrency_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 37, column 62
    function value_13 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on CurrencyInput (id=AttachmentPoint_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 46, column 44
    function value_19 () : gw.api.financials.CurrencyAmount {
      return agreement.AttachmentPoint
    }
    
    // 'value' attribute on CurrencyInput (id=TopOfLayer_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 53, column 39
    function value_23 () : gw.api.financials.CurrencyAmount {
      return agreement.TopOfLayer
    }
    
    // 'value' attribute on CurrencyInput (id=RecoveryLimit_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 60, column 42
    function value_27 () : gw.api.financials.CurrencyAmount {
      return agreement.RecoveryLimit
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 68, column 43
    function value_31 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on CurrencyInput (id=NotificationThreshold_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 75, column 50
    function value_35 () : gw.api.financials.CurrencyAmount {
      return agreement.NotificationThreshold
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExceedsNotificationThreshold_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 79, column 57
    function value_39 () : java.lang.Boolean {
      return agreement.ExceedsNotificationThreshold
    }
    
    // 'value' attribute on TextInput (id=AgreementName_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 24, column 42
    function value_4 () : java.lang.String {
      return agreement.AgreementName
    }
    
    // 'visible' attribute on TypeKeyInput (id=AgreementCurrency_Input) at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 37, column 62
    function visible_11 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on InputSetRef at AgreementDetailsDV.FacExcessOfLossRIAgreement.pcf: line 27, column 35
    function visible_8 () : java.lang.Boolean {
      return !agreement.New
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    
  }
  
  
}