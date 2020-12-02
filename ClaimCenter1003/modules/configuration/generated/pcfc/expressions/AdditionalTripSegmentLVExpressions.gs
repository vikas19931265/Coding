package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/AdditionalTripSegmentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalTripSegmentLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/AdditionalTripSegmentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalTripSegmentLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator (id=TripSegmentIterator) at AdditionalTripSegmentLV.pcf: line 26, column 45
    function pickLocation_33 () : void {
      AdditionalTripSegmentPopup.push(affectedTripSegment, true)
    }
    
    // 'value' attribute on TypeKeyCell (id=TransportType_Cell) at AdditionalTripSegmentLV.pcf: line 47, column 46
    function sortValue_0 (anAddnlTripSegment :  entity.AddnlTripSegment) : java.lang.Object {
      return anAddnlTripSegment.TransportType
    }
    
    // 'value' attribute on TextCell (id=AddnlTripSegment_DisplayName_Cell) at AdditionalTripSegmentLV.pcf: line 52, column 51
    function sortValue_1 (anAddnlTripSegment :  entity.AddnlTripSegment) : java.lang.Object {
      return anAddnlTripSegment.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=AddnlTripSegment_Assessment_Cell) at AdditionalTripSegmentLV.pcf: line 58, column 49
    function sortValue_2 (anAddnlTripSegment :  entity.AddnlTripSegment) : java.lang.Object {
      return anAddnlTripSegment.Assessment
    }
    
    // 'value' attribute on CurrencyCell (id=AddnlTripSegment_TotalIncurred_Cell) at AdditionalTripSegmentLV.pcf: line 63, column 87
    function sortValue_3 (anAddnlTripSegment :  entity.AddnlTripSegment) : java.lang.Object {
      return anAddnlTripSegment.getFinancialImpact(AssessmentAction.TC_APPROVE)
    }
    
    // 'value' attribute on TextCell (id=ReasonForDenial_Cell) at AdditionalTripSegmentLV.pcf: line 71, column 83
    function sortValue_4 (anAddnlTripSegment :  entity.AddnlTripSegment) : java.lang.Object {
      return anAddnlTripSegment.ReasonForDenial
    }
    
    // 'toAdd' attribute on RowIterator (id=TripSegmentIterator) at AdditionalTripSegmentLV.pcf: line 26, column 45
    function toAdd_34 (anAddnlTripSegment :  entity.AddnlTripSegment) : void {
      affectedTripSegment.addToAddnlTripSegments(anAddnlTripSegment)
    }
    
    // 'toRemove' attribute on RowIterator (id=TripSegmentIterator) at AdditionalTripSegmentLV.pcf: line 26, column 45
    function toRemove_35 (anAddnlTripSegment :  entity.AddnlTripSegment) : void {
      affectedTripSegment.removeFromAddnlTripSegments( anAddnlTripSegment )
    }
    
    // 'value' attribute on RowIterator (id=TripSegmentIterator) at AdditionalTripSegmentLV.pcf: line 26, column 45
    function value_36 () : entity.AddnlTripSegment[] {
      return affectedTripSegment.AddnlTripSegments
    }
    
    property get affectedTripSegment () : TripSegment {
      return getRequireValue("affectedTripSegment", 0) as TripSegment
    }
    
    property set affectedTripSegment ($arg :  TripSegment) {
      setRequireValue("affectedTripSegment", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/AdditionalTripSegmentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdditionalTripSegmentLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AddnlTripSegment_DisplayName_Cell) at AdditionalTripSegmentLV.pcf: line 52, column 51
    function action_14 () : void {
      AdditionalTripSegmentPopup.push( anAddnlTripSegment, anAddnlTripSegment.TripSegment, CurrentLocation.InEditMode )
    }
    
    // 'action' attribute on TypeKeyCell (id=TransportType_Cell) at AdditionalTripSegmentLV.pcf: line 47, column 46
    function action_9 () : void {
      AdditionalTripSegmentPopup.push( anAddnlTripSegment, anAddnlTripSegment.TripSegment, CurrentLocation.InEditMode )
    }
    
    // 'action' attribute on TypeKeyCell (id=TransportType_Cell) at AdditionalTripSegmentLV.pcf: line 47, column 46
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AdditionalTripSegmentPopup.createDestination( anAddnlTripSegment, anAddnlTripSegment.TripSegment, CurrentLocation.InEditMode )
    }
    
    // 'action' attribute on TextCell (id=AddnlTripSegment_DisplayName_Cell) at AdditionalTripSegmentLV.pcf: line 52, column 51
    function action_dest_15 () : pcf.api.Destination {
      return pcf.AdditionalTripSegmentPopup.createDestination( anAddnlTripSegment, anAddnlTripSegment.TripSegment, CurrentLocation.InEditMode )
    }
    
    // 'available' attribute on TextCell (id=ReasonForDenial_Cell) at AdditionalTripSegmentLV.pcf: line 71, column 83
    function available_24 () : java.lang.Boolean {
      return anAddnlTripSegment.ReasonForDenial == null or anAddnlTripSegment.ReasonForDenial.length == 0
    }
    
    // 'condition' attribute on ToolbarFlag at AdditionalTripSegmentLV.pcf: line 29, column 34
    function condition_5 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == TC_APPROVE
    }
    
    // 'condition' attribute on ToolbarFlag at AdditionalTripSegmentLV.pcf: line 32, column 31
    function condition_6 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == TC_DENY
    }
    
    // 'condition' attribute on ToolbarFlag at AdditionalTripSegmentLV.pcf: line 35, column 33
    function condition_7 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == TC_REVIEW
    }
    
    // 'condition' attribute on ToolbarFlag at AdditionalTripSegmentLV.pcf: line 40, column 32
    function condition_8 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == null
    }
    
    // 'value' attribute on TextCell (id=ReasonForDenial_Cell) at AdditionalTripSegmentLV.pcf: line 71, column 83
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      anAddnlTripSegment.ReasonForDenial = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=ReasonForDenial_Cell) at AdditionalTripSegmentLV.pcf: line 71, column 83
    function editable_25 () : java.lang.Boolean {
      return anAddnlTripSegment.Assessment == TC_DENY ? true : false
    }
    
    // 'value' attribute on TypeKeyCell (id=TransportType_Cell) at AdditionalTripSegmentLV.pcf: line 47, column 46
    function valueRoot_12 () : java.lang.Object {
      return anAddnlTripSegment
    }
    
    // 'value' attribute on TypeKeyCell (id=TransportType_Cell) at AdditionalTripSegmentLV.pcf: line 47, column 46
    function value_11 () : typekey.TransportType {
      return anAddnlTripSegment.TransportType
    }
    
    // 'value' attribute on TextCell (id=AddnlTripSegment_DisplayName_Cell) at AdditionalTripSegmentLV.pcf: line 52, column 51
    function value_16 () : java.lang.String {
      return anAddnlTripSegment.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=AddnlTripSegment_Assessment_Cell) at AdditionalTripSegmentLV.pcf: line 58, column 49
    function value_19 () : typekey.AssessmentAction {
      return anAddnlTripSegment.Assessment
    }
    
    // 'value' attribute on CurrencyCell (id=AddnlTripSegment_TotalIncurred_Cell) at AdditionalTripSegmentLV.pcf: line 63, column 87
    function value_22 () : gw.api.financials.CurrencyAmount {
      return anAddnlTripSegment.getFinancialImpact(AssessmentAction.TC_APPROVE)
    }
    
    // 'value' attribute on TextCell (id=ReasonForDenial_Cell) at AdditionalTripSegmentLV.pcf: line 71, column 83
    function value_27 () : java.lang.String {
      return anAddnlTripSegment.ReasonForDenial
    }
    
    property get anAddnlTripSegment () : entity.AddnlTripSegment {
      return getIteratedValue(1) as entity.AddnlTripSegment
    }
    
    
  }
  
  
}