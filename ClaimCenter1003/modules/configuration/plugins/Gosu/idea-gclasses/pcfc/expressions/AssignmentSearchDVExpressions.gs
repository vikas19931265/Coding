package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignmentSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignmentSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignmentSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 10, column 49
    function action_19 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 13, column 49
    function action_21 () : void {
      AssignmentOrgGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_20 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_22 () : pcf.api.Destination {
      return pcf.AssignmentOrgGroupTreePopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 42, column 58
    function def_onEnter_10 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter( new gw.api.name.SearchNameOwner(SearchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 42, column 58
    function def_onEnter_12 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter( new gw.api.name.SearchNameOwner(SearchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 126, column 146
    function def_onEnter_87 (def :  pcf.CCAddressBookSearchLocationInputSet) : void {
      def.onEnter(SearchCriteria.UserCriteria.Contact)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 129, column 207
    function def_onEnter_90 (def :  pcf.CCAddressBookSearchProximityAddressInputSet) : void {
      def.onEnter(SearchCriteria.UserCriteria.Contact, proximitySearchPageHelper, claim)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 133, column 41
    function def_onEnter_92 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 42, column 58
    function def_refreshVariables_11 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables( new gw.api.name.SearchNameOwner(SearchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 42, column 58
    function def_refreshVariables_13 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables( new gw.api.name.SearchNameOwner(SearchCriteria.UserCriteria.Contact))
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 126, column 146
    function def_refreshVariables_88 (def :  pcf.CCAddressBookSearchLocationInputSet) : void {
      def.refreshVariables(SearchCriteria.UserCriteria.Contact)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 129, column 207
    function def_refreshVariables_91 (def :  pcf.CCAddressBookSearchProximityAddressInputSet) : void {
      def.refreshVariables(SearchCriteria.UserCriteria.Contact, proximitySearchPageHelper, claim)
    }
    
    // 'def' attribute on InputSetRef at AssignmentSearchDV.pcf: line 133, column 41
    function def_refreshVariables_93 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignmentSearchDV.pcf: line 47, column 57
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.UserCriteria.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.CCUserSearchCriteria.Group = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.SearchType = (__VALUE_TO_SET as typekey.AssignmentSearchType)
    }
    
    // 'value' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.UserCriteria.Role = (__VALUE_TO_SET as entity.Role)
    }
    
    // 'value' attribute on RangeInput (id=AttributeName_Input) at AssignmentSearchDV.pcf: line 68, column 26
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.CCUserSearchCriteria.AttributeName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AttributeValue_Input) at AssignmentSearchDV.pcf: line 78, column 44
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.CCUserSearchCriteria.AttributeValue = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=AttributeState_Input) at AssignmentSearchDV.pcf: line 84, column 40
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.CCUserSearchCriteria.AttributeState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchDV.pcf: line 94, column 59
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.GroupCriteria.GroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchDV.pcf: line 100, column 86
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.GroupCriteria.GroupNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignmentSearchDV.pcf: line 109, column 64
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.QueueCriteria.QueueGroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupNameKanji_Input) at AssignmentSearchDV.pcf: line 115, column 86
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.QueueCriteria.QueueGroupNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at AssignmentSearchDV.pcf: line 120, column 59
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.QueueCriteria.QueueName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function editable_1 () : java.lang.Boolean {
      return AssignmentSearchTypes.Count > 1
    }
    
    // 'initialValue' attribute on Variable at AssignmentSearchDV.pcf: line 25, column 24
    function initialValue_0 () : String[] {
      return gw.api.admin.AdminUtil.getAttributeNames()?.toTypedArray()
    }
    
    // 'label' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchDV.pcf: line 94, column 59
    function label_56 () : java.lang.Object {
      return (gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP) ? DisplayKey.get("Web.Assignment.Search.GroupNamePhonetic") : DisplayKey.get("Web.Assignment.Search.GroupName")
    }
    
    // 'mode' attribute on InputSetRef at AssignmentSearchDV.pcf: line 42, column 58
    function mode_14 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_26 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function valueRange_35 () : java.lang.Object {
      return SearchCriteria.UserCriteria.getAllRoles()
    }
    
    // 'valueRange' attribute on RangeInput (id=AttributeName_Input) at AssignmentSearchDV.pcf: line 68, column 26
    function valueRange_42 () : java.lang.Object {
      return AttributeSource
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function valueRange_5 () : java.lang.Object {
      return AssignmentSearchTypes
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignmentSearchDV.pcf: line 47, column 57
    function valueRoot_17 () : java.lang.Object {
      return SearchCriteria.UserCriteria
    }
    
    // 'value' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function valueRoot_25 () : java.lang.Object {
      return SearchCriteria.CCUserSearchCriteria
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function valueRoot_4 () : java.lang.Object {
      return SearchCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchDV.pcf: line 94, column 59
    function valueRoot_59 () : java.lang.Object {
      return SearchCriteria.GroupCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignmentSearchDV.pcf: line 109, column 64
    function valueRoot_72 () : java.lang.Object {
      return SearchCriteria.QueueCriteria
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignmentSearchDV.pcf: line 47, column 57
    function value_15 () : java.lang.String {
      return SearchCriteria.UserCriteria.Username
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function value_2 () : typekey.AssignmentSearchType {
      return SearchCriteria.SearchType
    }
    
    // 'value' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function value_23 () : entity.Group {
      return SearchCriteria.CCUserSearchCriteria.Group
    }
    
    // 'value' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function value_32 () : entity.Role {
      return SearchCriteria.UserCriteria.Role
    }
    
    // 'value' attribute on RangeInput (id=AttributeName_Input) at AssignmentSearchDV.pcf: line 68, column 26
    function value_39 () : java.lang.String {
      return SearchCriteria.CCUserSearchCriteria.AttributeName
    }
    
    // 'value' attribute on TextInput (id=AttributeValue_Input) at AssignmentSearchDV.pcf: line 78, column 44
    function value_46 () : java.lang.Integer {
      return SearchCriteria.CCUserSearchCriteria.AttributeValue
    }
    
    // 'value' attribute on TypeKeyInput (id=AttributeState_Input) at AssignmentSearchDV.pcf: line 84, column 40
    function value_50 () : typekey.State {
      return SearchCriteria.CCUserSearchCriteria.AttributeState
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignmentSearchDV.pcf: line 94, column 59
    function value_57 () : java.lang.String {
      return SearchCriteria.GroupCriteria.GroupName
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchDV.pcf: line 100, column 86
    function value_63 () : java.lang.String {
      return SearchCriteria.GroupCriteria.GroupNameKanji
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignmentSearchDV.pcf: line 109, column 64
    function value_70 () : java.lang.String {
      return SearchCriteria.QueueCriteria.QueueGroupName
    }
    
    // 'value' attribute on TextInput (id=GroupNameKanji_Input) at AssignmentSearchDV.pcf: line 115, column 86
    function value_76 () : java.lang.String {
      return SearchCriteria.QueueCriteria.QueueGroupNameKanji
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at AssignmentSearchDV.pcf: line 120, column 59
    function value_81 () : java.lang.String {
      return SearchCriteria.QueueCriteria.QueueName
    }
    
    // 'valueRange' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_27 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function verifyValueRangeIsAllowedType_36 ($$arg :  entity.Role[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function verifyValueRangeIsAllowedType_36 ($$arg :  gw.api.database.IQueryBeanResult<entity.Role>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function verifyValueRangeIsAllowedType_36 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AttributeName_Input) at AssignmentSearchDV.pcf: line 68, column 26
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AttributeName_Input) at AssignmentSearchDV.pcf: line 68, column 26
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function verifyValueRangeIsAllowedType_6 ($$arg :  typekey.AssignmentSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=Group_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_28 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=UserRole_Input) at AssignmentSearchDV.pcf: line 60, column 36
    function verifyValueRange_37 () : void {
      var __valueRangeArg = SearchCriteria.UserCriteria.getAllRoles()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_36(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=AttributeName_Input) at AssignmentSearchDV.pcf: line 68, column 26
    function verifyValueRange_44 () : void {
      var __valueRangeArg = AttributeSource
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at AssignmentSearchDV.pcf: line 34, column 50
    function verifyValueRange_7 () : void {
      var __valueRangeArg = AssignmentSearchTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at AssignmentSearchDV.pcf: line 72, column 79
    function visible_54 () : java.lang.Boolean {
      return SearchCriteria.CCUserSearchCriteria.AttributeName != null
    }
    
    // 'visible' attribute on InputSet at AssignmentSearchDV.pcf: line 39, column 56
    function visible_55 () : java.lang.Boolean {
      return SearchCriteria.SearchType == TC_USER
    }
    
    // 'visible' attribute on TextInput (id=GroupCriteriaNameKanji_Input) at AssignmentSearchDV.pcf: line 100, column 86
    function visible_62 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.CurrentLocaleType == LocaleType.TC_JA_JP
    }
    
    // 'visible' attribute on InputSet at AssignmentSearchDV.pcf: line 89, column 57
    function visible_68 () : java.lang.Boolean {
      return SearchCriteria.SearchType == TC_GROUP
    }
    
    // 'visible' attribute on InputSet at AssignmentSearchDV.pcf: line 104, column 57
    function visible_85 () : java.lang.Boolean {
      return SearchCriteria.SearchType == TC_QUEUE
    }
    
    // 'visible' attribute on InputSetRef at AssignmentSearchDV.pcf: line 126, column 146
    function visible_86 () : java.lang.Boolean {
      return AssignmentSelectionTypeHolder.SelectionType == AssignmentSelectionType.TC_FROMSEARCH and SearchCriteria.SearchType == TC_USER
    }
    
    // 'visible' attribute on InputSetRef at AssignmentSearchDV.pcf: line 129, column 207
    function visible_89 () : java.lang.Boolean {
      return AssignmentSelectionTypeHolder.SelectionType == AssignmentSelectionType.TC_FROMPROXIMITYSEARCH and SearchCriteria.SearchType == TC_USER and proximitySearchPageHelper.useGeocodeUILocally()
    }
    
    property get AssignmentSearchTypes () : AssignmentSearchType[] {
      return getRequireValue("AssignmentSearchTypes", 0) as AssignmentSearchType[]
    }
    
    property set AssignmentSearchTypes ($arg :  AssignmentSearchType[]) {
      setRequireValue("AssignmentSearchTypes", 0, $arg)
    }
    
    property get AssignmentSelectionTypeHolder () : gw.api.assignment.AssignmentSelectionTypeHolder {
      return getRequireValue("AssignmentSelectionTypeHolder", 0) as gw.api.assignment.AssignmentSelectionTypeHolder
    }
    
    property set AssignmentSelectionTypeHolder ($arg :  gw.api.assignment.AssignmentSelectionTypeHolder) {
      setRequireValue("AssignmentSelectionTypeHolder", 0, $arg)
    }
    
    property get AttributeSource () : String[] {
      return getVariableValue("AttributeSource", 0) as String[]
    }
    
    property set AttributeSource ($arg :  String[]) {
      setVariableValue("AttributeSource", 0, $arg)
    }
    
    property get SearchCriteria () : gw.api.assignment.CCAssignmentSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as gw.api.assignment.CCAssignmentSearchCriteria
    }
    
    property set SearchCriteria ($arg :  gw.api.assignment.CCAssignmentSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get proximitySearchPageHelper () : gw.api.contact.CCProximitySearchPageHelper {
      return getRequireValue("proximitySearchPageHelper", 0) as gw.api.contact.CCProximitySearchPageHelper
    }
    
    property set proximitySearchPageHelper ($arg :  gw.api.contact.CCProximitySearchPageHelper) {
      setRequireValue("proximitySearchPageHelper", 0, $arg)
    }
    
    
  }
  
  
}