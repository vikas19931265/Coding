package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotContactDV.place.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotContactDV_PlaceExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotContactDV.place.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotContactDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ClaimSnapshotContactDV.place.pcf: line 28, column 46
    function sortValue_0 (Role :  dynamic.Dynamic) : java.lang.Object {
      return Role.Role
    }
    
    // 'value' attribute on TextCell (id=Owner_Cell) at ClaimSnapshotContactDV.place.pcf: line 32, column 59
    function sortValue_1 (Role :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.getRoleOwner(Role)
    }
    
    // 'value' attribute on TextCell (id=Active_Cell) at ClaimSnapshotContactDV.place.pcf: line 36, column 65
    function sortValue_2 (Role :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(Role.Active)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotContactDV.place.pcf: line 41, column 46
    function sortValue_3 (Role :  dynamic.Dynamic) : java.lang.Object {
      return Role.Comments
    }
    
    // 'value' attribute on TextInput (id=contact_Input) at ClaimSnapshotContactDV.place.pcf: line 55, column 38
    function valueRoot_16 () : java.lang.Object {
      return asClaimContact().Contact
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotContactDV.place.pcf: line 105, column 38
    function valueRoot_39 () : java.lang.Object {
      return asClaimContact().Contact.PrimaryAddress
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotContactDV.place.pcf: line 22, column 41
    function value_14 () : dynamic.Dynamic {
      return asClaimContact().Roles
    }
    
    // 'value' attribute on TextInput (id=contact_Input) at ClaimSnapshotContactDV.place.pcf: line 55, column 38
    function value_15 () : dynamic.Dynamic {
      return asClaimContact().Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PrimaryContact_Input) at ClaimSnapshotContactDV.place.pcf: line 62, column 85
    function value_18 () : java.lang.String {
      return util.Snapshot.renderValue(asClaimContact().Contact.PrimaryContact)
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotContactDV.place.pcf: line 67, column 38
    function value_20 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=WorkPhone_Input) at ClaimSnapshotContactDV.place.pcf: line 72, column 38
    function value_23 () : dynamic.Dynamic {
      return asClaimContact().Contact.WorkPhone
    }
    
    // 'value' attribute on TextInput (id=HomePhone_Input) at ClaimSnapshotContactDV.place.pcf: line 77, column 38
    function value_26 () : dynamic.Dynamic {
      return asClaimContact().Contact.HomePhone
    }
    
    // 'value' attribute on TextInput (id=FaxPhone_Input) at ClaimSnapshotContactDV.place.pcf: line 82, column 38
    function value_29 () : dynamic.Dynamic {
      return asClaimContact().Contact.FaxPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ClaimSnapshotContactDV.place.pcf: line 90, column 38
    function value_32 () : dynamic.Dynamic {
      return asClaimContact().Contact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at ClaimSnapshotContactDV.place.pcf: line 95, column 38
    function value_35 () : dynamic.Dynamic {
      return asClaimContact().Contact.EmailAddress2
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotContactDV.place.pcf: line 105, column 38
    function value_38 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AddressType_Input) at ClaimSnapshotContactDV.place.pcf: line 110, column 38
    function value_41 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ClaimSnapshotContactDV.place.pcf: line 115, column 38
    function value_44 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.Description
    }
    
    // 'value' attribute on TextInput (id=ValidUntil_Input) at ClaimSnapshotContactDV.place.pcf: line 120, column 38
    function value_47 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.ValidUntil
    }
    
    // 'value' attribute on TextInput (id=PreferredCurrency_Input) at ClaimSnapshotContactDV.place.pcf: line 128, column 38
    function value_50 () : dynamic.Dynamic {
      return asClaimContact().Contact.PreferredCurrency
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ClaimSnapshotContactDV.place.pcf: line 138, column 38
    function value_53 () : dynamic.Dynamic {
      return asClaimContact().Contact.Notes
    }
    
    property get ClaimContactParam () : dynamic.Dynamic {
      return getRequireValue("ClaimContactParam", 0) as dynamic.Dynamic
    }
    
    property set ClaimContactParam ($arg :  dynamic.Dynamic) {
      setRequireValue("ClaimContactParam", 0, $arg)
    }
    
    
          function asClaimContact() : dynamic.Dynamic {
            return ClaimContactParam;
          }
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotContactDV.place.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotContactDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ClaimSnapshotContactDV.place.pcf: line 28, column 46
    function valueRoot_5 () : java.lang.Object {
      return Role
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotContactDV.place.pcf: line 41, column 46
    function value_11 () : dynamic.Dynamic {
      return Role.Comments
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ClaimSnapshotContactDV.place.pcf: line 28, column 46
    function value_4 () : dynamic.Dynamic {
      return Role.Role
    }
    
    // 'value' attribute on TextCell (id=Owner_Cell) at ClaimSnapshotContactDV.place.pcf: line 32, column 59
    function value_7 () : java.lang.String {
      return util.Snapshot.getRoleOwner(Role)
    }
    
    // 'value' attribute on TextCell (id=Active_Cell) at ClaimSnapshotContactDV.place.pcf: line 36, column 65
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Role.Active)
    }
    
    property get Role () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}