package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.financials.CurrencyAmount
uses gw.api.financials.FinancialsCalculations
uses gw.api.util.CurrencyUtil
@javax.annotation.Generated("config/web/pcf/claim/reinsurance/AdjustRIRecoverablesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdjustRIRecoverablesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/reinsurance/AdjustRIRecoverablesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdjustRIRecoverablesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Agreement :  RIAgreement, Claim :  Claim) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=AdjustRIRecoverablesPopup) at AdjustRIRecoverablesPopup.pcf: line 11, column 103
    function beforeCommit_91 (pickedValue :  java.lang.Object) : void {
      createAdjustmentTransactions()
    }
    
    // 'canVisit' attribute on Popup (id=AdjustRIRecoverablesPopup) at AdjustRIRecoverablesPopup.pcf: line 11, column 103
    static function canVisit_92 (Agreement :  RIAgreement, Claim :  Claim) : java.lang.Boolean {
      return canAdjust(Agreement, Claim) and perm.System.riedit
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_11 (def :  pcf.AgreementDetailsDV_FacNetExcessOfLossRIAgreement) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_13 (def :  pcf.AgreementDetailsDV_FacProportionalRIAgreement) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_15 (def :  pcf.AgreementDetailsDV_NetExcessOfLossRITreaty) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_17 (def :  pcf.AgreementDetailsDV_PerEventRITreaty) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_19 (def :  pcf.AgreementDetailsDV_QuotaShareRITreaty) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_21 (def :  pcf.AgreementDetailsDV_SurplusRITreaty) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_23 (def :  pcf.AgreementDetailsDV_default) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on RowSetRef (id=RIRecoverableHeader) at AdjustRIRecoverablesPopup.pcf: line 70, column 37
    function def_onEnter_29 (def :  pcf.AdjustRIRecoverablesHeaderRowSet) : void {
      def.onEnter(Agreement, DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.RIRecoverable"))
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_5 (def :  pcf.AgreementDetailsDV_AnnualAggregateRITreaty) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on RowSetRef (id=CededReservesHeader) at AdjustRIRecoverablesPopup.pcf: line 118, column 37
    function def_onEnter_60 (def :  pcf.AdjustRIRecoverablesHeaderRowSet) : void {
      def.onEnter(Agreement, DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.CededReserves"))
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_7 (def :  pcf.AgreementDetailsDV_ExcessOfLossRITreaty) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_onEnter_9 (def :  pcf.AgreementDetailsDV_FacExcessOfLossRIAgreement) : void {
      def.onEnter(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_10 (def :  pcf.AgreementDetailsDV_FacExcessOfLossRIAgreement) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_12 (def :  pcf.AgreementDetailsDV_FacNetExcessOfLossRIAgreement) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_14 (def :  pcf.AgreementDetailsDV_FacProportionalRIAgreement) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_16 (def :  pcf.AgreementDetailsDV_NetExcessOfLossRITreaty) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_18 (def :  pcf.AgreementDetailsDV_PerEventRITreaty) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_20 (def :  pcf.AgreementDetailsDV_QuotaShareRITreaty) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_22 (def :  pcf.AgreementDetailsDV_SurplusRITreaty) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_24 (def :  pcf.AgreementDetailsDV_default) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on RowSetRef (id=RIRecoverableHeader) at AdjustRIRecoverablesPopup.pcf: line 70, column 37
    function def_refreshVariables_30 (def :  pcf.AdjustRIRecoverablesHeaderRowSet) : void {
      def.refreshVariables(Agreement, DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.RIRecoverable"))
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_6 (def :  pcf.AgreementDetailsDV_AnnualAggregateRITreaty) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'def' attribute on RowSetRef (id=CededReservesHeader) at AdjustRIRecoverablesPopup.pcf: line 118, column 37
    function def_refreshVariables_61 (def :  pcf.AdjustRIRecoverablesHeaderRowSet) : void {
      def.refreshVariables(Agreement, DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.CededReserves"))
    }
    
    // 'def' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function def_refreshVariables_8 (def :  pcf.AgreementDetailsDV_ExcessOfLossRITreaty) : void {
      def.refreshVariables(Agreement)
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonForAdjustment_Input) at AdjustRIRecoverablesPopup.pcf: line 63, column 43
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      CommentsText = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyCell (id=NewUnadjustedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 90, column 109
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      NewUnadjustedRecoverable.Value = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=NewRecoverableAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 108, column 50
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      NewAdjustedRecoverable.Value = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=NewUnadjustedCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 138, column 109
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      NewUnadjustedCededReserves.Value = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=NewReserveAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 155, column 51
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      NewAdjustedCededReserve.Value = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'editable' attribute on CurrencyCell (id=NewUnadjustedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 90, column 109
    function editable_38 () : java.lang.Boolean {
      return Agreement.canSetUnadjustedRecoverables()
    }
    
    // 'editable' attribute on CurrencyCell (id=NewRecoverableAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 108, column 50
    function editable_52 () : java.lang.Boolean {
      return (NewUnadjustedRecoverable.Value != null and NewUnadjustedRecoverable.Amount != 0) or Agreement.canAdjustRecoverables()
    }
    
    // 'editable' attribute on CurrencyCell (id=NewUnadjustedCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 138, column 109
    function editable_69 () : java.lang.Boolean {
      return Agreement.canSetUnadjustedCededReserves()
    }
    
    // 'editable' attribute on CurrencyCell (id=NewReserveAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 155, column 51
    function editable_83 () : java.lang.Boolean {
      return (NewUnadjustedCededReserves.Value != null and NewUnadjustedCededReserves.Amount != 0) or Agreement.canAdjustCededReserves()
    }
    
    // 'initialValue' attribute on Variable at AdjustRIRecoverablesPopup.pcf: line 23, column 59
    function initialValue_0 () : gw.api.financials.CurrencyAmountPlaceholder {
      return new gw.api.financials.CurrencyAmountPlaceholder(Claim.Currency, gw.api.financials.FinancialsCalculations.getRITotalRecoverablesAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount)
    }
    
    // 'initialValue' attribute on Variable at AdjustRIRecoverablesPopup.pcf: line 27, column 59
    function initialValue_1 () : gw.api.financials.CurrencyAmountPlaceholder {
      return new gw.api.financials.CurrencyAmountPlaceholder(Claim.Currency, gw.api.financials.FinancialsCalculations.getRITotalCededReservesAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount)
    }
    
    // 'initialValue' attribute on Variable at AdjustRIRecoverablesPopup.pcf: line 34, column 59
    function initialValue_2 () : gw.api.financials.CurrencyAmountPlaceholder {
      return new gw.api.financials.CurrencyAmountPlaceholder(Claim.Currency, gw.api.financials.FinancialsCalculations.getRITotalRecoverablesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount)
    }
    
    // 'initialValue' attribute on Variable at AdjustRIRecoverablesPopup.pcf: line 38, column 59
    function initialValue_3 () : gw.api.financials.CurrencyAmountPlaceholder {
      return new gw.api.financials.CurrencyAmountPlaceholder(Claim.Currency, gw.api.financials.FinancialsCalculations.getRITotalCededReservesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount)
    }
    
    // 'initialValue' attribute on Variable at AdjustRIRecoverablesPopup.pcf: line 42, column 32
    function initialValue_4 () : RITransactionSet {
      return null
    }
    
    // 'mode' attribute on PanelRef at AdjustRIRecoverablesPopup.pcf: line 52, column 35
    function mode_25 () : java.lang.Object {
      return Agreement.Subtype
    }
    
    // 'onChange' attribute on PostOnChange at AdjustRIRecoverablesPopup.pcf: line 92, column 60
    function onChange_37 () : void {
      ensureAdjustedRecoverableValid()
    }
    
    // 'onChange' attribute on PostOnChange at AdjustRIRecoverablesPopup.pcf: line 140, column 61
    function onChange_68 () : void {
      ensureAdjustedCededReserveValid()
    }
    
    // 'validationExpression' attribute on CurrencyCell (id=NewUnadjustedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 90, column 109
    function validationExpression_39 () : java.lang.Object {
      return NewUnadjustedRecoverable.Value == null or NewUnadjustedRecoverable.Amount >= 0 ? null : DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.NonNegativeAmountRequired")
    }
    
    // 'validationExpression' attribute on CurrencyCell (id=NewUnadjustedCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 138, column 109
    function validationExpression_70 () : java.lang.Object {
      return NewUnadjustedCededReserves.Value == null or NewUnadjustedCededReserves.Amount >= 0 ? null : DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.NonNegativeAmountRequired")
    }
    
    // 'value' attribute on CurrencyCell (id=CalculatedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 76, column 153
    function valueRoot_32 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverablesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement)
    }
    
    // 'value' attribute on CurrencyCell (id=NewUnadjustedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 90, column 109
    function valueRoot_42 () : java.lang.Object {
      return NewUnadjustedRecoverable
    }
    
    // 'value' attribute on CurrencyCell (id=PreviousAdjustments_Cell) at AdjustRIRecoverablesPopup.pcf: line 97, column 150
    function valueRoot_48 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverablesAdjustments().withClaim(Claim).withRIAgreement(Agreement)
    }
    
    // 'value' attribute on CurrencyCell (id=NewRecoverableAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 108, column 50
    function valueRoot_55 () : java.lang.Object {
      return NewAdjustedRecoverable
    }
    
    // 'value' attribute on CurrencyCell (id=OpenCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 124, column 154
    function valueRoot_63 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalCededReservesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement)
    }
    
    // 'value' attribute on CurrencyCell (id=NewUnadjustedCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 138, column 109
    function valueRoot_73 () : java.lang.Object {
      return NewUnadjustedCededReserves
    }
    
    // 'value' attribute on CurrencyCell (id=PreviousReserveAdjustments_Cell) at AdjustRIRecoverablesPopup.pcf: line 145, column 151
    function valueRoot_79 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getRITotalCededReservesAdjustments().withClaim(Claim).withRIAgreement(Agreement)
    }
    
    // 'value' attribute on CurrencyCell (id=NewReserveAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 155, column 51
    function valueRoot_86 () : java.lang.Object {
      return NewAdjustedCededReserve
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonForAdjustment_Input) at AdjustRIRecoverablesPopup.pcf: line 63, column 43
    function value_26 () : java.lang.String {
      return CommentsText
    }
    
    // 'value' attribute on CurrencyCell (id=CalculatedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 76, column 153
    function value_31 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverablesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=UnadjustedRecoverableDelta_Cell) at AdjustRIRecoverablesPopup.pcf: line 81, column 74
    function value_34 () : gw.api.financials.CurrencyAmount {
      return getUnadjustedRecoverableDelta()
    }
    
    // 'value' attribute on CurrencyCell (id=NewUnadjustedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 90, column 109
    function value_40 () : gw.api.financials.CurrencyAmount {
      return NewUnadjustedRecoverable.Value
    }
    
    // 'value' attribute on CurrencyCell (id=PreviousAdjustments_Cell) at AdjustRIRecoverablesPopup.pcf: line 97, column 150
    function value_47 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalRecoverablesAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=AdjustedRecoverableDelta_Cell) at AdjustRIRecoverablesPopup.pcf: line 101, column 51
    function value_50 () : gw.api.financials.CurrencyAmount {
      return getAdjustedRecoverableDelta()
    }
    
    // 'value' attribute on CurrencyCell (id=NewRecoverableAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 108, column 50
    function value_53 () : gw.api.financials.CurrencyAmount {
      return NewAdjustedRecoverable.Value
    }
    
    // 'value' attribute on CurrencyCell (id=TotalRecoverables_Cell) at AdjustRIRecoverablesPopup.pcf: line 114, column 54
    function value_58 () : gw.api.financials.CurrencyAmount {
      return getNewPaymentRecoverableTotal()
    }
    
    // 'value' attribute on CurrencyCell (id=OpenCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 124, column 154
    function value_62 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalCededReservesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=UnadjustedCededReservesDelta_Cell) at AdjustRIRecoverablesPopup.pcf: line 129, column 74
    function value_65 () : gw.api.financials.CurrencyAmount {
      return getUnadjustedCededReserveDelta()
    }
    
    // 'value' attribute on CurrencyCell (id=NewUnadjustedCededReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 138, column 109
    function value_71 () : gw.api.financials.CurrencyAmount {
      return NewUnadjustedCededReserves.Value
    }
    
    // 'value' attribute on CurrencyCell (id=PreviousReserveAdjustments_Cell) at AdjustRIRecoverablesPopup.pcf: line 145, column 151
    function value_78 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getRITotalCededReservesAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
    }
    
    // 'value' attribute on CurrencyCell (id=AdjustedCededReservesDelta_Cell) at AdjustRIRecoverablesPopup.pcf: line 148, column 52
    function value_81 () : gw.api.financials.CurrencyAmount {
      return getAdjustedCededReserveDelta()
    }
    
    // 'value' attribute on CurrencyCell (id=NewReserveAdjustment_Cell) at AdjustRIRecoverablesPopup.pcf: line 155, column 51
    function value_84 () : gw.api.financials.CurrencyAmount {
      return NewAdjustedCededReserve.Value
    }
    
    // 'value' attribute on CurrencyCell (id=TotalReserves_Cell) at AdjustRIRecoverablesPopup.pcf: line 161, column 48
    function value_89 () : gw.api.financials.CurrencyAmount {
      return getNewCededReserveTotal()
    }
    
    // 'visible' attribute on CurrencyCell (id=UnadjustedRecoverableDelta_Cell) at AdjustRIRecoverablesPopup.pcf: line 81, column 74
    function visible_35 () : java.lang.Boolean {
      return Agreement typeis entity.NonProportionalRIAgreement
    }
    
    // 'visible' attribute on CurrencyCell (id=NewUnadjustedRecoverable_Cell) at AdjustRIRecoverablesPopup.pcf: line 90, column 109
    function visible_45 () : java.lang.Boolean {
      return Agreement.canSetUnadjustedCededReserves() or Agreement.canSetUnadjustedRecoverables()
    }
    
    property get Agreement () : RIAgreement {
      return getVariableValue("Agreement", 0) as RIAgreement
    }
    
    property set Agreement ($arg :  RIAgreement) {
      setVariableValue("Agreement", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get CommentsText () : String {
      return getVariableValue("CommentsText", 0) as String
    }
    
    property set CommentsText ($arg :  String) {
      setVariableValue("CommentsText", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.AdjustRIRecoverablesPopup {
      return super.CurrentLocation as pcf.AdjustRIRecoverablesPopup
    }
    
    property get NewAdjustedCededReserve () : gw.api.financials.CurrencyAmountPlaceholder {
      return getVariableValue("NewAdjustedCededReserve", 0) as gw.api.financials.CurrencyAmountPlaceholder
    }
    
    property set NewAdjustedCededReserve ($arg :  gw.api.financials.CurrencyAmountPlaceholder) {
      setVariableValue("NewAdjustedCededReserve", 0, $arg)
    }
    
    property get NewAdjustedRecoverable () : gw.api.financials.CurrencyAmountPlaceholder {
      return getVariableValue("NewAdjustedRecoverable", 0) as gw.api.financials.CurrencyAmountPlaceholder
    }
    
    property set NewAdjustedRecoverable ($arg :  gw.api.financials.CurrencyAmountPlaceholder) {
      setVariableValue("NewAdjustedRecoverable", 0, $arg)
    }
    
    property get NewUnadjustedCededReserves () : gw.api.financials.CurrencyAmountPlaceholder {
      return getVariableValue("NewUnadjustedCededReserves", 0) as gw.api.financials.CurrencyAmountPlaceholder
    }
    
    property set NewUnadjustedCededReserves ($arg :  gw.api.financials.CurrencyAmountPlaceholder) {
      setVariableValue("NewUnadjustedCededReserves", 0, $arg)
    }
    
    property get NewUnadjustedRecoverable () : gw.api.financials.CurrencyAmountPlaceholder {
      return getVariableValue("NewUnadjustedRecoverable", 0) as gw.api.financials.CurrencyAmountPlaceholder
    }
    
    property set NewUnadjustedRecoverable ($arg :  gw.api.financials.CurrencyAmountPlaceholder) {
      setVariableValue("NewUnadjustedRecoverable", 0, $arg)
    }
    
    property get RITransactionSet () : RITransactionSet {
      return getVariableValue("RITransactionSet", 0) as RITransactionSet
    }
    
    property set RITransactionSet ($arg :  RITransactionSet) {
      setVariableValue("RITransactionSet", 0, $arg)
    }
    
    
    function createAdjustmentTransactions() {
      if (RITransactionSet != null) {
        RITransactionSet.remove()
      }
    
      var newPayments = gw.api.util.CurrencyUtil.renderAsCurrency(getNewPaymentRecoverableTotal())
      var newCededReserves = gw.api.util.CurrencyUtil.renderAsCurrency(getNewCededReserveTotal())
    
      var comment =  CommentsText + "\n"
                    + DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.ReasonForAdjustment.NoteChanges", Agreement.DisplayName, 
                                                      newPayments.Empty ? DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.ReasonForAdjustment.NoteChanges.Null") : newPayments,
                                                      newCededReserves.Empty ? DisplayKey.get("Web.Claim.Reinsurance.AdjustRIRecoverables.ReasonForAdjustment.NoteChanges.Null") : newCededReserves)
      RITransactionSet = Agreement.setRIFinancials(NewUnadjustedCededReserves.Amount, NewAdjustedCededReserve.Amount, NewUnadjustedRecoverable.Amount, NewAdjustedRecoverable.Amount, comment)
    }
    
    static function canAdjust(anAgreement : RIAgreement, aClaim : Claim) : Boolean {
      return anAgreement.canAdjustCededReserves() or
        anAgreement.canAdjustRecoverables() or
        anAgreement.canSetUnadjustedCededReserves() or
        anAgreement.canSetUnadjustedRecoverables()
    }
    
    function ensureAdjustedRecoverableValid() {
      if (NewUnadjustedRecoverable.Value == null and !Agreement.canAdjustRecoverables()) {
        NewAdjustedRecoverable.Value = null
      }
    }
    
    function ensureAdjustedCededReserveValid() {
      if (NewUnadjustedCededReserves.Value == null and !Agreement.canAdjustCededReserves()) {
        NewAdjustedCededReserve.Value = null
      }
    }
    
    function getNewPaymentRecoverableTotal() : gw.api.financials.CurrencyAmount {
      var start = FinancialsCalculations.getRITotalRecoverablesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
      if (NewAdjustedRecoverable.Value == null) {
        start = FinancialsCalculations.getRITotalRecoverables().withClaim(Claim).withRIAgreement(Agreement).Amount
      }
      if (NewUnadjustedRecoverable.Value != null) {
        start = NewUnadjustedRecoverable.Value
      }
      if (start == null) {
        if (NewAdjustedRecoverable.Value == null) {
          return null
        } else {
          return NewAdjustedRecoverable.Value
        }
      } else {
        if (NewAdjustedRecoverable.Value == null) {
          return start
        } else {
          return start.addStrict(NewAdjustedRecoverable.Value)
        }
      }
    }
    
    function getNewCededReserveTotal() : gw.api.financials.CurrencyAmount {
      var start = FinancialsCalculations.getRITotalCededReservesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
      if (NewAdjustedCededReserve.Value == null) {
        start = gw.api.financials.FinancialsCalculations.getRIOpenCededReserves().withClaim(Claim).withRIAgreement(Agreement).Amount
      }
      if (NewUnadjustedCededReserves.Value != null) {
        start = NewUnadjustedCededReserves.Value
      }
      if (start == null) {
        if (NewAdjustedCededReserve.Value == null) {
          return null
        } else {
          return NewAdjustedCededReserve.Value
        }
      } else {
        if (NewAdjustedCededReserve.Value == null) {
          return start
        } else {
          return start.addStrict(NewAdjustedCededReserve.Value)
        }
      }
    }
    
    function getUnadjustedRecoverableDelta() : CurrencyAmount {
      if (NewUnadjustedRecoverable.Value == null) {
        return null
      }
      var adjustment = NewUnadjustedRecoverable.Value
      var previousValue = FinancialsCalculations.getRITotalRecoverablesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
      if (previousValue == null) {
        return adjustment
      }
      return adjustment.subtractStrict(previousValue)
    }
    
    function getUnadjustedCededReserveDelta() : CurrencyAmount {
      if (NewUnadjustedCededReserves.Value == null) {
        return null
      }
      var adjustment = NewUnadjustedCededReserves.Value
      var previousValue = FinancialsCalculations.getRITotalCededReservesNonAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
      if (previousValue == null) {
        return adjustment
      }
      return adjustment.subtractStrict(previousValue)
    }
    function getAdjustedRecoverableDelta() : CurrencyAmount {
      if (NewAdjustedRecoverable.Value == null) {
        return null
      }
      var adjustment = NewAdjustedRecoverable.Value
      var previousValue = FinancialsCalculations.getRITotalRecoverablesAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
      if (previousValue == null) {
        return adjustment
      }
      return adjustment.subtractStrict(previousValue)
    }
    function getAdjustedCededReserveDelta() : CurrencyAmount {
      if (NewAdjustedCededReserve.Value == null) {
        return null
      }
      var adjustment = NewAdjustedCededReserve.Value
      var previousValue = FinancialsCalculations.getRITotalCededReservesAdjustments().withClaim(Claim).withRIAgreement(Agreement).Amount
      if (previousValue == null) {
        return adjustment
      }
      return adjustment.subtractStrict(previousValue)
    }
    
    
  }
  
  
}