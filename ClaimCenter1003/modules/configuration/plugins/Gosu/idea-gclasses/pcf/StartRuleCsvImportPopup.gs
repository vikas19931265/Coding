package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/StartRuleCsvImportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class StartRuleCsvImportPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, pageHelper :  gw.bizrules.CCRulesListPageHelper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.StartRuleCsvImportPopup, {context, pageHelper}, 0)
  }
  
  function pickValueAndCommit (value :  RuleImportTask) : void {
    __widgetOf(this, pcf.StartRuleCsvImportPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, pageHelper :  gw.bizrules.CCRulesListPageHelper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.StartRuleCsvImportPopup, {context, pageHelper}, 0).push()
  }
  
  
}