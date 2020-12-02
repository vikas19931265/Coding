package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleApplicabilityCriteriaComparisonInputSet_ActivityRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleApplicabilityCriteriaComparisonInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 17, column 47
    function def_onEnter_1 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria"))
    }
    
    // 'def' attribute on InputSetRef (id=LossType) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 20, column 22
    function def_onEnter_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.LossTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyType) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 23, column 24
    function def_onEnter_5 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.PolicyTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdiction) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 26, column 26
    function def_onEnter_7 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.JurisdictionRow)
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 17, column 47
    function def_refreshVariables_2 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria"))
    }
    
    // 'def' attribute on InputSetRef (id=LossType) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 20, column 22
    function def_refreshVariables_4 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.LossTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyType) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 23, column 24
    function def_refreshVariables_6 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.PolicyTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdiction) at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 26, column 26
    function def_refreshVariables_8 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.JurisdictionRow)
    }
    
    // 'initialValue' attribute on Variable at CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf: line 14, column 75
    function initialValue_0 () : gw.bizrules.RuleVersionComparisonHelper<ActivityRule> {
      return new gw.bizrules.RuleVersionComparisonHelper<ActivityRule>(controller.RuleVersions)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get helper () : gw.bizrules.RuleVersionComparisonHelper<ActivityRule> {
      return getVariableValue("helper", 0) as gw.bizrules.RuleVersionComparisonHelper<ActivityRule>
    }
    
    property set helper ($arg :  gw.bizrules.RuleVersionComparisonHelper<ActivityRule>) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  
}