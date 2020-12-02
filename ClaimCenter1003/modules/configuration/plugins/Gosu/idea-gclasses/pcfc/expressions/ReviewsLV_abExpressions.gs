package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/review/ReviewsLV.ab.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReviewsLV_abExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/review/ReviewsLV.ab.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReviewsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Review_Claim_Cell) at ReviewsLV.ab.pcf: line 69, column 25
    function action_19 () : void {
      pcf.Claim.go(review.Claim)
    }
    
    // 'action' attribute on TextCell (id=Review_Claim_Cell) at ReviewsLV.ab.pcf: line 69, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.Claim.createDestination(review.Claim)
    }
    
    // 'value' attribute on TextCell (id=Review_ReviewType_Cell) at ReviewsLV.ab.pcf: line 59, column 43
    function valueRoot_14 () : java.lang.Object {
      return review.ReviewType
    }
    
    // 'value' attribute on TextCell (id=Review_RelatedTo_Cell) at ReviewsLV.ab.pcf: line 63, column 37
    function valueRoot_17 () : java.lang.Object {
      return review
    }
    
    // 'value' attribute on TextCell (id=Review_Claim_Cell) at ReviewsLV.ab.pcf: line 69, column 25
    function valueRoot_22 () : java.lang.Object {
      return review.Claim
    }
    
    // 'value' attribute on TextCell (id=Review_ReviewType_Cell) at ReviewsLV.ab.pcf: line 59, column 43
    function value_13 () : java.lang.String {
      return review.ReviewType.Name
    }
    
    // 'value' attribute on TextCell (id=Review_RelatedTo_Cell) at ReviewsLV.ab.pcf: line 63, column 37
    function value_16 () : java.lang.String {
      return review.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Review_Claim_Cell) at ReviewsLV.ab.pcf: line 69, column 25
    function value_21 () : java.lang.String {
      return review.Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Review_Score_Cell) at ReviewsLV.ab.pcf: line 74, column 42
    function value_24 () : java.lang.Integer {
      return review.Score
    }
    
    // 'value' attribute on DateCell (id=Review_LastUpdated_Cell) at ReviewsLV.ab.pcf: line 79, column 38
    function value_27 () : java.util.Date {
      return review.UpdateTime
    }
    
    // 'value' attribute on TextCell (id=Review_Status_Cell) at ReviewsLV.ab.pcf: line 84, column 45
    function value_30 () : java.lang.String {
      return review.getStatusString()
    }
    
    property get review () : entity.Review {
      return getIteratedValue(1) as entity.Review
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contacts/review/ReviewsLV.ab.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReviewsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ReviewsLV.ab.pcf: line 38, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.AllFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ReviewsLV.ab.pcf: line 41, column 79
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.Completed30Days
    }
    
    // 'filter' attribute on ToolbarFilterOption at ReviewsLV.ab.pcf: line 44, column 78
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.Completed6Months
    }
    
    // 'filter' attribute on ToolbarFilterOption at ReviewsLV.ab.pcf: line 47, column 76
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.Completed1Year
    }
    
    // 'filter' attribute on ToolbarFilterOption at ReviewsLV.ab.pcf: line 50, column 81
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.AllCompletedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ReviewsLV.ab.pcf: line 53, column 82
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.AllInProgressFilter
    }
    
    // 'initialValue' attribute on Variable at ReviewsLV.ab.pcf: line 23, column 46
    function initialValue_0 () : gw.api.contact.ReviewFilterSet {
      return new gw.api.contact.ReviewFilterSet()
    }
    
    // 'value' attribute on TextCell (id=Review_Score_Cell) at ReviewsLV.ab.pcf: line 74, column 42
    function sortValue_10 (review :  entity.Review) : java.lang.Object {
      return review.Score
    }
    
    // 'value' attribute on DateCell (id=Review_LastUpdated_Cell) at ReviewsLV.ab.pcf: line 79, column 38
    function sortValue_11 (review :  entity.Review) : java.lang.Object {
      return review.UpdateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Review_Status_Cell) at ReviewsLV.ab.pcf: line 84, column 45
    function sortValue_12 (review :  entity.Review) : java.lang.Object {
      return review.Completed
    }
    
    // 'value' attribute on TextCell (id=Review_ReviewType_Cell) at ReviewsLV.ab.pcf: line 59, column 43
    function sortValue_7 (review :  entity.Review) : java.lang.Object {
      return review.ReviewType.Name
    }
    
    // 'value' attribute on TextCell (id=Review_RelatedTo_Cell) at ReviewsLV.ab.pcf: line 63, column 37
    function sortValue_8 (review :  entity.Review) : java.lang.Object {
      return review.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Review_Claim_Cell) at ReviewsLV.ab.pcf: line 69, column 25
    function sortValue_9 (review :  entity.Review) : java.lang.Object {
      return review.Claim.ClaimNumber
    }
    
    // 'value' attribute on RowIterator at ReviewsLV.ab.pcf: line 30, column 73
    function value_32 () : gw.api.database.IQueryBeanResult<entity.Review> {
      return gw.api.contact.ReviewUtil.getReviewsByABUID(contact) as gw.api.database.IQueryBeanResult<Review>
    }
    
    // 'visible' attribute on ListViewPanel (id=ReviewsLV) at ReviewsLV.ab.pcf: line 8, column 32
    function visible_33 () : java.lang.Boolean {
      return perm.Review.list
    }
    
    property get FilterSet () : gw.api.contact.ReviewFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.contact.ReviewFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.contact.ReviewFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}