package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 3
    }
    
    static function __constructorIndex (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : int {
      return 2
    }
    
    static function __constructorIndex (PageMode :  boolean) : int {
      return 1
    }
    
    static function __constructorIndex (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : int {
      return 4
    }
    
    // 'afterCancel' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function afterCancel_147 () : void {
      FNOLAfterCancelPage.go(wizardInfo.PageMode)
    }
    
    // 'afterCancel' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function afterCancel_dest_148 () : pcf.api.Destination {
      return pcf.FNOLAfterCancelPage.createDestination(wizardInfo.PageMode)
    }
    
    // 'afterFinish' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function afterFinish_158 () : void {
      wizardInfo.afterFinish()
    }
    
    // 'allowFinish' attribute on WizardStep (id=ClassicDocuments) at FNOLWizard.pcf: line 121, column 152
    function allowFinish_39 () : java.lang.Boolean {
      return !gw.plugin.Plugins.isEnabled(gw.plugin.document.IDocumentMetadataSource)
    }
    
    // 'allowNext' attribute on WizardStep (id=FindPolicy) at FNOLWizard.pcf: line 65, column 49
    function allowNext_3 () : java.lang.Boolean {
      return wizardInfo.IsLossTypeSet
    }
    
    // 'available' attribute on WizardStepSet (id=GeneralPropertyWizardStepSet) at FNOLWizard.pcf: line 80, column 47
    function available_49 () : java.lang.Boolean {
      return wizardInfo.useOldWizardStep()
    }
    
    // 'beforeCommit' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function beforeCommit_149 (pickedValue :  java.lang.Object) : void {
      wizardInfo.onBeforeCommit()
    }
    
    // 'canVisit' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    static function canVisit_150 (Claim :  Claim, LossDate :  java.util.Date, PageMode :  boolean, claimMode :  gw.api.claim.NewClaimMode, policyNumber :  String, policyType :  PolicyType, searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary) : java.lang.Boolean {
      return perm.Claim.create
    }
    
    // 'condition' attribute on QuickClaimStep (id=QuickClaimPr) at FNOLWizard.pcf: line 202, column 151
    function condition_106 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isProperty(Claim) and not wizardInfo.IsHomeownersClaim
    }
    
    // 'condition' attribute on QuickClaimStep (id=QuickClaimTravelTripCancelOnly) at FNOLWizard.pcf: line 211, column 153
    function condition_112 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isTravel(Claim)
    }
    
    // 'condition' attribute on QuickClaimStep (id=QuickClaimGL) at FNOLWizard.pcf: line 228, column 145
    function condition_123 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isGeneralLiablity(Claim)
    }
    
    // 'condition' attribute on QuickClaimStep (id=QuickClaimAuto) at FNOLWizard.pcf: line 185, column 147
    function condition_95 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isAuto(Claim)
    }
    
    // 'finishConfirmation' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function confirmMessage_146 () : java.lang.String {
      return wizardInfo.getFinishConfirmation()
    }
    
    // 'handlesValidationIssue' attribute on WizardStep (id=PolicyGeneral) at FNOLWizard.pcf: line 253, column 73
    function handlesValidationIssue_130 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return VALUE typeis entity.Policy
    }
    
    // 'handlesValidationIssue' attribute on WizardStep (id=ClassicMainContacts) at FNOLWizard.pcf: line 88, column 158
    function handlesValidationIssue_16 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return wizardInfo.isMainContactOrReporter(VALUE)
    }
    
    // 'handlesValidationIssue' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function handlesValidationIssue_22 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return VALUE typeis entity.Claim or VALUE typeis entity.Incident
    }
    
    // 'handlesValidationIssue' attribute on WizardStep (id=ClassicExposures) at FNOLWizard.pcf: line 108, column 54
    function handlesValidationIssue_30 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return VALUE typeis entity.Exposure
    }
    
    // 'handlesValidationIssue' attribute on WizardStep (id=ClassicPartiesInvolved) at FNOLWizard.pcf: line 115, column 158
    function handlesValidationIssue_35 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return !wizardInfo.isMainContactOrReporter(VALUE)
    }
    
    // 'infoBar' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function infoBar_onEnter_151 (def :  pcf.ClaimInfoBar) : void {
      def.onEnter(Claim)
    }
    
    // 'infoBar' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function infoBar_refreshVariables_152 (def :  pcf.ClaimInfoBar) : void {
      def.refreshVariables(Claim)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard.pcf: line 33, column 30
    function initialValue_0 () : java.util.Date {
      return null
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard.pcf: line 50, column 47
    function initialValue_1 () : gw.api.claim.NewClaimWizardInfo {
      return new gw.api.claim.NewClaimWizardInfo(CurrentLocation, gw.api.claim.NewClaimCheck)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard.pcf: line 54, column 21
    function initialValue_2 () : Claim {
      return wizardInfo.createClaim()
    }
    
    // 'label' attribute on WizardStep (id=SelectRiskUnitsStep) at FNOLWizard.pcf: line 76, column 48
    function label_10 () : java.lang.String {
      return wizardInfo.SelectRiskUnitsLabel
    }
    
    // 'label' attribute on WizardStep (id=ClassicMainContacts) at FNOLWizard.pcf: line 88, column 158
    function label_17 () : java.lang.String {
      return "OLD " + DisplayKey.get("Wizard.NewClaimWizard.NewClaimMainContacts.Label")
    }
    
    // 'menuActions' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function menuActions_onEnter_153 (def :  pcf.FNOLMenuActions) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'menuActions' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function menuActions_refreshVariables_154 (def :  pcf.FNOLMenuActions) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'mode' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function mode_23 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.getUIMode(Claim)
    }
    
    // 'onEnter' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function onEnter_61 () : void {
      gw.api.claim.FnolServiceRequestHelper.cleanAndFinishServiceRequests(wizardInfo) /* clean up when going back from Services step */
    }
    
    // 'onEnter' attribute on WizardStep (id=Summary) at FNOLWizard.pcf: line 176, column 149
    function onEnter_85 () : void {
      wizardInfo.addExposureForEveryIncidentIfPossible()
    }
    
    // 'onEnter' attribute on QuickClaimStep (id=QuickClaimAutoFirstAndFinal) at FNOLWizard.pcf: line 194, column 150
    function onEnter_96 () : void {
      wizardInfo.onAutoFirstAndFinalEnter()
    }
    
    // 'onExit' attribute on QuickClaimStep (id=QuickClaimPr) at FNOLWizard.pcf: line 202, column 151
    function onExit_102 () : void {
      wizardInfo.checkForDuplicates(); wizardInfo.addExposureForEveryIncidentIfPossible()
    }
    
    // 'onExit' attribute on QuickClaimStep (id=QuickClaimTravelTripCancelOnly) at FNOLWizard.pcf: line 211, column 153
    function onExit_107 () : void {
      wizardInfo.checkForDuplicates(); wizardInfo.addExposureForEveryIncidentIfPossible()
    }
    
    // 'onExit' attribute on WizardStep (id=SelectRiskUnitsStep) at FNOLWizard.pcf: line 76, column 48
    function onExit_11 () : void {
      wizardInfo.onRiskUnitSelectExit()
    }
    
    // 'onExit' attribute on QuickClaimStep (id=QuickClaimTravelBaggageOnly) at FNOLWizard.pcf: line 220, column 156
    function onExit_113 () : void {
      wizardInfo.checkForDuplicates(); wizardInfo.addExposureForEveryIncidentIfPossible()
    }
    
    // 'onExit' attribute on QuickClaimStep (id=QuickClaimGL) at FNOLWizard.pcf: line 228, column 145
    function onExit_119 () : void {
      wizardInfo.checkForDuplicates(); wizardInfo.addExposureForEveryIncidentIfPossible()
    }
    
    // 'onExit' attribute on WizardStep (id=ClassicMainContacts) at FNOLWizard.pcf: line 88, column 158
    function onExit_18 () : void {
      wizardInfo.checkForDuplicatesNoWarning()
    }
    
    // 'onExit' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function onExit_24 () : void {
      wizardInfo.finishSetupServiceRequests()
    }
    
    // 'onExit' attribute on WizardStep (id=ClassicExposures) at FNOLWizard.pcf: line 108, column 54
    function onExit_31 () : void {
      wizardInfo.finishSetupServiceRequests()
    }
    
    // 'onExit' attribute on WizardStep (id=FindPolicy) at FNOLWizard.pcf: line 65, column 49
    function onExit_4 () : void {
      wizardInfo.FindPolicyExit()
    }
    
    // 'onExit' attribute on WizardStep (id=BasicInfo) at FNOLWizard.pcf: line 146, column 155
    function onExit_53 () : void {
      wizardInfo.BasicInfoExit()
    }
    
    // 'onExit' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function onExit_62 () : void {
      wizardInfo.LossDetailsExit()
    }
    
    // 'onExit' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function onExit_77 () : void {
      gw.api.claim.FnolServiceRequestHelper.cleanAndFinishServiceRequests(wizardInfo)
    }
    
    // 'onExit' attribute on QuickClaimStep (id=QuickClaimAuto) at FNOLWizard.pcf: line 185, column 147
    function onExit_91 () : void {
      wizardInfo.checkForDuplicates(); wizardInfo.addExposureForEveryIncidentIfPossible()
    }
    
    // 'onExit' attribute on QuickClaimStep (id=QuickClaimAutoFirstAndFinal) at FNOLWizard.pcf: line 194, column 150
    function onExit_97 () : void {
      wizardInfo.onAutoFirstAndFinalExit()
    }
    
    // 'onFirstEnter' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function onFirstEnter_25 () : void {
      wizardInfo.initClaim()
    }
    
    // 'onFirstEnter' attribute on WizardStep (id=FindPolicy) at FNOLWizard.pcf: line 65, column 49
    function onFirstEnter_5 () : void {
      wizardInfo.FindPolicyFirstEnter()
    }
    
    // 'onFirstEnter' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function onFirstEnter_63 () : void {
      wizardInfo.LossDetailsFirstEnter()
    }
    
    // 'parent' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    static function parent_155 (Claim :  Claim, LossDate :  java.util.Date, PageMode :  boolean, claimMode :  gw.api.claim.NewClaimMode, policyNumber :  String, policyType :  PolicyType, searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary) : pcf.api.Destination {
      return pcf.ClaimTabForward.createDestination()
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimPr) at FNOLWizard.pcf: line 202, column 151
    function screen_onEnter_103 (def :  pcf.NewClaimWizard_QuickClaimScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimTravelTripCancelOnly) at FNOLWizard.pcf: line 211, column 153
    function screen_onEnter_109 (def :  pcf.FNOLWizard_NewQuickClaimScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimTravelBaggageOnly) at FNOLWizard.pcf: line 220, column 156
    function screen_onEnter_115 (def :  pcf.FNOLWizard_NewQuickClaimScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=SelectRiskUnitsStep) at FNOLWizard.pcf: line 76, column 48
    function screen_onEnter_12 (def :  pcf.FNOLWizard_PickPolicyRiskUnitsScreen) : void {
      def.onEnter( Claim, wizardInfo )
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimGL) at FNOLWizard.pcf: line 228, column 145
    function screen_onEnter_120 (def :  pcf.NewClaimWizard_QuickClaimScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=PartiesInvolved) at FNOLWizard.pcf: line 240, column 51
    function screen_onEnter_126 (def :  pcf.NewClaimWizard_PartiesInvolvedScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=PolicyGeneral) at FNOLWizard.pcf: line 253, column 73
    function screen_onEnter_131 (def :  pcf.NewClaimWizard_PolicyGeneralScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=PolicyDetails) at FNOLWizard.pcf: line 262, column 73
    function screen_onEnter_135 (def :  pcf.NewClaimWizard_PolicyDetailsScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Documents) at FNOLWizard.pcf: line 272, column 51
    function screen_onEnter_139 (def :  pcf.FNOLWizard_DocumentsScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Notes) at FNOLWizard.pcf: line 281, column 51
    function screen_onEnter_143 (def :  pcf.FNOLWizard_NotesScreen) : void {
      def.onEnter(Claim)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicMainContacts) at FNOLWizard.pcf: line 88, column 158
    function screen_onEnter_19 (def :  pcf.NewClaimWizard_MainContactsScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function screen_onEnter_26 (def :  pcf.NewClaimWizard_LossDetailsScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicExposures) at FNOLWizard.pcf: line 108, column 54
    function screen_onEnter_32 (def :  pcf.NewClaimWizard_ExposuresScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicPartiesInvolved) at FNOLWizard.pcf: line 115, column 158
    function screen_onEnter_36 (def :  pcf.NewClaimWizard_PartiesInvolvedScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicDocuments) at FNOLWizard.pcf: line 121, column 152
    function screen_onEnter_40 (def :  pcf.NewClaimWizard_DocumentsScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicAssign) at FNOLWizard.pcf: line 127, column 149
    function screen_onEnter_43 (def :  pcf.NewClaimWizard_AssignScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicSummary) at FNOLWizard.pcf: line 132, column 150
    function screen_onEnter_46 (def :  pcf.NewClaimWizard_SummaryScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=BasicInfo) at FNOLWizard.pcf: line 146, column 155
    function screen_onEnter_54 (def :  pcf.FNOLWizard_BasicInfoScreen_WC) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=BasicInfo) at FNOLWizard.pcf: line 146, column 155
    function screen_onEnter_56 (def :  pcf.FNOLWizard_BasicInfoScreen_default) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=FindPolicy) at FNOLWizard.pcf: line 65, column 49
    function screen_onEnter_6 (def :  pcf.FNOLWizard_FindPolicyScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_onEnter_64 (def :  pcf.FNOLWizard_NewLossDetailsScreen_Gl) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_onEnter_66 (def :  pcf.FNOLWizard_NewLossDetailsScreen_PR) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_onEnter_68 (def :  pcf.FNOLWizard_NewLossDetailsScreen_Trav) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_onEnter_70 (def :  pcf.FNOLWizard_NewLossDetailsScreen_WC) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_onEnter_72 (def :  pcf.FNOLWizard_NewLossDetailsScreen_default) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function screen_onEnter_78 (def :  pcf.FNOLWizard_ServicesScreen_Auto) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function screen_onEnter_80 (def :  pcf.FNOLWizard_ServicesScreen_Pr) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Summary) at FNOLWizard.pcf: line 176, column 149
    function screen_onEnter_86 (def :  pcf.FNOLWizard_AssignSaveScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimAuto) at FNOLWizard.pcf: line 185, column 147
    function screen_onEnter_92 (def :  pcf.FNOLWizard_NewQuickClaimScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimAutoFirstAndFinal) at FNOLWizard.pcf: line 194, column 150
    function screen_onEnter_98 (def :  pcf.FNOLWizard_AutoFirstAndFinalScreen) : void {
      def.onEnter(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimPr) at FNOLWizard.pcf: line 202, column 151
    function screen_refreshVariables_104 (def :  pcf.NewClaimWizard_QuickClaimScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimTravelTripCancelOnly) at FNOLWizard.pcf: line 211, column 153
    function screen_refreshVariables_110 (def :  pcf.FNOLWizard_NewQuickClaimScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimTravelBaggageOnly) at FNOLWizard.pcf: line 220, column 156
    function screen_refreshVariables_116 (def :  pcf.FNOLWizard_NewQuickClaimScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimGL) at FNOLWizard.pcf: line 228, column 145
    function screen_refreshVariables_121 (def :  pcf.NewClaimWizard_QuickClaimScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=PartiesInvolved) at FNOLWizard.pcf: line 240, column 51
    function screen_refreshVariables_127 (def :  pcf.NewClaimWizard_PartiesInvolvedScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=SelectRiskUnitsStep) at FNOLWizard.pcf: line 76, column 48
    function screen_refreshVariables_13 (def :  pcf.FNOLWizard_PickPolicyRiskUnitsScreen) : void {
      def.refreshVariables( Claim, wizardInfo )
    }
    
    // 'screen' attribute on WizardStep (id=PolicyGeneral) at FNOLWizard.pcf: line 253, column 73
    function screen_refreshVariables_132 (def :  pcf.NewClaimWizard_PolicyGeneralScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=PolicyDetails) at FNOLWizard.pcf: line 262, column 73
    function screen_refreshVariables_136 (def :  pcf.NewClaimWizard_PolicyDetailsScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Documents) at FNOLWizard.pcf: line 272, column 51
    function screen_refreshVariables_140 (def :  pcf.FNOLWizard_DocumentsScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Notes) at FNOLWizard.pcf: line 281, column 51
    function screen_refreshVariables_144 (def :  pcf.FNOLWizard_NotesScreen) : void {
      def.refreshVariables(Claim)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicMainContacts) at FNOLWizard.pcf: line 88, column 158
    function screen_refreshVariables_20 (def :  pcf.NewClaimWizard_MainContactsScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function screen_refreshVariables_27 (def :  pcf.NewClaimWizard_LossDetailsScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicExposures) at FNOLWizard.pcf: line 108, column 54
    function screen_refreshVariables_33 (def :  pcf.NewClaimWizard_ExposuresScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicPartiesInvolved) at FNOLWizard.pcf: line 115, column 158
    function screen_refreshVariables_37 (def :  pcf.NewClaimWizard_PartiesInvolvedScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicDocuments) at FNOLWizard.pcf: line 121, column 152
    function screen_refreshVariables_41 (def :  pcf.NewClaimWizard_DocumentsScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicAssign) at FNOLWizard.pcf: line 127, column 149
    function screen_refreshVariables_44 (def :  pcf.NewClaimWizard_AssignScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=ClassicSummary) at FNOLWizard.pcf: line 132, column 150
    function screen_refreshVariables_47 (def :  pcf.NewClaimWizard_SummaryScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=BasicInfo) at FNOLWizard.pcf: line 146, column 155
    function screen_refreshVariables_55 (def :  pcf.FNOLWizard_BasicInfoScreen_WC) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=BasicInfo) at FNOLWizard.pcf: line 146, column 155
    function screen_refreshVariables_57 (def :  pcf.FNOLWizard_BasicInfoScreen_default) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_refreshVariables_65 (def :  pcf.FNOLWizard_NewLossDetailsScreen_Gl) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_refreshVariables_67 (def :  pcf.FNOLWizard_NewLossDetailsScreen_PR) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_refreshVariables_69 (def :  pcf.FNOLWizard_NewLossDetailsScreen_Trav) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=FindPolicy) at FNOLWizard.pcf: line 65, column 49
    function screen_refreshVariables_7 (def :  pcf.FNOLWizard_FindPolicyScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_refreshVariables_71 (def :  pcf.FNOLWizard_NewLossDetailsScreen_WC) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function screen_refreshVariables_73 (def :  pcf.FNOLWizard_NewLossDetailsScreen_default) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function screen_refreshVariables_79 (def :  pcf.FNOLWizard_ServicesScreen_Auto) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function screen_refreshVariables_81 (def :  pcf.FNOLWizard_ServicesScreen_Pr) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on WizardStep (id=Summary) at FNOLWizard.pcf: line 176, column 149
    function screen_refreshVariables_87 (def :  pcf.FNOLWizard_AssignSaveScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimAuto) at FNOLWizard.pcf: line 185, column 147
    function screen_refreshVariables_93 (def :  pcf.FNOLWizard_NewQuickClaimScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'screen' attribute on QuickClaimStep (id=QuickClaimAutoFirstAndFinal) at FNOLWizard.pcf: line 194, column 150
    function screen_refreshVariables_99 (def :  pcf.FNOLWizard_AutoFirstAndFinalScreen) : void {
      def.refreshVariables(Claim, wizardInfo)
    }
    
    // 'tabBar' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function tabBar_onEnter_156 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on NewClaimWizard (id=FNOLWizard) at FNOLWizard.pcf: line 16, column 70
    function tabBar_refreshVariables_157 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on QuickClaimStep (id=QuickClaimAutoFirstAndFinal) at FNOLWizard.pcf: line 194, column 150
    function title_100 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.AutoFirstAndFinal.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on QuickClaimStep (id=QuickClaimPr) at FNOLWizard.pcf: line 202, column 151
    function title_105 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.QuickClaimProperty.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on QuickClaimStep (id=QuickClaimTravelTripCancelOnly) at FNOLWizard.pcf: line 211, column 153
    function title_111 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.QuickClaimTravelTrip.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on QuickClaimStep (id=QuickClaimTravelBaggageOnly) at FNOLWizard.pcf: line 220, column 156
    function title_117 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.QuickClaimTravelBaggage.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on QuickClaimStep (id=QuickClaimGL) at FNOLWizard.pcf: line 228, column 145
    function title_122 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.QuickClaimGL.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=SelectRiskUnitsStep) at FNOLWizard.pcf: line 76, column 48
    function title_14 () : java.lang.String {
      return wizardInfo.SelectRiskUnitsTitle
    }
    
    // 'title' attribute on WizardStep (id=ClassicMainContacts) at FNOLWizard.pcf: line 88, column 158
    function title_21 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimMainContacts.Step",  wizardInfo.CurrentStepNumber ,  wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=ClassicLossDetails) at FNOLWizard.pcf: line 99, column 155
    function title_28 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimLossDetails.Step",  wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=ClassicExposures) at FNOLWizard.pcf: line 108, column 54
    function title_34 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimExposures.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=ClassicPartiesInvolved) at FNOLWizard.pcf: line 115, column 158
    function title_38 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimPartiesInvolved.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=ClassicDocuments) at FNOLWizard.pcf: line 121, column 152
    function title_42 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimDocuments.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=ClassicAssign) at FNOLWizard.pcf: line 127, column 149
    function title_45 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimAssign.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=ClassicSummary) at FNOLWizard.pcf: line 132, column 150
    function title_48 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimSummary.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=BasicInfo) at FNOLWizard.pcf: line 146, column 155
    function title_58 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimMainContacts.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=LossDetails) at FNOLWizard.pcf: line 158, column 154
    function title_74 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimLossDetails.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on WizardStep (id=FindPolicy) at FNOLWizard.pcf: line 65, column 49
    function title_8 () : java.lang.String {
      return wizardInfo.SearchPolicyStepTitle
    }
    
    // 'title' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function title_82 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.NewClaimServices.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'title' attribute on QuickClaimStep (id=QuickClaimAuto) at FNOLWizard.pcf: line 185, column 147
    function title_94 () : java.lang.String {
      return DisplayKey.get("Wizard.NewClaimWizard.QuickClaimAuto.Step", wizardInfo.CurrentStepNumber, wizardInfo.TotalNumberOfSteps)
    }
    
    // 'visible' attribute on WizardStep (id=PolicyGeneral) at FNOLWizard.pcf: line 253, column 73
    function visible_129 () : java.lang.Boolean {
      return perm.Policy.view(Claim) and perm.System.viewpolicy
    }
    
    // 'visible' attribute on WizardStep (id=ClassicExposures) at FNOLWizard.pcf: line 108, column 54
    function visible_29 () : java.lang.Boolean {
      return wizardInfo.ExposureListChangeable
    }
    
    // 'visible' attribute on WizardStep (id=Services) at FNOLWizard.pcf: line 169, column 55
    function visible_75 () : java.lang.Boolean {
      return wizardInfo.IsServicesStepAvailable
    }
    
    // 'visible' attribute on WizardStep (id=SelectRiskUnitsStep) at FNOLWizard.pcf: line 76, column 48
    function visible_9 () : java.lang.Boolean {
      return wizardInfo.CanSelectRiskUnits
    }
    
    // 'visible' attribute on WizardStepSet (id=FullWizardStepSet) at FNOLWizard.pcf: line 137, column 48
    function visible_90 () : java.lang.Boolean {
      return !wizardInfo.useOldWizardStep()
    }
    
    // '$$wizardStepAvailable' attribute on WizardStep (id=PartiesInvolved) at FNOLWizard.pcf: line 240, column 51
    function wizardStepAvailable_128 () : java.lang.Boolean {
      return wizardInfo.IndependentStepAllowed
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.FNOLWizard {
      return super.CurrentLocation as pcf.FNOLWizard
    }
    
    property get LossDate () : java.util.Date {
      return getVariableValue("LossDate", 0) as java.util.Date
    }
    
    property set LossDate ($arg :  java.util.Date) {
      setVariableValue("LossDate", 0, $arg)
    }
    
    property get PageMode () : boolean {
      return getVariableValue("PageMode", 0) as java.lang.Boolean
    }
    
    property set PageMode ($arg :  boolean) {
      setVariableValue("PageMode", 0, $arg)
    }
    
    property get claimMode () : gw.api.claim.NewClaimMode {
      return getVariableValue("claimMode", 0) as gw.api.claim.NewClaimMode
    }
    
    property set claimMode ($arg :  gw.api.claim.NewClaimMode) {
      setVariableValue("claimMode", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get policyType () : PolicyType {
      return getVariableValue("policyType", 0) as PolicyType
    }
    
    property set policyType ($arg :  PolicyType) {
      setVariableValue("policyType", 0, $arg)
    }
    
    property get searchCriteriaAndSummary () : gw.api.claim.NewClaimPolicySearchCriteriaAndSummary {
      return getVariableValue("searchCriteriaAndSummary", 0) as gw.api.claim.NewClaimPolicySearchCriteriaAndSummary
    }
    
    property set searchCriteriaAndSummary ($arg :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary) {
      setVariableValue("searchCriteriaAndSummary", 0, $arg)
    }
    
    property get wizardInfo () : gw.api.claim.NewClaimWizardInfo {
      return getVariableValue("wizardInfo", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizardInfo ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setVariableValue("wizardInfo", 0, $arg)
    }
    
    
  }
  
  
}