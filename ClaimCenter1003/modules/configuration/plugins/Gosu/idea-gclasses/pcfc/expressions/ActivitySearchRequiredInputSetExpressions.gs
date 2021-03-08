package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitySearchRequiredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitySearchRequiredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 10, column 154
    function actionEnabled_57 () : java.lang.Boolean {
      return ActivitySearchCriteria.ExternalOwner != null
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 9, column 49
    function action_22 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 12, column 49
    function action_24 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_35 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_37 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 12, column 225
    function action_49 () : void {
      AddressBookPickerPopup.push(statictypeof (ActivitySearchCriteria.ExternalOwner))
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_5 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 14, column 151
    function action_51 () : void {
      ActivitySearchCriteria.ExternalOwner = null
    }
    
    // 'action' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 10, column 154
    function action_52 () : void {
      AddressBookContactDetailPopup.push(externalContactSource.wrap(ActivitySearchCriteria.ExternalOwner),false)
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_7 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 9, column 49
    function action_dest_23 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 12, column 49
    function action_dest_25 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_dest_36 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_dest_38 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 12, column 225
    function action_dest_50 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (ActivitySearchCriteria.ExternalOwner))
    }
    
    // 'action' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 10, column 154
    function action_dest_53 () : pcf.api.Destination {
      return pcf.AddressBookContactDetailPopup.createDestination(externalContactSource.wrap(ActivitySearchCriteria.ExternalOwner),false)
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_8 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.AssignedToGroup.AssignedToGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups_Input) at ActivitySearchRequiredInputSet.pcf: line 33, column 72
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.AssignedToGroup.IncludeSubGroups = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Claims_ClaimNumber_Input) at ActivitySearchRequiredInputSet.pcf: line 22, column 51
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.AssignedToUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.CreatedByUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 10, column 154
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.ExternalOwner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'initialValue' attribute on Variable at ActivitySearchRequiredInputSet.pcf: line 14, column 52
    function initialValue_0 () : gw.api.contact.ExternalContactSource {
      return gw.api.contact.AddressBookUtil.newAddressBookContactSource()
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_12 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function valueRange_29 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRoot_11 () : java.lang.Object {
      return ActivitySearchCriteria.AssignedToGroup
    }
    
    // 'value' attribute on TextInput (id=Claims_ClaimNumber_Input) at ActivitySearchRequiredInputSet.pcf: line 22, column 51
    function valueRoot_3 () : java.lang.Object {
      return ActivitySearchCriteria
    }
    
    // 'value' attribute on TextInput (id=Claims_ClaimNumber_Input) at ActivitySearchRequiredInputSet.pcf: line 22, column 51
    function value_1 () : java.lang.String {
      return ActivitySearchCriteria.ClaimNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups_Input) at ActivitySearchRequiredInputSet.pcf: line 33, column 72
    function value_18 () : java.lang.Boolean {
      return ActivitySearchCriteria.AssignedToGroup.IncludeSubGroups
    }
    
    // 'value' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function value_26 () : entity.User {
      return ActivitySearchCriteria.AssignedToUser
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function value_39 () : entity.User {
      return ActivitySearchCriteria.CreatedByUser
    }
    
    // 'value' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 10, column 154
    function value_54 () : entity.Contact {
      return ActivitySearchCriteria.ExternalOwner
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function value_9 () : entity.Group {
      return ActivitySearchCriteria.AssignedToGroup.AssignedToGroup
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_30 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_43 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_43 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_14 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_31 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_44 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'visible' attribute on AddressBookContactInput (id=ExternalOwner_Input) at AddressBookContactWidget.xml: line 12, column 225
    function visible_48 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (ActivitySearchCriteria.ExternalOwner))" != "" && true
    }
    
    property get ActivitySearchCriteria () : ActivitySearchCriteria {
      return getRequireValue("ActivitySearchCriteria", 0) as ActivitySearchCriteria
    }
    
    property set ActivitySearchCriteria ($arg :  ActivitySearchCriteria) {
      setRequireValue("ActivitySearchCriteria", 0, $arg)
    }
    
    property get externalContactSource () : gw.api.contact.ExternalContactSource {
      return getVariableValue("externalContactSource", 0) as gw.api.contact.ExternalContactSource
    }
    
    property set externalContactSource ($arg :  gw.api.contact.ExternalContactSource) {
      setVariableValue("externalContactSource", 0, $arg)
    }
    
    
  }
  
  
}