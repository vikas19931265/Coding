package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/vacationstatus/UserVacationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserVacationDVExpressions {
  @javax.annotation.Generated("config/web/pcf/workspace/vacationstatus/UserVacationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserVacationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 9, column 49
    function action_4 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 12, column 49
    function action_6 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 9, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 12, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'value' attribute on TypeKeyInput (id=VacationStatus_Input) at UserVacationDV.pcf: line 18, column 49
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.VacationStatus = (__VALUE_TO_SET as typekey.VacationStatusType)
    }
    
    // 'value' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.BackupUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'validationExpression' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function validationExpression_8 () : java.lang.Object {
      return gw.api.claimparties.ClaimUserUtil.validateBackupUser(User.BackupUser)
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function valueRange_12 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TypeKeyInput (id=VacationStatus_Input) at UserVacationDV.pcf: line 18, column 49
    function valueRoot_2 () : java.lang.Object {
      return User
    }
    
    // 'value' attribute on TypeKeyInput (id=VacationStatus_Input) at UserVacationDV.pcf: line 18, column 49
    function value_0 () : typekey.VacationStatusType {
      return User.VacationStatus
    }
    
    // 'value' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function value_9 () : entity.User {
      return User.BackupUser
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_14 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    
  }
  
  
}