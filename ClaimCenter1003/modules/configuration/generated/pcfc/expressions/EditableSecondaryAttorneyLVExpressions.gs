package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/litigation/EditableSecondaryAttorneyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableSecondaryAttorneyLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/litigation/EditableSecondaryAttorneyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableSecondaryAttorneyLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at EditableSecondaryAttorneyLV.pcf: line 33, column 59
    function sortValue_0 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsActive_Cell) at EditableSecondaryAttorneyLV.pcf: line 39, column 44
    function sortValue_1 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.Active
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableSecondaryAttorneyLV.pcf: line 44, column 46
    function sortValue_2 (ClaimContactRole :  entity.ClaimContactRole) : java.lang.Object {
      return ClaimContactRole.Comments
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at EditableSecondaryAttorneyLV.pcf: line 21, column 45
    function toCreateAndAdd_31 () : entity.ClaimContactRole {
      return matter.addEmptyRole(TC_SECDEFATTORNEY)
    }
    
    // 'toRemove' attribute on RowIterator at EditableSecondaryAttorneyLV.pcf: line 21, column 45
    function toRemove_32 (ClaimContactRole :  entity.ClaimContactRole) : void {
      matter.removeFromRoles(ClaimContactRole);matter.removeRole(ClaimContactRole)
    }
    
    // 'value' attribute on RowIterator at EditableSecondaryAttorneyLV.pcf: line 21, column 45
    function value_33 () : entity.ClaimContactRole[] {
      return matter.getClaimContactRolesByRole(TC_SECDEFATTORNEY)
    }
    
    property get matter () : Matter {
      return getRequireValue("matter", 0) as Matter
    }
    
    property set matter ($arg :  Matter) {
      setRequireValue("matter", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/litigation/EditableSecondaryAttorneyLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableSecondaryAttorneyLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_10 () : void {
      ClaimContactDetailPopup.push(ClaimContactRole.ClaimContact.Contact, matter.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_7 () : void {
      AddressBookPickerPopup.push(Attorney.Type, matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_9 () : void {
      if (ClaimContactRole.ClaimContact.Contact != null) { ClaimContactDetailPopup.push(ClaimContactRole.ClaimContact.Contact, matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ClaimContactRole.ClaimContact.Contact, matter.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(Attorney.Type, matter.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(Attorney.Type, null, matter.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_5 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(Attorney.Type, null, matter.Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.ClaimContact.Contact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsActive_Cell) at EditableSecondaryAttorneyLV.pcf: line 39, column 44
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.Active = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableSecondaryAttorneyLV.pcf: line 44, column 46
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimContactRole.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on Row at EditableSecondaryAttorneyLV.pcf: line 23, column 55
    function editable_30 () : java.lang.Boolean {
      return ClaimContactRole.isEditableInELV()
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = Attorney.Type; var result = eval("ClaimContactRole.ClaimContact.Contact = matter.Claim.resolveContact(ClaimContactRole.ClaimContact.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_16 () : java.lang.Object {
      return matter.Claim.RelatedAttorneyArray
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_15 () : java.lang.Object {
      return ClaimContactRole.ClaimContact
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsActive_Cell) at EditableSecondaryAttorneyLV.pcf: line 39, column 44
    function valueRoot_24 () : java.lang.Object {
      return ClaimContactRole
    }
    
    // 'value' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_13 () : entity.Contact {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsActive_Cell) at EditableSecondaryAttorneyLV.pcf: line 39, column 44
    function value_22 () : java.lang.Boolean {
      return ClaimContactRole.Active
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableSecondaryAttorneyLV.pcf: line 44, column 46
    function value_26 () : java.lang.String {
      return ClaimContactRole.Comments
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_18 () : void {
      var __valueRangeArg = matter.Claim.RelatedAttorneyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_3 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=Contact_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_6 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(Attorney.Type, matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get ClaimContactRole () : entity.ClaimContactRole {
      return getIteratedValue(1) as entity.ClaimContactRole
    }
    
    
  }
  
  
}