package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleApplicabilityCriteriaComparisonInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleApplicabilityCriteriaComparisonInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at CCRuleApplicabilityCriteriaComparisonInputSet.default.pcf: line 13, column 47
    function def_onEnter_0 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria"))
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at CCRuleApplicabilityCriteriaComparisonInputSet.default.pcf: line 13, column 47
    function def_refreshVariables_1 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria"))
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}