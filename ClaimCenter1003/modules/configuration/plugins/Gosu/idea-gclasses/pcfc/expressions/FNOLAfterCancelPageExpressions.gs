package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/util/FNOLAfterCancelPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLAfterCancelPageExpressions {
  @javax.annotation.Generated("config/web/pcf/util/FNOLAfterCancelPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLAfterCancelPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (createPolicyFlag :  boolean) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FNOLAfterCancelPage.pcf: line 19, column 65
    function action_1 () : void {
      FNOLWizard.go(not createPolicyFlag)
    }
    
    // 'action' attribute on ForwardCondition at FNOLAfterCancelPage.pcf: line 21, column 45
    function action_4 () : void {
      ClaimCenterStartupPage.go()
    }
    
    // 'action' attribute on ForwardCondition at FNOLAfterCancelPage.pcf: line 19, column 65
    function action_dest_2 () : pcf.api.Destination {
      return pcf.FNOLWizard.createDestination(not createPolicyFlag)
    }
    
    // 'action' attribute on ForwardCondition at FNOLAfterCancelPage.pcf: line 21, column 45
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ClaimCenterStartupPage.createDestination()
    }
    
    // 'condition' attribute on ForwardCondition at FNOLAfterCancelPage.pcf: line 19, column 65
    function condition_3 () : java.lang.Boolean {
      return user.UserSettings.StartupPage == TC_NEWCLAIM
    }
    
    // 'initialValue' attribute on Variable at FNOLAfterCancelPage.pcf: line 16, column 27
    function initialValue_0 () : entity.User {
      return entity.User.util.CurrentUser
    }
    
    override property get CurrentLocation () : pcf.FNOLAfterCancelPage {
      return super.CurrentLocation as pcf.FNOLAfterCancelPage
    }
    
    property get createPolicyFlag () : boolean {
      return getVariableValue("createPolicyFlag", 0) as java.lang.Boolean
    }
    
    property set createPolicyFlag ($arg :  boolean) {
      setVariableValue("createPolicyFlag", 0, $arg)
    }
    
    property get user () : entity.User {
      return getVariableValue("user", 0) as entity.User
    }
    
    property set user ($arg :  entity.User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}