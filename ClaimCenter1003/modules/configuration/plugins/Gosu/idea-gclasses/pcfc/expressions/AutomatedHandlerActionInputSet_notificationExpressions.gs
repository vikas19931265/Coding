package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/specialhandling/AutomatedHandlerActionInputSet.notification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AutomatedHandlerActionInputSet_notificationExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/specialhandling/AutomatedHandlerActionInputSet.notification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AutomatedHandlerActionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function action_1 () : void {
      PickEmailTemplatePopup.push(getEmailTemplateSearchCriteria())
    }
    
    // 'pickLocation' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(getEmailTemplateSearchCriteria())
    }
    
    // 'conversionExpression' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function conversionExpression_3 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.getFilename()
    }
    
    // 'value' attribute on RangeInput (id=NotificationType_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 32, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      automatedNotificationHandler.NotificationType = (__VALUE_TO_SET as typekey.NotificationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactRole_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 43, column 99
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      automatedNotificationHandler.EmailRole = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'value' attribute on TextInput (id=AutomatedHandlerEmailAddress_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 50, column 93
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      automatedNotificationHandler.EmailAddress = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      automatedNotificationHandler.EmailTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at AutomatedHandlerActionInputSet.notification.pcf: line 14, column 44
    function initialValue_0 () : AutomatedNotificationHandler {
      return automatedHandler as AutomatedNotificationHandler
    }
    
    // 'onChange' attribute on PostOnChange at AutomatedHandlerActionInputSet.notification.pcf: line 34, column 121
    function onChange_9 () : void {
      gw.api.specialhandling.SpecialHandlingHelper.refreshEmailAddressField(automatedNotificationHandler)
    }
    
    // 'outputConversion' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function outputConversion_4 (VALUE :  java.lang.String) : java.lang.String {
      return gw.pcf.specialhandling.EmailTemplateUtil.getEmailTemplateDisplayName(VALUE)
    }
    
    // 'value' attribute on TextCell (id=EmailAddress_Cell) at AutomatedHandlerActionInputSet.notification.pcf: line 73, column 52
    function sortValue_31 (anEmailAddress :  entity.SpecialHandlingEmailAddress) : java.lang.Object {
      return anEmailAddress.EmailAddress
    }
    
    // 'toAdd' attribute on RowIterator (id=EmailIterator) at AutomatedHandlerActionInputSet.notification.pcf: line 67, column 60
    function toAdd_36 (anEmailAddress :  entity.SpecialHandlingEmailAddress) : void {
      automatedNotificationHandler.addToEmailAddresses(anEmailAddress)
    }
    
    // 'toRemove' attribute on RowIterator (id=EmailIterator) at AutomatedHandlerActionInputSet.notification.pcf: line 67, column 60
    function toRemove_37 (anEmailAddress :  entity.SpecialHandlingEmailAddress) : void {
      automatedNotificationHandler.removeFromEmailAddresses(anEmailAddress)
    }
    
    // 'valueRange' attribute on RangeInput (id=NotificationType_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 32, column 44
    function valueRange_13 () : java.lang.Object {
      return NotificationType.getTypeKeys(false)
    }
    
    // 'value' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function valueRoot_7 () : java.lang.Object {
      return automatedNotificationHandler
    }
    
    // 'value' attribute on RangeInput (id=NotificationType_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 32, column 44
    function value_10 () : typekey.NotificationType {
      return automatedNotificationHandler.NotificationType
    }
    
    // 'value' attribute on TypeKeyInput (id=ContactRole_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 43, column 99
    function value_19 () : typekey.ContactRole {
      return automatedNotificationHandler.EmailRole
    }
    
    // 'value' attribute on TextInput (id=AutomatedHandlerEmailAddress_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 50, column 93
    function value_26 () : java.lang.String {
      return automatedNotificationHandler.EmailAddress
    }
    
    // 'value' attribute on RowIterator (id=EmailIterator) at AutomatedHandlerActionInputSet.notification.pcf: line 67, column 60
    function value_38 () : entity.SpecialHandlingEmailAddress[] {
      return automatedNotificationHandler.EmailAddresses
    }
    
    // 'value' attribute on PickerInput (id=AutomatedHandlerEmailTemplate_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 25, column 37
    function value_5 () : java.lang.String {
      return automatedNotificationHandler.EmailTemplate
    }
    
    // 'valueRange' attribute on RangeInput (id=NotificationType_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 32, column 44
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=NotificationType_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 32, column 44
    function verifyValueRangeIsAllowedType_14 ($$arg :  typekey.NotificationType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=NotificationType_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 32, column 44
    function verifyValueRange_15 () : void {
      var __valueRangeArg = NotificationType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=ContactRole_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 43, column 99
    function visible_17 () : java.lang.Boolean {
      return automatedNotificationHandler.NotificationType == NotificationType.TC_CONTACTROLE
    }
    
    // 'visible' attribute on TextInput (id=AutomatedHandlerEmailAddress_Input) at AutomatedHandlerActionInputSet.notification.pcf: line 50, column 93
    function visible_24 () : java.lang.Boolean {
      return automatedNotificationHandler.NotificationType == NotificationType.TC_EMAIL
    }
    
    // 'visible' attribute on ListViewInput (id=EmailAddressesLV) at AutomatedHandlerActionInputSet.notification.pcf: line 54, column 98
    function visible_39 () : java.lang.Boolean {
      return automatedNotificationHandler.NotificationType == NotificationType.TC_MULTI_EMAIL
    }
    
    property get automatedHandler () : AutomatedHandler {
      return getRequireValue("automatedHandler", 0) as AutomatedHandler
    }
    
    property set automatedHandler ($arg :  AutomatedHandler) {
      setRequireValue("automatedHandler", 0, $arg)
    }
    
    property get automatedNotificationHandler () : AutomatedNotificationHandler {
      return getVariableValue("automatedNotificationHandler", 0) as AutomatedNotificationHandler
    }
    
    property set automatedNotificationHandler ($arg :  AutomatedNotificationHandler) {
      setVariableValue("automatedNotificationHandler", 0, $arg)
    }
    
    function getEmailTemplateSearchCriteria() : gw.api.email.EmailTemplateSearchCriteria {
      var criteria = new gw.api.email.EmailTemplateSearchCriteria()
      criteria.Keywords = "automatednotificationhandler, " + (typeof automatedHandler.Trigger).DisplayName
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/specialhandling/AutomatedHandlerActionInputSet.notification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AutomatedHandlerActionInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EmailAddress_Cell) at AutomatedHandlerActionInputSet.notification.pcf: line 73, column 52
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      anEmailAddress.EmailAddress = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=EmailAddress_Cell) at AutomatedHandlerActionInputSet.notification.pcf: line 73, column 52
    function valueRoot_34 () : java.lang.Object {
      return anEmailAddress
    }
    
    // 'value' attribute on TextCell (id=EmailAddress_Cell) at AutomatedHandlerActionInputSet.notification.pcf: line 73, column 52
    function value_32 () : java.lang.String {
      return anEmailAddress.EmailAddress
    }
    
    property get anEmailAddress () : entity.SpecialHandlingEmailAddress {
      return getIteratedValue(1) as entity.SpecialHandlingEmailAddress
    }
    
    
  }
  
  
}