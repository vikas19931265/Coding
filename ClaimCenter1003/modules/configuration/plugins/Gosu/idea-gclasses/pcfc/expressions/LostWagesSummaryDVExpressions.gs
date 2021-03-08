package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/LostWagesSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LostWagesSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/LostWagesSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LostWagesSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at LostWagesSummaryDV.pcf: line 27, column 49
    function action_4 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_43 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_45 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at LostWagesSummaryDV.pcf: line 77, column 63
    function action_53 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_44 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_46 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at LostWagesSummaryDV.pcf: line 27, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at LostWagesSummaryDV.pcf: line 77, column 63
    function action_dest_54 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at LostWagesSummaryDV.pcf: line 27, column 49
    function available_3 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on InputSetRef (id=RTW) at LostWagesSummaryDV.pcf: line 94, column 32
    function def_onEnter_63 (def :  pcf.ReturnToWorkInputSet_WC) : void {
      def.onEnter(Exposure.Claim.ensureClaimInjuryIncident(), true)
    }
    
    // 'def' attribute on ListViewInput at LostWagesSummaryDV.pcf: line 125, column 27
    function def_onEnter_76 (def :  pcf.EditableClaimantDependentsLV) : void {
      def.onEnter(Exposure.getClaimContactRolesByRole(TC_CLAIMANTDEP), Exposure, TC_CLAIMANTDEP)
    }
    
    // 'def' attribute on ListViewInput at LostWagesSummaryDV.pcf: line 136, column 27
    function def_onEnter_78 (def :  pcf.EditableWorkStatusChangesLV) : void {
      def.onEnter(Exposure.Claim.EmploymentData)
    }
    
    // 'def' attribute on InputSetRef at LostWagesSummaryDV.pcf: line 143, column 51
    function def_onEnter_80 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at LostWagesSummaryDV.pcf: line 145, column 49
    function def_onEnter_82 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef (id=RTW) at LostWagesSummaryDV.pcf: line 94, column 32
    function def_refreshVariables_64 (def :  pcf.ReturnToWorkInputSet_WC) : void {
      def.refreshVariables(Exposure.Claim.ensureClaimInjuryIncident(), true)
    }
    
    // 'def' attribute on ListViewInput at LostWagesSummaryDV.pcf: line 125, column 27
    function def_refreshVariables_77 (def :  pcf.EditableClaimantDependentsLV) : void {
      def.refreshVariables(Exposure.getClaimContactRolesByRole(TC_CLAIMANTDEP), Exposure, TC_CLAIMANTDEP)
    }
    
    // 'def' attribute on ListViewInput at LostWagesSummaryDV.pcf: line 136, column 27
    function def_refreshVariables_79 (def :  pcf.EditableWorkStatusChangesLV) : void {
      def.refreshVariables(Exposure.Claim.EmploymentData)
    }
    
    // 'def' attribute on InputSetRef at LostWagesSummaryDV.pcf: line 143, column 51
    function def_refreshVariables_81 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at LostWagesSummaryDV.pcf: line 145, column 49
    function def_refreshVariables_83 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=DaysInWeek_Input) at LostWagesSummaryDV.pcf: line 107, column 45
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DaysInWeek = (__VALUE_TO_SET as typekey.DaysInWeekType)
    }
    
    // 'value' attribute on TextInput (id=LWImpairment_Input) at LostWagesSummaryDV.pcf: line 114, column 43
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.InjuryIncident.Impairment = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on DateInput (id=Exposure_WageStmtSent_Input) at LostWagesSummaryDV.pcf: line 154, column 40
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.WageStmtSent = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Exposure_WageStmtRecd_Input) at LostWagesSummaryDV.pcf: line 159, column 40
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.WageStmtRecd = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_50 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at LostWagesSummaryDV.pcf: line 20, column 43
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at LostWagesSummaryDV.pcf: line 185, column 57
    function valueRoot_102 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_WorkCompAWW_Input) at LostWagesSummaryDV.pcf: line 101, column 59
    function valueRoot_66 () : java.lang.Object {
      return Exposure.Claim.EmploymentData
    }
    
    // 'value' attribute on TextInput (id=LWImpairment_Input) at LostWagesSummaryDV.pcf: line 114, column 43
    function valueRoot_74 () : java.lang.Object {
      return Exposure.InjuryIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at LostWagesSummaryDV.pcf: line 20, column 43
    function value_0 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at LostWagesSummaryDV.pcf: line 31, column 58
    function value_10 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at LostWagesSummaryDV.pcf: line 185, column 57
    function value_101 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at LostWagesSummaryDV.pcf: line 189, column 54
    function value_104 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at LostWagesSummaryDV.pcf: line 193, column 53
    function value_107 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at LostWagesSummaryDV.pcf: line 197, column 55
    function value_110 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at LostWagesSummaryDV.pcf: line 202, column 56
    function value_113 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at LostWagesSummaryDV.pcf: line 36, column 44
    function value_13 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at LostWagesSummaryDV.pcf: line 42, column 50
    function value_17 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at LostWagesSummaryDV.pcf: line 48, column 50
    function value_22 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at LostWagesSummaryDV.pcf: line 53, column 50
    function value_27 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at LostWagesSummaryDV.pcf: line 59, column 50
    function value_32 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at LostWagesSummaryDV.pcf: line 64, column 33
    function value_36 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at LostWagesSummaryDV.pcf: line 68, column 38
    function value_40 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_47 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at LostWagesSummaryDV.pcf: line 84, column 65
    function value_59 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at LostWagesSummaryDV.pcf: line 27, column 49
    function value_6 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_WorkCompAWW_Input) at LostWagesSummaryDV.pcf: line 101, column 59
    function value_65 () : gw.api.financials.CurrencyAmount {
      return Exposure.Claim.EmploymentData.WageAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=DaysInWeek_Input) at LostWagesSummaryDV.pcf: line 107, column 45
    function value_68 () : typekey.DaysInWeekType {
      return Exposure.DaysInWeek
    }
    
    // 'value' attribute on TextInput (id=LWImpairment_Input) at LostWagesSummaryDV.pcf: line 114, column 43
    function value_72 () : java.math.BigDecimal {
      return Exposure.InjuryIncident.Impairment
    }
    
    // 'value' attribute on DateInput (id=Exposure_WageStmtSent_Input) at LostWagesSummaryDV.pcf: line 154, column 40
    function value_84 () : java.util.Date {
      return Exposure.WageStmtSent
    }
    
    // 'value' attribute on DateInput (id=Exposure_WageStmtRecd_Input) at LostWagesSummaryDV.pcf: line 159, column 40
    function value_88 () : java.util.Date {
      return Exposure.WageStmtRecd
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at LostWagesSummaryDV.pcf: line 167, column 43
    function value_92 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at LostWagesSummaryDV.pcf: line 172, column 44
    function value_95 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at LostWagesSummaryDV.pcf: line 177, column 46
    function value_98 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_51 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_52 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at LostWagesSummaryDV.pcf: line 64, column 33
    function verifyValueType_39 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at LostWagesSummaryDV.pcf: line 42, column 50
    function visible_16 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at LostWagesSummaryDV.pcf: line 53, column 50
    function visible_26 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at LostWagesSummaryDV.pcf: line 84, column 65
    function visible_58 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at LostWagesSummaryDV.pcf: line 70, column 59
    function visible_62 () : java.lang.Boolean {
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