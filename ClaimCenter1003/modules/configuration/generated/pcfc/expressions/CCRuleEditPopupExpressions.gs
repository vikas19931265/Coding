package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleEditPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleEditPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper, chosenSide :  RuleImportSide) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=CCRuleEditPopup) at CCRuleEditPopup.pcf: line 11, column 117
    static function canVisit_8 (chosenSide :  RuleImportSide, context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : java.lang.Boolean {
      return perm.Rule.edit(importEntry.ImportedVersion.Rule)
    }
    
    // 'def' attribute on PanelRef at CCRuleEditPopup.pcf: line 42, column 111
    function def_onEnter_6 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.onEnter(context, ruleVersion, true, controller, controller.Rule.RuleCondition.Type)
    }
    
    // 'def' attribute on PanelRef at CCRuleEditPopup.pcf: line 42, column 111
    function def_refreshVariables_7 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.refreshVariables(context, ruleVersion, true, controller, controller.Rule.RuleCondition.Type)
    }
    
    // 'initialValue' attribute on Variable at CCRuleEditPopup.pcf: line 29, column 27
    function initialValue_0 () : RuleVersion {
      return importHelper.getNewDraftVersionFrom(importEntry, chosenSide)
    }
    
    // 'initialValue' attribute on Variable at CCRuleEditPopup.pcf: line 33, column 50
    function initialValue_1 () : gw.bizrules.pcf.RulePageController {
      return new gw.bizrules.pcf.RulePageController(ruleVersion, context.UIConfigs, CurrentLocation, gw.bizrules.pcf.RuleConditionLineHolder.SWITCHABLE_LINE_EXPRESSION_MODES_SUPERSET)
    }
    
    // 'title' attribute on Popup (id=CCRuleEditPopup) at CCRuleEditPopup.pcf: line 11, column 117
    static function title_9 (chosenSide :  RuleImportSide, context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : java.lang.Object {
      return DisplayKey.get("BizRules.Import.Comparison.Edit.Title", importEntry.NewHeadVersion.Rule.Name)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleEditPopup.pcf: line 37, column 63
    function toolbarButtonSet_onEnter_2 (def :  pcf.RuleEditPopupToolbarButtonSet) : void {
      def.onEnter()
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleEditPopup.pcf: line 39, column 79
    function toolbarButtonSet_onEnter_4 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(controller)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleEditPopup.pcf: line 37, column 63
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.RuleEditPopupToolbarButtonSet) : void {
      def.refreshVariables()
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleEditPopup.pcf: line 39, column 79
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(controller)
    }
    
    override property get CurrentLocation () : pcf.CCRuleEditPopup {
      return super.CurrentLocation as pcf.CCRuleEditPopup
    }
    
    property get chosenSide () : RuleImportSide {
      return getVariableValue("chosenSide", 0) as RuleImportSide
    }
    
    property set chosenSide ($arg :  RuleImportSide) {
      setVariableValue("chosenSide", 0, $arg)
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getVariableValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setVariableValue("context", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RulePageController {
      return getVariableValue("controller", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RulePageController) {
      setVariableValue("controller", 0, $arg)
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
    
    property get ruleVersion () : RuleVersion {
      return getVariableValue("ruleVersion", 0) as RuleVersion
    }
    
    property set ruleVersion ($arg :  RuleVersion) {
      setVariableValue("ruleVersion", 0, $arg)
    }
    
    
  }
  
  
}