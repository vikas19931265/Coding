package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRuleEditPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper, chosenSide :  RuleImportSide) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CCRuleEditPopup, {context, importEntry, importHelper, chosenSide}, 0)
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, importEntry :  RuleImportTaskEntry, importHelper :  gw.bizrules.pcf.RuleExportImportPageHelper, chosenSide :  RuleImportSide) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CCRuleEditPopup, {context, importEntry, importHelper, chosenSide}, 0).push()
  }
  
  
}