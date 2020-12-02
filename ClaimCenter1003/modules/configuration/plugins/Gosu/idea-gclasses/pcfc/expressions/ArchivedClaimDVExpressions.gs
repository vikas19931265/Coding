package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/archive/ArchivedClaimDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchivedClaimDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/archive/ArchivedClaimDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchivedClaimDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_26 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_28 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_27 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_29 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at ArchivedClaimDV.pcf: line 80, column 39
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArchivedClaimInfo.Comment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ArchivedClaimDV.pcf: line 16, column 34
    function initialValue_0 () : java.lang.String[] {
      return ClaimInfo.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at ArchivedClaimDV.pcf: line 20, column 46
    function initialValue_1 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_32 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ArchivedClaimDV.pcf: line 55, column 57
    function valueRoot_21 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Input) at ArchivedClaimDV.pcf: line 60, column 57
    function valueRoot_24 () : java.lang.Object {
      return ClaimInfo.Adjuster.Contact
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ArchivedClaimDV.pcf: line 26, column 40
    function valueRoot_3 () : java.lang.Object {
      return ClaimInfo
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at ArchivedClaimDV.pcf: line 80, column 39
    function valueRoot_43 () : java.lang.Object {
      return ArchivedClaimInfo
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ArchivedClaimDV.pcf: line 41, column 42
    function value_11 () : entity.LocationInfo {
      return ClaimInfo.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at ArchivedClaimDV.pcf: line 47, column 41
    function value_14 () : entity.ContactInfo {
      return ClaimInfo.Insured
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at ArchivedClaimDV.pcf: line 51, column 41
    function value_17 () : java.lang.String {
      return ClaimInfo.PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at ArchivedClaimDV.pcf: line 26, column 40
    function value_2 () : java.lang.String {
      return ClaimInfo.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ArchivedClaimDV.pcf: line 55, column 57
    function value_20 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Input) at ArchivedClaimDV.pcf: line 60, column 57
    function value_23 () : java.lang.String {
      return ClaimInfo.Adjuster.Contact.DisplayName
    }
    
    // 'value' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 7, column 52
    function value_30 () : entity.Group {
      return ClaimInfo.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ArchivedClaimDV.pcf: line 69, column 43
    function value_38 () : typekey.ArchiveState {
      return ClaimInfo.ArchiveState
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at ArchivedClaimDV.pcf: line 80, column 39
    function value_41 () : java.lang.String {
      return ArchivedClaimInfo.Comment
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ArchivedClaimDV.pcf: line 31, column 37
    function value_5 () : java.util.Date {
      return ClaimInfo.LossDate
    }
    
    // 'value' attribute on DateInput (id=NoticeDate_Input) at ArchivedClaimDV.pcf: line 36, column 39
    function value_8 () : java.util.Date {
      return ClaimInfo.NoticeDate
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_33 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_33 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_34 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    property get ArchivedClaimInfo () : ArchivedClaimInfo {
      return getRequireValue("ArchivedClaimInfo", 0) as ArchivedClaimInfo
    }
    
    property set ArchivedClaimInfo ($arg :  ArchivedClaimInfo) {
      setRequireValue("ArchivedClaimInfo", 0, $arg)
    }
    
    property get ClaimInfo () : ClaimInfo {
      return getRequireValue("ClaimInfo", 0) as ClaimInfo
    }
    
    property set ClaimInfo ($arg :  ClaimInfo) {
      setRequireValue("ClaimInfo", 0, $arg)
    }
    
    property get claimantList () : java.lang.String[] {
      return getVariableValue("claimantList", 0) as java.lang.String[]
    }
    
    property set claimantList ($arg :  java.lang.String[]) {
      setVariableValue("claimantList", 0, $arg)
    }
    
    property get claimantUIHelper () : gw.api.claim.ClaimantsUIHelper {
      return getVariableValue("claimantUIHelper", 0) as gw.api.claim.ClaimantsUIHelper
    }
    
    property set claimantUIHelper ($arg :  gw.api.claim.ClaimantsUIHelper) {
      setVariableValue("claimantUIHelper", 0, $arg)
    }
    
    
  }
  
  
}