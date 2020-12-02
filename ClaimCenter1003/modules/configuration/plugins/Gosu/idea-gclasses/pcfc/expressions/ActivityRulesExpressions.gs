package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/ActivityRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityRulesExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/ActivityRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityRulesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ActivityRules) at ActivityRules.pcf: line 8, column 58
    static function canVisit_2 () : java.lang.Boolean {
      return gw.bizrules.ActivityRules.ActivityRulesNavigationContext.Instance.Perm.View
    }
    
    // 'def' attribute on ScreenRef at ActivityRules.pcf: line 10, column 99
    function def_onEnter_0 (def :  pcf.CCRulesListScreen) : void {
      def.onEnter(gw.bizrules.ActivityRules.ActivityRulesNavigationContext.Instance)
    }
    
    // 'def' attribute on ScreenRef at ActivityRules.pcf: line 10, column 99
    function def_refreshVariables_1 (def :  pcf.CCRulesListScreen) : void {
      def.refreshVariables(gw.bizrules.ActivityRules.ActivityRulesNavigationContext.Instance)
    }
    
    // Page (id=ActivityRules) at ActivityRules.pcf: line 8, column 58
    static function parent_3 () : pcf.api.Destination {
      return pcf.BusinessRules.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ActivityRules {
      return super.CurrentLocation as pcf.ActivityRules
    }
    
    
  }
  
  
}