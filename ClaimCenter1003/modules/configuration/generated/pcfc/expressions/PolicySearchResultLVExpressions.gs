package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/claim/policy/PolicySearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearchResultLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/PolicySearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicySearchResultLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearchResultLV.pcf: line 28, column 25
    function action_11 () : void {
      PolicySummaryInfoPopup.push(PolicySummary)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearchResultLV.pcf: line 28, column 25
    function action_dest_12 () : pcf.api.Destination {
      return pcf.PolicySummaryInfoPopup.createDestination(PolicySummary)
    }
    
    // 'pickValue' attribute on RowIterator at PolicySearchResultLV.pcf: line 21, column 80
    function pickValue_44 () : PolicySummary {
      return verifySelectability(PolicySummary)
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearchResultLV.pcf: line 28, column 25
    function valueRoot_14 () : java.lang.Object {
      return PolicySummary
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearchResultLV.pcf: line 28, column 25
    function value_13 () : java.lang.String {
      return PolicySummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at PolicySearchResultLV.pcf: line 32, column 46
    function value_16 () : java.lang.String {
      return PolicySummary.InsuredName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PolicySearchResultLV.pcf: line 38, column 49
    function value_19 () : java.lang.String {
      return PolicySummary.DisplayAddress
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at PolicySearchResultLV.pcf: line 44, column 25
    function value_22 () : java.lang.String {
      return PolicySummary.DisplayCity
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at PolicySearchResultLV.pcf: line 50, column 25
    function value_25 () : typekey.State {
      return PolicySummary.State
    }
    
    // 'value' attribute on TextCell (id=Zip_Cell) at PolicySearchResultLV.pcf: line 54, column 45
    function value_28 () : java.lang.String {
      return PolicySummary.PostalCode
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at PolicySearchResultLV.pcf: line 58, column 48
    function value_31 () : java.util.Date {
      return PolicySummary.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at PolicySearchResultLV.pcf: line 62, column 49
    function value_34 () : java.util.Date {
      return PolicySummary.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicySearchResultLV.pcf: line 68, column 25
    function value_37 () : typekey.PolicyType {
      return PolicySummary.PolicyType
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at PolicySearchResultLV.pcf: line 74, column 46
    function value_40 () : typekey.PolicyStatus {
      return PolicySummary.Status
    }
    
    // 'visible' attribute on TypeKeyCell (id=Status_Cell) at PolicySearchResultLV.pcf: line 74, column 46
    function visible_42 () : java.lang.Boolean {
      return IncludeArchived == true
    }
    
    property get PolicySummary () : entity.PolicySummary {
      return getIteratedValue(1) as entity.PolicySummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/PolicySearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchResultLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicySearchResultLV.pcf: line 28, column 25
    function sortValue_0 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at PolicySearchResultLV.pcf: line 32, column 46
    function sortValue_1 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.InsuredName
    }
    
    // 'sortBy' attribute on TextCell (id=Address_Cell) at PolicySearchResultLV.pcf: line 38, column 49
    function sortValue_2 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=City_Cell) at PolicySearchResultLV.pcf: line 44, column 25
    function sortValue_3 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at PolicySearchResultLV.pcf: line 50, column 25
    function sortValue_4 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.State
    }
    
    // 'value' attribute on TextCell (id=Zip_Cell) at PolicySearchResultLV.pcf: line 54, column 45
    function sortValue_5 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.PostalCode
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at PolicySearchResultLV.pcf: line 58, column 48
    function sortValue_6 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at PolicySearchResultLV.pcf: line 62, column 49
    function sortValue_7 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.ExpirationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicySearchResultLV.pcf: line 68, column 25
    function sortValue_8 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.PolicyType
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at PolicySearchResultLV.pcf: line 74, column 46
    function sortValue_9 (PolicySummary :  entity.PolicySummary) : java.lang.Object {
      return PolicySummary.Status
    }
    
    // 'value' attribute on RowIterator at PolicySearchResultLV.pcf: line 21, column 80
    function value_45 () : gw.api.database.IQueryBeanResult<entity.PolicySummary> {
      return PolicySummaryList
    }
    
    // 'visible' attribute on TypeKeyCell (id=Status_Cell) at PolicySearchResultLV.pcf: line 74, column 46
    function visible_10 () : java.lang.Boolean {
      return IncludeArchived == true
    }
    
    property get IncludeArchived () : Boolean {
      return getRequireValue("IncludeArchived", 0) as Boolean
    }
    
    property set IncludeArchived ($arg :  Boolean) {
      setRequireValue("IncludeArchived", 0, $arg)
    }
    
    property get PolicySummaryList () : gw.api.database.IQueryBeanResult<PolicySummary> {
      return getRequireValue("PolicySummaryList", 0) as gw.api.database.IQueryBeanResult<PolicySummary>
    }
    
    property set PolicySummaryList ($arg :  gw.api.database.IQueryBeanResult<PolicySummary>) {
      setRequireValue("PolicySummaryList", 0, $arg)
    }
    
    
    function verifySelectability(policySummary : PolicySummary) : PolicySummary {
        if(policySummary.Status.equals(PolicyStatus.TC_ARCHIVED)) {
          throw new DisplayableException(DisplayKey.get("LV.Policy.PolicySearchResult.PolicySearch.SelectedArchivedPolicy"))
        }
    
        return policySummary
      }
    
    
  }
  
  
}