package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/checks/PaymentSearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentSearchRequiredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/checks/PaymentSearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentSearchRequiredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 9, column 49
    function action_21 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 12, column 49
    function action_23 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_34 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_36 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_4 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_6 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 9, column 49
    function action_dest_22 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 12, column 49
    function action_dest_24 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 9, column 49
    function action_dest_35 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 12, column 49
    function action_dest_37 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 10, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 13, column 49
    function action_dest_7 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 58, column 54
    function def_onEnter_55 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 58, column 54
    function def_onEnter_57 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 61, column 54
    function def_onEnter_60 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 61, column 54
    function def_onEnter_62 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 58, column 54
    function def_refreshVariables_56 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 58, column 54
    function def_refreshVariables_58 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 61, column 54
    function def_refreshVariables_61 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'def' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 61, column 54
    function def_refreshVariables_63 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(PaymentSearchCriteria.NameCriteria) { :NameLabelType = gw.api.name.SearchNameOwner.PAYEE } )
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 18, column 50
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups_Input) at PaymentSearchRequiredInputSet.pcf: line 29, column 71
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.ApprovedByGroup.IncludeSubGroups = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.ApprovedByUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.CreatedByUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=CheckNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 49, column 50
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.CheckNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=InvoiceNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 55, column 52
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.InvoiceNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at PaymentSearchRequiredInputSet.pcf: line 67, column 57
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.NameCriteria.TaxId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.ApprovedByGroup.AssignedToGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'mode' attribute on InputSetRef at PaymentSearchRequiredInputSet.pcf: line 58, column 54
    function mode_59 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRange_11 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function valueRange_28 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function valueRoot_10 () : java.lang.Object {
      return PaymentSearchCriteria.ApprovedByGroup
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 18, column 50
    function valueRoot_2 () : java.lang.Object {
      return PaymentSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at PaymentSearchRequiredInputSet.pcf: line 67, column 57
    function valueRoot_67 () : java.lang.Object {
      return PaymentSearchCriteria.NameCriteria
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 18, column 50
    function value_0 () : java.lang.String {
      return PaymentSearchCriteria.ClaimNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups_Input) at PaymentSearchRequiredInputSet.pcf: line 29, column 71
    function value_17 () : java.lang.Boolean {
      return PaymentSearchCriteria.ApprovedByGroup.IncludeSubGroups
    }
    
    // 'value' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function value_25 () : entity.User {
      return PaymentSearchCriteria.ApprovedByUser
    }
    
    // 'value' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function value_38 () : entity.User {
      return PaymentSearchCriteria.CreatedByUser
    }
    
    // 'value' attribute on TextInput (id=CheckNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 49, column 50
    function value_47 () : java.lang.String {
      return PaymentSearchCriteria.CheckNumber
    }
    
    // 'value' attribute on TextInput (id=InvoiceNumber_Input) at PaymentSearchRequiredInputSet.pcf: line 55, column 52
    function value_51 () : java.lang.String {
      return PaymentSearchCriteria.InvoiceNumber
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at PaymentSearchRequiredInputSet.pcf: line 67, column 57
    function value_65 () : java.lang.String {
      return PaymentSearchCriteria.NameCriteria.TaxId
    }
    
    // 'value' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function value_8 () : entity.Group {
      return PaymentSearchCriteria.ApprovedByGroup.AssignedToGroup
    }
    
    // 'valueRange' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_29 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_29 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_42 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_42 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_42 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=ApprovedByGroup_Input) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_13 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=ApprovedByUser_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_30 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy_Input) at UserWidget.xml: line 6, column 85
    function verifyValueRange_43 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_42(__valueRangeArg)
    }
    
    property get PaymentSearchCriteria () : PaymentSearchCriteria {
      return getRequireValue("PaymentSearchCriteria", 0) as PaymentSearchCriteria
    }
    
    property set PaymentSearchCriteria ($arg :  PaymentSearchCriteria) {
      setRequireValue("PaymentSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}