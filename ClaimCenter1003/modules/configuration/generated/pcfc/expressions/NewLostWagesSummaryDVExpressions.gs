package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newexposure/NewLostWagesSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewLostWagesSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newexposure/NewLostWagesSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewLostWagesSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at NewLostWagesSummaryDV.pcf: line 41, column 49
    function action_17 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_42 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_44 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewLostWagesSummaryDV.pcf: line 75, column 63
    function action_52 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at NewLostWagesSummaryDV.pcf: line 41, column 49
    function action_dest_18 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_43 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_45 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewLostWagesSummaryDV.pcf: line 75, column 63
    function action_dest_53 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at NewLostWagesSummaryDV.pcf: line 41, column 49
    function available_16 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on ListViewInput at NewLostWagesSummaryDV.pcf: line 92, column 27
    function def_onEnter_62 (def :  pcf.EditableClaimantDependentsLV) : void {
      def.onEnter(Exposure.getClaimContactRolesByRole(TC_CLAIMANTDEP), Exposure, TC_CLAIMANTDEP)
    }
    
    // 'def' attribute on ListViewInput at NewLostWagesSummaryDV.pcf: line 92, column 27
    function def_refreshVariables_63 (def :  pcf.EditableClaimantDependentsLV) : void {
      def.refreshVariables(Exposure.getClaimContactRolesByRole(TC_CLAIMANTDEP), Exposure, TC_CLAIMANTDEP)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on CurrencyInput (id=AverageWeeklyWages_Input) at NewLostWagesSummaryDV.pcf: line 102, column 46
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.AverageWeeklyWages = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=DaysInWeek_Input) at NewLostWagesSummaryDV.pcf: line 108, column 45
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DaysInWeek = (__VALUE_TO_SET as typekey.DaysInWeekType)
    }
    
    // 'value' attribute on DateInput (id=LastDayWorked_Input) at NewLostWagesSummaryDV.pcf: line 113, column 41
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.LastDayWorked = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=LWImpairment_Input) at NewLostWagesSummaryDV.pcf: line 119, column 43
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.InjuryIncident.Impairment = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewLostWagesSummaryDV.pcf: line 131, column 43
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewLostWagesSummaryDV.pcf: line 131, column 43
    function filter_83 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_49 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewLostWagesSummaryDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=LWImpairment_Input) at NewLostWagesSummaryDV.pcf: line 119, column 43
    function valueRoot_78 () : java.lang.Object {
      return Exposure.InjuryIncident
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at NewLostWagesSummaryDV.pcf: line 154, column 57
    function valueRoot_95 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewLostWagesSummaryDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at NewLostWagesSummaryDV.pcf: line 162, column 53
    function value_100 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at NewLostWagesSummaryDV.pcf: line 166, column 55
    function value_103 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at NewLostWagesSummaryDV.pcf: line 171, column 56
    function value_106 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at NewLostWagesSummaryDV.pcf: line 34, column 50
    function value_12 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at NewLostWagesSummaryDV.pcf: line 41, column 49
    function value_19 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at NewLostWagesSummaryDV.pcf: line 47, column 50
    function value_24 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at NewLostWagesSummaryDV.pcf: line 51, column 58
    function value_28 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at NewLostWagesSummaryDV.pcf: line 57, column 50
    function value_32 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at NewLostWagesSummaryDV.pcf: line 62, column 44
    function value_36 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at NewLostWagesSummaryDV.pcf: line 66, column 38
    function value_39 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at NewLostWagesSummaryDV.pcf: line 23, column 50
    function value_4 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_46 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewLostWagesSummaryDV.pcf: line 82, column 65
    function value_58 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on CurrencyInput (id=AverageWeeklyWages_Input) at NewLostWagesSummaryDV.pcf: line 102, column 46
    function value_64 () : gw.api.financials.CurrencyAmount {
      return Exposure.AverageWeeklyWages
    }
    
    // 'value' attribute on TypeKeyInput (id=DaysInWeek_Input) at NewLostWagesSummaryDV.pcf: line 108, column 45
    function value_68 () : typekey.DaysInWeekType {
      return Exposure.DaysInWeek
    }
    
    // 'value' attribute on DateInput (id=LastDayWorked_Input) at NewLostWagesSummaryDV.pcf: line 113, column 41
    function value_72 () : java.util.Date {
      return Exposure.LastDayWorked
    }
    
    // 'value' attribute on TextInput (id=LWImpairment_Input) at NewLostWagesSummaryDV.pcf: line 119, column 43
    function value_76 () : java.math.BigDecimal {
      return Exposure.InjuryIncident.Impairment
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewLostWagesSummaryDV.pcf: line 28, column 43
    function value_8 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewLostWagesSummaryDV.pcf: line 131, column 43
    function value_80 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at NewLostWagesSummaryDV.pcf: line 136, column 43
    function value_85 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at NewLostWagesSummaryDV.pcf: line 141, column 44
    function value_88 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at NewLostWagesSummaryDV.pcf: line 146, column 46
    function value_91 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at NewLostWagesSummaryDV.pcf: line 154, column 57
    function value_94 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at NewLostWagesSummaryDV.pcf: line 158, column 54
    function value_97 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_50 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_51 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at NewLostWagesSummaryDV.pcf: line 47, column 50
    function visible_23 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at NewLostWagesSummaryDV.pcf: line 23, column 50
    function visible_3 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewLostWagesSummaryDV.pcf: line 82, column 65
    function visible_57 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewLostWagesSummaryDV.pcf: line 68, column 59
    function visible_61 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}