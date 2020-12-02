package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NewLossDetailsPanelSet_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NewLossDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 161, column 29
    function def_onEnter_86 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 174, column 29
    function def_onEnter_88 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 185, column 56
    function def_onEnter_90 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 192, column 29
    function def_onEnter_92 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 204, column 29
    function def_onEnter_94 (def :  pcf.PriorClaimsLV) : void {
      def.onEnter(claim.findPriorClaimsByPolicyNumber(claim.Policy.PolicyNumber, {ClaimState.TC_DRAFT}))
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 212, column 29
    function def_onEnter_96 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 161, column 29
    function def_refreshVariables_87 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 174, column 29
    function def_refreshVariables_89 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 185, column 56
    function def_refreshVariables_91 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 192, column 29
    function def_refreshVariables_93 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 204, column 29
    function def_refreshVariables_95 (def :  pcf.PriorClaimsLV) : void {
      def.refreshVariables(claim.findPriorClaimsByPolicyNumber(claim.Policy.PolicyNumber, {ClaimState.TC_DRAFT}))
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 212, column 29
    function def_refreshVariables_97 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 54, column 50
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 62, column 38
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 72, column 41
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 81, column 64
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.PropertyFireDamage.Arson = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 88, column 53
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.LocationOfTheft = (__VALUE_TO_SET as typekey.LocationOfTheft)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 102, column 43
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 113, column 50
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 130, column 39
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 135, column 42
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 141, column 48
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 146, column 41
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 40, column 40
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 152, column 45
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 17, column 53
    function initialValue_0 () : gw.api.claim.FnolWizardPropertyHelper {
      return new gw.api.claim.FnolWizardPropertyHelper(claim)
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 74, column 72
    function onChange_25 () : void {
      PropertyHelper.createDamageTypesPerLossCause()
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 120, column 35
    function validationExpression_59 () : java.lang.Object {
      return claim.LossDate == null || claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 130, column 39
    function validationExpression_64 () : java.lang.Object {
      return claim.ReportedDate == null || claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 54, column 50
    function valueRange_17 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function valueRange_45 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 25, column 46
    function valueRoot_2 () : java.lang.Object {
      return claim.Policy
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 81, column 64
    function valueRoot_33 () : java.lang.Object {
      return claim.PropertyFireDamage
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 40, column 40
    function valueRoot_9 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 25, column 46
    function value_1 () : java.lang.String {
      return claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 46, column 41
    function value_11 () : typekey.LossType {
      return claim.LossType
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 54, column 50
    function value_14 () : typekey.ClaimSecurityType {
      return claim.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 62, column 38
    function value_21 () : java.lang.String {
      return claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 72, column 41
    function value_26 () : typekey.LossCause {
      return claim.LossCause
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 81, column 64
    function value_31 () : java.lang.Boolean {
      return claim.PropertyFireDamage.Arson
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 88, column 53
    function value_37 () : typekey.LocationOfTheft {
      return claim.LocationOfTheft
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 30, column 45
    function value_4 () : typekey.PolicyStatus {
      return claim.Policy.Status
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function value_42 () : entity.Catastrophe {
      return claim.Catastrophe
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 102, column 43
    function value_49 () : typekey.FaultRating {
      return claim.FaultRating
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 113, column 50
    function value_54 () : java.math.BigDecimal {
      return claim.Fault
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 120, column 35
    function value_60 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 130, column 39
    function value_65 () : java.util.Date {
      return claim.ReportedDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 40, column 40
    function value_7 () : typekey.LOBCode {
      return claim.LOBCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 135, column 42
    function value_70 () : java.lang.Boolean {
      return claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 141, column 48
    function value_74 () : typekey.HowReportedType {
      return claim.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 146, column 41
    function value_78 () : java.lang.Boolean {
      return claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 152, column 45
    function value_82 () : java.lang.Boolean {
      return claim.CoverageInQuestion
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 54, column 50
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 54, column 50
    function verifyValueRangeIsAllowedType_18 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function verifyValueRangeIsAllowedType_46 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function verifyValueRangeIsAllowedType_46 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 54, column 50
    function verifyValueRange_19 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 96, column 43
    function verifyValueRange_47 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 81, column 64
    function visible_30 () : java.lang.Boolean {
      return PropertyHelper.PropertyFireDamage.Present
    }
    
    // 'visible' attribute on TypeKeyInput (id=LocationOfTheft_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 88, column 53
    function visible_36 () : java.lang.Boolean {
      return claim.LossCause == TC_BURGLARY
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at FNOLWizard_NewLossDetailsPanelSet.CommercialPackage.pcf: line 113, column 50
    function visible_53 () : java.lang.Boolean {
      return  claim.FaultRating == TC_1 
    }
    
    property get PropertyHelper () : gw.api.claim.FnolWizardPropertyHelper {
      return getVariableValue("PropertyHelper", 0) as gw.api.claim.FnolWizardPropertyHelper
    }
    
    property set PropertyHelper ($arg :  gw.api.claim.FnolWizardPropertyHelper) {
      setVariableValue("PropertyHelper", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}