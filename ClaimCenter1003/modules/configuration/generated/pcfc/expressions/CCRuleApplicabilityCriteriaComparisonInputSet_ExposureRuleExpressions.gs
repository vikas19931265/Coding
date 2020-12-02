package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRuleApplicabilityCriteriaComparisonInputSet_ExposureRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRuleApplicabilityCriteriaComparisonInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 17, column 47
    function def_onEnter_1 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.onEnter(controller, DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria"))
    }
    
    // 'def' attribute on InputSetRef (id=CoverageType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 32, column 26
    function def_onEnter_11 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.CoverageType"), \rule -> rule.CoverageTypes*.CoverageType))
    }
    
    // 'def' attribute on InputSetRef (id=IncidentType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 35, column 26
    function def_onEnter_13 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.IncidentType"), \rule -> rule.IncidentTypes*.IncidentType))
    }
    
    // 'def' attribute on InputSetRef (id=LossPartyType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 38, column 27
    function def_onEnter_15 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.LossPartyType"), \rule -> rule.LossPartyTypes*.LossPartyType))
    }
    
    // 'def' attribute on InputSetRef (id=LossType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 20, column 22
    function def_onEnter_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.LossTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 23, column 24
    function def_onEnter_5 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.PolicyTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdiction) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 26, column 26
    function def_onEnter_7 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.JurisdictionRow)
    }
    
    // 'def' attribute on InputSetRef (id=LossCause) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 29, column 23
    function def_onEnter_9 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.LossCause"), \rule -> rule.LossCauses*.LossCause))
    }
    
    // 'def' attribute on InputSetRef (id=LossCause) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 29, column 23
    function def_refreshVariables_10 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.LossCause"), \rule -> rule.LossCauses*.LossCause))
    }
    
    // 'def' attribute on InputSetRef (id=CoverageType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 32, column 26
    function def_refreshVariables_12 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.CoverageType"), \rule -> rule.CoverageTypes*.CoverageType))
    }
    
    // 'def' attribute on InputSetRef (id=IncidentType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 35, column 26
    function def_refreshVariables_14 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.IncidentType"), \rule -> rule.IncidentTypes*.IncidentType))
    }
    
    // 'def' attribute on InputSetRef (id=LossPartyType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 38, column 27
    function def_refreshVariables_16 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.createRowForTypelist(DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria.LossPartyType"), \rule -> rule.LossPartyTypes*.LossPartyType))
    }
    
    // 'def' attribute on InputSetRef (id=ApplicabilityCriteriaSectionLabel) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 17, column 47
    function def_refreshVariables_2 (def :  pcf.RuleComparisonSectionLabelInputSet) : void {
      def.refreshVariables(controller, DisplayKey.get("Web.BizRules.Rule.ApplicabilityCriteria"))
    }
    
    // 'def' attribute on InputSetRef (id=LossType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 20, column 22
    function def_refreshVariables_4 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.LossTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyType) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 23, column 24
    function def_refreshVariables_6 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.PolicyTypeRow)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdiction) at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 26, column 26
    function def_refreshVariables_8 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(helper.JurisdictionRow)
    }
    
    // 'initialValue' attribute on Variable at CCRuleApplicabilityCriteriaComparisonInputSet.ExposureRule.pcf: line 14, column 75
    function initialValue_0 () : gw.bizrules.RuleVersionComparisonHelper<ExposureRule> {
      return new gw.bizrules.RuleVersionComparisonHelper<ExposureRule>(controller.RuleVersions)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get helper () : gw.bizrules.RuleVersionComparisonHelper<ExposureRule> {
      return getVariableValue("helper", 0) as gw.bizrules.RuleVersionComparisonHelper<ExposureRule>
    }
    
    property set helper ($arg :  gw.bizrules.RuleVersionComparisonHelper<ExposureRule>) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  
}