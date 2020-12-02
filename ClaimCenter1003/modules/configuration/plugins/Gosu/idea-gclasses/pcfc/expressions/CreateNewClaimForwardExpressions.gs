package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/CreateNewClaimForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateNewClaimForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/CreateNewClaimForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateNewClaimForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyNumber :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at CreateNewClaimForward.pcf: line 14, column 69
    function action_0 () : void {
      FNOLWizard.go(null, policyNumber, null, null, true)
    }
    
    // 'action' attribute on ForwardCondition at CreateNewClaimForward.pcf: line 14, column 69
    function action_dest_1 () : pcf.api.Destination {
      return pcf.FNOLWizard.createDestination(null, policyNumber, null, null, true)
    }
    
    override property get CurrentLocation () : pcf.CreateNewClaimForward {
      return super.CurrentLocation as pcf.CreateNewClaimForward
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    
  }
  
  
}