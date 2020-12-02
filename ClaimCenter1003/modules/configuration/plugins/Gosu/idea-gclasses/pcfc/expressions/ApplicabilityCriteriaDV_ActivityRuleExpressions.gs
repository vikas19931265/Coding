package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/ApplicabilityCriteriaDV.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApplicabilityCriteriaDV_ActivityRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/ApplicabilityCriteriaDV.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApplicabilityCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=LossTypes) at ApplicabilityCriteriaDV.ActivityRule.pcf: line 22, column 25
    function def_onEnter_1 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.LossTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTypes) at ApplicabilityCriteriaDV.ActivityRule.pcf: line 25, column 27
    function def_onEnter_3 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.PolicyTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at ApplicabilityCriteriaDV.ActivityRule.pcf: line 28, column 29
    function def_onEnter_5 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=LossTypes) at ApplicabilityCriteriaDV.ActivityRule.pcf: line 22, column 25
    function def_refreshVariables_2 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.LossTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTypes) at ApplicabilityCriteriaDV.ActivityRule.pcf: line 25, column 27
    function def_refreshVariables_4 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.PolicyTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at ApplicabilityCriteriaDV.ActivityRule.pcf: line 28, column 29
    function def_refreshVariables_6 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.JurisdictionsBundle)
    }
    
    // 'initialValue' attribute on Variable at ApplicabilityCriteriaDV.ActivityRule.pcf: line 18, column 54
    function initialValue_0 () : gw.bizrules.ActivityRulePanelSetHelper {
      return new gw.bizrules.ActivityRulePanelSetHelper(version.Rule as ActivityRule, CurrentLocation)
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get helper () : gw.bizrules.ActivityRulePanelSetHelper {
      return getVariableValue("helper", 0) as gw.bizrules.ActivityRulePanelSetHelper
    }
    
    property set helper ($arg :  gw.bizrules.ActivityRulePanelSetHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get version () : RuleVersion {
      return getRequireValue("version", 0) as RuleVersion
    }
    
    property set version ($arg :  RuleVersion) {
      setRequireValue("version", 0, $arg)
    }
    
    
  }
  
  
}