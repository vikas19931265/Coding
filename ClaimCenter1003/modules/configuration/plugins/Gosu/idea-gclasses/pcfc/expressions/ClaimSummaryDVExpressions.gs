package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=WC_RTW) at ClaimSummaryDV.pcf: line 27, column 124
    function def_onEnter_7 (def :  pcf.ReturnToWorkInputSet_WC) : void {
      def.onEnter(gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? Claim.ensureClaimInjuryIncident() : null, false)
    }
    
    // 'def' attribute on InputSetRef (id=WC_RTW) at ClaimSummaryDV.pcf: line 27, column 124
    function def_refreshVariables_8 (def :  pcf.ReturnToWorkInputSet_WC) : void {
      def.refreshVariables(gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? Claim.ensureClaimInjuryIncident() : null, false)
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSummaryDV.pcf: line 18, column 33
    function valueRoot_1 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=Location_Input) at ClaimSummaryDV.pcf: line 33, column 49
    function valueRoot_10 () : java.lang.Object {
      return Claim.LossLocation
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSummaryDV.pcf: line 18, column 33
    function value_0 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSummaryDV.pcf: line 38, column 36
    function value_12 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TextInput (id=WCInjuryWorkStatus_Input) at ClaimSummaryDV.pcf: line 43, column 84
    function value_16 () : java.lang.String {
      return Claim.getWorkStatusMessage()
    }
    
    // 'value' attribute on DateInput (id=ReportDate_Input) at ClaimSummaryDV.pcf: line 22, column 37
    function value_3 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=Location_Input) at ClaimSummaryDV.pcf: line 33, column 49
    function value_9 () : java.lang.String {
      return Claim.LossLocation.DisplayName
    }
    
    // 'visible' attribute on TextInput (id=WCInjuryWorkStatus_Input) at ClaimSummaryDV.pcf: line 43, column 84
    function visible_15 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim)
    }
    
    // 'visible' attribute on InputSetRef (id=WC_RTW) at ClaimSummaryDV.pcf: line 27, column 124
    function visible_6 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) and Claim.getLossTimeExposure() != null
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}