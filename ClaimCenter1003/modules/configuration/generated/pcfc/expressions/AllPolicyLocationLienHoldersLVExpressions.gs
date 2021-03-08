package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/AllPolicyLocationLienHoldersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AllPolicyLocationLienHoldersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/AllPolicyLocationLienHoldersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AllPolicyLocationLienHoldersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at AllPolicyLocationLienHoldersLV.pcf: line 27, column 77
    function sortValue_0 (PropertyOwner :  entity.PropertyOwner) : java.lang.Object {
      return PropertyOwner.Lienholder
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnerType_Cell) at AllPolicyLocationLienHoldersLV.pcf: line 33, column 42
    function sortValue_1 (PropertyOwner :  entity.PropertyOwner) : java.lang.Object {
      return PropertyOwner.OwnerType
    }
    
    // 'value' attribute on TextCell (id=AssociatedWith_Cell) at AllPolicyLocationLienHoldersLV.pcf: line 38, column 189
    function sortValue_2 (PropertyOwner :  entity.PropertyOwner) : java.lang.Object {
      return ((PropertyOwner.LocationBasedRU != null) ? PropertyOwner.LocationBasedRU.Description : DisplayKey.get("LV.Policy.EditablePropertyLienholders.PolicyLocation"))
    }
    
    // 'value' attribute on RowIterator at AllPolicyLocationLienHoldersLV.pcf: line 17, column 42
    function value_26 () : entity.PropertyOwner[] {
      return PolicyLocation.Lienholders
    }
    
    property get PolicyLocation () : PolicyLocation {
      return getRequireValue("PolicyLocation", 0) as PolicyLocation
    }
    
    property set PolicyLocation ($arg :  PolicyLocation) {
      setRequireValue("PolicyLocation", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/AllPolicyLocationLienHoldersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AllPolicyLocationLienHoldersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_10 () : void {
      ClaimContactDetailPopup.push(PropertyOwner.Lienholder, PropertyOwner.Property.Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_7 () : void {
      AddressBookPickerPopup.push(statictypeof (PropertyOwner.Lienholder), PropertyOwner.Property.Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_9 () : void {
      if (PropertyOwner.Lienholder != null) { ClaimContactDetailPopup.push(PropertyOwner.Lienholder, PropertyOwner.Property.Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(PropertyOwner.Lienholder, PropertyOwner.Property.Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (PropertyOwner.Lienholder), PropertyOwner.Property.Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (PropertyOwner.Lienholder), null, PropertyOwner.Property.Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_5 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (PropertyOwner.Lienholder), null, PropertyOwner.Property.Policy.Claim)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = statictypeof (PropertyOwner.Lienholder); var result = eval("PropertyOwner.Lienholder = PropertyOwner.Property.Policy.Claim.resolveContact(PropertyOwner.Lienholder) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return PropertyOwner.Property.Policy.Claim.RelatedContacts
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return PropertyOwner
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_13 () : entity.Contact {
      return PropertyOwner.Lienholder
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnerType_Cell) at AllPolicyLocationLienHoldersLV.pcf: line 33, column 42
    function value_21 () : typekey.OwnerType {
      return PropertyOwner.OwnerType
    }
    
    // 'value' attribute on TextCell (id=AssociatedWith_Cell) at AllPolicyLocationLienHoldersLV.pcf: line 38, column 189
    function value_24 () : java.lang.String {
      return ((PropertyOwner.LocationBasedRU != null) ? PropertyOwner.LocationBasedRU.Description : DisplayKey.get("LV.Policy.EditablePropertyLienholders.PolicyLocation"))
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_17 () : void {
      var __valueRangeArg = PropertyOwner.Property.Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_3 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_6 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (PropertyOwner.Lienholder), PropertyOwner.Property.Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get PropertyOwner () : entity.PropertyOwner {
      return getIteratedValue(1) as entity.PropertyOwner
    }
    
    
  }
  
  
}