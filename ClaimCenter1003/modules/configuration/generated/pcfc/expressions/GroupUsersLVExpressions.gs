package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.lang.Integer
@javax.annotation.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupUsersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at GroupUsersLV.pcf: line 23, column 38
    function conversionExpression_12 (PickedValue :  User) : entity.GroupUser {
      var GU = new GroupUser(); GU.User = PickedValue; return GU
    }
    
    // 'label' attribute on CheckBoxCell (id=GroupUsers_Active_Cell) at GroupUsersLV.pcf: line 46, column 53
    function label_2 () : java.lang.Object {
      return DisplayKey.get("LV.Admin.EditableGroupUserList.GroupUsers.Active")
    }
    
    // 'pickLocation' attribute on RowIterator at GroupUsersLV.pcf: line 23, column 38
    function pickLocation_78 () : void {
      UserSearchPopup.push(Group.Organization)
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at GroupUsersLV.pcf: line 34, column 36
    function sortValue_0 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Member_Cell) at GroupUsersLV.pcf: line 40, column 37
    function sortValue_1 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Member
    }
    
    // 'value' attribute on UserCell (id=BackupUser_Cell) at GroupUsersLV.pcf: line 83, column 36
    function sortValue_10 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User.BackupUser
    }
    
    // 'value' attribute on TypeKeyCell (id=ProximitySearchStatus_Cell) at GroupUsersLV.pcf: line 88, column 54
    function sortValue_11 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return gw.api.geocode.GeocodeScriptHelper.categorizeGeocodeStatus(GroupUser.User.Contact.PrimaryAddress.GeocodeStatus)
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Active_Cell) at GroupUsersLV.pcf: line 46, column 53
    function sortValue_3 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User.Credential.Active
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Manager_Cell) at GroupUsersLV.pcf: line 52, column 38
    function sortValue_4 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=GroupUsers_LoadFactorType_Cell) at GroupUsersLV.pcf: line 58, column 47
    function sortValue_5 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 64, column 42
    function sortValue_6 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.LoadFactor
    }
    
    // 'value' attribute on TextCell (id=WeightedWorkload_Cell) at GroupUsersLV.pcf: line 70, column 111
    function sortValue_7 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return getUserWorkload(GroupUser)
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at GroupUsersLV.pcf: line 76, column 51
    function sortValue_9 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User.VacationStatus
    }
    
    // 'toAdd' attribute on RowIterator at GroupUsersLV.pcf: line 23, column 38
    function toAdd_79 (GroupUser :  entity.GroupUser) : void {
      Group.addToUsers(GroupUser)
    }
    
    // 'toRemove' attribute on RowIterator at GroupUsersLV.pcf: line 23, column 38
    function toRemove_80 (GroupUser :  entity.GroupUser) : void {
      gw.api.assignment.workload.util.WorkloadUIHelper.checkCanRemoveGroup(GroupUser); Group.removeFromUsers(GroupUser)
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=GroupUsersLV) at GroupUsersLV.pcf: line 7, column 318
    function validationExpression_82 () : java.lang.Object {
      return Group.Users.partition(\ g -> g.User.ID).filterByValues(\ l -> l.Count > 1).Empty == false ? DisplayKey.get("JSP.GroupDetail.Group.UserAlreadyInGroup", Group.Users.partition(\ g -> g.User.ID).filterByValues(\ l -> l.Count > 1).Values.first().first().User) : null
    }
    
    // 'value' attribute on RowIterator at GroupUsersLV.pcf: line 23, column 38
    function value_81 () : entity.GroupUser[] {
      return Group.Users
    }
    
    // 'visible' attribute on TextCell (id=WeightedWorkload_Cell) at GroupUsersLV.pcf: line 70, column 111
    function visible_8 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get Group () : Group {
      return getRequireValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setRequireValue("Group", 0, $arg)
    }
    
    
    function getUserWorkload(guser : GroupUser) : Integer {
      var result : Integer = null
      if (guser.GroupUserWorkload != null) {
        result = guser.GroupUserWorkload.Workload
      }
      return result
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/groups/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 9, column 49
    function action_13 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 12, column 49
    function action_15 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function action_17 () : void {
      UserDetailPage.go(GroupUser.User)
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at GroupUsersLV.pcf: line 34, column 36
    function action_25 () : void {
      UserDetailPage.go(GroupUser.User)
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 9, column 49
    function action_59 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 12, column 49
    function action_61 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_14 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_16 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function action_dest_18 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(GroupUser.User)
    }
    
    // 'action' attribute on UserCell (id=GroupUsers_User_Cell) at GroupUsersLV.pcf: line 34, column 36
    function action_dest_26 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(GroupUser.User)
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_60 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_62 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Member_Cell) at GroupUsersLV.pcf: line 40, column 37
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Member = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Active_Cell) at GroupUsersLV.pcf: line 46, column 53
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User.Credential.Active = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Manager_Cell) at GroupUsersLV.pcf: line 52, column 38
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.Manager = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=GroupUsers_LoadFactorType_Cell) at GroupUsersLV.pcf: line 58, column 47
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.LoadFactorType = (__VALUE_TO_SET as typekey.LoadFactorType)
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 64, column 42
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at GroupUsersLV.pcf: line 76, column 51
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User.VacationStatus = (__VALUE_TO_SET as typekey.VacationStatusType)
    }
    
    // 'value' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User.BackupUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'editable' attribute on Row at GroupUsersLV.pcf: line 25, column 99
    function editable_77 () : java.lang.Boolean {
      return not GroupUser.User.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'label' attribute on CheckBoxCell (id=GroupUsers_Active_Cell) at GroupUsersLV.pcf: line 46, column 53
    function label_34 () : java.lang.Object {
      return DisplayKey.get("LV.Admin.EditableGroupUserList.GroupUsers.Active")
    }
    
    // 'validationExpression' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function validationExpression_63 () : java.lang.Object {
      return gw.api.claimparties.ClaimUserUtil.validateBackupUser(GroupUser.User.BackupUser)
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_22 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function valueRoot_21 () : java.lang.Object {
      return GroupUser
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Active_Cell) at GroupUsersLV.pcf: line 46, column 53
    function valueRoot_37 () : java.lang.Object {
      return GroupUser.User.Credential
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at GroupUsersLV.pcf: line 76, column 51
    function valueRoot_57 () : java.lang.Object {
      return GroupUser.User
    }
    
    // 'value' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function value_19 () : entity.User {
      return GroupUser.User
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Member_Cell) at GroupUsersLV.pcf: line 40, column 37
    function value_30 () : java.lang.Boolean {
      return GroupUser.Member
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Active_Cell) at GroupUsersLV.pcf: line 46, column 53
    function value_35 () : java.lang.Boolean {
      return GroupUser.User.Credential.Active
    }
    
    // 'value' attribute on CheckBoxCell (id=GroupUsers_Manager_Cell) at GroupUsersLV.pcf: line 52, column 38
    function value_40 () : java.lang.Boolean {
      return GroupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=GroupUsers_LoadFactorType_Cell) at GroupUsersLV.pcf: line 58, column 47
    function value_44 () : typekey.LoadFactorType {
      return GroupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 64, column 42
    function value_48 () : java.lang.Integer {
      return GroupUser.LoadFactor
    }
    
    // 'value' attribute on TextCell (id=WeightedWorkload_Cell) at GroupUsersLV.pcf: line 70, column 111
    function value_52 () : java.lang.Integer {
      return getUserWorkload(GroupUser)
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at GroupUsersLV.pcf: line 76, column 51
    function value_55 () : typekey.VacationStatusType {
      return GroupUser.User.VacationStatus
    }
    
    // 'value' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function value_64 () : entity.User {
      return GroupUser.User.BackupUser
    }
    
    // 'value' attribute on TypeKeyCell (id=ProximitySearchStatus_Cell) at GroupUsersLV.pcf: line 88, column 54
    function value_75 () : typekey.ProximitySearchStatus {
      return gw.api.geocode.GeocodeScriptHelper.categorizeGeocodeStatus(GroupUser.User.Contact.PrimaryAddress.GeocodeStatus)
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_68 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_68 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_68 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=GroupUsers_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_24 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_69 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_68(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=WeightedWorkload_Cell) at GroupUsersLV.pcf: line 70, column 111
    function visible_53 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get GroupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}