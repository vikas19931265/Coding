package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentPopupDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentPopupDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=AssignmentPopupScreen_ButtonButton_Input) at AssignmentPopupDV.pcf: line 42, column 76
    function action_11 () : void {
      if(AssignmentPopup.performAssignment()) CurrentLocation.cancel()
    }
    
    // 'available' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function available_1 () : java.lang.Boolean {
      return AssignmentPopup.SelectionType == TC_FROMLIST
    }
    
    // 'value' attribute on Choice (id=FromList) at AssignmentPopupDV.pcf: line 27, column 53
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssignmentPopup.SelectionType = (__VALUE_TO_SET as typekey.AssignmentSelectionType)
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssignmentPopup.SelectedFromList = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'initialValue' attribute on Variable at AssignmentPopupDV.pcf: line 19, column 58
    function initialValue_0 () : gw.api.contact.CCProximitySearchPageHelper {
      return new gw.api.contact.CCProximitySearchPageHelper()
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function valueRange_6 () : java.lang.Object {
      return AssignmentPopup.SuggestedAssignees
    }
    
    // 'value' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 54, column 51
    function valueRoot_16 () : java.lang.Object {
      return AssignmentPopup.Picker
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function valueRoot_5 () : java.lang.Object {
      return AssignmentPopup
    }
    
    // 'value' attribute on Choice (id=FromList) at AssignmentPopupDV.pcf: line 27, column 53
    function value_12 () : typekey.AssignmentSelectionType {
      return AssignmentPopup.SelectionType
    }
    
    // 'value' attribute on TextInput (id=SelectFromSearch_Input) at AssignmentPopupDV.pcf: line 54, column 51
    function value_15 () : gw.api.assignment.Assignee {
      return AssignmentPopup.Picker.Selection
    }
    
    // 'value' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function value_3 () : gw.api.assignment.Assignee {
      return AssignmentPopup.SelectedFromList
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectFromList_Input) at AssignmentPopupDV.pcf: line 37, column 51
    function verifyValueRange_8 () : void {
      var __valueRangeArg = AssignmentPopup.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at AssignmentPopupDV.pcf: line 57, column 67
    function visible_27 () : java.lang.Boolean {
      return proximitySearchPageHelper.useGeocodeUILocally()
    }
    
    property get AssignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    property get SearchCriteria () : gw.api.assignment.CCAssignmentSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as gw.api.assignment.CCAssignmentSearchCriteria
    }
    
    property set SearchCriteria ($arg :  gw.api.assignment.CCAssignmentSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    property get SearchResult () : gw.api.assignment.AssignmentProximitySearchResult {
      return getRequireValue("SearchResult", 0) as gw.api.assignment.AssignmentProximitySearchResult
    }
    
    property set SearchResult ($arg :  gw.api.assignment.AssignmentProximitySearchResult) {
      setRequireValue("SearchResult", 0, $arg)
    }
    
    property get proximitySearchPageHelper () : gw.api.contact.CCProximitySearchPageHelper {
      return getVariableValue("proximitySearchPageHelper", 0) as gw.api.contact.CCProximitySearchPageHelper
    }
    
    property set proximitySearchPageHelper ($arg :  gw.api.contact.CCProximitySearchPageHelper) {
      setVariableValue("proximitySearchPageHelper", 0, $arg)
    }
    
    
  }
  
  
}