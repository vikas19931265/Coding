package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditableVehicleLienholdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableVehicleLienholdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableVehicleLienholdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableVehicleLienholdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at EditableVehicleLienholdersLV.pcf: line 36, column 47
    function sortValue_0 (VehicleOwner :  entity.VehicleOwner) : java.lang.Object {
      return VehicleOwner.Lienholder
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnerType_Cell) at EditableVehicleLienholdersLV.pcf: line 43, column 42
    function sortValue_1 (VehicleOwner :  entity.VehicleOwner) : java.lang.Object {
      return VehicleOwner.OwnerType
    }
    
    // 'toAdd' attribute on RowIterator at EditableVehicleLienholdersLV.pcf: line 25, column 41
    function toAdd_25 (VehicleOwner :  entity.VehicleOwner) : void {
      Vehicle.addToLienholders(VehicleOwner)
    }
    
    // 'toRemove' attribute on RowIterator at EditableVehicleLienholdersLV.pcf: line 25, column 41
    function toRemove_26 (VehicleOwner :  entity.VehicleOwner) : void {
      Vehicle.removeFromLienholders(VehicleOwner)
    }
    
    // 'value' attribute on RowIterator at EditableVehicleLienholdersLV.pcf: line 25, column 41
    function value_27 () : entity.VehicleOwner[] {
      return Vehicle.Lienholders
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Vehicle () : Vehicle {
      return getRequireValue("Vehicle", 0) as Vehicle
    }
    
    property set Vehicle ($arg :  Vehicle) {
      setRequireValue("Vehicle", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableVehicleLienholdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableVehicleLienholdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleOwner.Lienholder), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (VehicleOwner.Lienholder != null) { ClaimContactDetailPopup.push(VehicleOwner.Lienholder, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_9 () : void {
      ClaimContactDetailPopup.push(VehicleOwner.Lienholder, Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleOwner.Lienholder, Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleOwner.Lienholder), Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleOwner.Lienholder), null, Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleOwner.Lienholder), null, Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleOwner.Lienholder = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnerType_Cell) at EditableVehicleLienholdersLV.pcf: line 43, column 42
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleOwner.OwnerType = (__VALUE_TO_SET as typekey.OwnerType)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_11 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleOwner.Lienholder); var result = eval("VehicleOwner.Lienholder = Claim.resolveContact(VehicleOwner.Lienholder) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return VehicleOwner
    }
    
    // 'value' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_12 () : entity.Contact {
      return VehicleOwner.Lienholder
    }
    
    // 'value' attribute on TypeKeyCell (id=OwnerType_Cell) at EditableVehicleLienholdersLV.pcf: line 43, column 42
    function value_21 () : typekey.OwnerType {
      return VehicleOwner.OwnerType
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
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=Lienholder_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleOwner.Lienholder), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get VehicleOwner () : entity.VehicleOwner {
      return getIteratedValue(1) as entity.VehicleOwner
    }
    
    
  }
  
  
}