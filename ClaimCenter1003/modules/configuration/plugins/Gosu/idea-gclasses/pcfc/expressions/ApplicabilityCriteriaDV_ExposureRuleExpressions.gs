package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/ApplicabilityCriteriaDV.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApplicabilityCriteriaDV_ExposureRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/ApplicabilityCriteriaDV.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApplicabilityCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 22, column 27
    function def_onEnter_1 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.onEnter(helper.PolicyTypesBundle, true)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 39, column 29
    function def_onEnter_11 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=IncidentTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 25, column 29
    function def_onEnter_3 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.onEnter(helper.IncidentTypesBundle, true)
    }
    
    // 'def' attribute on InputSetRef (id=LossCauses) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 28, column 26
    function def_onEnter_5 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.LossCausesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=LossPartyTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 33, column 30
    function def_onEnter_7 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.onEnter(helper.LossPartyTypesBundle, false)
    }
    
    // 'def' attribute on InputSetRef (id=LossTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 36, column 25
    function def_onEnter_9 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.onEnter(helper.LossTypesBundle, false)
    }
    
    // 'def' attribute on InputSetRef (id=LossTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 36, column 25
    function def_refreshVariables_10 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.refreshVariables(helper.LossTypesBundle, false)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 39, column 29
    function def_refreshVariables_12 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 22, column 27
    function def_refreshVariables_2 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.refreshVariables(helper.PolicyTypesBundle, true)
    }
    
    // 'def' attribute on InputSetRef (id=IncidentTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 25, column 29
    function def_refreshVariables_4 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.refreshVariables(helper.IncidentTypesBundle, true)
    }
    
    // 'def' attribute on InputSetRef (id=LossCauses) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 28, column 26
    function def_refreshVariables_6 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.LossCausesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=LossPartyTypes) at ApplicabilityCriteriaDV.ExposureRule.pcf: line 33, column 30
    function def_refreshVariables_8 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.refreshVariables(helper.LossPartyTypesBundle, false)
    }
    
    // 'initialValue' attribute on Variable at ApplicabilityCriteriaDV.ExposureRule.pcf: line 18, column 68
    function initialValue_0 () : gw.bizrules.ExposureRules.ExposureRulePanelSetHelper {
      return new gw.bizrules.ExposureRules.ExposureRulePanelSetHelper(version.Rule as ExposureRule, CurrentLocation)
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get helper () : gw.bizrules.ExposureRules.ExposureRulePanelSetHelper {
      return getVariableValue("helper", 0) as gw.bizrules.ExposureRules.ExposureRulePanelSetHelper
    }
    
    property set helper ($arg :  gw.bizrules.ExposureRules.ExposureRulePanelSetHelper) {
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