package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.TravelCancelOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickClaimDV_TravelCancelOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.TravelCancelOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends QuickClaimDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=aTripRU_Cell) at QuickClaimDV.TravelCancelOnly.pcf: line 196, column 30
    function action_81 () : void {
      TripRUPopup.push( Claim, aTripRU, false )
    }
    
    // 'action' attribute on TextCell (id=aTripRU_Cell) at QuickClaimDV.TravelCancelOnly.pcf: line 196, column 30
    function action_dest_82 () : pcf.api.Destination {
      return pcf.TripRUPopup.createDestination( Claim, aTripRU, false )
    }
    
    // 'condition' attribute on ToolbarFlag at QuickClaimDV.TravelCancelOnly.pcf: line 182, column 34
    function condition_79 () : java.lang.Boolean {
      return not Claim.TripIncidentsOnly.hasMatch( \ i -> i.TripRU == aTripRU )
    }
    
    // 'condition' attribute on ToolbarFlag at QuickClaimDV.TravelCancelOnly.pcf: line 188, column 37
    function condition_80 () : java.lang.Boolean {
      return Claim.TripIncidentsOnly.hasMatch( \ i -> i.TripRU == aTripRU )
    }
    
    // 'value' attribute on TextCell (id=aTripRU_Cell) at QuickClaimDV.TravelCancelOnly.pcf: line 196, column 30
    function value_83 () : java.lang.String {
      return aTripRU.DisplayName.length > 60 ? aTripRU.DisplayName.substring( 0, 57 ) + "..." : aTripRU.DisplayName
    }
    
    // 'value' attribute on TextCell (id=CancelledTrip_Cell) at QuickClaimDV.TravelCancelOnly.pcf: line 199, column 205
    function value_85 () : java.lang.String {
      return Claim.TripIncidentsOnly.hasMatch( \ i -> i.TripRU == aTripRU ) ? DisplayKey.get("NVV.Claim.SubView.NewQuickClaimClaimTravel.Trips.CancelledTripLabel") : ""
    }
    
    property get aTripRU () : entity.TripRU {
      return getIteratedValue(1) as entity.TripRU
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.TravelCancelOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickClaimDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_4 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_6 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_7 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_92 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_93 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=CancelTrips_ToolbarButton) at QuickClaimDV.TravelCancelOnly.pcf: line 164, column 119
    function allCheckedRowsAction_76 (CheckedValues :  entity.TripRU[], CheckedValuesErrors :  java.util.Map) : void {
      Claim.cancelTrips( CheckedValues )
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=UndoCancellations_ToolbarButton) at QuickClaimDV.TravelCancelOnly.pcf: line 170, column 120
    function allCheckedRowsAction_77 (CheckedValues :  entity.TripRU[], CheckedValuesErrors :  java.util.Map) : void {
      Claim.undoTripCancellation( CheckedValues )
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_1 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.TravelCancelOnly.pcf: line 153, column 26
    function def_onEnter_74 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=EditableTripIncidentsLV) at QuickClaimDV.TravelCancelOnly.pcf: line 212, column 55
    function def_onEnter_90 (def :  pcf.EditableTripIncidentsLV) : void {
      def.onEnter(Claim, true)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_2 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.TravelCancelOnly.pcf: line 153, column 26
    function def_refreshVariables_75 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=EditableTripIncidentsLV) at QuickClaimDV.TravelCancelOnly.pcf: line 212, column 55
    function def_refreshVariables_91 (def :  pcf.EditableTripIncidentsLV) : void {
      def.refreshVariables(Claim, true)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 47, column 48
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 97, column 38
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 111, column 36
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 121, column 40
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 135, column 37
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 140, column 39
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 146, column 43
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_9 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at QuickClaimDV.TravelCancelOnly.pcf: line 49, column 40
    function reflectionValue_19 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==null) ? ("") : (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.TravelCancelOnly.pcf: line 67, column 44
    function reflectionValue_24 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.TravelCancelOnly.pcf: line 75, column 53
    function reflectionValue_29 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'required' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function required_94 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'sortBy' attribute on IteratorSort at QuickClaimDV.TravelCancelOnly.pcf: line 185, column 30
    function sortBy_78 (aTripRU :  entity.TripRU) : java.lang.Object {
      return aTripRU.DisplayName
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 128, column 33
    function validationExpression_55 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 135, column 37
    function validationExpression_60 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_13 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_98 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_12 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 64, column 50
    function valueRoot_27 () : java.lang.Object {
      return Claim.reporter
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 82, column 44
    function valueRoot_35 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRoot_97 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_10 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 47, column 48
    function value_20 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 64, column 50
    function value_26 () : java.lang.String {
      return Claim.reporter.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_Address_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 72, column 59
    function value_31 () : java.lang.String {
      return Claim.reporter.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 82, column 44
    function value_34 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 87, column 43
    function value_37 () : typekey.PolicyStatus {
      return Claim.Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 97, column 38
    function value_40 () : typekey.LOBCode {
      return Claim.LOBCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 103, column 39
    function value_44 () : typekey.LossType {
      return Claim.LossType
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 111, column 36
    function value_47 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 121, column 40
    function value_51 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 128, column 33
    function value_56 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 135, column 37
    function value_61 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 140, column 39
    function value_66 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.TravelCancelOnly.pcf: line 146, column 43
    function value_70 () : java.lang.Boolean {
      return Claim.CoverageInQuestion
    }
    
    // 'value' attribute on RowIterator at QuickClaimDV.TravelCancelOnly.pcf: line 179, column 41
    function value_87 () : entity.TripRU[] {
      return Claim.Policy.RiskUnits.whereTypeIs(TripRU)
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_95 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_99 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_99 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_100 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_99(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_0 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_3 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on InputDivider at QuickClaimDV.TravelCancelOnly.pcf: line 205, column 56
    function visible_88 () : java.lang.Boolean {
      return Claim.TripIncidentsOnly.HasElements
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    
  }
  
  
}