package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NewLossDetailsPanelSet_homeownersExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NewLossDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInjuryButton) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 283, column 125
    function action_148 () : void {
      FNOLInjuryIncidentPopup.push(claim, null)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 289, column 133
    function action_151 () : void {
      NewFixedPropertyIncidentPopup.push(claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInjuryButton) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 283, column 125
    function action_dest_149 () : pcf.api.Destination {
      return pcf.FNOLInjuryIncidentPopup.createDestination(claim, null)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 289, column 133
    function action_dest_152 () : pcf.api.Destination {
      return pcf.NewFixedPropertyIncidentPopup.createDestination(claim)
    }
    
    // 'def' attribute on PanelRef (id=IncidentPanelRef) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 274, column 29
    function def_onEnter_154 (def :  pcf.InjuryAndFixedPropertyIncidentsPanelSet) : void {
      def.onEnter(claim, wizard)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 303, column 31
    function def_onEnter_156 (def :  pcf.EditableWitnessesLV) : void {
      def.onEnter(claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 314, column 31
    function def_onEnter_158 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 326, column 31
    function def_onEnter_160 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 102, column 84
    function def_onEnter_45 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(wizard.HomeownersHelper.getAddressesWithoutPrimaryLocation())
    }
    
    // 'def' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 122, column 50
    function def_onEnter_62 (def :  pcf.FireDamageQuestionsPanelSet) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on PanelRef (id=WaterDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 129, column 51
    function def_onEnter_65 (def :  pcf.WaterDamageQuestionsPanelSet) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 159, column 110
    function def_onEnter_73 (def :  pcf.EditableRoomsLV) : void {
      def.onEnter(wizard.HomeownersHelper.DwellingIncident)
    }
    
    // 'def' attribute on PanelRef (id=IncidentPanelRef) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 274, column 29
    function def_refreshVariables_155 (def :  pcf.InjuryAndFixedPropertyIncidentsPanelSet) : void {
      def.refreshVariables(claim, wizard)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 303, column 31
    function def_refreshVariables_157 (def :  pcf.EditableWitnessesLV) : void {
      def.refreshVariables(claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 314, column 31
    function def_refreshVariables_159 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 326, column 31
    function def_refreshVariables_161 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 102, column 84
    function def_refreshVariables_46 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(wizard.HomeownersHelper.getAddressesWithoutPrimaryLocation())
    }
    
    // 'def' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 122, column 50
    function def_refreshVariables_63 (def :  pcf.FireDamageQuestionsPanelSet) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on PanelRef (id=WaterDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 129, column 51
    function def_refreshVariables_66 (def :  pcf.WaterDamageQuestionsPanelSet) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 159, column 110
    function def_refreshVariables_74 (def :  pcf.EditableRoomsLV) : void {
      def.refreshVariables(wizard.HomeownersHelper.DwellingIncident)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 22, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureAlreadyRepaired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 211, column 87
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.OtherStructureIncident.AlreadyRepaired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureFencesDamaged_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 216, column 85
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.OtherStructureIncident.FencesDamaged = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 36, column 41
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on InputGroup (id=OtherStructureInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 189, column 102
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.OtherStructureIncidentPresent = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyContentsDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 238, column 85
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.PropertyContentsIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.PropertyContentsIncident.PropertyLocation = (__VALUE_TO_SET as PolicyLocation)
    }
    
    // 'value' attribute on InputGroup (id=PropertyContentsInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 226, column 104
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.PropertyContentsIncidentPresent = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=LivingExpensesDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 267, column 83
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.LivingExpensesIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on InputGroup (id=LivingExpensesInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 255, column 102
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.LivingExpensesIncidentPresent = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 46, column 53
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.LocationOfTheft = (__VALUE_TO_SET as typekey.LocationOfTheft)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 347, column 46
    function defaultSetter_163 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 355, column 52
    function defaultSetter_167 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 51, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.SelectedDamageNames = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 77, column 42
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.LocationChoice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 116, column 41
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.WeatherRelated = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 156, column 77
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.DwellingIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingMaterialsDamaged_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 171, column 82
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.DwellingIncident.MaterialsDamaged = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DwellingEstimateReceived_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 176, column 90
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.DwellingIncident.EstimatesReceivedBoolean = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DwellingAlreadyRepaired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 181, column 81
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.DwellingIncident.AlreadyRepaired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on InputGroup (id=DwellingInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 144, column 96
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.DwellingIncidentPresent = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=OtherStructureDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 201, column 83
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.OtherStructureIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureEstimateReceived_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 206, column 96
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      wizard.HomeownersHelper.OtherStructureIncident.EstimatesReceivedBoolean = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function editable_121 () : java.lang.Boolean {
      return claim.Policy.PolicyLocations.Count > 1
    }
    
    // 'icon' attribute on InputGroup (id=OtherStructureInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 189, column 102
    function icon_114 () : java.lang.String {
      return gw.api.claim.HomeownersHelper.CHECKBOX_OTHER_STRUCTURES_ICON
    }
    
    // 'icon' attribute on InputGroup (id=PropertyContentsInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 226, column 104
    function icon_136 () : java.lang.String {
      return gw.api.claim.HomeownersHelper.CHECKBOX_PROPERTY_CONTENTS_ICON
    }
    
    // 'icon' attribute on InputGroup (id=LivingExpensesInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 255, column 102
    function icon_147 () : java.lang.String {
      return gw.api.claim.HomeownersHelper.CHECKBOX_LIVING_EXPENSES_ICON
    }
    
    // 'icon' attribute on ToolbarButton (id=AddInjuryButton) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 283, column 125
    function icon_150 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.INJURY.ButtonIcon
    }
    
    // 'icon' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 289, column 133
    function icon_153 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.PROPERTY_LIABILITY.ButtonIcon
    }
    
    // 'icon' attribute on InputGroup (id=DwellingInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 144, column 96
    function icon_91 () : java.lang.String {
      return gw.api.claim.HomeownersHelper.CHECKBOX_DWELLING_ICON
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 38, column 81
    function onChange_9 () : void {
      wizard.HomeownersHelper.setDamageAccordingToLossCause()
    }
    
    // 'optionIcon' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function optionIcon_27 (VALUE :  java.lang.String) : java.lang.String {
      return wizard.HomeownersHelper.getDamageManagerByPropertyName(VALUE).Icon
    }
    
    // 'optionLabel' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function optionLabel_28 (VALUE :  java.lang.String) : java.lang.String {
      return wizard.HomeownersHelper.getDamageManagerByPropertyName(VALUE).Name
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 29, column 35
    function validationExpression_4 () : java.lang.Object {
      return claim.LossDate == null || claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function valueRange_126 () : java.lang.Object {
      return claim.Policy.PolicyLocations
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 355, column 52
    function valueRange_169 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function valueRange_29 () : java.lang.Object {
      return wizard.HomeownersHelper.DamageNames
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function valueRange_53 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyContentsDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 238, column 85
    function valueRoot_119 () : java.lang.Object {
      return wizard.HomeownersHelper.PropertyContentsIncident
    }
    
    // 'value' attribute on TextAreaInput (id=LivingExpensesDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 267, column 83
    function valueRoot_141 () : java.lang.Object {
      return wizard.HomeownersHelper.LivingExpensesIncident
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 22, column 38
    function valueRoot_2 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function valueRoot_26 () : java.lang.Object {
      return wizard.HomeownersHelper
    }
    
    // 'value' attribute on TextInput (id=PropertyAddress_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 86, column 73
    function valueRoot_36 () : java.lang.Object {
      return claim.Policy.PrimaryLocation.Address
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 156, column 77
    function valueRoot_71 () : java.lang.Object {
      return wizard.HomeownersHelper.DwellingIncident
    }
    
    // 'value' attribute on TextAreaInput (id=OtherStructureDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 201, column 83
    function valueRoot_96 () : java.lang.Object {
      return wizard.HomeownersHelper.OtherStructureIncident
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 22, column 38
    function value_0 () : java.lang.String {
      return claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 36, column 41
    function value_10 () : typekey.LossCause {
      return claim.LossCause
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureAlreadyRepaired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 211, column 87
    function value_102 () : java.lang.Boolean {
      return wizard.HomeownersHelper.OtherStructureIncident.AlreadyRepaired
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureFencesDamaged_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 216, column 85
    function value_106 () : java.lang.Boolean {
      return wizard.HomeownersHelper.OtherStructureIncident.FencesDamaged
    }
    
    // 'value' attribute on CurrencyInput (id=PropertyContentsLimit_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 231, column 127
    function value_115 () : gw.api.financials.CurrencyAmount {
      return wizard.HomeownersHelper.getIncidentCoverageLimit(wizard.HomeownersHelper.PersonalPropertyCoverageType)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyContentsDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 238, column 85
    function value_117 () : java.lang.String {
      return wizard.HomeownersHelper.PropertyContentsIncident.Description
    }
    
    // 'value' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function value_123 () : PolicyLocation {
      return wizard.HomeownersHelper.PropertyContentsIncident.PropertyLocation
    }
    
    // 'value' attribute on CurrencyInput (id=LivingExpensesLimit_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 260, column 120
    function value_137 () : gw.api.financials.CurrencyAmount {
      return wizard.HomeownersHelper.getIncidentCoverageLimit(wizard.HomeownersHelper.LossOfUseCoverageType)
    }
    
    // 'value' attribute on TextAreaInput (id=LivingExpensesDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 267, column 83
    function value_139 () : java.lang.String {
      return wizard.HomeownersHelper.LivingExpensesIncident.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 46, column 53
    function value_15 () : typekey.LocationOfTheft {
      return claim.LocationOfTheft
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 347, column 46
    function value_162 () : typekey.FaultRating {
      return claim.FaultRating
    }
    
    // 'value' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 355, column 52
    function value_166 () : typekey.ClaimSecurityType {
      return claim.PermissionRequired
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 51, column 41
    function value_20 () : java.lang.Boolean {
      return claim.IncidentReport
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function value_24 () : java.lang.String[] {
      return wizard.HomeownersHelper.SelectedDamageNames
    }
    
    // 'value' attribute on TextInput (id=PrimaryLocationChoiceLabel_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 82, column 45
    function value_33 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on TextInput (id=PropertyAddress_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 86, column 73
    function value_35 () : java.lang.String {
      return claim.Policy.PrimaryLocation.Address.DisplayName
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 77, column 42
    function value_38 () : java.lang.String {
      return wizard.HomeownersHelper.LocationChoice
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 29, column 35
    function value_5 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function value_50 () : entity.Catastrophe {
      return claim.Catastrophe
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 116, column 41
    function value_57 () : java.lang.Boolean {
      return claim.WeatherRelated
    }
    
    // 'value' attribute on CurrencyInput (id=DwellingLimit_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 149, column 119
    function value_67 () : gw.api.financials.CurrencyAmount {
      return wizard.HomeownersHelper.getIncidentCoverageLimit(wizard.HomeownersHelper.DwellingCoverageType)
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 156, column 77
    function value_69 () : java.lang.String {
      return wizard.HomeownersHelper.DwellingIncident.Description
    }
    
    // 'value' attribute on TextAreaInput (id=DwellingMaterialsDamaged_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 171, column 82
    function value_75 () : java.lang.String {
      return wizard.HomeownersHelper.DwellingIncident.MaterialsDamaged
    }
    
    // 'value' attribute on BooleanRadioInput (id=DwellingEstimateReceived_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 176, column 90
    function value_79 () : java.lang.Boolean {
      return wizard.HomeownersHelper.DwellingIncident.EstimatesReceivedBoolean
    }
    
    // 'value' attribute on BooleanRadioInput (id=DwellingAlreadyRepaired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 181, column 81
    function value_83 () : java.lang.Boolean {
      return wizard.HomeownersHelper.DwellingIncident.AlreadyRepaired
    }
    
    // 'value' attribute on CurrencyInput (id=OtherStructureLimit_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 194, column 126
    function value_92 () : gw.api.financials.CurrencyAmount {
      return wizard.HomeownersHelper.getIncidentCoverageLimit(wizard.HomeownersHelper.OtherStructuresCoverageType)
    }
    
    // 'value' attribute on TextAreaInput (id=OtherStructureDamageDescription_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 201, column 83
    function value_94 () : java.lang.String {
      return wizard.HomeownersHelper.OtherStructureIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherStructureEstimateReceived_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 206, column 96
    function value_98 () : java.lang.Boolean {
      return wizard.HomeownersHelper.OtherStructureIncident.EstimatesReceivedBoolean
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function verifyValueRangeIsAllowedType_127 ($$arg :  PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function verifyValueRangeIsAllowedType_127 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function verifyValueRangeIsAllowedType_127 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 355, column 52
    function verifyValueRangeIsAllowedType_170 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 355, column 52
    function verifyValueRangeIsAllowedType_170 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function verifyValueRangeIsAllowedType_54 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function verifyValueRange_128 () : void {
      var __valueRangeArg = claim.Policy.PolicyLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_127(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimPermissionRequired_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 355, column 52
    function verifyValueRange_171 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_170(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 64, column 42
    function verifyValueRange_31 () : void {
      var __valueRangeArg = wizard.HomeownersHelper.DamageNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 111, column 43
    function verifyValueRange_55 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'childrenVisible' attribute on InputGroup (id=OtherStructureInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 189, column 102
    function visible_110 () : java.lang.Boolean {
      return wizard.HomeownersHelper.OtherStructureIncidentPresent
    }
    
    // 'visible' attribute on RangeInput (id=StorageLocation_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 247, column 68
    function visible_122 () : java.lang.Boolean {
      return claim.Policy.PolicyLocations.Count > 0
    }
    
    // 'childrenVisible' attribute on InputGroup (id=PropertyContentsInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 226, column 104
    function visible_132 () : java.lang.Boolean {
      return wizard.HomeownersHelper.PropertyContentsIncidentPresent
    }
    
    // 'visible' attribute on TypeKeyInput (id=LocationOfTheft_Input) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 46, column 53
    function visible_14 () : java.lang.Boolean {
      return claim.LossCause == TC_BURGLARY
    }
    
    // 'childrenVisible' attribute on InputGroup (id=LivingExpensesInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 255, column 102
    function visible_143 () : java.lang.Boolean {
      return wizard.HomeownersHelper.LivingExpensesIncidentPresent
    }
    
    // 'visible' attribute on InputSet at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 72, column 58
    function visible_41 () : java.lang.Boolean {
      return claim.Policy.PrimaryLocation != null
    }
    
    // 'visible' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 102, column 84
    function visible_44 () : java.lang.Boolean {
      return wizard.HomeownersHelper.LocationChoice == "other"
    }
    
    // 'visible' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 122, column 50
    function visible_61 () : java.lang.Boolean {
      return claim.PropertyFireDamage != null
    }
    
    // 'visible' attribute on PanelRef (id=WaterDamageQuestionsPanelSet) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 129, column 51
    function visible_64 () : java.lang.Boolean {
      return claim.PropertyWaterDamage != null
    }
    
    // 'childrenVisible' attribute on InputGroup (id=DwellingInputGroup) at FNOLWizard_NewLossDetailsPanelSet.homeowners.pcf: line 144, column 96
    function visible_87 () : java.lang.Boolean {
      return wizard.HomeownersHelper.DwellingIncidentPresent
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