package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimFinancialsPieChartExpressionsImpl extends ClaimSummaryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'categoryLabel' attribute on DataSeries at ClaimSummary.pcf: line 131, column 38
    function categoryLabel_41 (value :  Map.Entry<String, java.lang.Integer>) : java.lang.String {
      return value.Key
    }
    
    // 'dataValues' attribute on DataSeries at ClaimSummary.pcf: line 131, column 38
    function dataValues_42 () : java.lang.Object {
      return gw.api.financials.FinancialsPieChartUtil.getFinancialsParameters(Claim).entrySet().toList()
    }
    
    // 'fillColor' attribute on DataSeries at ClaimSummary.pcf: line 131, column 38
    function fillColor_45 () : List<gw.api.web.color.GWColor> {
      return pieFillColors
    }
    
    // 'initialValue' attribute on Variable at ClaimSummary.pcf: line 120, column 62
    function initialValue_39 () : List<gw.api.web.color.GWColor> {
      return {gw.api.web.color.GWColor.THEME_NUMBERS_POSITIVE, gw.api.web.color.GWColor.THEME_NUMBERS_NEUTRAL}
    }
    
    // 'initialValue' attribute on Variable at ClaimSummary.pcf: line 124, column 62
    function initialValue_40 () : List<gw.api.web.color.GWColor> {
      return {gw.api.web.color.GWColor.THEME_APP_BACKGROUND}
    }
    
    // 'strokeColor' attribute on DataSeries at ClaimSummary.pcf: line 131, column 38
    function strokeColor_44 () : List<gw.api.web.color.GWColor> {
      return pieStrokeColors
    }
    
    // 'value' attribute on DataSeries at ClaimSummary.pcf: line 131, column 38
    function value_43 (value :  Map.Entry<String, java.lang.Integer>) : java.lang.Object {
      return value.Value
    }
    
    property get pieFillColors () : List<gw.api.web.color.GWColor> {
      return getVariableValue("pieFillColors", 1) as List<gw.api.web.color.GWColor>
    }
    
    property set pieFillColors ($arg :  List<gw.api.web.color.GWColor>) {
      setVariableValue("pieFillColors", 1, $arg)
    }
    
    property get pieStrokeColors () : List<gw.api.web.color.GWColor> {
      return getVariableValue("pieStrokeColors", 1) as List<gw.api.web.color.GWColor>
    }
    
    property set pieStrokeColors ($arg :  List<gw.api.web.color.GWColor>) {
      setVariableValue("pieStrokeColors", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    static function __constructorIndex (Claim :  Claim, excludeConfidentialNotes :  boolean) : int {
      return 1
    }
    
    // 'action' attribute on Link (id=ViewClaimOtherInstructions) at ClaimSummary.pcf: line 217, column 115
    function action_65 () : void {
      ClaimOtherInstructionWorksheet.goInWorkspace(Claim)
    }
    
    // 'action' attribute on Link (id=ViewClaimOtherInstructions) at ClaimSummary.pcf: line 217, column 115
    function action_dest_66 () : pcf.api.Destination {
      return pcf.ClaimOtherInstructionWorksheet.createDestination(Claim)
    }
    
    // 'beforeCommit' attribute on Page (id=ClaimSummary) at ClaimSummary.pcf: line 10, column 64
    function beforeCommit_89 (pickedValue :  java.lang.Object) : void {
      operationCallbackHelper.BeforeCommitAction()
    }
    
    // 'canVisit' attribute on Page (id=ClaimSummary) at ClaimSummary.pcf: line 10, column 64
    static function canVisit_90 (Claim :  Claim, excludeConfidentialNotes :  boolean) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.System.viewclaimsummary and (Claim.State != ClaimState.TC_DRAFT)
    }
    
    // 'def' attribute on InputSetRef (id=WC_RTW) at ClaimSummary.pcf: line 97, column 132
    function def_onEnter_37 (def :  pcf.ReturnToWorkInputSet_WC) : void {
      def.onEnter(gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? Claim.ensureClaimInjuryIncident() : null, false)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 238, column 63
    function def_onEnter_74 (def :  pcf.ClaimSummaryExposuresLV) : void {
      def.onEnter(Claim, Claim.Exposures)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 244, column 70
    function def_onEnter_76 (def :  pcf.ServiceRequestLV) : void {
      def.onEnter(Claim, true, operationCallbackHelper)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 254, column 51
    function def_onEnter_78 (def :  pcf.ClaimSummaryActivitiesLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 261, column 75
    function def_onEnter_81 (def :  pcf.ClaimSummaryMattersLV) : void {
      def.onEnter(Claim.Matters, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 267, column 77
    function def_onEnter_83 (def :  pcf.ClaimSummaryAssociatedClaimsLV) : void {
      def.onEnter(Claim, Claim.Associations)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 277, column 104
    function def_onEnter_85 (def :  pcf.NotesLV) : void {
      def.onEnter(excludeConfidentialNotes ? Claim.NonconfidentialNotes : Claim.ViewableNotes)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 283, column 75
    function def_onEnter_87 (def :  pcf.PeopleInvolvedLV) : void {
      def.onEnter(Claim, Claim.getContactsWithPreload())
    }
    
    // 'def' attribute on InputSetRef (id=WC_RTW) at ClaimSummary.pcf: line 97, column 132
    function def_refreshVariables_38 (def :  pcf.ReturnToWorkInputSet_WC) : void {
      def.refreshVariables(gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? Claim.ensureClaimInjuryIncident() : null, false)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 238, column 63
    function def_refreshVariables_75 (def :  pcf.ClaimSummaryExposuresLV) : void {
      def.refreshVariables(Claim, Claim.Exposures)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 244, column 70
    function def_refreshVariables_77 (def :  pcf.ServiceRequestLV) : void {
      def.refreshVariables(Claim, true, operationCallbackHelper)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 254, column 51
    function def_refreshVariables_79 (def :  pcf.ClaimSummaryActivitiesLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 261, column 75
    function def_refreshVariables_82 (def :  pcf.ClaimSummaryMattersLV) : void {
      def.refreshVariables(Claim.Matters, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 267, column 77
    function def_refreshVariables_84 (def :  pcf.ClaimSummaryAssociatedClaimsLV) : void {
      def.refreshVariables(Claim, Claim.Associations)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 277, column 104
    function def_refreshVariables_86 (def :  pcf.NotesLV) : void {
      def.refreshVariables(excludeConfidentialNotes ? Claim.NonconfidentialNotes : Claim.ViewableNotes)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 283, column 75
    function def_refreshVariables_88 (def :  pcf.PeopleInvolvedLV) : void {
      def.refreshVariables(Claim, Claim.getContactsWithPreload())
    }
    
    // 'highInclusive' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function highInclusive_4 () : java.lang.Boolean {
      return !claimUIHelper.onlyTargetValueExists(Claim.DaysOpenClaimMetric.Limit)
    }
    
    // 'highThreshold' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function highThreshold_5 () : java.lang.Double {
      return claimUIHelper.HighThreshold
    }
    
    // 'iconColor' attribute on Link (id=EmployerThreePointContact) at ClaimSummary.pcf: line 79, column 79
    function iconColor_28 () : gw.api.web.color.GWColor {
      return Claim.getWCContactEmployerActivityStatus().Second
    }
    
    // 'iconColor' attribute on Link (id=EmployeeThreePointContact) at ClaimSummary.pcf: line 85, column 79
    function iconColor_31 () : gw.api.web.color.GWColor {
      return Claim.getWCContactEmployeeActivityStatus().Second
    }
    
    // 'iconColor' attribute on Link (id=MedicalProviderThreePointContact) at ClaimSummary.pcf: line 91, column 82
    function iconColor_34 () : gw.api.web.color.GWColor {
      return Claim.getWCContactMedProviderActivityStatus().Second
    }
    
    // 'icon' attribute on Link (id=EmployerThreePointContact) at ClaimSummary.pcf: line 79, column 79
    function icon_27 () : java.lang.String {
      return Claim.getWCContactEmployerActivityStatus().First
    }
    
    // 'icon' attribute on Link (id=EmployeeThreePointContact) at ClaimSummary.pcf: line 85, column 79
    function icon_30 () : java.lang.String {
      return Claim.getWCContactEmployeeActivityStatus().First
    }
    
    // 'icon' attribute on Link (id=MedicalProviderThreePointContact) at ClaimSummary.pcf: line 91, column 82
    function icon_33 () : java.lang.String {
      return Claim.getWCContactMedProviderActivityStatus().First
    }
    
    // 'initialValue' attribute on Variable at ClaimSummary.pcf: line 25, column 73
    function initialValue_0 () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return new gw.vendormanagement.ServiceRequestOperationCallbackHelper()
    }
    
    // 'initialValue' attribute on Variable at ClaimSummary.pcf: line 29, column 49
    function initialValue_1 () : gw.api.claim.ClaimSummaryUIHelper {
      return new gw.api.claim.ClaimSummaryUIHelper(Claim)
    }
    
    // 'label' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function label_3 () : java.lang.Object {
      return Claim.State.DisplayName
    }
    
    // 'lowInclusive' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function lowInclusive_6 () : java.lang.Boolean {
      return claimUIHelper.noYellowValueExists(Claim.DaysOpenClaimMetric.Limit)
    }
    
    // 'lowThreshold' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function lowThreshold_7 () : java.lang.Double {
      return claimUIHelper.LowThreshold
    }
    
    // Page (id=ClaimSummary) at ClaimSummary.pcf: line 10, column 64
    static function parent_91 (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Destination {
      return pcf.ClaimSummaryGroup.createDestination(Claim)
    }
    
    // 'percentage' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function percentage_8 () : java.lang.Double {
      return claimUIHelper.DaysOpenPercentage
    }
    
    // 'status' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function status_9 () : java.lang.String {
      return claimUIHelper.OpenStatus
    }
    
    // 'tooltip' attribute on Link (id=EmployerThreePointContact) at ClaimSummary.pcf: line 79, column 79
    function tooltip_26 () : java.lang.String {
      return Claim.getWCContactEmployerActivityStatus().Third
    }
    
    // 'tooltip' attribute on Link (id=EmployeeThreePointContact) at ClaimSummary.pcf: line 85, column 79
    function tooltip_29 () : java.lang.String {
      return Claim.getWCContactEmployeeActivityStatus().Third
    }
    
    // 'tooltip' attribute on Link (id=MedicalProviderThreePointContact) at ClaimSummary.pcf: line 91, column 82
    function tooltip_32 () : java.lang.String {
      return Claim.getWCContactMedProviderActivityStatus().Third
    }
    
    // 'value' attribute on TextInput (id=Paid_Input) at ClaimSummary.pcf: line 145, column 68
    function valueRoot_49 () : java.lang.Object {
      return Claim.TotalPaidClaimMetric
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSummary.pcf: line 206, column 45
    function valueRoot_60 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=Location_Input) at ClaimSummary.pcf: line 224, column 61
    function valueRoot_69 () : java.lang.Object {
      return Claim.LossLocation
    }
    
    // 'value' attribute on TextInput (id=DaysOpenText_Input) at ClaimSummary.pcf: line 58, column 76
    function value_13 () : java.lang.String {
      return DisplayKey.get("Web.ClaimSummary.Headline.Basics.ClaimOpenWithState",  Claim.State.DisplayName, claimUIHelper.OpenStatus)
    }
    
    // 'value' attribute on TextInput (id=ClaimClosedText_Input) at ClaimSummary.pcf: line 64, column 41
    function value_18 () : java.lang.String {
      return claimUIHelper.getClaimClosedText()
    }
    
    // 'value' attribute on TextInput (id=WCInjuryWorkStatus_Input) at ClaimSummary.pcf: line 69, column 92
    function value_23 () : java.lang.String {
      return Claim.getWorkStatusMessage()
    }
    
    // 'value' attribute on TextInput (id=TotalGrossIncurred_Input) at ClaimSummary.pcf: line 140, column 105
    function value_46 () : java.lang.String {
      return gw.api.util.CurrencyUtil.renderAsCurrency(Claim.ClaimRpt.TotalIncurredGross)
    }
    
    // 'value' attribute on TextInput (id=Paid_Input) at ClaimSummary.pcf: line 145, column 68
    function value_48 () : java.lang.String {
      return Claim.TotalPaidClaimMetric.DisplayValue
    }
    
    // 'value' attribute on TextInput (id=Recovered_Input) at ClaimSummary.pcf: line 150, column 102
    function value_51 () : java.lang.String {
      return gw.api.util.CurrencyUtil.renderAsCurrency(Claim.ClaimRpt.TotalRecoveries)
    }
    
    // 'value' attribute on InputIterator (id=RiskIndicatorIterator) at ClaimSummary.pcf: line 172, column 53
    function value_58 () : entity.ClaimIndicator[] {
      return Claim.ClaimIndicators.where( \ c -> c.IsOn).orderBy( \ e -> ((e.Subtype.Priority) as java.lang.Comparable<java.lang.Object>)).toTypedArray()
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSummary.pcf: line 206, column 45
    function value_59 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on DateInput (id=ReportDate_Input) at ClaimSummary.pcf: line 210, column 49
    function value_62 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=Location_Input) at ClaimSummary.pcf: line 224, column 61
    function value_68 () : java.lang.String {
      return Claim.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSummary.pcf: line 230, column 48
    function value_71 () : java.lang.String {
      return Claim.Description
    }
    
    // 'visible' attribute on TextInput (id=DaysOpenText_Input) at ClaimSummary.pcf: line 58, column 76
    function visible_12 () : java.lang.Boolean {
      return !Claim.Closed and !claimUIHelper.showBarInput()
    }
    
    // 'visible' attribute on TextInput (id=ClaimClosedText_Input) at ClaimSummary.pcf: line 64, column 41
    function visible_16 () : java.lang.Boolean {
      return Claim.Closed
    }
    
    // 'visible' attribute on BarInput (id=DaysOpenProgressBar_Input) at ClaimSummary.pcf: line 53, column 75
    function visible_2 () : java.lang.Boolean {
      return !Claim.Closed and claimUIHelper.showBarInput()
    }
    
    // 'visible' attribute on TextInput (id=WCInjuryWorkStatus_Input) at ClaimSummary.pcf: line 69, column 92
    function visible_22 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim)
    }
    
    // 'visible' attribute on ContentInput (id=ThreePointContactIcons) at ClaimSummary.pcf: line 73, column 143
    function visible_35 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) and Claim.shouldShowWCThreePointContactActivities()
    }
    
    // 'visible' attribute on InputSetRef (id=WC_RTW) at ClaimSummary.pcf: line 97, column 132
    function visible_36 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) and Claim.getLossTimeExposure() != null
    }
    
    // 'visible' attribute on Label (id=RiskIndicatorNone) at ClaimSummary.pcf: line 167, column 79
    function visible_53 () : java.lang.Boolean {
      return !Claim.ClaimIndicators.hasMatch( \ c -> c.IsOn)
    }
    
    // 'visible' attribute on ContentInput at ClaimSummary.pcf: line 213, column 60
    function visible_67 () : java.lang.Boolean {
      return Claim.hasOtherInstructions()
    }
    
    // 'visible' attribute on PanelRef at ClaimSummary.pcf: line 261, column 75
    function visible_80 () : java.lang.Boolean {
      return perm.Matter.view(Claim) and perm.System.viewmatters
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimSummary {
      return super.CurrentLocation as pcf.ClaimSummary
    }
    
    property get claimUIHelper () : gw.api.claim.ClaimSummaryUIHelper {
      return getVariableValue("claimUIHelper", 0) as gw.api.claim.ClaimSummaryUIHelper
    }
    
    property set claimUIHelper ($arg :  gw.api.claim.ClaimSummaryUIHelper) {
      setVariableValue("claimUIHelper", 0, $arg)
    }
    
    property get excludeConfidentialNotes () : boolean {
      return getVariableValue("excludeConfidentialNotes", 0) as java.lang.Boolean
    }
    
    property set excludeConfidentialNotes ($arg :  boolean) {
      setVariableValue("excludeConfidentialNotes", 0, $arg)
    }
    
    property get operationCallbackHelper () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return getVariableValue("operationCallbackHelper", 0) as gw.vendormanagement.ServiceRequestOperationCallbackHelper
    }
    
    property set operationCallbackHelper ($arg :  gw.vendormanagement.ServiceRequestOperationCallbackHelper) {
      setVariableValue("operationCallbackHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSummaryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=IndicatorIcon) at ClaimSummary.pcf: line 180, column 107
    function iconColor_56 () : gw.api.web.color.GWColor {
      return indicator.IconColor
    }
    
    // 'icon' attribute on Link (id=IndicatorIcon) at ClaimSummary.pcf: line 180, column 107
    function icon_55 () : java.lang.String {
      return indicator.Icon
    }
    
    // 'label' attribute on Link (id=IndicatorText) at ClaimSummary.pcf: line 183, column 45
    function label_57 () : java.lang.Object {
      return indicator.Text
    }
    
    // 'tooltip' attribute on Link (id=IndicatorIcon) at ClaimSummary.pcf: line 180, column 107
    function tooltip_54 () : java.lang.String {
      return indicator.HoverText != indicator.Text ? indicator.HoverText : ""
    }
    
    property get indicator () : entity.ClaimIndicator {
      return getIteratedValue(1) as entity.ClaimIndicator
    }
    
    
  }
  
  
}