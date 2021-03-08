package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/preferences/UserDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/preferences/UserDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 9, column 49
    function action_40 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 12, column 49
    function action_42 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 9, column 49
    function action_dest_41 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 12, column 49
    function action_dest_43 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 20, column 54
    function def_onEnter_1 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(UserOwner)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 20, column 54
    function def_onEnter_3 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(UserOwner)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 20, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(UserOwner)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 20, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(UserOwner)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 33, column 41
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Active_Input) at UserDetailInputSet.pcf: line 39, column 39
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Active = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AccountLocked_Input) at UserDetailInputSet.pcf: line 44, column 35
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.AccountLocked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=VacationStatus_Input) at UserDetailInputSet.pcf: line 51, column 47
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.VacationStatus = (__VALUE_TO_SET as typekey.VacationStatusType)
    }
    
    // 'value' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.BackupUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=SessionTimeout_Input) at UserDetailInputSet.pcf: line 65, column 38
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.SessionTimeoutSecs = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 26, column 41
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.UserName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=Active_Input) at UserDetailInputSet.pcf: line 39, column 39
    function editable_26 () : java.lang.Boolean {
      return User.Credential.canUpdateActive()
    }
    
    // 'initialValue' attribute on Variable at UserDetailInputSet.pcf: line 16, column 46
    function initialValue_0 () : gw.api.name.PersonNameDelegate {
      return new gw.api.name.PersonNameDelegate(User.Contact)
    }
    
    // 'mode' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 20, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'required' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 33, column 41
    function required_10 () : java.lang.Boolean {
      return User.New
    }
    
    // 'validationExpression' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function validationExpression_44 () : java.lang.Object {
      return gw.api.claimparties.ClaimUserUtil.validateBackupUser(User.BackupUser)
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function valueRange_48 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on BooleanRadioInput (id=AccountLocked_Input) at UserDetailInputSet.pcf: line 44, column 35
    function valueRoot_34 () : java.lang.Object {
      return User
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 26, column 41
    function valueRoot_8 () : java.lang.Object {
      return User.Credential
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 33, column 41
    function value_11 () : java.lang.String {
      return User.Credential.Password
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 33, column 41
    function value_14 () : java.lang.Object {
      return User.Credential.Password
    }
    
    // 'value' attribute on BooleanRadioInput (id=Active_Input) at UserDetailInputSet.pcf: line 39, column 39
    function value_27 () : java.lang.Boolean {
      return User.Credential.Active
    }
    
    // 'value' attribute on BooleanRadioInput (id=AccountLocked_Input) at UserDetailInputSet.pcf: line 44, column 35
    function value_32 () : java.lang.Boolean {
      return User.AccountLocked
    }
    
    // 'value' attribute on TypeKeyInput (id=VacationStatus_Input) at UserDetailInputSet.pcf: line 51, column 47
    function value_36 () : typekey.VacationStatusType {
      return User.VacationStatus
    }
    
    // 'value' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function value_45 () : entity.User {
      return User.BackupUser
    }
    
    // 'value' attribute on TextInput (id=SessionTimeout_Input) at UserDetailInputSet.pcf: line 65, column 38
    function value_56 () : java.lang.Integer {
      return User.SessionTimeoutSecs
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 26, column 41
    function value_6 () : java.lang.String {
      return User.Credential.UserName
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_49 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_49 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_49 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=BackupUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_50 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_49(__valueRangeArg)
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    property get UserOwner () : gw.api.name.NameOwner {
      return getRequireValue("UserOwner", 0) as gw.api.name.NameOwner
    }
    
    property set UserOwner ($arg :  gw.api.name.NameOwner) {
      setRequireValue("UserOwner", 0, $arg)
    }
    
    property get name () : gw.api.name.PersonNameDelegate {
      return getVariableValue("name", 0) as gw.api.name.PersonNameDelegate
    }
    
    property set name ($arg :  gw.api.name.PersonNameDelegate) {
      setVariableValue("name", 0, $arg)
    }
    
    
  }
  
  
}