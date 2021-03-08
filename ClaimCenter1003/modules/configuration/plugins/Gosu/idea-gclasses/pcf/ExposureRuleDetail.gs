package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/ExposureRuleDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ExposureRuleDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (context :  gw.bizrules.ExposureRules.ExposureRulesNavigationContext, version :  RuleVersion) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ExposureRuleDetail, {context, version}, 0)
  }
  
  static function drilldown (context :  gw.bizrules.ExposureRules.ExposureRulesNavigationContext, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExposureRuleDetail, {context, version}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (context :  gw.bizrules.ExposureRules.ExposureRulesNavigationContext, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExposureRuleDetail, {context, version}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (context :  gw.bizrules.ExposureRules.ExposureRulesNavigationContext, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExposureRuleDetail, {context, version}, 0).goInMain()
  }
  
  static function printPage (context :  gw.bizrules.ExposureRules.ExposureRulesNavigationContext, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExposureRuleDetail, {context, version}, 0).printPage()
  }
  
  static function push (context :  gw.bizrules.ExposureRules.ExposureRulesNavigationContext, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExposureRuleDetail, {context, version}, 0).push()
  }
  
  
}