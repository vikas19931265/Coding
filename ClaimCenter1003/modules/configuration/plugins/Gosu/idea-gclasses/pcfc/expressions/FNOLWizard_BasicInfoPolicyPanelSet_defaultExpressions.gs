package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoPolicyPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_BasicInfoPolicyPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoPolicyPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_BasicInfoPolicyPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_BasicInfoPolicyPanelSet.default.pcf: line 17, column 36
    function initialValue_0 () : entity.Endorsement[] {
      return claim.Policy.Endorsements.sortBy(\ e -> e.FormNumber)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get endorsements () : entity.Endorsement[] {
      return getVariableValue("endorsements", 0) as entity.Endorsement[]
    }
    
    property set endorsements ($arg :  entity.Endorsement[]) {
      setVariableValue("endorsements", 0, $arg)
    }
    
    property get wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}