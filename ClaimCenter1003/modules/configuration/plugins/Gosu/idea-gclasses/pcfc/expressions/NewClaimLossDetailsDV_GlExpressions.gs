package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimLossDetailsDV.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimLossDetailsDV_GlExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimLossDetailsDV.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimLossDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 143, column 27
    function def_onEnter_76 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 156, column 27
    function def_onEnter_78 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef at NewClaimLossDetailsDV.Gl.pcf: line 167, column 54
    function def_onEnter_80 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 174, column 27
    function def_onEnter_82 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 186, column 27
    function def_onEnter_84 (def :  pcf.PriorClaimsLV) : void {
      def.onEnter(Claim.findPriorClaimsByPolicyNumber(Claim.Policy.PolicyNumber, {ClaimState.TC_DRAFT}))
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 194, column 27
    function def_onEnter_86 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 143, column 27
    function def_refreshVariables_77 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 156, column 27
    function def_refreshVariables_79 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on InputSetRef at NewClaimLossDetailsDV.Gl.pcf: line 167, column 54
    function def_refreshVariables_81 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 174, column 27
    function def_refreshVariables_83 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 186, column 27
    function def_refreshVariables_85 (def :  pcf.PriorClaimsLV) : void {
      def.refreshVariables(Claim.findPriorClaimsByPolicyNumber(Claim.Policy.PolicyNumber, {ClaimState.TC_DRAFT}))
    }
    
    // 'def' attribute on ListViewInput at NewClaimLossDetailsDV.Gl.pcf: line 194, column 27
    function def_refreshVariables_87 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at NewClaimLossDetailsDV.Gl.pcf: line 54, column 48
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimLossDetailsDV.Gl.pcf: line 62, column 36
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at NewClaimLossDetailsDV.Gl.pcf: line 72, column 40
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at NewClaimLossDetailsDV.Gl.pcf: line 78, column 41
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at NewClaimLossDetailsDV.Gl.pcf: line 89, column 48
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at NewClaimLossDetailsDV.Gl.pcf: line 106, column 37
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedofManifestation_Input) at NewClaimLossDetailsDV.Gl.pcf: line 112, column 42
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ManifestationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at NewClaimLossDetailsDV.Gl.pcf: line 117, column 40
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at NewClaimLossDetailsDV.Gl.pcf: line 123, column 46
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at NewClaimLossDetailsDV.Gl.pcf: line 128, column 39
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at NewClaimLossDetailsDV.Gl.pcf: line 32, column 38
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at NewClaimLossDetailsDV.Gl.pcf: line 134, column 43
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at NewClaimLossDetailsDV.Gl.pcf: line 96, column 33
    function validationExpression_45 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at NewClaimLossDetailsDV.Gl.pcf: line 106, column 37
    function validationExpression_50 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function valueRange_16 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at NewClaimLossDetailsDV.Gl.pcf: line 54, column 48
    function valueRange_23 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 17, column 44
    function valueRoot_1 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at NewClaimLossDetailsDV.Gl.pcf: line 32, column 38
    function valueRoot_8 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 17, column 44
    function value_0 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at NewClaimLossDetailsDV.Gl.pcf: line 38, column 39
    function value_10 () : typekey.LossType {
      return Claim.LossType
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function value_13 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at NewClaimLossDetailsDV.Gl.pcf: line 54, column 48
    function value_20 () : typekey.ClaimSecurityType {
      return Claim.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimLossDetailsDV.Gl.pcf: line 62, column 36
    function value_27 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at NewClaimLossDetailsDV.Gl.pcf: line 22, column 43
    function value_3 () : typekey.PolicyStatus {
      return Claim.Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at NewClaimLossDetailsDV.Gl.pcf: line 72, column 40
    function value_31 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at NewClaimLossDetailsDV.Gl.pcf: line 78, column 41
    function value_35 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at NewClaimLossDetailsDV.Gl.pcf: line 89, column 48
    function value_40 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at NewClaimLossDetailsDV.Gl.pcf: line 96, column 33
    function value_46 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at NewClaimLossDetailsDV.Gl.pcf: line 106, column 37
    function value_51 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedofManifestation_Input) at NewClaimLossDetailsDV.Gl.pcf: line 112, column 42
    function value_56 () : java.util.Date {
      return Claim.ManifestationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at NewClaimLossDetailsDV.Gl.pcf: line 32, column 38
    function value_6 () : typekey.LOBCode {
      return Claim.LOBCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at NewClaimLossDetailsDV.Gl.pcf: line 117, column 40
    function value_60 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at NewClaimLossDetailsDV.Gl.pcf: line 123, column 46
    function value_64 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at NewClaimLossDetailsDV.Gl.pcf: line 128, column 39
    function value_68 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at NewClaimLossDetailsDV.Gl.pcf: line 134, column 43
    function value_72 () : java.lang.Boolean {
      return Claim.CoverageInQuestion
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at NewClaimLossDetailsDV.Gl.pcf: line 54, column 48
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at NewClaimLossDetailsDV.Gl.pcf: line 54, column 48
    function verifyValueRangeIsAllowedType_24 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at NewClaimLossDetailsDV.Gl.pcf: line 46, column 41
    function verifyValueRange_18 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at NewClaimLossDetailsDV.Gl.pcf: line 54, column 48
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at NewClaimLossDetailsDV.Gl.pcf: line 89, column 48
    function visible_39 () : java.lang.Boolean {
      return  Claim.FaultRating == TC_1 
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}