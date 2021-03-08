package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/AdditionalTripSegmentInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalTripSegmentInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/AdditionalTripSegmentInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalTripSegmentInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Approve) at AdditionalTripSegmentInputSet.pcf: line 106, column 65
    function action_52 () : void {
      anAddnlTripSegment.Assessment = TC_APPROVE
    }
    
    // 'action' attribute on Link (id=Review) at AdditionalTripSegmentInputSet.pcf: line 113, column 64
    function action_54 () : void {
      anAddnlTripSegment.Assessment = TC_REVIEW
    }
    
    // 'action' attribute on Link (id=Deny) at AdditionalTripSegmentInputSet.pcf: line 120, column 62
    function action_56 () : void {
      anAddnlTripSegment.Assessment = TC_DENY
    }
    
    // 'action' attribute on Link (id=Clear) at AdditionalTripSegmentInputSet.pcf: line 127, column 58
    function action_58 () : void {
      anAddnlTripSegment.Assessment = null
    }
    
    // 'available' attribute on TextAreaInput (id=ReasonForDenial_Input) at AdditionalTripSegmentInputSet.pcf: line 137, column 74
    function available_59 () : java.lang.Boolean {
      return anAddnlTripSegment.ReasonForDenial == null or anAddnlTripSegment.ReasonForDenial.length == 0
    }
    
    // 'value' attribute on TypeKeyInput (id=TransportType_Input) at AdditionalTripSegmentInputSet.pcf: line 22, column 41
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.TransportType = (__VALUE_TO_SET as typekey.TransportType)
    }
    
    // 'value' attribute on TextInput (id=PortOfEmbarkation_Input) at AdditionalTripSegmentInputSet.pcf: line 39, column 53
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.PortOfEmbarkation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PortOfDisembarkation_Input) at AdditionalTripSegmentInputSet.pcf: line 44, column 56
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.PortOfDisembarkation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=StartedOn_Input) at AdditionalTripSegmentInputSet.pcf: line 52, column 45
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EndedOn_Input) at AdditionalTripSegmentInputSet.pcf: line 60, column 43
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CurrencyInput (id=PaidAmount_Input) at AdditionalTripSegmentInputSet.pcf: line 69, column 46
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.PaidAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=AgentFees_Input) at AdditionalTripSegmentInputSet.pcf: line 76, column 165
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.AgentFees = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=OtherFees_Input) at AdditionalTripSegmentInputSet.pcf: line 82, column 45
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.OtherFees = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=CarrierName_Input) at AdditionalTripSegmentInputSet.pcf: line 29, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.CarrierName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonForDenial_Input) at AdditionalTripSegmentInputSet.pcf: line 137, column 74
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.ReasonForDenial = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=CarrierNumber_Input) at AdditionalTripSegmentInputSet.pcf: line 34, column 49
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.CarrierNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'required' attribute on TextAreaInput (id=ReasonForDenial_Input) at AdditionalTripSegmentInputSet.pcf: line 137, column 74
    function required_61 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == TC_DENY 
    }
    
    // 'validationExpression' attribute on DateInput (id=StartedOn_Input) at AdditionalTripSegmentInputSet.pcf: line 52, column 45
    function validationExpression_20 () : java.lang.Object {
      return anAddnlTripSegment.StartDate > anAddnlTripSegment.TripSegment.TripIncident.TripRU.EndDate ? DisplayKey.get("Web.ClaimPolicy.Trips.Segment.DepartureDate.Validation") : null
    }
    
    // 'validationExpression' attribute on DateInput (id=EndedOn_Input) at AdditionalTripSegmentInputSet.pcf: line 60, column 43
    function validationExpression_26 () : java.lang.Object {
      return anAddnlTripSegment.StartDate > anAddnlTripSegment.EndDate ? DisplayKey.get("Web.ClaimPolicy.Trips.Segment.ArrivalDate.Validation") : null
    }
    
    // 'value' attribute on TypeKeyInput (id=TransportType_Input) at AdditionalTripSegmentInputSet.pcf: line 22, column 41
    function valueRoot_2 () : java.lang.Object {
      return anAddnlTripSegment
    }
    
    // 'value' attribute on TypeKeyInput (id=TransportType_Input) at AdditionalTripSegmentInputSet.pcf: line 22, column 41
    function value_0 () : typekey.TransportType {
      return anAddnlTripSegment.TransportType
    }
    
    // 'value' attribute on TextInput (id=PortOfEmbarkation_Input) at AdditionalTripSegmentInputSet.pcf: line 39, column 53
    function value_12 () : java.lang.String {
      return anAddnlTripSegment.PortOfEmbarkation
    }
    
    // 'value' attribute on TextInput (id=PortOfDisembarkation_Input) at AdditionalTripSegmentInputSet.pcf: line 44, column 56
    function value_16 () : java.lang.String {
      return anAddnlTripSegment.PortOfDisembarkation
    }
    
    // 'value' attribute on DateInput (id=StartedOn_Input) at AdditionalTripSegmentInputSet.pcf: line 52, column 45
    function value_21 () : java.util.Date {
      return anAddnlTripSegment.StartDate
    }
    
    // 'value' attribute on DateInput (id=EndedOn_Input) at AdditionalTripSegmentInputSet.pcf: line 60, column 43
    function value_27 () : java.util.Date {
      return anAddnlTripSegment.EndDate
    }
    
    // 'value' attribute on CurrencyInput (id=PaidAmount_Input) at AdditionalTripSegmentInputSet.pcf: line 69, column 46
    function value_32 () : gw.api.financials.CurrencyAmount {
      return anAddnlTripSegment.PaidAmount
    }
    
    // 'value' attribute on CurrencyInput (id=AgentFees_Input) at AdditionalTripSegmentInputSet.pcf: line 76, column 165
    function value_37 () : gw.api.financials.CurrencyAmount {
      return anAddnlTripSegment.AgentFees
    }
    
    // 'value' attribute on TextInput (id=CarrierName_Input) at AdditionalTripSegmentInputSet.pcf: line 29, column 47
    function value_4 () : java.lang.String {
      return anAddnlTripSegment.CarrierName
    }
    
    // 'value' attribute on CurrencyInput (id=OtherFees_Input) at AdditionalTripSegmentInputSet.pcf: line 82, column 45
    function value_42 () : gw.api.financials.CurrencyAmount {
      return anAddnlTripSegment.OtherFees
    }
    
    // 'value' attribute on TypeKeyInput (id=Assessment_Input) at AdditionalTripSegmentInputSet.pcf: line 90, column 45
    function value_46 () : typekey.AssessmentAction {
      return anAddnlTripSegment.Assessment
    }
    
    // 'value' attribute on CurrencyInput (id=FinancialImpact_Input) at AdditionalTripSegmentInputSet.pcf: line 95, column 69
    function value_49 () : gw.api.financials.CurrencyAmount {
      return anAddnlTripSegment.getFinancialImpact(  TC_APPROVE )
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonForDenial_Input) at AdditionalTripSegmentInputSet.pcf: line 137, column 74
    function value_62 () : java.lang.String {
      return anAddnlTripSegment.ReasonForDenial
    }
    
    // 'value' attribute on TextInput (id=CarrierNumber_Input) at AdditionalTripSegmentInputSet.pcf: line 34, column 49
    function value_8 () : java.lang.String {
      return anAddnlTripSegment.CarrierNumber
    }
    
    // 'visible' attribute on CurrencyInput (id=AgentFees_Input) at AdditionalTripSegmentInputSet.pcf: line 76, column 165
    function visible_36 () : java.lang.Boolean {
      return anAddnlTripSegment.TransportType == TC_AIRLINE or anAddnlTripSegment.TransportType == TC_BUS or anAddnlTripSegment.TransportType == TC_CRUISE_SHIP
    }
    
    // 'visible' attribute on Link (id=Approve) at AdditionalTripSegmentInputSet.pcf: line 106, column 65
    function visible_51 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment != TC_APPROVE 
    }
    
    // 'visible' attribute on Link (id=Review) at AdditionalTripSegmentInputSet.pcf: line 113, column 64
    function visible_53 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment != TC_REVIEW 
    }
    
    // 'visible' attribute on Link (id=Deny) at AdditionalTripSegmentInputSet.pcf: line 120, column 62
    function visible_55 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment != TC_DENY 
    }
    
    // 'visible' attribute on Link (id=Clear) at AdditionalTripSegmentInputSet.pcf: line 127, column 58
    function visible_57 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment != null
    }
    
    // 'visible' attribute on TextAreaInput (id=ReasonForDenial_Input) at AdditionalTripSegmentInputSet.pcf: line 137, column 74
    function visible_60 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == TC_DENY ? true : false
    }
    
    property get aTripIncident () : TripIncident {
      return getRequireValue("aTripIncident", 0) as TripIncident
    }
    
    property set aTripIncident ($arg :  TripIncident) {
      setRequireValue("aTripIncident", 0, $arg)
    }
    
    property get anAddnlTripSegment () : AddnlTripSegment {
      return getRequireValue("anAddnlTripSegment", 0) as AddnlTripSegment
    }
    
    property set anAddnlTripSegment ($arg :  AddnlTripSegment) {
      setRequireValue("anAddnlTripSegment", 0, $arg)
    }
    
    
  }
  
  
}