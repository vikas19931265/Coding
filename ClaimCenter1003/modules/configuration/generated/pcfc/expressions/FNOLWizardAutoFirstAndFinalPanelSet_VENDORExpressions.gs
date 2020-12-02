package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizardAutoFirstAndFinalPanelSet.VENDOR.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizardAutoFirstAndFinalPanelSet_VENDORExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizardAutoFirstAndFinalPanelSet.VENDOR.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizardAutoFirstAndFinalPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_4 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, new java.util.ArrayList<SpecialistService>())
    }
    
    // 'action' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_6 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_7 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, new java.util.ArrayList<SpecialistService>())
    }
    
    // 'action' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_1 (def :  pcf.ClaimNewRepairShopOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_2 (def :  pcf.ClaimNewRepairShopOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at FNOLWizardAutoFirstAndFinalPanelSet.VENDOR.pcf: line 30, column 57
    function onPick_16 (PickedValue :  java.lang.Object) : void {
      Claim.ServiceRequests.single().Specialist = Claim.reporter
    }
    
    // 'onPick' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_9 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); Claim.ServiceRequests.single().Specialist = Claim.reporter;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_13 () : java.lang.Object {
      return Claim.RelatedAutoRepairShopArray
    }
    
    // 'value' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_12 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_10 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Claim.RelatedAutoRepairShopArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_0 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=GlassScreenVendorReporter_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_3 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, new java.util.ArrayList<SpecialistService>())" != "" && true
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getRequireValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setRequireValue("VehicleIncident", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    
  }
  
  
}