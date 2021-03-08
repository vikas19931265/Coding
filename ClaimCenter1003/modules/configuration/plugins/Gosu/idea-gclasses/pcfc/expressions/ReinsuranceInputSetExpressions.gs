package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/generalstatus/ReinsuranceInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinsuranceInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/generalstatus/ReinsuranceInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinsuranceInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=ReinsuranceReason_Input) at ReinsuranceInputSet.pcf: line 24, column 52
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.ReinsuranceReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=ReinsuranceReportable_Input) at ReinsuranceInputSet.pcf: line 14, column 43
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.ReinsuranceReportable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanDropdownInput (id=ReinsuranceReportable_Input) at ReinsuranceInputSet.pcf: line 14, column 43
    function editable_0 () : java.lang.Boolean {
      return perm.System.reinsuranceedit
    }
    
    // 'value' attribute on BooleanDropdownInput (id=ReinsuranceReportable_Input) at ReinsuranceInputSet.pcf: line 14, column 43
    function valueRoot_3 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on BooleanDropdownInput (id=ReinsuranceReportable_Input) at ReinsuranceInputSet.pcf: line 14, column 43
    function value_1 () : java.lang.Boolean {
      return claim.ReinsuranceReportable
    }
    
    // 'value' attribute on TypeKeyInput (id=ReinsuranceFlagged_Input) at ReinsuranceInputSet.pcf: line 30, column 91
    function value_16 () : typekey.ReinsuranceFlaggedStatus {
      return claim.ReinsuranceFlaggedStatus
    }
    
    // 'value' attribute on TextAreaInput (id=ReinsuranceReason_Input) at ReinsuranceInputSet.pcf: line 24, column 52
    function value_9 () : java.lang.String {
      return claim.ReinsuranceReason
    }
    
    // 'visible' attribute on TypeKeyInput (id=ReinsuranceFlagged_Input) at ReinsuranceInputSet.pcf: line 30, column 91
    function visible_15 () : java.lang.Boolean {
      return claim.ReinsuranceReportable!=null && !CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextAreaInput (id=ReinsuranceReason_Input) at ReinsuranceInputSet.pcf: line 24, column 52
    function visible_7 () : java.lang.Boolean {
      return claim.ReinsuranceReportable!=null
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    
  }
  
  
}