package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotPartiesInvolvedScreen.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPartiesInvolvedScreen_600Expressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotPartiesInvolvedScreen.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPartiesInvolvedScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotPartiesInvolvedScreen.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=ZipCode_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 64, column 44
    function label_27 () : java.lang.Object {
      return DisplayKey.get("Web.Address.Default.ZIP")
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 31, column 44
    function valueRoot_10 () : java.lang.Object {
      return ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 49, column 44
    function valueRoot_19 () : java.lang.Object {
      return ClaimContact.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 35, column 82
    function value_12 () : java.lang.String {
      return util.Snapshot.getDistinctContactRoles(ClaimContact.Roles)
    }
    
    // 'value' attribute on TextCell (id=Prohibited_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 39, column 82
    function value_14 () : java.lang.String {
      return util.Snapshot.renderValue(ClaimContact.ContactProhibited)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 44, column 76
    function value_16 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(ClaimContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 49, column 44
    function value_18 () : dynamic.Dynamic {
      return ClaimContact.Contact.PrimaryAddress.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 54, column 44
    function value_21 () : dynamic.Dynamic {
      return ClaimContact.Contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 59, column 44
    function value_24 () : dynamic.Dynamic {
      return ClaimContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=ZipCode_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 64, column 44
    function value_28 () : dynamic.Dynamic {
      return ClaimContact.Contact.PrimaryAddress.PostalCode
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 31, column 44
    function value_9 () : dynamic.Dynamic {
      return ClaimContact.Contact.DisplayName
    }
    
    property get ClaimContact () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotPartiesInvolvedScreen.600.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimSnapshotPartiesInvolvedScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_onEnter_33 (def :  pcf.ClaimSnapshotContact600DV_Company) : void {
      def.onEnter(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_onEnter_35 (def :  pcf.ClaimSnapshotContact600DV_Person) : void {
      def.onEnter(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_onEnter_37 (def :  pcf.ClaimSnapshotContact600DV_Place) : void {
      def.onEnter(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_onEnter_39 (def :  pcf.ClaimSnapshotContact600DV_contact) : void {
      def.onEnter(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_refreshVariables_34 (def :  pcf.ClaimSnapshotContact600DV_Company) : void {
      def.refreshVariables(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_refreshVariables_36 (def :  pcf.ClaimSnapshotContact600DV_Person) : void {
      def.refreshVariables(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_refreshVariables_38 (def :  pcf.ClaimSnapshotContact600DV_Place) : void {
      def.refreshVariables(SelectedClaimContact)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function def_refreshVariables_40 (def :  pcf.ClaimSnapshotContact600DV_contact) : void {
      def.refreshVariables(SelectedClaimContact)
    }
    
    // 'label' attribute on TextCell (id=ZipCode_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 64, column 44
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Web.Address.Default.ZIP")
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 74, column 78
    function mode_41 () : java.lang.Object {
      return util.Snapshot.getEntityType(SelectedClaimContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 31, column 44
    function sortValue_0 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContact.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 35, column 82
    function sortValue_1 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.getDistinctContactRoles(ClaimContact.Roles)
    }
    
    // 'value' attribute on TextCell (id=Prohibited_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 39, column 82
    function sortValue_2 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ClaimContact.ContactProhibited)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 44, column 76
    function sortValue_3 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.getPrimaryPhone(ClaimContact.Contact)
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 49, column 44
    function sortValue_4 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContact.Contact.PrimaryAddress.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 54, column 44
    function sortValue_5 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContact.Contact.PrimaryAddress.City
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 59, column 44
    function sortValue_6 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContact.Contact.PrimaryAddress.State
    }
    
    // 'value' attribute on TextCell (id=ZipCode_Cell) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 64, column 44
    function sortValue_8 (ClaimContact :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContact.Contact.PrimaryAddress.PostalCode
    }
    
    // 'title' attribute on Card (id=ClaimSnapshotPartiesInvolvedCard) at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 71, column 70
    function title_42 () : java.lang.String {
      return SelectedClaimContact.Contact.DisplayName as String
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPartiesInvolvedScreen.600.pcf: line 24, column 39
    function value_32 () : dynamic.Dynamic {
      return SnapshotParam.Contacts
    }
    
    property get SelectedClaimContact () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set SelectedClaimContact ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}