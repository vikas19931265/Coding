package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/shared/CCAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCAddressInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/addressbook/shared/CCAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function available_21 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.CCAddressOwnerFieldId.ADDRESSTYPE)
    }
    
    // 'available' attribute on TextInput (id=Address_Description_Input) at CCAddressInputSet.pcf: line 51, column 109
    function available_32 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'available' attribute on DateInput (id=Address_ValidUntil_Input) at CCAddressInputSet.pcf: line 60, column 108
    function available_43 () : java.lang.Boolean {
      return addressOwner.isAvailable(gw.api.address.CCAddressOwnerFieldId.VALIDUNTIL)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function def_onEnter_14 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function def_onEnter_16 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function def_onEnter_18 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function def_refreshVariables_15 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function def_refreshVariables_17 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function def_refreshVariables_19 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'value' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Input) at CCAddressInputSet.pcf: line 51, column 109
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address = (__VALUE_TO_SET as entity.Address)
    }
    
    // 'value' attribute on DateInput (id=Address_ValidUntil_Input) at CCAddressInputSet.pcf: line 60, column 108
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Address.ValidUntil = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Claim_LocationCode_Input) at CCAddressInputSet.pcf: line 66, column 141
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Claim.LossLocationCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      addressOwner.Jurisdiction = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function editable_22 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.ADDRESSTYPE)
    }
    
    // 'editable' attribute on TextInput (id=Address_Description_Input) at CCAddressInputSet.pcf: line 51, column 109
    function editable_33 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'editable' attribute on DateInput (id=Address_ValidUntil_Input) at CCAddressInputSet.pcf: line 60, column 108
    function editable_44 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.VALIDUNTIL)
    }
    
    // 'editable' attribute on TextInput (id=Claim_LocationCode_Input) at CCAddressInputSet.pcf: line 66, column 141
    function editable_54 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.LOCATIONCODE)
    }
    
    // 'editable' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function editable_62 () : java.lang.Boolean {
      return addressOwner.isEditable(gw.api.address.CCAddressOwnerFieldId.JURISDICTIONSTATE)
    }
    
    // 'label' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function label_1 () : java.lang.Object {
      return addressOwner.AddressNameLabel != null ? addressOwner.AddressNameLabel : DisplayKey.get("Web.Address.Default.Name")
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddress) at CCAddressInputSet.pcf: line 34, column 43
    function mode_20 () : java.lang.Object {
      return gw.api.address.AddressCountrySettings.getSettings(addressOwner.SelectedCountry).PCFMode
    }
    
    // 'newValue' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function newValue_6 () : java.lang.Object {
      return addressOwner.getOrCreateNewAddress()
    }
    
    // 'optionLabel' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function optionLabel_7 (VALUE :  entity.Address) : java.lang.String {
      return gw.util.RangeInputUtil.formatLabel(addressOwner.getOrCreateNewAddress(), VALUE)
    }
    
    // 'required' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function required_2 () : java.lang.Boolean {
      return addressOwner.RequiredFields.contains(gw.api.address.CCAddressOwnerFieldId.ADDRESS_NAME)
    }
    
    // 'required' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function required_24 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.CCAddressOwnerFieldId.ADDRESSTYPE)
    }
    
    // 'required' attribute on TextInput (id=Address_Description_Input) at CCAddressInputSet.pcf: line 51, column 109
    function required_35 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'required' attribute on DateInput (id=Address_ValidUntil_Input) at CCAddressInputSet.pcf: line 60, column 108
    function required_46 () : java.lang.Boolean {
      return addressOwner.isRequired(gw.api.address.CCAddressOwnerFieldId.VALIDUNTIL)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function valueRange_67 () : java.lang.Object {
      return addressOwner.Jurisdictions
    }
    
    // 'valueRange' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function valueRange_8 () : java.lang.Object {
      return addressOwner.Addresses
    }
    
    // 'value' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function valueRoot_27 () : java.lang.Object {
      return addressOwner.Address
    }
    
    // 'value' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function valueRoot_5 () : java.lang.Object {
      return addressOwner
    }
    
    // 'value' attribute on TextInput (id=Claim_LocationCode_Input) at CCAddressInputSet.pcf: line 66, column 141
    function valueRoot_58 () : java.lang.Object {
      return addressOwner.Claim
    }
    
    // 'value' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function value_25 () : typekey.AddressType {
      return addressOwner.Address.AddressType
    }
    
    // 'value' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function value_3 () : entity.Address {
      return addressOwner.Address
    }
    
    // 'value' attribute on TextInput (id=Address_Description_Input) at CCAddressInputSet.pcf: line 51, column 109
    function value_36 () : java.lang.String {
      return addressOwner.Address.Description
    }
    
    // 'value' attribute on DateInput (id=Address_ValidUntil_Input) at CCAddressInputSet.pcf: line 60, column 108
    function value_47 () : java.util.Date {
      return addressOwner.Address.ValidUntil
    }
    
    // 'value' attribute on TextInput (id=Claim_LocationCode_Input) at CCAddressInputSet.pcf: line 66, column 141
    function value_56 () : java.lang.String {
      return addressOwner.Claim.LossLocationCode
    }
    
    // 'value' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function value_64 () : typekey.Jurisdiction {
      return addressOwner.Jurisdiction
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function verifyValueRangeIsAllowedType_68 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function verifyValueRangeIsAllowedType_68 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function verifyValueRangeIsAllowedType_9 ($$arg :  entity.Address[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.api.database.IQueryBeanResult<entity.Address>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function verifyValueRange_10 () : void {
      var __valueRangeArg = addressOwner.Addresses
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function verifyValueRange_69 () : void {
      var __valueRangeArg = addressOwner.Jurisdictions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_68(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Address_Picker_Input) at CCAddressInputSet.pcf: line 26, column 50
    function visible_0 () : java.lang.Boolean {
      return addressOwner.Addresses != null
    }
    
    // 'visible' attribute on TypeKeyInput (id=Address_AddressType_Input) at CCAddressInputSet.pcf: line 43, column 109
    function visible_23 () : java.lang.Boolean {
      return not addressOwner.HiddenFields.contains(gw.api.address.CCAddressOwnerFieldId.ADDRESSTYPE)
    }
    
    // 'visible' attribute on TextInput (id=Address_Description_Input) at CCAddressInputSet.pcf: line 51, column 109
    function visible_34 () : java.lang.Boolean {
      return not addressOwner.HiddenFields.contains(gw.api.address.CCAddressOwnerFieldId.DESCRIPTION)
    }
    
    // 'visible' attribute on DateInput (id=Address_ValidUntil_Input) at CCAddressInputSet.pcf: line 60, column 108
    function visible_45 () : java.lang.Boolean {
      return not addressOwner.HiddenFields.contains(gw.api.address.CCAddressOwnerFieldId.VALIDUNTIL)
    }
    
    // 'visible' attribute on TextInput (id=Claim_LocationCode_Input) at CCAddressInputSet.pcf: line 66, column 141
    function visible_55 () : java.lang.Boolean {
      return addressOwner.Claim != null and not addressOwner.HiddenFields.contains(gw.api.address.CCAddressOwnerFieldId.LOCATIONCODE)
    }
    
    // 'visible' attribute on RangeInput (id=Claim_JurisdictionState_Input) at CCAddressInputSet.pcf: line 74, column 43
    function visible_63 () : java.lang.Boolean {
      return IsJurisdictionVisible()
    }
    
    property get addressOwner () : gw.api.address.CCAddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    function IsJurisdictionVisible(): boolean {
      return addressOwner.Claim != null 
              and not addressOwner.HiddenFields.contains(gw.api.address.CCAddressOwnerFieldId.JURISDICTIONSTATE)
              and addressOwner.Jurisdictions.HasElements
    }
    
    
  }
  
  
}