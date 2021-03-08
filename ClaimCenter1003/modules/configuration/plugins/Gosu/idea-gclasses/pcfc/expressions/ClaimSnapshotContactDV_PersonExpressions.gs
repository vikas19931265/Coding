package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotContactDV.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotContactDV_PersonExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotContactDV.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotContactDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at ClaimSnapshotContactDV.person.pcf: line 206, column 27
    function def_onEnter_88 (def :  pcf.ClaimSnapshotContactEFTLV) : void {
      def.onEnter(asClaimContact().Contact)
    }
    
    // 'def' attribute on ListViewInput at ClaimSnapshotContactDV.person.pcf: line 206, column 27
    function def_refreshVariables_89 (def :  pcf.ClaimSnapshotContactEFTLV) : void {
      def.refreshVariables(asClaimContact().Contact)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotContactDV.person.pcf: line 147, column 38
    function encryptionExpression_61 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ClaimSnapshotContactDV.person.pcf: line 28, column 46
    function sortValue_0 (Role :  dynamic.Dynamic) : java.lang.Object {
      return Role.Role
    }
    
    // 'value' attribute on TextCell (id=Owner_Cell) at ClaimSnapshotContactDV.person.pcf: line 32, column 59
    function sortValue_1 (Role :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.getRoleOwner(Role)
    }
    
    // 'value' attribute on TextCell (id=Active_Cell) at ClaimSnapshotContactDV.person.pcf: line 36, column 65
    function sortValue_2 (Role :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(Role.Active)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotContactDV.person.pcf: line 41, column 46
    function sortValue_3 (Role :  dynamic.Dynamic) : java.lang.Object {
      return Role.Comments
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotContactDV.person.pcf: line 55, column 38
    function valueRoot_16 () : java.lang.Object {
      return asClaimContact().Contact
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotContactDV.person.pcf: line 111, column 38
    function valueRoot_43 () : java.lang.Object {
      return asClaimContact().Contact.PrimaryAddress
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotContactDV.person.pcf: line 22, column 41
    function value_14 () : dynamic.Dynamic {
      return asClaimContact().Roles
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotContactDV.person.pcf: line 55, column 38
    function value_15 () : dynamic.Dynamic {
      return asClaimContact().Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=FormerName_Input) at ClaimSnapshotContactDV.person.pcf: line 60, column 38
    function value_18 () : dynamic.Dynamic {
      return asClaimContact().Contact.FormerName
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotContactDV.person.pcf: line 68, column 38
    function value_21 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=WorkPhone_Input) at ClaimSnapshotContactDV.person.pcf: line 73, column 38
    function value_24 () : dynamic.Dynamic {
      return asClaimContact().Contact.WorkPhone
    }
    
    // 'value' attribute on TextInput (id=HomePhone_Input) at ClaimSnapshotContactDV.person.pcf: line 78, column 38
    function value_27 () : dynamic.Dynamic {
      return asClaimContact().Contact.HomePhone
    }
    
    // 'value' attribute on TextInput (id=CellPhone_Input) at ClaimSnapshotContactDV.person.pcf: line 83, column 38
    function value_30 () : dynamic.Dynamic {
      return asClaimContact().Contact.CellPhone
    }
    
    // 'value' attribute on TextInput (id=FaxPhone_Input) at ClaimSnapshotContactDV.person.pcf: line 88, column 38
    function value_33 () : dynamic.Dynamic {
      return asClaimContact().Contact.FaxPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ClaimSnapshotContactDV.person.pcf: line 96, column 38
    function value_36 () : dynamic.Dynamic {
      return asClaimContact().Contact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at ClaimSnapshotContactDV.person.pcf: line 101, column 38
    function value_39 () : dynamic.Dynamic {
      return asClaimContact().Contact.EmailAddress2
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotContactDV.person.pcf: line 111, column 38
    function value_42 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AddressType_Input) at ClaimSnapshotContactDV.person.pcf: line 116, column 38
    function value_45 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at ClaimSnapshotContactDV.person.pcf: line 121, column 38
    function value_48 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.Description
    }
    
    // 'value' attribute on TextInput (id=ValidUntil_Input) at ClaimSnapshotContactDV.person.pcf: line 126, column 38
    function value_51 () : dynamic.Dynamic {
      return asClaimContact().Contact.PrimaryAddress.ValidUntil
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotContactDV.person.pcf: line 134, column 38
    function value_54 () : dynamic.Dynamic {
      return asClaimContact().Contact.Occupation
    }
    
    // 'value' attribute on TextInput (id=Employer_Input) at ClaimSnapshotContactDV.person.pcf: line 138, column 79
    function value_57 () : java.lang.String {
      return util.Snapshot.renderValue(asClaimContact().Contact.Employer)
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotContactDV.person.pcf: line 147, column 38
    function value_59 () : dynamic.Dynamic {
      return asClaimContact().Contact.TaxID
    }
    
    // 'value' attribute on TextInput (id=TaxFilingStatus_Input) at ClaimSnapshotContactDV.person.pcf: line 152, column 38
    function value_63 () : dynamic.Dynamic {
      return asClaimContact().Contact.TaxFilingStatus
    }
    
    // 'value' attribute on TextInput (id=DateOfBirth_Input) at ClaimSnapshotContactDV.person.pcf: line 156, column 168
    function value_66 () : java.lang.String {
      return asClaimContact().Contact.DateOfBirth == null ? null : (gw.api.upgrade.Coercions.makeDateFrom(asClaimContact().Contact.DateOfBirth)).formatDate(SHORT)
    }
    
    // 'value' attribute on TextInput (id=Guardian_Input) at ClaimSnapshotContactDV.person.pcf: line 160, column 79
    function value_68 () : java.lang.String {
      return util.Snapshot.renderValue(asClaimContact().Contact.Guardian)
    }
    
    // 'value' attribute on TextInput (id=Gender_Input) at ClaimSnapshotContactDV.person.pcf: line 165, column 38
    function value_70 () : dynamic.Dynamic {
      return asClaimContact().Contact.Gender
    }
    
    // 'value' attribute on TextInput (id=MaritalStatus_Input) at ClaimSnapshotContactDV.person.pcf: line 170, column 38
    function value_73 () : dynamic.Dynamic {
      return asClaimContact().Contact.MaritalStatus
    }
    
    // 'value' attribute on TextInput (id=PreferredCurrency_Input) at ClaimSnapshotContactDV.person.pcf: line 175, column 38
    function value_76 () : dynamic.Dynamic {
      return asClaimContact().Contact.PreferredCurrency
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at ClaimSnapshotContactDV.person.pcf: line 183, column 38
    function value_79 () : dynamic.Dynamic {
      return asClaimContact().Contact.LicenseNumber
    }
    
    // 'value' attribute on TextInput (id=LicenseState_Input) at ClaimSnapshotContactDV.person.pcf: line 188, column 38
    function value_82 () : dynamic.Dynamic {
      return asClaimContact().Contact.LicenseState
    }
    
    // 'value' attribute on TextAreaInput (id=Notes_Input) at ClaimSnapshotContactDV.person.pcf: line 198, column 38
    function value_85 () : dynamic.Dynamic {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotContactDV.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotContactDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ClaimSnapshotContactDV.person.pcf: line 28, column 46
    function valueRoot_5 () : java.lang.Object {
      return Role
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotContactDV.person.pcf: line 41, column 46
    function value_11 () : dynamic.Dynamic {
      return Role.Comments
    }
    
    // 'value' attribute on TextCell (id=Role_Cell) at ClaimSnapshotContactDV.person.pcf: line 28, column 46
    function value_4 () : dynamic.Dynamic {
      return Role.Role
    }
    
    // 'value' attribute on TextCell (id=Owner_Cell) at ClaimSnapshotContactDV.person.pcf: line 32, column 59
    function value_7 () : java.lang.String {
      return util.Snapshot.getRoleOwner(Role)
    }
    
    // 'value' attribute on TextCell (id=Active_Cell) at ClaimSnapshotContactDV.person.pcf: line 36, column 65
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Role.Active)
    }
    
    property get Role () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}