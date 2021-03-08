package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRulesExportImportStatus.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRulesExportImportStatusExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRulesExportImportStatus.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRulesExportImportStatusExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=CCRulesExportImportStatus) at CCRulesExportImportStatus.pcf: line 9, column 75
    static function canVisit_2 () : java.lang.Boolean {
      return gw.entity.GWPermSystemEnhancement.CanVisitBizRules
    }
    
    // 'def' attribute on ScreenRef at CCRulesExportImportStatus.pcf: line 13, column 97
    function def_onEnter_0 (def :  pcf.RuleExportImportStatusScreen) : void {
      def.onEnter(new gw.bizrules.CCRulesDelegatingNavigationContext())
    }
    
    // 'def' attribute on ScreenRef at CCRulesExportImportStatus.pcf: line 13, column 97
    function def_refreshVariables_1 (def :  pcf.RuleExportImportStatusScreen) : void {
      def.refreshVariables(new gw.bizrules.CCRulesDelegatingNavigationContext())
    }
    
    // Page (id=CCRulesExportImportStatus) at CCRulesExportImportStatus.pcf: line 9, column 75
    static function parent_3 () : pcf.api.Destination {
      return pcf.BusinessRules.createDestination()
    }
    
    override property get CurrentLocation () : pcf.CCRulesExportImportStatus {
      return super.CurrentLocation as pcf.CCRulesExportImportStatus
    }
    
    
  }
  
  
}