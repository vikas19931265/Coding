package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Employerliability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewExposureDV_EmployerliabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Employerliability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewExposureDV.Employerliability.pcf: line 37, column 63
    function action_16 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_6 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_8 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewExposureDV.Employerliability.pcf: line 37, column 63
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewExposureDV.Employerliability.pcf: line 55, column 48
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at NewExposureDV.Employerliability.pcf: line 61, column 49
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at NewExposureDV.Employerliability.pcf: line 72, column 38
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at NewExposureDV.Employerliability.pcf: line 78, column 43
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleMethod = (__VALUE_TO_SET as typekey.SettleMethod)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Employerliability.pcf: line 88, column 43
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Employerliability.pcf: line 88, column 43
    function filter_47 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'validationExpression' attribute on DateInput (id=SettlementDate_Input) at NewExposureDV.Employerliability.pcf: line 72, column 38
    function validationExpression_34 () : java.lang.Object {
      return Exposure.SettleDate == null || Exposure.SettleDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewExposureDV.Employerliability.pcf: line 23, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewExposureDV.Employerliability.pcf: line 55, column 48
    function valueRoot_28 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewExposureDV.Employerliability.pcf: line 23, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_10 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Employerliability.pcf: line 44, column 65
    function value_22 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewExposureDV.Employerliability.pcf: line 55, column 48
    function value_26 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewExposureDV.Employerliability.pcf: line 28, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at NewExposureDV.Employerliability.pcf: line 61, column 49
    function value_30 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at NewExposureDV.Employerliability.pcf: line 72, column 38
    function value_35 () : java.util.Date {
      return Exposure.SettleDate
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at NewExposureDV.Employerliability.pcf: line 78, column 43
    function value_40 () : typekey.SettleMethod {
      return Exposure.SettleMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Employerliability.pcf: line 88, column 43
    function value_44 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at NewExposureDV.Employerliability.pcf: line 93, column 43
    function value_49 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at NewExposureDV.Employerliability.pcf: line 98, column 44
    function value_52 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Employerliability.pcf: line 44, column 65
    function visible_21 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewExposureDV.Employerliability.pcf: line 30, column 59
    function visible_25 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
  }
  
  
}