package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleComparisonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleComparisonPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleComparisonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleComparisonPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : int {
      return 1
    }
    
    static function __constructorIndex (context :  gw.bizrules.CCRulesNavigationContext, version1 :  RuleVersion, version2 :  RuleVersion) : int {
      return 0
    }
    
    // 'afterReturnFromPopup' attribute on Popup (id=CCRuleComparisonPopup) at CCRuleComparisonPopup.pcf: line 9, column 74
    function afterReturnFromPopup_37 (popupCommitted :  boolean) : void {
      if (popupCommitted) CurrentLocation.commit()
    }
    
    // 'columns' attribute on Layout at CCRuleComparisonPopup.pcf: line 51, column 25
    function columns_7 () : java.lang.Double {
      return controller.TotalColumns
    }
    
    // 'def' attribute on InputSetRef (id=RuleDetailsSectionLabel) at CCRuleComparisonPopup.pcf: line 57, column 41
    function def_onEnter_10 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("BizRules.Import.Comparison.RuleDetails"))
    }
    
    // 'def' attribute on InputSetRef (id=NameRow) at CCRuleComparisonPopup.pcf: line 60, column 25
    function def_onEnter_12 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.NameRow)
    }
    
    // 'def' attribute on InputSetRef (id=DescriptionRow) at CCRuleComparisonPopup.pcf: line 63, column 32
    function def_onEnter_14 (def :  pcf.RuleComparisonRowTextAreaInputSet) : void {
      def.onEnter(helper.DescriptionRow)
    }
    
    // 'def' attribute on InputSetRef (id=ContextRow) at CCRuleComparisonPopup.pcf: line 66, column 28
    function def_onEnter_16 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(helper.ContextRow)
    }
    
    // 'def' attribute on InputSetRef (id=TriggerRow) at CCRuleComparisonPopup.pcf: line 69, column 28
    function def_onEnter_18 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.onEnter(helper.TriggerRow)
    }
    
    // 'def' attribute on InputSetRef (id=AvailableToRunRow) at CCRuleComparisonPopup.pcf: line 72, column 35
    function def_onEnter_20 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.onEnter(helper.AvailableToRunRow)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_onEnter_22 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ActivityRule) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_onEnter_24 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ExposureRule) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_onEnter_26 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ReserveRule) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_onEnter_28 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_default) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleVariables) at CCRuleComparisonPopup.pcf: line 79, column 31
    function def_onEnter_31 (def :  pcf.RuleComparisonVariablesSectionInputSet) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleCondition) at CCRuleComparisonPopup.pcf: line 82, column 31
    function def_onEnter_33 (def :  pcf.RuleComparisonConditionInputSet) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleActions) at CCRuleComparisonPopup.pcf: line 85, column 29
    function def_onEnter_35 (def :  pcf.RuleComparisonActionsInputSet) : void {
      def.onEnter(controller)
    }
    
    // 'def' attribute on InputSetRef (id=ComparisonHeadings) at CCRuleComparisonPopup.pcf: line 54, column 36
    function def_onEnter_8 (def :  pcf.RuleComparisonColumnHeadingsInputSet) : void {
      def.onEnter(controller, {DisplayKey.get('BizRules.Import.Comparison.Existing',context.VersionController.getLabelForExistingVersion(version1,false)), DisplayKey.get('BizRules.Import.Comparison.Importing',context.VersionController.getLabelForImportingVersion(version2))})
    }
    
    // 'def' attribute on InputSetRef (id=RuleDetailsSectionLabel) at CCRuleComparisonPopup.pcf: line 57, column 41
    function def_refreshVariables_11 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("BizRules.Import.Comparison.RuleDetails"))
    }
    
    // 'def' attribute on InputSetRef (id=NameRow) at CCRuleComparisonPopup.pcf: line 60, column 25
    function def_refreshVariables_13 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.NameRow)
    }
    
    // 'def' attribute on InputSetRef (id=DescriptionRow) at CCRuleComparisonPopup.pcf: line 63, column 32
    function def_refreshVariables_15 (def :  pcf.RuleComparisonRowTextAreaInputSet) : void {
      def.refreshVariables(helper.DescriptionRow)
    }
    
    // 'def' attribute on InputSetRef (id=ContextRow) at CCRuleComparisonPopup.pcf: line 66, column 28
    function def_refreshVariables_17 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(helper.ContextRow)
    }
    
    // 'def' attribute on InputSetRef (id=TriggerRow) at CCRuleComparisonPopup.pcf: line 69, column 28
    function def_refreshVariables_19 (def :  pcf.RuleComparisonRowTypeKeyInputSet) : void {
      def.refreshVariables(helper.TriggerRow)
    }
    
    // 'def' attribute on InputSetRef (id=AvailableToRunRow) at CCRuleComparisonPopup.pcf: line 72, column 35
    function def_refreshVariables_21 (def :  pcf.RuleComparisonRowBooleanInputSet) : void {
      def.refreshVariables(helper.AvailableToRunRow)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_refreshVariables_23 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ActivityRule) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_refreshVariables_25 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ExposureRule) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_refreshVariables_27 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ReserveRule) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function def_refreshVariables_29 (def :  pcf.CCRuleApplicabilityCriteriaComparisonInputSet_default) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleVariables) at CCRuleComparisonPopup.pcf: line 79, column 31
    function def_refreshVariables_32 (def :  pcf.RuleComparisonVariablesSectionInputSet) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleCondition) at CCRuleComparisonPopup.pcf: line 82, column 31
    function def_refreshVariables_34 (def :  pcf.RuleComparisonConditionInputSet) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=RuleActions) at CCRuleComparisonPopup.pcf: line 85, column 29
    function def_refreshVariables_36 (def :  pcf.RuleComparisonActionsInputSet) : void {
      def.refreshVariables(controller)
    }
    
    // 'def' attribute on InputSetRef (id=ComparisonHeadings) at CCRuleComparisonPopup.pcf: line 54, column 36
    function def_refreshVariables_9 (def :  pcf.RuleComparisonColumnHeadingsInputSet) : void {
      def.refreshVariables(controller, {DisplayKey.get('BizRules.Import.Comparison.Existing',context.VersionController.getLabelForExistingVersion(version1,false)), DisplayKey.get('BizRules.Import.Comparison.Importing',context.VersionController.getLabelForImportingVersion(version2))})
    }
    
    // 'initialValue' attribute on Variable at CCRuleComparisonPopup.pcf: line 26, column 27
    function initialValue_0 () : RuleVersion {
      return importEntry.ExistingVersion
    }
    
    // 'initialValue' attribute on Variable at CCRuleComparisonPopup.pcf: line 30, column 27
    function initialValue_1 () : RuleVersion {
      return importEntry.ImportedVersion
    }
    
    // 'initialValue' attribute on Variable at CCRuleComparisonPopup.pcf: line 34, column 63
    function initialValue_2 () : gw.bizrules.pcf.RuleVersionComparisonController {
      return new gw.bizrules.pcf.RuleVersionComparisonController(version1, version2, 1, context.UIConfigs, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at CCRuleComparisonPopup.pcf: line 38, column 55
    function initialValue_3 () : gw.bizrules.RuleVersionComparisonHelper {
      return new gw.bizrules.RuleVersionComparisonHelper(controller.RuleVersions)
    }
    
    // 'mode' attribute on InputSetRef (id=RuleApplicabilityCriteria) at CCRuleComparisonPopup.pcf: line 76, column 41
    function mode_30 () : java.lang.Object {
      return version1.Rule.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleComparisonPopup.pcf: line 42, column 98
    function toolbarButtonSet_onEnter_4 (def :  pcf.RuleComparisonToolbarButtonSet) : void {
      def.onEnter(importEntry, importHelper, context)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleComparisonPopup.pcf: line 42, column 98
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.RuleComparisonToolbarButtonSet) : void {
      def.refreshVariables(importEntry, importHelper, context)
    }
    
    // 'visible' attribute on AlertBar (id=draftAlert) at CCRuleComparisonPopup.pcf: line 47, column 106
    function visible_6 () : java.lang.Boolean {
      return perm.Rule.edit(importEntry.ImportedVersion.Rule) and importEntry.ExistingVersionDraft
    }
    
    override property get CurrentLocation () : pcf.CCRuleComparisonPopup {
      return super.CurrentLocation as pcf.CCRuleComparisonPopup
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getVariableValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setVariableValue("context", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getVariableValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setVariableValue("controller", 0, $arg)
    }
    
    property get helper () : gw.bizrules.RuleVersionComparisonHelper {
      return getVariableValue("helper", 0) as gw.bizrules.RuleVersionComparisonHelper
    }
    
    property set helper ($arg :  gw.bizrules.RuleVersionComparisonHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get importEntry () : RuleImportTaskEntry {
      return getVariableValue("importEntry", 0) as RuleImportTaskEntry
    }
    
    property set importEntry ($arg :  RuleImportTaskEntry) {
      setVariableValue("importEntry", 0, $arg)
    }
    
    property get importHelper () : gw.bizrules.pcf.RuleExportImportPageHelper {
      return getVariableValue("importHelper", 0) as gw.bizrules.pcf.RuleExportImportPageHelper
    }
    
    property set importHelper ($arg :  gw.bizrules.pcf.RuleExportImportPageHelper) {
      setVariableValue("importHelper", 0, $arg)
    }
    
    property get version1 () : RuleVersion {
      return getVariableValue("version1", 0) as RuleVersion
    }
    
    property set version1 ($arg :  RuleVersion) {
      setVariableValue("version1", 0, $arg)
    }
    
    property get version2 () : RuleVersion {
      return getVariableValue("version2", 0) as RuleVersion
    }
    
    property set version2 ($arg :  RuleVersion) {
      setVariableValue("version2", 0, $arg)
    }
    
    
  }
  
  
}