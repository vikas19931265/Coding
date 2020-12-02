package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/users/UserGroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserGroupsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/users/UserGroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserGroupsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_10 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_8 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 13, column 49
    function action_dest_11 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 10, column 49
    function action_dest_9 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Group = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Member_Cell) at UserGroupsLV.pcf: line 39, column 37
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Member = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Manager_Cell) at UserGroupsLV.pcf: line 45, column 38
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Manager = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at UserGroupsLV.pcf: line 52, column 47
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.LoadFactorType = (__VALUE_TO_SET as typekey.LoadFactorType)
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at UserGroupsLV.pcf: line 60, column 42
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=LoadFactor_Cell) at UserGroupsLV.pcf: line 60, column 42
    function validationExpression_33 () : java.lang.Object {
      return !(GroupUser.LoadFactor < 0 or GroupUser.LoadFactor > 100) ? null : DisplayKey.get("NVV.Admin.GroupBasics.AdminGroupDetails.Assignment.LoadFactor.OutOfRange")
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRange_15 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function valueRoot_14 () : java.lang.Object {
      return GroupUser
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function value_12 () : entity.Group {
      return GroupUser.Group
    }
    
    // 'value' attribute on BooleanRadioCell (id=Member_Cell) at UserGroupsLV.pcf: line 39, column 37
    function value_21 () : java.lang.Boolean {
      return GroupUser.Member
    }
    
    // 'value' attribute on BooleanRadioCell (id=Manager_Cell) at UserGroupsLV.pcf: line 45, column 38
    function value_25 () : java.lang.Boolean {
      return GroupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at UserGroupsLV.pcf: line 52, column 47
    function value_29 () : typekey.LoadFactorType {
      return GroupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at UserGroupsLV.pcf: line 60, column 42
    function value_34 () : java.lang.Integer {
      return GroupUser.LoadFactor
    }
    
    // 'value' attribute on TextCell (id=GroupUserWeightedWorkload_Cell) at UserGroupsLV.pcf: line 66, column 111
    function value_39 () : java.lang.Integer {
      return getWeightedWorkload(GroupUser)
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupCell (id=Group_Cell) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_17 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=GroupUserWeightedWorkload_Cell) at UserGroupsLV.pcf: line 66, column 111
    function visible_40 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get GroupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/users/UserGroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserGroupsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function conversionExpression_7 (PickedValue :  Group) : entity.GroupUser {
      var GU : GroupUser = null; if(User == null or !PickedValue.isMember(User?.ID)){GU = new GroupUser(); PickedValue.addToUsers(GU)}; return GU
    }
    
    // 'pickLocation' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function pickLocation_42 () : void {
      OrganizationGroupTreePopup.push()
    }
    
    // 'value' attribute on GroupCell (id=Group_Cell) at UserGroupsLV.pcf: line 31, column 35
    function sortValue_0 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Group
    }
    
    // 'value' attribute on BooleanRadioCell (id=Member_Cell) at UserGroupsLV.pcf: line 39, column 37
    function sortValue_1 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Member
    }
    
    // 'value' attribute on BooleanRadioCell (id=Manager_Cell) at UserGroupsLV.pcf: line 45, column 38
    function sortValue_2 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at UserGroupsLV.pcf: line 52, column 47
    function sortValue_3 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at UserGroupsLV.pcf: line 60, column 42
    function sortValue_4 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.LoadFactor
    }
    
    // 'value' attribute on TextCell (id=GroupUserWeightedWorkload_Cell) at UserGroupsLV.pcf: line 66, column 111
    function sortValue_5 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return getWeightedWorkload(GroupUser)
    }
    
    // 'toAdd' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function toAdd_43 (GroupUser :  entity.GroupUser) : void {
      gw.api.admin.GroupUserUtil.add(User,GroupUser)
    }
    
    // 'toRemove' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function toRemove_44 (GroupUser :  entity.GroupUser) : void {
      gw.api.assignment.workload.util.WorkloadUIHelper.checkCanRemoveGroup(GroupUser); gw.api.admin.GroupUserUtil.remove(User,GroupUser.Group)
    }
    
    // 'value' attribute on RowIterator at UserGroupsLV.pcf: line 22, column 38
    function value_45 () : entity.GroupUser[] {
      return User.AllGroupUsersAsArray
    }
    
    // 'visible' attribute on TextCell (id=GroupUserWeightedWorkload_Cell) at UserGroupsLV.pcf: line 66, column 111
    function visible_6 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    function getWeightedWorkload(gu : GroupUser) : java.lang.Integer {
      var result : java.lang.Integer = null
      if (gu.GroupUserWorkload != null) {
        result = gu.GroupUserWorkload.Workload
      }
      return result
    }
    
    
  }
  
  
}