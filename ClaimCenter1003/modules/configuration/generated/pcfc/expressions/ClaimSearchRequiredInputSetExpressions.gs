package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSearchRequiredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSearchRequiredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_28 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_30 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 9, column 49
    function action_50 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 12, column 49
    function action_52 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_66 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_68 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_29 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_31 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 9, column 49
    function action_dest_51 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 12, column 49
    function action_dest_53 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_dest_67 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_dest_69 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'available' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function available_32 () : java.lang.Boolean {
      return liveClaimFlag
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 44, column 54
    function def_onEnter_14 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 44, column 54
    function def_onEnter_16 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 47, column 54
    function def_onEnter_19 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 47, column 54
    function def_onEnter_21 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 44, column 54
    function def_refreshVariables_15 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 44, column 54
    function def_refreshVariables_17 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 47, column 54
    function def_refreshVariables_20 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 47, column 54
    function def_refreshVariables_22 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'value' attribute on TypeKeyInput (id=SearchFor_Input) at ClaimSearchRequiredInputSet.pcf: line 41, column 54
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameSearchType = (__VALUE_TO_SET as typekey.ClaimSearchNameSearchType)
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 26, column 48
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ClaimSearchRequiredInputSet.pcf: line 53, column 55
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameCriteria.TaxId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AssignedToGroup.AssignedToGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups_Input) at ClaimSearchRequiredInputSet.pcf: line 67, column 69
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AssignedToGroup.IncludeSubGroups = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AssignedToUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 32, column 49
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.CreatedByUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=VinNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 101, column 46
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.vinNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSearchRequiredInputSet.pcf: line 108, column 49
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.licensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=SearchFor_Input) at ClaimSearchRequiredInputSet.pcf: line 41, column 54
    function filter_12 (VALUE :  typekey.ClaimSearchNameSearchType, VALUES :  typekey.ClaimSearchNameSearchType[]) : java.lang.Boolean {
      return liveClaimFlag or gw.api.system.PLConfigParameters.PersonalDataDestructionEnabled.Value or VALUE.hasCategory(ClaimSearchType.TC_ARCHIVED)
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchRequiredInputSet.pcf: line 18, column 23
    function initialValue_0 () : boolean {
      return ClaimSearchCriteria.ClaimSearchType == ClaimSearchType.TC_ACTIVE
    }
    
    // 'mode' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 44, column 54
    function mode_18 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_36 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function valueRange_58 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function valueRange_86 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ClaimSearchRequiredInputSet.pcf: line 53, column 55
    function valueRoot_26 () : java.lang.Object {
      return ClaimSearchCriteria.NameCriteria
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 26, column 48
    function valueRoot_3 () : java.lang.Object {
      return ClaimSearchCriteria
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRoot_35 () : java.lang.Object {
      return ClaimSearchCriteria.AssignedToGroup
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 26, column 48
    function value_1 () : java.lang.String {
      return ClaimSearchCriteria.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ClaimSearchRequiredInputSet.pcf: line 53, column 55
    function value_24 () : java.lang.String {
      return ClaimSearchCriteria.NameCriteria.TaxId
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function value_33 () : entity.Group {
      return ClaimSearchCriteria.AssignedToGroup.AssignedToGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups_Input) at ClaimSearchRequiredInputSet.pcf: line 67, column 69
    function value_45 () : java.lang.Boolean {
      return ClaimSearchCriteria.AssignedToGroup.IncludeSubGroups
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 32, column 49
    function value_5 () : java.lang.String {
      return ClaimSearchCriteria.PolicyNumber
    }
    
    // 'value' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function value_55 () : entity.User {
      return ClaimSearchCriteria.AssignedToUser
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function value_71 () : entity.User {
      return ClaimSearchCriteria.CreatedByUser
    }
    
    // 'value' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function value_83 () : entity.Catastrophe {
      return ClaimSearchCriteria.Catastrophe
    }
    
    // 'value' attribute on TypeKeyInput (id=SearchFor_Input) at ClaimSearchRequiredInputSet.pcf: line 41, column 54
    function value_9 () : typekey.ClaimSearchNameSearchType {
      return ClaimSearchCriteria.NameSearchType
    }
    
    // 'value' attribute on TextInput (id=VinNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 101, column 46
    function value_92 () : java.lang.String {
      return ClaimSearchCriteria.vinNumber
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSearchRequiredInputSet.pcf: line 108, column 49
    function value_98 () : java.lang.String {
      return ClaimSearchCriteria.licensePlate
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_37 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_37 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_59 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_59 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_59 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_75 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_75 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_75 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function verifyValueRangeIsAllowedType_87 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function verifyValueRangeIsAllowedType_87 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function verifyValueRangeIsAllowedType_87 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_38 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_60 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_59(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_76 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_75(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber_Input) at ClaimSearchRequiredInputSet.pcf: line 94, column 39
    function verifyValueRange_88 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_87(__valueRangeArg)
    }
    
    property get ClaimSearchCriteria () : ClaimSearchCriteria {
      return getRequireValue("ClaimSearchCriteria", 0) as ClaimSearchCriteria
    }
    
    property set ClaimSearchCriteria ($arg :  ClaimSearchCriteria) {
      setRequireValue("ClaimSearchCriteria", 0, $arg)
    }
    
    property get liveClaimFlag () : boolean {
      return getVariableValue("liveClaimFlag", 0) as java.lang.Boolean
    }
    
    property set liveClaimFlag ($arg :  boolean) {
      setVariableValue("liveClaimFlag", 0, $arg)
    }
    
    
  }
  
  
}