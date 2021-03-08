package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/CreateActivityRulePage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CreateActivityRulePage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, title :  String, ruleToClone :  CCRule, token :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, ruleToClone, token}, 1)
  }
  
  static function createDestination (context :  gw.bizrules.CCRulesNavigationContext, title :  String, token :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, token}, 0)
  }
  
  static function drilldown (context :  gw.bizrules.CCRulesNavigationContext, title :  String, ruleToClone :  CCRule, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, ruleToClone, token}, 1).drilldown()
  }
  
  static function drilldown (context :  gw.bizrules.CCRulesNavigationContext, title :  String, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, token}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (context :  gw.bizrules.CCRulesNavigationContext, title :  String, ruleToClone :  CCRule, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, ruleToClone, token}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (context :  gw.bizrules.CCRulesNavigationContext, title :  String, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, token}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (context :  gw.bizrules.CCRulesNavigationContext, title :  String, ruleToClone :  CCRule, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, ruleToClone, token}, 1).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (context :  gw.bizrules.CCRulesNavigationContext, title :  String, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, token}, 0).goInMain()
  }
  
  static function printPage (context :  gw.bizrules.CCRulesNavigationContext, title :  String, ruleToClone :  CCRule, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, ruleToClone, token}, 1).printPage()
  }
  
  static function printPage (context :  gw.bizrules.CCRulesNavigationContext, title :  String, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, token}, 0).printPage()
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, title :  String, ruleToClone :  CCRule, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, ruleToClone, token}, 1).push()
  }
  
  static function push (context :  gw.bizrules.CCRulesNavigationContext, title :  String, token :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateActivityRulePage, {context, title, token}, 0).push()
  }
  
  
}