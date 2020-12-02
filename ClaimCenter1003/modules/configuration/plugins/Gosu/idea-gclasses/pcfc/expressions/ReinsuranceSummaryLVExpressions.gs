package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.CurrencyUtil
@javax.annotation.Generated("config/web/pcf/claim/reinsurance/ReinsuranceSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinsuranceSummaryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/reinsurance/ReinsuranceSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Agreement) at ReinsuranceSummaryLV.pcf: line 104, column 50
    function action_19 () : void {
      pcf.ReinsuranceAgreementDetails.push(agreement, claim)
    }
    
    // 'action' attribute on ButtonCell (id=EditAdjustments_Cell) at ReinsuranceSummaryLV.pcf: line 130, column 41
    function action_38 () : void {
      pcf.AdjustRIRecoverablesPopup.push(agreement, claim)
    }
    
    // 'action' attribute on Link (id=Agreement) at ReinsuranceSummaryLV.pcf: line 104, column 50
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ReinsuranceAgreementDetails.createDestination(agreement, claim)
    }
    
    // 'action' attribute on ButtonCell (id=EditAdjustments_Cell) at ReinsuranceSummaryLV.pcf: line 130, column 41
    function action_dest_39 () : pcf.api.Destination {
      return pcf.AdjustRIRecoverablesPopup.createDestination(agreement, claim)
    }
    
    // 'label' attribute on Link (id=Agreement) at ReinsuranceSummaryLV.pcf: line 104, column 50
    function label_21 () : java.lang.Object {
      return agreement.AgreementName
    }
    
    // 'value' attribute on TextCell (id=ProportionalShare_Cell) at ReinsuranceSummaryLV.pcf: line 116, column 47
    function valueRoot_27 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentRecoverable_Cell) at ReinsuranceSummaryLV.pcf: line 122, column 139
    function valueRoot_33 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverables().withClaim(claim).withRIAgreement(agreement)
    }
    
    // 'value' attribute on CurrencyCell (id=CededReserves_Cell) at ReinsuranceSummaryLV.pcf: line 125, column 139
    function valueRoot_36 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(claim).withRIAgreement(agreement)
    }
    
    // 'value' attribute on TextInput (id=AgreementDesc_Input) at ReinsuranceSummaryLV.pcf: line 109, column 72
    function value_23 () : java.lang.String {
      return getAgreementDescription(agreement)
    }
    
    // 'value' attribute on TextCell (id=ProportionalShare_Cell) at ReinsuranceSummaryLV.pcf: line 116, column 47
    function value_26 () : java.math.BigDecimal {
      return agreement.ProportionalShare
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExceedsNotificationThreshold_Cell) at ReinsuranceSummaryLV.pcf: line 119, column 61
    function value_29 () : java.lang.Boolean {
      return agreement.ExceedsNotificationThreshold
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentRecoverable_Cell) at ReinsuranceSummaryLV.pcf: line 122, column 139
    function value_32 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverables().withClaim(claim).withRIAgreement(agreement).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=CededReserves_Cell) at ReinsuranceSummaryLV.pcf: line 125, column 139
    function value_35 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(claim).withRIAgreement(agreement).Amount
    }
    
    // 'visible' attribute on TextInput (id=AgreementDesc_Input) at ReinsuranceSummaryLV.pcf: line 109, column 72
    function visible_22 () : java.lang.Boolean {
      return getAgreementDescription(agreement).HasContent
    }
    
    // 'visible' attribute on ButtonCell (id=EditAdjustments_Cell) at ReinsuranceSummaryLV.pcf: line 130, column 41
    function visible_40 () : java.lang.Boolean {
      return hasAdjustments()
    }
    
    property get agreement () : entity.RIAgreement {
      return getIteratedValue(2) as entity.RIAgreement
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/reinsurance/ReinsuranceSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReinsuranceSummaryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ReinsuranceSummaryLV.pcf: line 89, column 26
    function sortBy_17 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.Subtype.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at ReinsuranceSummaryLV.pcf: line 94, column 26
    function sortBy_18 (agreement :  entity.RIAgreement) : java.lang.Object {
      return agreement.AttachmentPoint
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentRecovHeader_Cell) at ReinsuranceSummaryLV.pcf: line 68, column 147
    function valueRoot_11 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverables().withClaim(claim).withRIAgreementGroup(agreementGroup)
    }
    
    // 'value' attribute on CurrencyCell (id=CededReservesHeader_Cell) at ReinsuranceSummaryLV.pcf: line 72, column 147
    function valueRoot_14 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(claim).withRIAgreementGroup(agreementGroup)
    }
    
    // 'value' attribute on TextCell (id=GroupDescription_Cell) at ReinsuranceSummaryLV.pcf: line 46, column 63
    function valueRoot_2 () : java.lang.Object {
      return agreementGroup
    }
    
    // 'value' attribute on TextCell (id=GroupDescription_Cell) at ReinsuranceSummaryLV.pcf: line 46, column 63
    function value_1 () : java.lang.String {
      return agreementGroup.AgreementGroupSummaryString
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentRecovHeader_Cell) at ReinsuranceSummaryLV.pcf: line 68, column 147
    function value_10 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverables().withClaim(claim).withRIAgreementGroup(agreementGroup).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=CededReservesHeader_Cell) at ReinsuranceSummaryLV.pcf: line 72, column 147
    function value_13 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(claim).withRIAgreementGroup(agreementGroup).Amount
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at ReinsuranceSummaryLV.pcf: line 53, column 24
    function value_4 () : java.lang.String {
      return agreementGroup.RiskName 
    }
    
    // 'value' attribute on RowIterator (id=Agreement) at ReinsuranceSummaryLV.pcf: line 86, column 24
    function value_41 () : entity.RIAgreement[] {
      return agreementGroup.Agreements
    }
    
    // 'value' attribute on TextCell (id=PropShareHeader_Cell) at ReinsuranceSummaryLV.pcf: line 60, column 45
    function value_7 () : java.math.BigDecimal {
      return agreementGroup.ProportionalShare
    }
    
    // 'visible' attribute on EmptyCell (id=EditAdjustmentsHeaderRow_Cell) at ReinsuranceSummaryLV.pcf: line 76, column 39
    function visible_16 () : java.lang.Boolean {
      return hasAdjustments()
    }
    
    property get agreementGroup () : entity.RIAgreementGroup {
      return getIteratedValue(1) as entity.RIAgreementGroup
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/reinsurance/ReinsuranceSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinsuranceSummaryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentRecovFooter_Cell) at ReinsuranceSummaryLV.pcf: line 147, column 108
    function valueRoot_44 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverables().withClaim(claim)
    }
    
    // 'value' attribute on CurrencyCell (id=CededReservesFooter_Cell) at ReinsuranceSummaryLV.pcf: line 151, column 108
    function valueRoot_47 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(claim)
    }
    
    // 'value' attribute on RowIterator (id=AgreementGroup) at ReinsuranceSummaryLV.pcf: line 40, column 45
    function value_42 () : entity.RIAgreementGroup[] {
      return claim.RIAgreementGroups.sortBy(\ r -> r.PublicID)
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentRecovFooter_Cell) at ReinsuranceSummaryLV.pcf: line 147, column 108
    function value_43 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverables().withClaim(claim).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=CededReservesFooter_Cell) at ReinsuranceSummaryLV.pcf: line 151, column 108
    function value_46 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(claim).Amount
    }
    
    // 'visible' attribute on TextCell (id=EditAdjustmentsHeaderRow2_Cell) at ReinsuranceSummaryLV.pcf: line 33, column 37
    function visible_0 () : java.lang.Boolean {
      return hasAdjustments()
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    
    function getAgreementDescription (agreement : RIAgreement) : String {
      if (agreement typeis entity.NonProportionalRIAgreement) {
        return DisplayKey.get("Web.Claim.Reinsurance.ReinsuranceSummary.AttachmentPoint") + CurrencyUtil.renderAsCurrency(agreement.AttachmentPoint)
               + "  "
               + DisplayKey.get("Web.Claim.Reinsurance.ReinsuranceSummary.TopOfLayer") + CurrencyUtil.renderAsCurrency(agreement.TopOfLayer)
      }
      return ""
    }
    
    function hasAdjustments () : boolean {
      return true;
    }
    
    
  }
  
  
}