package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookContactClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookContactClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AddressBookContactClaimsLV.pcf: line 36, column 73
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.AllFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at AddressBookContactClaimsLV.pcf: line 40, column 33
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.OpenFilter
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at AddressBookContactClaimsLV.pcf: line 53, column 54
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactClaimsLV.pcf: line 14, column 72
    function initialValue_0 () : gw.api.database.IQueryBeanResult<ClaimDesktopView> {
      return Claim.finder.findRelatedClaims(contact.getAddressBookUID())
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactClaimsLV.pcf: line 18, column 54
    function initialValue_1 () : gw.api.contact.ABContactClaimFilterSet {
      return new gw.api.contact.ABContactClaimFilterSet()
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at AddressBookContactClaimsLV.pcf: line 80, column 46
    function sortValue_10 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at AddressBookContactClaimsLV.pcf: line 86, column 43
    function sortValue_11 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.State
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at AddressBookContactClaimsLV.pcf: line 99, column 40
    function sortValue_12 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at AddressBookContactClaimsLV.pcf: line 105, column 45
    function sortValue_13 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.JurisdictionState
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at AddressBookContactClaimsLV.pcf: line 53, column 54
    function sortValue_5 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.Flagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactClaimsLV.pcf: line 61, column 25
    function sortValue_6 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at AddressBookContactClaimsLV.pcf: line 66, column 50
    function sortValue_7 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at AddressBookContactClaimsLV.pcf: line 71, column 51
    function sortValue_8 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at AddressBookContactClaimsLV.pcf: line 75, column 59
    function sortValue_9 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      var claimantList : String[] = (ClaimDesktopView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on RowIterator at AddressBookContactClaimsLV.pcf: line 23, column 83
    function value_50 () : gw.api.database.IQueryBeanResult<entity.ClaimDesktopView> {
      return ClaimDesktopViewList
    }
    
    property get ClaimDesktopViewList () : gw.api.database.IQueryBeanResult<ClaimDesktopView> {
      return getVariableValue("ClaimDesktopViewList", 0) as gw.api.database.IQueryBeanResult<ClaimDesktopView>
    }
    
    property set ClaimDesktopViewList ($arg :  gw.api.database.IQueryBeanResult<ClaimDesktopView>) {
      setVariableValue("ClaimDesktopViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.contact.ABContactClaimFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.contact.ABContactClaimFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.contact.ABContactClaimFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AddressBookContactClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactClaimsLV.pcf: line 61, column 25
    function action_20 () : void {
      pcf.Claim.go(ClaimDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactClaimsLV.pcf: line 61, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ClaimDesktopView.Claim)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at AddressBookContactClaimsLV.pcf: line 53, column 54
    function iconColor_18 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactClaimsLV.pcf: line 27, column 26
    function initialValue_14 () : String[] {
      return ClaimDesktopView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactClaimsLV.pcf: line 31, column 48
    function initialValue_15 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at AddressBookContactClaimsLV.pcf: line 23, column 83
    function initializeVariables_49 () : void {
        claimantList = ClaimDesktopView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at AddressBookContactClaimsLV.pcf: line 53, column 54
    function valueRoot_17 () : java.lang.Object {
      return ClaimDesktopView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at AddressBookContactClaimsLV.pcf: line 75, column 59
    function valueRoot_32 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at AddressBookContactClaimsLV.pcf: line 53, column 54
    function value_16 () : java.lang.Boolean {
      return ClaimDesktopView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactClaimsLV.pcf: line 61, column 25
    function value_22 () : java.lang.String {
      return ClaimDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at AddressBookContactClaimsLV.pcf: line 66, column 50
    function value_25 () : java.lang.String {
      return ClaimDesktopView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at AddressBookContactClaimsLV.pcf: line 71, column 51
    function value_28 () : java.lang.String {
      return ClaimDesktopView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at AddressBookContactClaimsLV.pcf: line 75, column 59
    function value_31 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at AddressBookContactClaimsLV.pcf: line 80, column 46
    function value_34 () : java.util.Date {
      return ClaimDesktopView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at AddressBookContactClaimsLV.pcf: line 86, column 43
    function value_37 () : typekey.ClaimState {
      return ClaimDesktopView.State
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at AddressBookContactClaimsLV.pcf: line 93, column 54
    function value_40 () : gw.api.financials.CurrencyAmount {
      return ClaimDesktopView.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at AddressBookContactClaimsLV.pcf: line 99, column 40
    function value_43 () : typekey.LOBCode {
      return ClaimDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at AddressBookContactClaimsLV.pcf: line 105, column 45
    function value_46 () : typekey.Jurisdiction {
      return ClaimDesktopView.JurisdictionState
    }
    
    property get ClaimDesktopView () : entity.ClaimDesktopView {
      return getIteratedValue(1) as entity.ClaimDesktopView
    }
    
    property get claimantList () : String[] {
      return getVariableValue("claimantList", 1) as String[]
    }
    
    property set claimantList ($arg :  String[]) {
      setVariableValue("claimantList", 1, $arg)
    }
    
    property get claimantUIHelper () : gw.api.claim.ClaimantsUIHelper {
      return getVariableValue("claimantUIHelper", 1) as gw.api.claim.ClaimantsUIHelper
    }
    
    property set claimantUIHelper ($arg :  gw.api.claim.ClaimantsUIHelper) {
      setVariableValue("claimantUIHelper", 1, $arg)
    }
    
    
  }
  
  
}