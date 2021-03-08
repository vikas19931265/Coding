package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/RuleFilterCriteriaRuleActionInputSet.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleFilterCriteriaRuleActionInputSet_ReserveRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/RuleFilterCriteriaRuleActionInputSet.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleFilterCriteriaRuleActionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaRuleActionInputSet.ReserveRule.pcf: line 15, column 66
    function initialValue_0 () : gw.bizrules.ReserveRules.ReserveRuleFilterCriteria {
      return filterCriteria as gw.bizrules.ReserveRules.ReserveRuleFilterCriteria
    }
    
    property get filterCriteria () : gw.bizrules.CCRuleFilterCriteriaBase {
      return getRequireValue("filterCriteria", 0) as gw.bizrules.CCRuleFilterCriteriaBase
    }
    
    property set filterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteriaBase) {
      setRequireValue("filterCriteria", 0, $arg)
    }
    
    property get ruleFilterCriteria () : gw.bizrules.ReserveRules.ReserveRuleFilterCriteria {
      return getVariableValue("ruleFilterCriteria", 0) as gw.bizrules.ReserveRules.ReserveRuleFilterCriteria
    }
    
    property set ruleFilterCriteria ($arg :  gw.bizrules.ReserveRules.ReserveRuleFilterCriteria) {
      setVariableValue("ruleFilterCriteria", 0, $arg)
    }
    
    
  }
  
  
}