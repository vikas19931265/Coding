package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookContactActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookContactActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AddressBookContactActivitiesLV.pcf: line 28, column 73
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.AllFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at AddressBookContactActivitiesLV.pcf: line 32, column 33
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.OpenFilter
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at AddressBookContactActivitiesLV.pcf: line 53, column 50
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactActivitiesLV.pcf: line 14, column 75
    function initialValue_0 () : gw.api.database.IQueryBeanResult<ActivityDesktopView> {
      return Activity.finder.findActivitiesForABContact(Contact.getAddressBookUID())
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactActivitiesLV.pcf: line 18, column 57
    function initialValue_1 () : gw.api.contact.ABContactActivityFilterSet {
      return new gw.api.contact.ABContactActivityFilterSet()
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at AddressBookContactActivitiesLV.pcf: line 99, column 56
    function sortValue_10 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at AddressBookContactActivitiesLV.pcf: line 106, column 25
    function sortValue_11 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at AddressBookContactActivitiesLV.pcf: line 112, column 45
    function sortValue_12 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.JurisdictionState
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at AddressBookContactActivitiesLV.pcf: line 61, column 25
    function sortValue_5 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at AddressBookContactActivitiesLV.pcf: line 68, column 41
    function sortValue_6 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at AddressBookContactActivitiesLV.pcf: line 74, column 48
    function sortValue_7 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at AddressBookContactActivitiesLV.pcf: line 82, column 25
    function sortValue_8 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at AddressBookContactActivitiesLV.pcf: line 87, column 57
    function sortValue_9 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ClaimInsuredName
    }
    
    // 'value' attribute on RowIterator at AddressBookContactActivitiesLV.pcf: line 23, column 86
    function value_53 () : gw.api.database.IQueryBeanResult<entity.ActivityDesktopView> {
      return ActivityDesktopViewList
    }
    
    property get ActivityDesktopViewList () : gw.api.database.IQueryBeanResult<ActivityDesktopView> {
      return getVariableValue("ActivityDesktopViewList", 0) as gw.api.database.IQueryBeanResult<ActivityDesktopView>
    }
    
    property set ActivityDesktopViewList ($arg :  gw.api.database.IQueryBeanResult<ActivityDesktopView>) {
      setVariableValue("ActivityDesktopViewList", 0, $arg)
    }
    
    property get Contact () : Contact {
      return getRequireValue("Contact", 0) as Contact
    }
    
    property set Contact ($arg :  Contact) {
      setRequireValue("Contact", 0, $arg)
    }
    
    property get FilterSet () : gw.api.contact.ABContactActivityFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.contact.ABContactActivityFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.contact.ABContactActivityFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressBookContactActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AddressBookContactActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at AddressBookContactActivitiesLV.pcf: line 74, column 48
    function action_29 () : void {
      ClaimWorkplan.go(ActivityDesktopView.Claim); ActivityDetailForward.goInWorkspace(ActivityDesktopView.Claim, ActivityDesktopView.Activity)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at AddressBookContactActivitiesLV.pcf: line 82, column 25
    function action_33 () : void {
      pcf.Claim.go(ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at AddressBookContactActivitiesLV.pcf: line 82, column 25
    function action_dest_34 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivityDesktopView.Claim)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at AddressBookContactActivitiesLV.pcf: line 61, column 25
    function fontColor_20 () : java.lang.Object {
      return ActivityDesktopView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at AddressBookContactActivitiesLV.pcf: line 53, column 50
    function iconColor_18 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at AddressBookContactActivitiesLV.pcf: line 43, column 63
    function valueRoot_14 () : java.lang.Object {
      return ActivityDesktopView
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at AddressBookContactActivitiesLV.pcf: line 43, column 63
    function value_13 () : java.lang.Boolean {
      return ActivityDesktopView.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at AddressBookContactActivitiesLV.pcf: line 53, column 50
    function value_16 () : java.lang.Boolean {
      return ActivityDesktopView.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at AddressBookContactActivitiesLV.pcf: line 61, column 25
    function value_21 () : java.util.Date {
      return ActivityDesktopView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at AddressBookContactActivitiesLV.pcf: line 68, column 41
    function value_26 () : typekey.Priority {
      return ActivityDesktopView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at AddressBookContactActivitiesLV.pcf: line 74, column 48
    function value_30 () : java.lang.String {
      return ActivityDesktopView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at AddressBookContactActivitiesLV.pcf: line 82, column 25
    function value_35 () : java.lang.String {
      return ActivityDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at AddressBookContactActivitiesLV.pcf: line 87, column 57
    function value_38 () : java.lang.String {
      return ActivityDesktopView.ClaimInsuredName
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at AddressBookContactActivitiesLV.pcf: line 94, column 49
    function value_41 () : java.lang.String {
      return ActivityDesktopView.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at AddressBookContactActivitiesLV.pcf: line 99, column 56
    function value_44 () : java.lang.Boolean {
      return ActivityDesktopView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at AddressBookContactActivitiesLV.pcf: line 106, column 25
    function value_47 () : typekey.LOBCode {
      return ActivityDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at AddressBookContactActivitiesLV.pcf: line 112, column 45
    function value_50 () : typekey.Jurisdiction {
      return ActivityDesktopView.JurisdictionState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at AddressBookContactActivitiesLV.pcf: line 61, column 25
    function verifyFontColorIsAllowedType_23 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at AddressBookContactActivitiesLV.pcf: line 61, column 25
    function verifyFontColorIsAllowedType_23 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at AddressBookContactActivitiesLV.pcf: line 61, column 25
    function verifyFontColor_24 () : void {
      var __fontColorArg = ActivityDesktopView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_23(__fontColorArg)
    }
    
    property get ActivityDesktopView () : entity.ActivityDesktopView {
      return getIteratedValue(1) as entity.ActivityDesktopView
    }
    
    
  }
  
  
}