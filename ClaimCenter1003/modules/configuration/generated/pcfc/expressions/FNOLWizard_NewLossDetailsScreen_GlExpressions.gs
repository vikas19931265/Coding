package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NewLossDetailsScreen_GlExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NewLossDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInjuryButton) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 141, column 131
    function action_84 () : void {
      FNOLInjuryIncidentPopup.push(claim, null)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 147, column 139
    function action_87 () : void {
      NewFixedPropertyIncidentPopup.push(claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInjuryButton) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 141, column 131
    function action_dest_85 () : pcf.api.Destination {
      return pcf.FNOLInjuryIncidentPopup.createDestination(claim, null)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 147, column 139
    function action_dest_88 () : pcf.api.Destination {
      return pcf.NewFixedPropertyIncidentPopup.createDestination(claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 106, column 76
    function def_onEnter_61 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(wizard.GeneralLiabilityHelper.getAddressesWithoutPrimaryLocation())
    }
    
    // 'def' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 126, column 50
    function def_onEnter_82 (def :  pcf.FireDamageQuestionsPanelSet) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on PanelRef (id=IncidentPanelRef) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 132, column 29
    function def_onEnter_90 (def :  pcf.InjuryAndFixedPropertyIncidentsPanelSet) : void {
      def.onEnter(claim, wizard)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 161, column 31
    function def_onEnter_92 (def :  pcf.EditableWitnessesLV) : void {
      def.onEnter(claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 172, column 31
    function def_onEnter_94 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 184, column 31
    function def_onEnter_97 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 106, column 76
    function def_refreshVariables_62 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(wizard.GeneralLiabilityHelper.getAddressesWithoutPrimaryLocation())
    }
    
    // 'def' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 126, column 50
    function def_refreshVariables_83 (def :  pcf.FireDamageQuestionsPanelSet) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on PanelRef (id=IncidentPanelRef) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 132, column 29
    function def_refreshVariables_91 (def :  pcf.InjuryAndFixedPropertyIncidentsPanelSet) : void {
      def.refreshVariables(claim, wizard)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 161, column 31
    function def_refreshVariables_93 (def :  pcf.EditableWitnessesLV) : void {
      def.refreshVariables(claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 172, column 31
    function def_refreshVariables_95 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 184, column 31
    function def_refreshVariables_98 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 24, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 205, column 46
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 213, column 52
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 44, column 41
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 52, column 41
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 58, column 45
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 63, column 42
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 69, column 48
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 81, column 42
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.GeneralLiabilityHelper.LocationChoice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 120, column 41
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.WeatherRelated = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'icon' attribute on ToolbarButton (id=AddInjuryButton) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 141, column 131
    function icon_86 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.INJURY.ButtonIcon
    }
    
    // 'icon' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 147, column 139
    function icon_89 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.PROPERTY_LIABILITY.ButtonIcon
    }
    
    // 'label' attribute on TypeKeyInput (id=Claim_LossType_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 37, column 41
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.LossType")
    }
    
    // 'label' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 44, column 41
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.LossCause")
    }
    
    // 'label' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 52, column 41
    function label_23 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.Status.IncidentReport")
    }
    
    // 'label' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 58, column 45
    function label_29 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.Status.CoverageQuestion")
    }
    
    // 'label' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 63, column 42
    function label_35 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.Notification.FirstNoticeSuit")
    }
    
    // 'label' attribute on TypeKeyInput (id=Notification_HowReported_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 69, column 48
    function label_41 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.Notification.HowReported")
    }
    
    // 'label' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 31, column 35
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.LossDate")
    }
    
    // 'label' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function label_68 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.CatastropheNumber")
    }
    
    // 'label' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 172, column 31
    function label_96 () : java.lang.String {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.Officials")
    }
    
    // 'label' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 205, column 46
    function label_99 () : java.lang.Object {
      return DisplayKey.get("Web.FNOLWizard.LossDetails.GeneralLiability.Notification.Fault")
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 46, column 87
    function onChange_16 () : void {
      wizard.GeneralLiabilityHelper.setDamageAccordingToLossCause()
    }
    
    // 'option' attribute on Choice (id=PrimaryLocationChoice) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 81, column 42
    function option_52 () : java.lang.Object {
      return gw.api.claim.FnolWizardGeneralLiabilityHelper.PRIMARY_LOCATION
    }
    
    // 'option' attribute on Choice (id=OtherLocationChoice) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 97, column 40
    function option_63 () : java.lang.Object {
      return gw.api.claim.FnolWizardGeneralLiabilityHelper.OTHER_LOCATION
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 31, column 35
    function validationExpression_4 () : java.lang.Object {
      return claim.LossDate == null || claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 213, column 52
    function valueRange_108 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function valueRange_72 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 24, column 38
    function valueRoot_2 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextInput (id=PropertyAddress_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 90, column 73
    function valueRoot_50 () : java.lang.Object {
      return claim.Policy.PrimaryLocation.Address
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 81, column 42
    function valueRoot_55 () : java.lang.Object {
      return wizard.GeneralLiabilityHelper
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 24, column 38
    function value_0 () : java.lang.String {
      return claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 205, column 46
    function value_100 () : typekey.FaultRating {
      return claim.FaultRating
    }
    
    // 'value' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 213, column 52
    function value_105 () : typekey.ClaimSecurityType {
      return claim.PermissionRequired
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 37, column 41
    function value_12 () : typekey.LossType {
      return claim.LossType
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 44, column 41
    function value_18 () : typekey.LossCause {
      return claim.LossCause
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 52, column 41
    function value_24 () : java.lang.Boolean {
      return claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 58, column 45
    function value_30 () : java.lang.Boolean {
      return claim.CoverageInQuestion
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 63, column 42
    function value_36 () : java.lang.Boolean {
      return claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 69, column 48
    function value_42 () : typekey.HowReportedType {
      return claim.HowReported
    }
    
    // 'value' attribute on TextInput (id=PrimaryLocationChoiceLabel_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 86, column 45
    function value_47 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on TextInput (id=PropertyAddress_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 90, column 73
    function value_49 () : java.lang.String {
      return claim.Policy.PrimaryLocation.Address.DisplayName
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 81, column 42
    function value_53 () : java.lang.String {
      return wizard.GeneralLiabilityHelper.LocationChoice
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 31, column 35
    function value_6 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function value_69 () : entity.Catastrophe {
      return claim.Catastrophe
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 120, column 41
    function value_77 () : java.lang.Boolean {
      return claim.WeatherRelated
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 213, column 52
    function verifyValueRangeIsAllowedType_109 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 213, column 52
    function verifyValueRangeIsAllowedType_109 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function verifyValueRangeIsAllowedType_73 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function verifyValueRangeIsAllowedType_73 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function verifyValueRangeIsAllowedType_73 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 213, column 52
    function verifyValueRange_110 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_109(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 115, column 43
    function verifyValueRange_74 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_73(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 76, column 58
    function visible_57 () : java.lang.Boolean {
      return claim.Policy.PrimaryLocation != null
    }
    
    // 'visible' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 106, column 76
    function visible_60 () : java.lang.Boolean {
      return wizard.GeneralLiabilityHelper.IsOtherLocationChosen
    }
    
    // 'visible' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsScreen.Gl.pcf: line 126, column 50
    function visible_81 () : java.lang.Boolean {
      return claim.PropertyFireDamage != null
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