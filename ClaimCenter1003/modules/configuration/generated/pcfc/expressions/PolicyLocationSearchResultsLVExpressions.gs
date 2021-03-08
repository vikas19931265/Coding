package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/PolicyLocationSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLocationSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/PolicyLocationSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyLocationSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function action_14 () : void {
      ViewPolicy.push(gw.api.heatmap.CatastropheHeatMap.getPolicySystemURL(), PolicyLocationSearchEntry.PolicyNumber, PolicyEffectiveDate)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 50, column 25
    function action_27 () : void {
      if (PolicyLocationSearchEntry.ClaimID != null) ClaimForward.go(gw.transaction.Transaction.getCurrent().loadBean(PolicyLocationSearchEntry.ClaimID) as Claim)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ViewPolicy.createDestination(gw.api.heatmap.CatastropheHeatMap.getPolicySystemURL(), PolicyLocationSearchEntry.PolicyNumber, PolicyEffectiveDate)
    }
    
    // 'label' attribute on TextCell (id=Phone_Cell) at PolicyLocationSearchResultsLV.pcf: line 64, column 52
    function label_37 () : java.lang.Object {
      return DisplayKey.get("JSP.ClaimSearch.Search.Phone")
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function valueRoot_17 () : java.lang.Object {
      return PolicyLocationSearchEntry
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function value_16 () : java.lang.String {
      return PolicyLocationSearchEntry.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at PolicyLocationSearchResultsLV.pcf: line 44, column 58
    function value_24 () : java.lang.String {
      return PolicyLocationSearchEntry.InsuredName
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 50, column 25
    function value_28 () : java.lang.String {
      return PolicyLocationSearchEntry.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PolicyLocationSearchResultsLV.pcf: line 54, column 59
    function value_31 () : java.lang.String {
      return PolicyLocationSearchEntry.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at PolicyLocationSearchResultsLV.pcf: line 59, column 51
    function value_34 () : java.lang.String {
      return PolicyLocationSearchEntry.City
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at PolicyLocationSearchResultsLV.pcf: line 64, column 52
    function value_38 () : java.lang.String {
      return PolicyLocationSearchEntry.Phone
    }
    
    // 'value' attribute on CurrencyCell (id=Status_Cell) at PolicyLocationSearchResultsLV.pcf: line 70, column 59
    function value_42 () : gw.api.financials.CurrencyAmount {
      return PolicyLocationSearchEntry.TotalInsured
    }
    
    // 'visible' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function visible_18 () : java.lang.Boolean {
      return gw.api.heatmap.CatastropheHeatMap.canJumpToPolicySystem()
    }
    
    // 'visible' attribute on TextCell (id=PolicyNumberNoLInk_Cell) at PolicyLocationSearchResultsLV.pcf: line 39, column 84
    function visible_22 () : java.lang.Boolean {
      return not gw.api.heatmap.CatastropheHeatMap.canJumpToPolicySystem()
    }
    
    property get PolicyLocationSearchEntry () : gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult {
      return getIteratedValue(1) as gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/PolicyLocationSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLocationSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Phone_Cell) at PolicyLocationSearchResultsLV.pcf: line 64, column 52
    function label_11 () : java.lang.Object {
      return DisplayKey.get("JSP.ClaimSearch.Search.Phone")
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLocationSearchResultsLV.pcf: line 21, column 24
    function sortBy_0 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.PolicyNumber
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLocationSearchResultsLV.pcf: line 24, column 24
    function sortBy_1 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.City
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyLocationSearchResultsLV.pcf: line 27, column 24
    function sortBy_2 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at PolicyLocationSearchResultsLV.pcf: line 59, column 51
    function sortValue_10 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.City
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at PolicyLocationSearchResultsLV.pcf: line 64, column 52
    function sortValue_12 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.Phone
    }
    
    // 'value' attribute on CurrencyCell (id=Status_Cell) at PolicyLocationSearchResultsLV.pcf: line 70, column 59
    function sortValue_13 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.TotalInsured
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function sortValue_3 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumberNoLInk_Cell) at PolicyLocationSearchResultsLV.pcf: line 39, column 84
    function sortValue_5 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at PolicyLocationSearchResultsLV.pcf: line 44, column 58
    function sortValue_7 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.InsuredName
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 50, column 25
    function sortValue_8 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PolicyLocationSearchResultsLV.pcf: line 54, column 59
    function sortValue_9 (PolicyLocationSearchEntry :  gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult) : java.lang.Object {
      return PolicyLocationSearchEntry.AddressLine1
    }
    
    // 'value' attribute on RowIterator at PolicyLocationSearchResultsLV.pcf: line 18, column 109
    function value_45 () : java.util.List<gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult> {
      return PolicyLocationSearchList
    }
    
    // 'visible' attribute on TextCell (id=PolicyNumber_Cell) at PolicyLocationSearchResultsLV.pcf: line 34, column 80
    function visible_4 () : java.lang.Boolean {
      return gw.api.heatmap.CatastropheHeatMap.canJumpToPolicySystem()
    }
    
    // 'visible' attribute on TextCell (id=PolicyNumberNoLInk_Cell) at PolicyLocationSearchResultsLV.pcf: line 39, column 84
    function visible_6 () : java.lang.Boolean {
      return not gw.api.heatmap.CatastropheHeatMap.canJumpToPolicySystem()
    }
    
    property get PolicyEffectiveDate () : java.util.Date {
      return getRequireValue("PolicyEffectiveDate", 0) as java.util.Date
    }
    
    property set PolicyEffectiveDate ($arg :  java.util.Date) {
      setRequireValue("PolicyEffectiveDate", 0, $arg)
    }
    
    property get PolicyLocationSearchList () : List<gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult> {
      return getRequireValue("PolicyLocationSearchList", 0) as List<gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult>
    }
    
    property set PolicyLocationSearchList ($arg :  List<gw.api.heatmap.CatastropheSearchCriteria.PolicyLocationSearchResult>) {
      setRequireValue("PolicyLocationSearchList", 0, $arg)
    }
    
    
  }
  
  
}