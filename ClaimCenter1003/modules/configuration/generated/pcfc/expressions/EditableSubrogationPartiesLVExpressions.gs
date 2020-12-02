package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/EditableSubrogationPartiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableSubrogationPartiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/EditableSubrogationPartiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableSubrogationPartiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SubrogationFinancialsLink) at EditableSubrogationPartiesLV.pcf: line 114, column 75
    function action_24 () : void {
      SubrogationGeneral.go(claim, true)
    }
    
    // 'action' attribute on Link (id=SubrogationFinancialsLink) at EditableSubrogationPartiesLV.pcf: line 114, column 75
    function action_dest_25 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(claim, true)
    }
    
    // 'initialValue' attribute on Variable at EditableSubrogationPartiesLV.pcf: line 21, column 61
    function initialValue_0 () : gw.subrogation.financials.AdversePartyWrapper {
      return new gw.subrogation.financials.AdversePartyWrapper(null)
    }
    
    // 'toRemove' attribute on RowIterator at EditableSubrogationPartiesLV.pcf: line 29, column 87
    function toRemove_18 (adversePartyWrapper :  gw.subrogation.financials.AdversePartyWrapper) : void {
      claim.SubrogationSummary.removeFromSubroAdverseParties(adversePartyWrapper.AdverseParty); subroAdversePartyList.remove(adversePartyWrapper)
    }
    
    // 'value' attribute on RowIterator at EditableSubrogationPartiesLV.pcf: line 29, column 87
    function value_19 () : java.util.List<gw.subrogation.financials.AdversePartyWrapper> {
      return subroAdversePartyList
    }
    
    // 'value' attribute on TextCell (id=LiabilityPercentageTotal_Cell) at EditableSubrogationPartiesLV.pcf: line 102, column 128
    function value_20 () : java.lang.String {
      return gw.subrogation.financials.SubrogationFinancialsHelper.getLiabilityForUI(claim, adversePartyWrapperClaimTotal)
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecoveryTotal_Cell) at EditableSubrogationPartiesLV.pcf: line 107, column 142
    function value_22 () : java.lang.String {
      return gw.subrogation.financials.SubrogationFinancialsHelper.getExpectedRecoveryPercentForUI(claim, adversePartyWrapperClaimTotal)
    }
    
    // 'visible' attribute on Row (id=ClaimTotalRow) at EditableSubrogationPartiesLV.pcf: line 87, column 68
    function visible_26 () : java.lang.Boolean {
      return adversePartyWrapperClaimTotal.AdverseParty == null
    }
    
    property get adversePartyWrapperClaimTotal () : gw.subrogation.financials.AdversePartyWrapper {
      return getVariableValue("adversePartyWrapperClaimTotal", 0) as gw.subrogation.financials.AdversePartyWrapper
    }
    
    property set adversePartyWrapperClaimTotal ($arg :  gw.subrogation.financials.AdversePartyWrapper) {
      setVariableValue("adversePartyWrapperClaimTotal", 0, $arg)
    }
    
    property get claim () : entity.Claim {
      return getRequireValue("claim", 0) as entity.Claim
    }
    
    property set claim ($arg :  entity.Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get subroAdversePartyList () : List<gw.subrogation.financials.AdversePartyWrapper> {
      return getRequireValue("subroAdversePartyList", 0) as List<gw.subrogation.financials.AdversePartyWrapper>
    }
    
    property set subroAdversePartyList ($arg :  List<gw.subrogation.financials.AdversePartyWrapper>) {
      setRequireValue("subroAdversePartyList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/EditableSubrogationPartiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableSubrogationPartiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at EditableSubrogationPartiesLV.pcf: line 29, column 87
    function checkBoxVisible_17 () : java.lang.Boolean {
      return perm.System.editsubrodetails and adversePartyWrapper.AdverseParty != null
    }
    
    // 'condition' attribute on ToolbarFlag at EditableSubrogationPartiesLV.pcf: line 32, column 27
    function condition_1 () : java.lang.Boolean {
      return perm.Evaluation.edit(claim)
    }
    
    // 'value' attribute on TypeKeyCell (id=Classification1_Cell) at EditableSubrogationPartiesLV.pcf: line 73, column 25
    function valueRoot_11 () : java.lang.Object {
      return adversePartyWrapper.AdverseParty
    }
    
    // 'value' attribute on TextCell (id=SubroRecoveryPayee1_Cell) at EditableSubrogationPartiesLV.pcf: line 50, column 25
    function valueRoot_4 () : java.lang.Object {
      return adversePartyWrapper.AdverseParty.AdverseParty
    }
    
    // 'value' attribute on TypeKeyCell (id=Classification1_Cell) at EditableSubrogationPartiesLV.pcf: line 73, column 25
    function value_10 () : typekey.SubroClassification {
      return adversePartyWrapper.AdverseParty.Classification
    }
    
    // 'value' attribute on TypeKeyCell (id=Strategy1_Cell) at EditableSubrogationPartiesLV.pcf: line 81, column 46
    function value_13 () : typekey.SubroStrategy {
      return adversePartyWrapper.AdverseParty.Strategy
    }
    
    // 'value' attribute on TextCell (id=SubroRecoveryPayee1_Cell) at EditableSubrogationPartiesLV.pcf: line 50, column 25
    function value_3 () : java.lang.String {
      return adversePartyWrapper.AdverseParty.AdverseParty.DisplayName
    }
    
    // 'value' attribute on TextCell (id=LiabilityPercentage1_Cell) at EditableSubrogationPartiesLV.pcf: line 58, column 25
    function value_6 () : java.lang.String {
      return gw.subrogation.financials.SubrogationFinancialsHelper.getLiabilityForUI(claim, adversePartyWrapper)
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecovery_Cell) at EditableSubrogationPartiesLV.pcf: line 65, column 25
    function value_8 () : java.lang.String {
      return gw.subrogation.financials.SubrogationFinancialsHelper.getExpectedRecoveryPercentForUI(claim, adversePartyWrapper)
    }
    
    // 'visible' attribute on Row at EditableSubrogationPartiesLV.pcf: line 34, column 60
    function visible_16 () : java.lang.Boolean {
      return adversePartyWrapper.AdverseParty != null
    }
    
    // 'visible' attribute on Link (id=PayeeLink) at EditableSubrogationPartiesLV.pcf: line 41, column 65
    function visible_2 () : java.lang.Boolean {
      return adversePartyWrapper.AdverseParty == null
    }
    
    property get adversePartyWrapper () : gw.subrogation.financials.AdversePartyWrapper {
      return getIteratedValue(1) as gw.subrogation.financials.AdversePartyWrapper
    }
    
    
  }
  
  
}