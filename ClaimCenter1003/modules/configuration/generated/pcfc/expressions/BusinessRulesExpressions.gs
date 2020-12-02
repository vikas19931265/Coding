package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/BusinessRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessRulesExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/BusinessRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessRulesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 10, column 35
    function action_0 () : void {
      pcf.ActivityRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 12, column 35
    function action_2 () : void {
      pcf.ExposureRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 14, column 34
    function action_4 () : void {
      pcf.ReserveRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 16, column 47
    function action_6 () : void {
      pcf.CCRulesExportImportStatus.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 10, column 35
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ActivityRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 12, column 35
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ExposureRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 14, column 34
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ReserveRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 16, column 47
    function action_dest_7 () : pcf.api.Destination {
      return pcf.CCRulesExportImportStatus.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 8, column 58
    static function canVisit_8 () : java.lang.Boolean {
      return gw.bizrules.system.BizRulesConfigParameters.BizRulesEnabled.Value and gw.entity.GWPermSystemEnhancement.CanVisitBizRules
    }
    
    // LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 8, column 58
    static function firstVisitableChildDestinationMethod_12 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ActivityRules.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ExposureRules.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ReserveRules.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.CCRulesExportImportStatus.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 8, column 58
    static function parent_9 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 8, column 58
    function tabBar_onEnter_10 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BusinessRules) at BusinessRules.pcf: line 8, column 58
    function tabBar_refreshVariables_11 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.BusinessRules {
      return super.CurrentLocation as pcf.BusinessRules
    }
    
    
  }
  
  
}