package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Employerliability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExposureDetailDV_EmployerliabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Employerliability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposureDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Employerliability.pcf: line 53, column 49
    function action_24 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_53 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_55 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at ExposureDetailDV.Employerliability.pcf: line 92, column 63
    function action_63 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Employerliability.pcf: line 53, column 49
    function action_dest_25 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_54 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_56 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at ExposureDetailDV.Employerliability.pcf: line 92, column 63
    function action_dest_64 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Employerliability.pcf: line 53, column 49
    function available_23 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Employerliability.pcf: line 192, column 49
    function def_onEnter_133 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Employerliability.pcf: line 122, column 51
    function def_onEnter_84 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Employerliability.pcf: line 192, column 49
    function def_refreshVariables_134 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Employerliability.pcf: line 122, column 51
    function def_refreshVariables_85 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ExposureDetailDV.Employerliability.pcf: line 115, column 48
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at ExposureDetailDV.Employerliability.pcf: line 120, column 49
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at ExposureDetailDV.Employerliability.pcf: line 133, column 38
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at ExposureDetailDV.Employerliability.pcf: line 139, column 43
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleMethod = (__VALUE_TO_SET as typekey.SettleMethod)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Employerliability.pcf: line 149, column 43
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Employerliability.pcf: line 149, column 43
    function filter_99 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'validationExpression' attribute on DateInput (id=SettlementDate_Input) at ExposureDetailDV.Employerliability.pcf: line 133, column 38
    function validationExpression_86 () : java.lang.Object {
      return Exposure.SettleDate == null || Exposure.SettleDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function valueRange_6 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_60 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at ExposureDetailDV.Employerliability.pcf: line 22, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Employerliability.pcf: line 169, column 60
    function valueRoot_110 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ExposureDetailDV.Employerliability.pcf: line 115, column 48
    function valueRoot_78 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at ExposureDetailDV.Employerliability.pcf: line 22, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at ExposureDetailDV.Employerliability.pcf: line 154, column 43
    function value_101 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at ExposureDetailDV.Employerliability.pcf: line 159, column 44
    function value_104 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Employerliability.pcf: line 169, column 60
    function value_109 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Employerliability.pcf: line 35, column 50
    function value_11 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Employerliability.pcf: line 174, column 60
    function value_114 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at ExposureDetailDV.Employerliability.pcf: line 179, column 60
    function value_119 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Employerliability.pcf: line 184, column 62
    function value_124 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Employerliability.pcf: line 190, column 68
    function value_129 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at ExposureDetailDV.Employerliability.pcf: line 40, column 43
    function value_15 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at ExposureDetailDV.Employerliability.pcf: line 46, column 50
    function value_19 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Employerliability.pcf: line 53, column 49
    function value_26 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function value_3 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Employerliability.pcf: line 59, column 50
    function value_31 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at ExposureDetailDV.Employerliability.pcf: line 63, column 58
    function value_35 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at ExposureDetailDV.Employerliability.pcf: line 69, column 50
    function value_39 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at ExposureDetailDV.Employerliability.pcf: line 74, column 44
    function value_43 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Employerliability.pcf: line 79, column 33
    function value_46 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ExposureDetailDV.Employerliability.pcf: line 83, column 38
    function value_50 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_57 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at ExposureDetailDV.Employerliability.pcf: line 99, column 65
    function value_69 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at ExposureDetailDV.Employerliability.pcf: line 106, column 46
    function value_73 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ExposureDetailDV.Employerliability.pcf: line 115, column 48
    function value_76 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at ExposureDetailDV.Employerliability.pcf: line 120, column 49
    function value_80 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at ExposureDetailDV.Employerliability.pcf: line 133, column 38
    function value_87 () : java.util.Date {
      return Exposure.SettleDate
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at ExposureDetailDV.Employerliability.pcf: line 139, column 43
    function value_92 () : typekey.SettleMethod {
      return Exposure.SettleMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Employerliability.pcf: line 149, column 43
    function value_96 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_61 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_61 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_61 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_62 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_61(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at ExposureDetailDV.Employerliability.pcf: line 30, column 38
    function verifyValueRange_8 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Employerliability.pcf: line 79, column 33
    function verifyValueType_49 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Employerliability.pcf: line 35, column 50
    function visible_10 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on Label at ExposureDetailDV.Employerliability.pcf: line 163, column 70
    function visible_107 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Employerliability.pcf: line 169, column 60
    function visible_108 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Employerliability.pcf: line 174, column 60
    function visible_113 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Employerliability.pcf: line 184, column 62
    function visible_123 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Employerliability.pcf: line 190, column 68
    function visible_128 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Exposure.Claim)
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Employerliability.pcf: line 59, column 50
    function visible_30 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at ExposureDetailDV.Employerliability.pcf: line 99, column 65
    function visible_68 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at ExposureDetailDV.Employerliability.pcf: line 85, column 59
    function visible_72 () : java.lang.Boolean {
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