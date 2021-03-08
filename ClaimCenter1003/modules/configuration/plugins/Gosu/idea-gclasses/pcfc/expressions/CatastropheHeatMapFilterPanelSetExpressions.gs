package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/CatastropheHeatMapFilterPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CatastropheHeatMapFilterPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/CatastropheHeatMapFilterPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CatastropheHeatMapFilterPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_37 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_39 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_38 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_40 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'value' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.HeatMap.MapViewDropdown = (__VALUE_TO_SET as gw.api.heatmap.CatastropheHeatMapViews.CatastropheHeatMapView)
    }
    
    // 'value' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.HeatMap.ClaimState = (__VALUE_TO_SET as typekey.ClaimState)
    }
    
    // 'value' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.SelectedCatastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on RangeInput (id=ReportedDate_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 62, column 52
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.HeatMap.ReportedDateRange = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.HeatMap.AssignedToGroup = __VALUE_TO_SET
    }
    
    // 'value' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.HeatMap.PolicyLocations = (__VALUE_TO_SET as gw.api.heatmap.CatastropheSearchCriteria.PolicyGroupFilter)
    }
    
    // 'editable' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function editable_1 () : java.lang.Boolean {
      return allowCatastropheSelection
    }
    
    // 'initialValue' attribute on Variable at CatastropheHeatMapFilterPanelSet.pcf: line 16, column 36
    function initialValue_0 () : entity.Catastrophe[] {
      return (gw.api.database.Query.make(entity.Catastrophe).compare(Catastrophe#Active, Equals, Boolean.TRUE).select().toList().orderBy(\cat -> cat.DisplayName)).toTypedArray()
    }
    
    // 'noneSelectedLabel' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function noneSelectedLabel_13 () : java.lang.String {
      return DisplayKey.get("JSP.ClaimSearch.Search.ClaimSearch.Catastrophe.Claims")
    }
    
    // 'optionLabel' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function optionLabel_14 (VALUE :  gw.api.heatmap.CatastropheHeatMapViews.CatastropheHeatMapView) : java.lang.String {
      return VALUE.FilterOptionLabel
    }
    
    // 'valueRange' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function valueRange_15 () : java.lang.Object {
      return criteria.HeatMap.MapViews.AvailableViews
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function valueRange_23 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableClaimStates()
    }
    
    // 'valueRange' attribute on RangeInput (id=ReportedDate_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 62, column 52
    function valueRange_32 () : java.lang.Object {
      return criteria.dateFilterChoices()
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_45 () : java.lang.Object {
      return criteria.groupFilterChoices()
    }
    
    // 'valueRange' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function valueRange_5 () : java.lang.Object {
      return catastropheList
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function valueRange_57 () : java.lang.Object {
      return criteria.policyLocationFilterChoices()
    }
    
    // 'value' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function valueRoot_12 () : java.lang.Object {
      return criteria.HeatMap
    }
    
    // 'value' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function valueRoot_4 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function value_10 () : gw.api.heatmap.CatastropheHeatMapViews.CatastropheHeatMapView {
      return criteria.HeatMap.MapViewDropdown
    }
    
    // 'value' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function value_2 () : entity.Catastrophe {
      return criteria.SelectedCatastrophe
    }
    
    // 'value' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function value_20 () : typekey.ClaimState {
      return criteria.HeatMap.ClaimState
    }
    
    // 'value' attribute on RangeInput (id=ReportedDate_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 62, column 52
    function value_29 () : typekey.DateRangeChoiceType {
      return criteria.HeatMap.ReportedDateRange
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function value_42 () : java.lang.Object {
      return criteria.HeatMap.AssignedToGroup
    }
    
    // 'value' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function value_54 () : gw.api.heatmap.CatastropheSearchCriteria.PolicyGroupFilter {
      return criteria.HeatMap.PolicyLocations
    }
    
    // 'valueRange' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.heatmap.CatastropheHeatMapViews.CatastropheHeatMapView[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  typekey.ClaimState[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ReportedDate_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 62, column 52
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ReportedDate_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 62, column 52
    function verifyValueRangeIsAllowedType_33 ($$arg :  typekey.DateRangeChoiceType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function verifyValueRangeIsAllowedType_58 ($$arg :  gw.api.heatmap.CatastropheSearchCriteria.PolicyGroupFilter[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function verifyValueRangeIsAllowedType_58 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function verifyValueRangeIsAllowedType_6 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ImageToDisplay_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 40, column 87
    function verifyValueRange_17 () : void {
      var __valueRangeArg = criteria.HeatMap.MapViews.AvailableViews
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableClaimStates()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ReportedDate_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 62, column 52
    function verifyValueRange_34 () : void {
      var __valueRangeArg = criteria.dateFilterChoices()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_47 () : void {
      var __valueRangeArg = criteria.groupFilterChoices()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function verifyValueRange_59 () : void {
      var __valueRangeArg = criteria.policyLocationFilterChoices()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_58(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=catastrophe_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 29, column 44
    function verifyValueRange_7 () : void {
      var __valueRangeArg = catastropheList
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=ClaimStatus_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 51, column 52
    function visible_19 () : java.lang.Boolean {
      return criteria.HeatMap.hasClaims()
    }
    
    // 'visible' attribute on RangeInput (id=PolicyLocationFilter_Input) at CatastropheHeatMapFilterPanelSet.pcf: line 84, column 61
    function visible_53 () : java.lang.Boolean {
      return criteria.HeatMap.hasPolicyLocations()
    }
    
    property get allowCatastropheSelection () : boolean {
      return getRequireValue("allowCatastropheSelection", 0) as java.lang.Boolean
    }
    
    property set allowCatastropheSelection ($arg :  boolean) {
      setRequireValue("allowCatastropheSelection", 0, $arg)
    }
    
    property get catastropheList () : entity.Catastrophe[] {
      return getVariableValue("catastropheList", 0) as entity.Catastrophe[]
    }
    
    property set catastropheList ($arg :  entity.Catastrophe[]) {
      setVariableValue("catastropheList", 0, $arg)
    }
    
    property get criteria () : gw.api.heatmap.CatastropheSearchCriteria {
      return getRequireValue("criteria", 0) as gw.api.heatmap.CatastropheSearchCriteria
    }
    
    property set criteria ($arg :  gw.api.heatmap.CatastropheSearchCriteria) {
      setRequireValue("criteria", 0, $arg)
    }
    
    
  }
  
  
}