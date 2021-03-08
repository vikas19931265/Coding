package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleVersionDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRuleVersionDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, ruleVersion :  RuleVersion, importing :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CCRuleVersionDetailsPopup, {context, ruleVersion, importing}, 0)
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, ruleVersion :  RuleVersion, importing :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CCRuleVersionDetailsPopup, {context, ruleVersion, importing}, 0).push()
  }
  
  
}