package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/RuleFilterCriteriaRuleActionInputSet.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleFilterCriteriaRuleActionInputSet_ExposureRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/RuleFilterCriteriaRuleActionInputSet.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleFilterCriteriaRuleActionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaRuleActionInputSet.ExposureRule.pcf: line 15, column 68
    function initialValue_0 () : gw.bizrules.ExposureRules.ExposureRuleFilterCriteria {
      return filterCriteria as gw.bizrules.ExposureRules.ExposureRuleFilterCriteria
    }
    
    property get filterCriteria () : gw.bizrules.CCRuleFilterCriteriaBase {
      return getRequireValue("filterCriteria", 0) as gw.bizrules.CCRuleFilterCriteriaBase
    }
    
    property set filterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteriaBase) {
      setRequireValue("filterCriteria", 0, $arg)
    }
    
    property get ruleFilterCriteria () : gw.bizrules.ExposureRules.ExposureRuleFilterCriteria {
      return getVariableValue("ruleFilterCriteria", 0) as gw.bizrules.ExposureRules.ExposureRuleFilterCriteria
    }
    
    property set ruleFilterCriteria ($arg :  gw.bizrules.ExposureRules.ExposureRuleFilterCriteria) {
      setVariableValue("ruleFilterCriteria", 0, $arg)
    }
    
    
  }
  
  
}