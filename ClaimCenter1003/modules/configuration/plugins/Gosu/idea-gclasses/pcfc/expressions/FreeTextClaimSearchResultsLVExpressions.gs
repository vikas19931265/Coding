package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FreeTextClaimSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FreeTextClaimSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Rank_Cell) at FreeTextClaimSearchResultsLV.pcf: line 35, column 42
    function sortValue_0 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Rank
    }
    
    // 'sortBy' attribute on TextCell (id=RelevanceNum_Cell) at FreeTextClaimSearchResultsLV.pcf: line 41, column 57
    function sortValue_1 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Score
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at FreeTextClaimSearchResultsLV.pcf: line 88, column 38
    function sortValue_10 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at FreeTextClaimSearchResultsLV.pcf: line 94, column 33
    function sortValue_11 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Phone
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at FreeTextClaimSearchResultsLV.pcf: line 99, column 33
    function sortValue_12 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Roles
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at FreeTextClaimSearchResultsLV.pcf: line 48, column 25
    function sortValue_2 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at FreeTextClaimSearchResultsLV.pcf: line 53, column 40
    function sortValue_3 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at FreeTextClaimSearchResultsLV.pcf: line 58, column 34
    function sortValue_4 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Status
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at FreeTextClaimSearchResultsLV.pcf: line 63, column 32
    function sortValue_5 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Date
    }
    
    // 'value' attribute on TextCell (id=FullName_Cell) at FreeTextClaimSearchResultsLV.pcf: line 67, column 36
    function sortValue_6 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.FullName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at FreeTextClaimSearchResultsLV.pcf: line 72, column 35
    function sortValue_7 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.Address
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at FreeTextClaimSearchResultsLV.pcf: line 77, column 32
    function sortValue_8 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at FreeTextClaimSearchResultsLV.pcf: line 83, column 38
    function sortValue_9 (result :  FreeTextClaimSearchEntity) : java.lang.Object {
      return result.State
    }
    
    // 'value' attribute on RowIterator (id=FreeTextClaimSearchResultsIterator) at FreeTextClaimSearchResultsLV.pcf: line 25, column 85
    function value_54 () : gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity> {
      return results
    }
    
    property get helper () : gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper {
      return getRequireValue("helper", 0) as gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity> {
      return getRequireValue("results", 0) as gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity>
    }
    
    property set results ($arg :  gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity>) {
      setRequireValue("results", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FreeTextClaimSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at FreeTextClaimSearchResultsLV.pcf: line 48, column 25
    function action_18 () : void {
      FreeTextClaimForward.go(result.ClaimNumber, ClaimSearchType.TC_ACTIVE)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at FreeTextClaimSearchResultsLV.pcf: line 48, column 25
    function action_dest_19 () : pcf.api.Destination {
      return pcf.FreeTextClaimForward.createDestination(result.ClaimNumber, ClaimSearchType.TC_ACTIVE)
    }
    
    // 'value' attribute on TextCell (id=Rank_Cell) at FreeTextClaimSearchResultsLV.pcf: line 35, column 42
    function valueRoot_14 () : java.lang.Object {
      return result
    }
    
    // 'value' attribute on TextCell (id=Rank_Cell) at FreeTextClaimSearchResultsLV.pcf: line 35, column 42
    function value_13 () : java.lang.Integer {
      return result.Rank
    }
    
    // 'value' attribute on TextCell (id=RelevanceNum_Cell) at FreeTextClaimSearchResultsLV.pcf: line 41, column 57
    function value_16 () : java.lang.String {
      return helper.getScorePercent(result.Score)
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at FreeTextClaimSearchResultsLV.pcf: line 48, column 25
    function value_20 () : java.lang.String {
      return result.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at FreeTextClaimSearchResultsLV.pcf: line 53, column 40
    function value_23 () : java.lang.String {
      return result.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at FreeTextClaimSearchResultsLV.pcf: line 58, column 34
    function value_26 () : java.lang.String {
      return result.Status
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at FreeTextClaimSearchResultsLV.pcf: line 63, column 32
    function value_29 () : java.util.Date {
      return result.Date
    }
    
    // 'value' attribute on TextCell (id=FullName_Cell) at FreeTextClaimSearchResultsLV.pcf: line 67, column 36
    function value_32 () : java.lang.String {
      return result.FullName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at FreeTextClaimSearchResultsLV.pcf: line 72, column 35
    function value_35 () : java.lang.String {
      return result.Address
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at FreeTextClaimSearchResultsLV.pcf: line 77, column 32
    function value_38 () : java.lang.String {
      return result.City
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at FreeTextClaimSearchResultsLV.pcf: line 83, column 38
    function value_41 () : typekey.State {
      return result.State
    }
    
    // 'value' attribute on TextCell (id=PostalCode_Cell) at FreeTextClaimSearchResultsLV.pcf: line 88, column 38
    function value_44 () : java.lang.String {
      return result.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at FreeTextClaimSearchResultsLV.pcf: line 94, column 33
    function value_47 () : java.lang.String {
      return result.Phone
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at FreeTextClaimSearchResultsLV.pcf: line 99, column 33
    function value_50 () : java.lang.String {
      return result.Roles
    }
    
    property get result () : FreeTextClaimSearchEntity {
      return getIteratedValue(1) as FreeTextClaimSearchEntity
    }
    
    
  }
  
  
}