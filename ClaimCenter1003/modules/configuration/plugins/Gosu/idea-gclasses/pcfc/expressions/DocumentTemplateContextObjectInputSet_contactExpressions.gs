package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newdocument/DocumentTemplateContextObjectInputSet.contact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentTemplateContextObjectInputSet_contactExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newdocument/DocumentTemplateContextObjectInputSet.contact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentTemplateContextObjectInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_4 () : void {
      AddressBookPickerPopup.push(statictypeof (ContextObjectContact), documentCreationInfo.Document.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_6 () : void {
      if (ContextObjectContact != null) { ClaimContactDetailPopup.push(ContextObjectContact, documentCreationInfo.Document.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_9 () : void {
      ClaimContactDetailPopup.push(ContextObjectContact, documentCreationInfo.Document.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ContextObjectContact, documentCreationInfo.Document.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (ContextObjectContact), documentCreationInfo.Document.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_1 (def :  pcf.ContextObjectContactPickerMenuItemSet) : void {
      def.onEnter(documentCreationInfo, dynamicWidgetInfo)
    }
    
    // 'def' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_2 (def :  pcf.ContextObjectContactPickerMenuItemSet) : void {
      def.refreshVariables(documentCreationInfo, dynamicWidgetInfo)
    }
    
    // 'value' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContextObjectContact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'editable' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function editable_8 () : java.lang.Boolean {
      return documentApplicationContext.DocumentCreationReadOnly
    }
    
    // 'label' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function label_11 () : java.lang.Object {
      return dynamicWidgetInfo.DisplayName
    }
    
    // 'onChange' attribute on ClaimContactInput (id=DynamicInput_Input) at DocumentTemplateContextObjectInputSet.contact.pcf: line 32, column 163
    function onChange_7 () : void {
      documentCreationInfo.evaluateDependentDynamicWidgets(dynamicWidgetInfo.Name); documentApplicationContext.DocumentCreationResetState.execute()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = statictypeof (ContextObjectContact); var result = eval("ContextObjectContact = documentCreationInfo.Document.Claim.resolveContact(ContextObjectContact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'required' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function required_13 () : java.lang.Boolean {
      return !dynamicWidgetInfo.ShowNoneSelected
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_16 () : java.lang.Object {
      return documentCreationInfo.getPossibleContextObjectValues(dynamicWidgetInfo.Name) as Contact[]
    }
    
    // 'value' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_14 () : entity.Contact {
      return ContextObjectContact
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_18 () : void {
      var __valueRangeArg = documentCreationInfo.getPossibleContextObjectValues(dynamicWidgetInfo.Name) as Contact[]
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_0 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=DynamicInput_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_3 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (ContextObjectContact), documentCreationInfo.Document.Claim, null as List<SpecialistService>)" != "" && false
    }
    
    property get documentApplicationContext () : gw.document.DocumentApplicationContext {
      return getRequireValue("documentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set documentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setRequireValue("documentApplicationContext", 0, $arg)
    }
    
    property get documentCreationInfo () : gw.document.DocumentCreationInfo {
      return getRequireValue("documentCreationInfo", 0) as gw.document.DocumentCreationInfo
    }
    
    property set documentCreationInfo ($arg :  gw.document.DocumentCreationInfo) {
      setRequireValue("documentCreationInfo", 0, $arg)
    }
    
    property get dynamicWidgetInfo () : gw.document.DocumentCreationInfo.DynamicWidgetInfo {
      return getRequireValue("dynamicWidgetInfo", 0) as gw.document.DocumentCreationInfo.DynamicWidgetInfo
    }
    
    property set dynamicWidgetInfo ($arg :  gw.document.DocumentCreationInfo.DynamicWidgetInfo) {
      setRequireValue("dynamicWidgetInfo", 0, $arg)
    }
    
    property get ContextObjectContact(): Contact {
          return documentCreationInfo.getContextObjectValue(dynamicWidgetInfo.Name) as Contact
        }
    
          property set ContextObjectContact(value : Contact){
            documentCreationInfo.setContextObjectValue(dynamicWidgetInfo.Name, value)
          }
    
    
  }
  
  
}