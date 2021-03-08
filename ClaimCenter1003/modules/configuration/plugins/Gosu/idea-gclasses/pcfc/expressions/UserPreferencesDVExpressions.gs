package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/preferences/UserPreferencesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPreferencesDVExpressions {
  @javax.annotation.Generated("config/web/pcf/workspace/preferences/UserPreferencesDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPreferencesDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=GlobalizationPreferences) at UserPreferencesDV.pcf: line 32, column 40
    function def_onEnter_20 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on InputSetRef (id=GlobalizationPreferences) at UserPreferencesDV.pcf: line 32, column 40
    function def_refreshVariables_21 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(User)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPreferencesDV.pcf: line 20, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.UserSettings.StartupPage = (__VALUE_TO_SET as typekey.StartupPage)
    }
    
    // 'value' attribute on TextInput (id=NumClaims_Input) at UserPreferencesDV.pcf: line 38, column 40
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.UserSettings.NumOpenClaims = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function valueRange_16 () : java.lang.Object {
      return User.VisibleStartupPages
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function valueRoot_15 () : java.lang.Object {
      return User.UserSettings
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPreferencesDV.pcf: line 20, column 43
    function valueRoot_2 () : java.lang.Object {
      return User.Credential
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPreferencesDV.pcf: line 20, column 43
    function value_0 () : java.lang.String {
      return User.Credential.Password
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function value_13 () : typekey.StartupPage {
      return User.UserSettings.StartupPage
    }
    
    // 'value' attribute on TextInput (id=NumClaims_Input) at UserPreferencesDV.pcf: line 38, column 40
    function value_22 () : java.lang.Integer {
      return User.UserSettings.NumOpenClaims
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPreferencesDV.pcf: line 20, column 43
    function value_3 () : java.lang.Object {
      return User.Credential.Password
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function verifyValueRangeIsAllowedType_17 ($$arg :  typekey.StartupPage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPreferencesDV.pcf: line 29, column 42
    function verifyValueRange_18 () : void {
      var __valueRangeArg = User.VisibleStartupPages
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    
  }
  
  
}