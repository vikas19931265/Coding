package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/util/StartupPageError.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartupPageErrorExpressions {
  @javax.annotation.Generated("config/web/pcf/util/StartupPageError.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartupPageErrorExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'label' attribute on Label at StartupPageError.pcf: line 16, column 85
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.StartupPageError.NoPermissions")
    }
    
    // Page (id=StartupPageError) at StartupPageError.pcf: line 9, column 68
    static function parent_1 () : pcf.api.Destination {
      return pcf.StartupPageErrorGroup.createDestination()
    }
    
    override property get CurrentLocation () : pcf.StartupPageError {
      return super.CurrentLocation as pcf.StartupPageError
    }
    
    
  }
  
  
}