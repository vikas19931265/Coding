package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleVersionDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleVersionDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleVersionDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleVersionDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (context :  gw.bizrules.CCRulesNavigationContext, ruleVersion :  RuleVersion, importing :  boolean) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at CCRuleVersionDetailsPopup.pcf: line 25, column 116
    function def_onEnter_1 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.onEnter(context, ruleVersion, importing, controller, controller.Rule.RuleCondition.Type)
    }
    
    // 'def' attribute on PanelRef at CCRuleVersionDetailsPopup.pcf: line 25, column 116
    function def_refreshVariables_2 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.refreshVariables(context, ruleVersion, importing, controller, controller.Rule.RuleCondition.Type)
    }
    
    // 'initialValue' attribute on Variable at CCRuleVersionDetailsPopup.pcf: line 22, column 50
    function initialValue_0 () : gw.bizrules.pcf.RulePageController {
      return new gw.bizrules.pcf.RulePageController(ruleVersion, context.UIConfigs, CurrentLocation, gw.bizrules.CCRulesDetailsStateHolder.SwitchableModes)
    }
    
    // 'title' attribute on Popup (id=CCRuleVersionDetailsPopup) at CCRuleVersionDetailsPopup.pcf: line 7, column 77
    static function title_3 (context :  gw.bizrules.CCRulesNavigationContext, importing :  boolean, ruleVersion :  RuleVersion) : java.lang.Object {
      return DisplayKey.get('Web.BizRules.Rule.Title',ruleVersion.Rule.Name)
    }
    
    override property get CurrentLocation () : pcf.CCRuleVersionDetailsPopup {
      return super.CurrentLocation as pcf.CCRuleVersionDetailsPopup
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
    
    property get importing () : boolean {
      return getVariableValue("importing", 0) as java.lang.Boolean
    }
    
    property set importing ($arg :  boolean) {
      setVariableValue("importing", 0, $arg)
    }
    
    property get ruleVersion () : RuleVersion {
      return getVariableValue("ruleVersion", 0) as RuleVersion
    }
    
    property set ruleVersion ($arg :  RuleVersion) {
      setVariableValue("ruleVersion", 0, $arg)
    }
    
    
  }
  
  
}