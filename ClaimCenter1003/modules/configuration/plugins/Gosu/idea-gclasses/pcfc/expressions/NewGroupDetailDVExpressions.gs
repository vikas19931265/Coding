package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/newgroup/NewGroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewGroupDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/newgroup/NewGroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewGroupDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 10, column 49
    function action_16 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 13, column 49
    function action_18 () : void {
      OrganizationGroupTreePopup.push(Group.makeOrganizationSelection())
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 9, column 49
    function action_29 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 12, column 49
    function action_31 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_17 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_19 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination(Group.makeOrganizationSelection())
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 9, column 49
    function action_dest_30 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 12, column 49
    function action_dest_32 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'def' attribute on ListViewInput at NewGroupDetailDV.pcf: line 57, column 27
    function def_onEnter_49 (def :  pcf.GroupUsersLV) : void {
      def.onEnter(Group)
    }
    
    // 'def' attribute on ListViewInput at NewGroupDetailDV.pcf: line 80, column 64
    function def_onEnter_58 (def :  pcf.LocalizedValuesLV) : void {
      def.onEnter(Group, { "Name" }, { DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name") })
    }
    
    // 'def' attribute on ListViewInput at NewGroupDetailDV.pcf: line 57, column 27
    function def_refreshVariables_50 (def :  pcf.GroupUsersLV) : void {
      def.refreshVariables(Group)
    }
    
    // 'def' attribute on ListViewInput at NewGroupDetailDV.pcf: line 80, column 64
    function def_refreshVariables_59 (def :  pcf.LocalizedValuesLV) : void {
      def.refreshVariables(Group, { "Name" }, { DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name") })
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewGroupDetailDV.pcf: line 29, column 40
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.GroupType = (__VALUE_TO_SET as typekey.GroupType)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at NewGroupDetailDV.pcf: line 16, column 29
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.Parent = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.Supervisor = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.SecurityZone = (__VALUE_TO_SET as entity.SecurityZone)
    }
    
    // 'value' attribute on TextInput (id=LoadFactor_Input) at NewGroupDetailDV.pcf: line 73, column 40
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=NameKanji_Input) at NewGroupDetailDV.pcf: line 22, column 84
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      Group.NameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=Name_Input) at NewGroupDetailDV.pcf: line 16, column 29
    function label_0 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Admin.GroupDetail.BasicDV.NamePhonetic") : DisplayKey.get("Web.Admin.GroupDetail.BasicDV.Name")
    }
    
    // 'validationExpression' attribute on TextInput (id=LoadFactor_Input) at NewGroupDetailDV.pcf: line 73, column 40
    function validationExpression_51 () : java.lang.Object {
      return !(Group.LoadFactor < 0 or Group.LoadFactor > 100) ? null : DisplayKey.get("NVV.Admin.GroupBasics.AdminGroupDetails.Assignment.LoadFactor.OutOfRange")
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_23 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function valueRange_36 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function valueRange_45 () : java.lang.Object {
      return gw.api.database.Query.make(entity.SecurityZone).select()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at NewGroupDetailDV.pcf: line 16, column 29
    function valueRoot_3 () : java.lang.Object {
      return Group
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at NewGroupDetailDV.pcf: line 16, column 29
    function value_1 () : java.lang.String {
      return Group.Name
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewGroupDetailDV.pcf: line 29, column 40
    function value_12 () : typekey.GroupType {
      return Group.GroupType
    }
    
    // 'value' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function value_20 () : entity.Group {
      return Group.Parent
    }
    
    // 'value' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function value_33 () : entity.User {
      return Group.Supervisor
    }
    
    // 'value' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function value_42 () : entity.SecurityZone {
      return Group.SecurityZone
    }
    
    // 'value' attribute on TextInput (id=LoadFactor_Input) at NewGroupDetailDV.pcf: line 73, column 40
    function value_52 () : java.lang.Integer {
      return Group.LoadFactor
    }
    
    // 'value' attribute on TextInput (id=NameKanji_Input) at NewGroupDetailDV.pcf: line 22, column 84
    function value_7 () : java.lang.String {
      return Group.NameKanji
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_37 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_37 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function verifyValueRangeIsAllowedType_46 ($$arg :  entity.SecurityZone[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function verifyValueRangeIsAllowedType_46 ($$arg :  gw.api.database.IQueryBeanResult<entity.SecurityZone>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Parent_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=Supervisor_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_38 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at NewGroupDetailDV.pcf: line 52, column 42
    function verifyValueRange_47 () : void {
      var __valueRangeArg = gw.api.database.Query.make(entity.SecurityZone).select()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'visible' attribute on ListViewInput at NewGroupDetailDV.pcf: line 80, column 64
    function visible_57 () : java.lang.Boolean {
      return LanguageType.getTypeKeys(false).Count > 1
    }
    
    // 'visible' attribute on TextInput (id=NameKanji_Input) at NewGroupDetailDV.pcf: line 22, column 84
    function visible_6 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP
    }
    
    property get Group () : Group {
      return getRequireValue("Group", 0) as Group
    }
    
    property set Group ($arg :  Group) {
      setRequireValue("Group", 0, $arg)
    }
    
    
  }
  
  
}