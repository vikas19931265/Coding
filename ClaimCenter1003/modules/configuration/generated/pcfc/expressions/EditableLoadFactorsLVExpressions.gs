package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/loadandvacation/EditableLoadFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableLoadFactorsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/loadandvacation/EditableLoadFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableLoadFactorsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on UserCell (id=LoadFactor_User_Cell) at EditableLoadFactorsLV.pcf: line 22, column 36
    function sortValue_0 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at EditableLoadFactorsLV.pcf: line 29, column 42
    function sortValue_1 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.LoadFactor
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at EditableLoadFactorsLV.pcf: line 35, column 51
    function sortValue_2 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User.VacationStatus
    }
    
    // 'value' attribute on UserCell (id=BackupUser_Cell) at EditableLoadFactorsLV.pcf: line 42, column 36
    function sortValue_3 (GroupUser :  entity.GroupUser) : java.lang.Object {
      return GroupUser.User.BackupUser
    }
    
    // 'value' attribute on RowIterator at EditableLoadFactorsLV.pcf: line 15, column 38
    function value_40 () : entity.GroupUser[] {
      return GroupUserList
    }
    
    property get GroupUserList () : GroupUser[] {
      return getRequireValue("GroupUserList", 0) as GroupUser[]
    }
    
    property set GroupUserList ($arg :  GroupUser[]) {
      setRequireValue("GroupUserList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/loadandvacation/EditableLoadFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableLoadFactorsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 9, column 49
    function action_24 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 12, column 49
    function action_26 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 9, column 49
    function action_4 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 12, column 49
    function action_6 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_25 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_27 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at EditableLoadFactorsLV.pcf: line 29, column 42
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at EditableLoadFactorsLV.pcf: line 35, column 51
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User.VacationStatus = (__VALUE_TO_SET as typekey.VacationStatusType)
    }
    
    // 'value' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      GroupUser.User.BackupUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'validationExpression' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function validationExpression_28 () : java.lang.Object {
      return gw.api.claimparties.ClaimUserUtil.validateBackupUser(GroupUser.User.BackupUser)
    }
    
    // 'valueRange' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_10 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at EditableLoadFactorsLV.pcf: line 35, column 51
    function valueRoot_22 () : java.lang.Object {
      return GroupUser.User
    }
    
    // 'value' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function valueRoot_9 () : java.lang.Object {
      return GroupUser
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at EditableLoadFactorsLV.pcf: line 29, column 42
    function value_16 () : java.lang.Integer {
      return GroupUser.LoadFactor
    }
    
    // 'value' attribute on TypeKeyCell (id=VacationStatus_Cell) at EditableLoadFactorsLV.pcf: line 35, column 51
    function value_20 () : typekey.VacationStatusType {
      return GroupUser.User.VacationStatus
    }
    
    // 'value' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function value_29 () : entity.User {
      return GroupUser.User.BackupUser
    }
    
    // 'value' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function value_8 () : entity.User {
      return GroupUser.User
    }
    
    // 'valueRange' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_11 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_33 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_33 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=LoadFactor_User_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_12 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserCell (id=BackupUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_34 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    property get GroupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}