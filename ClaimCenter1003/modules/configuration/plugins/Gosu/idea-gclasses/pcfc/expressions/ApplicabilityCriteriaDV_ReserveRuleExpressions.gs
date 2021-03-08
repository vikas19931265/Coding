package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/ApplicabilityCriteriaDV.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ApplicabilityCriteriaDV_ReserveRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/ApplicabilityCriteriaDV.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ApplicabilityCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=LossTypes) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 22, column 25
    function def_onEnter_1 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.onEnter(helper.LossTypesBundle, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTypes) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 25, column 27
    function def_onEnter_3 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.PolicyTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 28, column 29
    function def_onEnter_5 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=ExposureTypes) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 33, column 29
    function def_onEnter_7 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.ExposureTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=ClaimSegments) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 36, column 29
    function def_onEnter_9 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.onEnter(helper.ClaimSegmentsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=ClaimSegments) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 36, column 29
    function def_refreshVariables_10 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.ClaimSegmentsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=LossTypes) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 22, column 25
    function def_refreshVariables_2 (def :  pcf.ApplicabilityCriteriaSingleSelectInputSet) : void {
      def.refreshVariables(helper.LossTypesBundle, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyTypes) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 25, column 27
    function def_refreshVariables_4 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.PolicyTypesBundle)
    }
    
    // 'def' attribute on InputSetRef (id=Jurisdictions) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 28, column 29
    function def_refreshVariables_6 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.JurisdictionsBundle)
    }
    
    // 'def' attribute on InputSetRef (id=ExposureTypes) at ApplicabilityCriteriaDV.ReserveRule.pcf: line 33, column 29
    function def_refreshVariables_8 (def :  pcf.ApplicabilityCriteriaMultiSelectInputSet) : void {
      def.refreshVariables(helper.ExposureTypesBundle)
    }
    
    // 'initialValue' attribute on Variable at ApplicabilityCriteriaDV.ReserveRule.pcf: line 18, column 66
    function initialValue_0 () : gw.bizrules.ReserveRules.ReserveRulePanelSetHelper {
      return new gw.bizrules.ReserveRules.ReserveRulePanelSetHelper(version.Rule as ReserveRule, CurrentLocation)
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get helper () : gw.bizrules.ReserveRules.ReserveRulePanelSetHelper {
      return getVariableValue("helper", 0) as gw.bizrules.ReserveRules.ReserveRulePanelSetHelper
    }
    
    property set helper ($arg :  gw.bizrules.ReserveRules.ReserveRulePanelSetHelper) {
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