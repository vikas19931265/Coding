package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookContactMattersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookContactMattersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AddressBookContactMattersLV.pcf: line 29, column 73
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.AllFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at AddressBookContactMattersLV.pcf: line 33, column 33
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.OpenFilter
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactMattersLV.pcf: line 14, column 83
    function initialValue_0 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return Matter.finder.findMattersForABContact(Contact.getAddressBookUID())
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactMattersLV.pcf: line 18, column 55
    function initialValue_1 () : gw.api.contact.ABContactMatterFilterSet {
      return new gw.api.contact.ABContactMatterFilterSet()
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactMattersLV.pcf: line 42, column 25
    function sortValue_4 (MatterView :  entity.MatterView) : java.lang.Object {
      return MatterView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AddressBookContactMattersLV.pcf: line 47, column 36
    function sortValue_5 (MatterView :  entity.MatterView) : java.lang.Object {
      return MatterView.Name
    }
    
    // 'value' attribute on TextCell (id=CaseNumber_Cell) at AddressBookContactMattersLV.pcf: line 52, column 42
    function sortValue_6 (MatterView :  entity.MatterView) : java.lang.Object {
      return MatterView.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=EstSettleCost_Cell) at AddressBookContactMattersLV.pcf: line 57, column 47
    function sortValue_7 (MatterView :  entity.MatterView) : java.lang.Object {
      return MatterView.FinalSettleCost
    }
    
    // 'value' attribute on DateCell (id=TrialDate_Cell) at AddressBookContactMattersLV.pcf: line 62, column 41
    function sortValue_8 (MatterView :  entity.MatterView) : java.lang.Object {
      return MatterView.TrialDate
    }
    
    // 'value' attribute on RowIterator at AddressBookContactMattersLV.pcf: line 24, column 87
    function value_30 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return MatterViewList
    }
    
    property get Contact () : Contact {
      return getRequireValue("Contact", 0) as Contact
    }
    
    property set Contact ($arg :  Contact) {
      setRequireValue("Contact", 0, $arg)
    }
    
    property get FilterSet () : gw.api.contact.ABContactMatterFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.contact.ABContactMatterFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.contact.ABContactMatterFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get MatterViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getVariableValue("MatterViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set MatterViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setVariableValue("MatterViewList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AddressBookContactMattersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AddressBookContactMattersLV.pcf: line 47, column 36
    function action_14 () : void {
      MatterDetailPage.go(MatterView.MatterClaim, MatterView.Matter)
    }
    
    // 'action' attribute on TextCell (id=CaseNumber_Cell) at AddressBookContactMattersLV.pcf: line 52, column 42
    function action_19 () : void {
      MatterDetailPage.go(MatterView.MatterClaim, MatterView.Matter)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactMattersLV.pcf: line 42, column 25
    function action_9 () : void {
      pcf.Claim.go(MatterView.MatterClaim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactMattersLV.pcf: line 42, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.Claim.createDestination(MatterView.MatterClaim)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AddressBookContactMattersLV.pcf: line 47, column 36
    function action_dest_15 () : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(MatterView.MatterClaim, MatterView.Matter)
    }
    
    // 'action' attribute on TextCell (id=CaseNumber_Cell) at AddressBookContactMattersLV.pcf: line 52, column 42
    function action_dest_20 () : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(MatterView.MatterClaim, MatterView.Matter)
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactMattersLV.pcf: line 42, column 25
    function valueRoot_12 () : java.lang.Object {
      return MatterView
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at AddressBookContactMattersLV.pcf: line 42, column 25
    function value_11 () : java.lang.String {
      return MatterView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AddressBookContactMattersLV.pcf: line 47, column 36
    function value_16 () : java.lang.String {
      return MatterView.Name
    }
    
    // 'value' attribute on TextCell (id=CaseNumber_Cell) at AddressBookContactMattersLV.pcf: line 52, column 42
    function value_21 () : java.lang.String {
      return MatterView.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=EstSettleCost_Cell) at AddressBookContactMattersLV.pcf: line 57, column 47
    function value_24 () : gw.api.financials.CurrencyAmount {
      return MatterView.FinalSettleCost
    }
    
    // 'value' attribute on DateCell (id=TrialDate_Cell) at AddressBookContactMattersLV.pcf: line 62, column 41
    function value_27 () : java.util.Date {
      return MatterView.TrialDate
    }
    
    property get MatterView () : entity.MatterView {
      return getIteratedValue(1) as entity.MatterView
    }
    
    
  }
  
  
}