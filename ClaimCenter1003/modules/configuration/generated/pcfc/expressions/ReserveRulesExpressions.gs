package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/ReserveRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReserveRulesExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/ReserveRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReserveRulesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ReserveRules) at ReserveRules.pcf: line 8, column 57
    static function canVisit_2 () : java.lang.Boolean {
      return gw.bizrules.ReserveRules.ReserveRulesNavigationContext.Instance.Perm.View
    }
    
    // 'def' attribute on ScreenRef at ReserveRules.pcf: line 10, column 97
    function def_onEnter_0 (def :  pcf.CCRulesListScreen) : void {
      def.onEnter(gw.bizrules.ReserveRules.ReserveRulesNavigationContext.Instance)
    }
    
    // 'def' attribute on ScreenRef at ReserveRules.pcf: line 10, column 97
    function def_refreshVariables_1 (def :  pcf.CCRulesListScreen) : void {
      def.refreshVariables(gw.bizrules.ReserveRules.ReserveRulesNavigationContext.Instance)
    }
    
    // Page (id=ReserveRules) at ReserveRules.pcf: line 8, column 57
    static function parent_3 () : pcf.api.Destination {
      return pcf.BusinessRules.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ReserveRules {
      return super.CurrentLocation as pcf.ReserveRules
    }
    
    
  }
  
  
}