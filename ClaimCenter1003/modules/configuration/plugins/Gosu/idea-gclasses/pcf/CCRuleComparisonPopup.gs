package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleComparisonPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRuleComparisonPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CCRuleComparisonPopup, {context, importEntry, importHelper}, 1)
  }
  
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, version1 :  RuleVersion, version2 :  RuleVersion) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CCRuleComparisonPopup, {context, version1, version2}, 0)
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CCRuleComparisonPopup, {context, importEntry, importHelper}, 1).push()
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, version1 :  RuleVersion, version2 :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CCRuleComparisonPopup, {context, version1, version2}, 0).push()
  }
  
  
}