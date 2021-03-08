package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleCreationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleCreationScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleCreationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleCreationScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AlertBar (id=DuplicatedNameAlertBar) at CCRuleCreationScreen.pcf: line 39, column 74
    function action_6 () : void {
      versionController.pushRulesWithSameNamePopup(head.HeadVersion)
    }
    
    // 'def' attribute on PanelRef at CCRuleCreationScreen.pcf: line 41, column 104
    function def_onEnter_7 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.onEnter(context, head.HeadVersion, false, ruleController, ruleConditionType)
    }
    
    // 'def' attribute on PanelRef at CCRuleCreationScreen.pcf: line 41, column 104
    function def_refreshVariables_8 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.refreshVariables(context, head.HeadVersion, false, ruleController, ruleConditionType)
    }
    
    // 'initialValue' attribute on Variable at CCRuleCreationScreen.pcf: line 19, column 171
    function initialValue_0 () : gw.bizrules.pcf.RulePageController {
      return new gw.bizrules.pcf.RulePageController(head.HeadVersion, context.UIConfigs, CurrentLocation, gw.bizrules.CCRulesDetailsStateHolder.SwitchableModes)
    }
    
    // 'initialValue' attribute on Variable at CCRuleCreationScreen.pcf: line 23, column 74
    function initialValue_1 () : gw.bizrules.pcf.RuleVersionController {
      return new gw.bizrules.pcf.RuleVersionController(context)
    }
    
    // 'initialValue' attribute on Variable at CCRuleCreationScreen.pcf: line 27, column 41
    function initialValue_2 () : typekey.RuleConditionType {
      if (ruleController.ConditionBuilderController.ConditionLineHolders.isEmpty()) {ruleController.ConditionBuilderController.RuleConditionType = context.DefaultRuleConditionType} return ruleController.ConditionBuilderController.RuleConditionType 
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleCreationScreen.pcf: line 32, column 102
    function toolbarButtonSet_onEnter_3 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(ruleController)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRuleCreationScreen.pcf: line 32, column 102
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(ruleController)
    }
    
    // 'visible' attribute on AlertBar (id=DuplicatedNameAlertBar) at CCRuleCreationScreen.pcf: line 39, column 74
    function visible_5 () : java.lang.Boolean {
      return !versionController.isRuleNameUnique(head.HeadVersion)
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get head () : RuleHead {
      return getRequireValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setRequireValue("head", 0, $arg)
    }
    
    property get ruleConditionType () : typekey.RuleConditionType {
      return getVariableValue("ruleConditionType", 0) as typekey.RuleConditionType
    }
    
    property set ruleConditionType ($arg :  typekey.RuleConditionType) {
      setVariableValue("ruleConditionType", 0, $arg)
    }
    
    property get ruleController () : gw.bizrules.pcf.RulePageController {
      return getVariableValue("ruleController", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set ruleController ($arg :  gw.bizrules.pcf.RulePageController) {
      setVariableValue("ruleController", 0, $arg)
    }
    
    property get ruleToClone () : CCRule {
      return getRequireValue("ruleToClone", 0) as CCRule
    }
    
    property set ruleToClone ($arg :  CCRule) {
      setRequireValue("ruleToClone", 0, $arg)
    }
    
    property get versionController () : gw.bizrules.pcf.RuleVersionController {
      return getVariableValue("versionController", 0) as gw.bizrules.pcf.RuleVersionController
    }
    
    property set versionController ($arg :  gw.bizrules.pcf.RuleVersionController) {
      setVariableValue("versionController", 0, $arg)
    }
    
    
  }
  
  
}