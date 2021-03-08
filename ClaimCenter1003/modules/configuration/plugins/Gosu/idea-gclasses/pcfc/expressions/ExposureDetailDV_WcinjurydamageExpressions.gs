package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Wcinjurydamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExposureDetailDV_WcinjurydamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Wcinjurydamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposureDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 40, column 55
    function action_5 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_51 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_53 () : void {
      if (Exposure.altcontact != null) { ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_54 () : void {
      ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_71 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.nursecasemgr), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_73 () : void {
      if (Claim.nursecasemgr != null) { ClaimContactDetailPopup.push(Claim.nursecasemgr, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_74 () : void {
      ClaimContactDetailPopup.push(Claim.nursecasemgr, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_52 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_55 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 40, column 55
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_72 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.nursecasemgr), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_75 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.nursecasemgr, Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 40, column 55
    function available_4 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Wcinjurydamage.pcf: line 151, column 55
    function def_onEnter_111 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 156, column 28
    function def_onEnter_113 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.onEnter(Claim.ensureClaimInjuryIncident(), true)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 163, column 28
    function def_onEnter_115 (def :  pcf.MedicalDiagnosisLV) : void {
      def.onEnter(Claim.ensureClaimInjuryIncident(), false)
    }
    
    // 'def' attribute on PanelRef (id=PlannedActivities) at ExposureDetailDV.Wcinjurydamage.pcf: line 171, column 38
    function def_onEnter_117 (def :  pcf.WCExposureActivitiesLV) : void {
      def.onEnter( gw.api.database.Query.make(entity.Activity).compare("Exposure", Equals, Exposure).select() )
    }
    
    // 'def' attribute on PanelRef (id=MedicalNotes) at ExposureDetailDV.Wcinjurydamage.pcf: line 180, column 33
    function def_onEnter_119 (def :  pcf.NotesLV) : void {
      def.onEnter(Exposure.Claim != null ? Exposure.Claim.getViewableNotes(NoteTopicType.TC_MEDICAL) : null)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Wcinjurydamage.pcf: line 190, column 57
    function def_onEnter_121 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 199, column 43
    function def_onEnter_124 (def :  pcf.WCInjuryDamageDV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 207, column 26
    function def_onEnter_126 (def :  pcf.MedCaseMgrDV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 214, column 39
    function def_onEnter_129 (def :  pcf.ISODetailsDV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_48 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_68 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.nursecasemgr), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Wcinjurydamage.pcf: line 151, column 55
    function def_refreshVariables_112 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 156, column 28
    function def_refreshVariables_114 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.refreshVariables(Claim.ensureClaimInjuryIncident(), true)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 163, column 28
    function def_refreshVariables_116 (def :  pcf.MedicalDiagnosisLV) : void {
      def.refreshVariables(Claim.ensureClaimInjuryIncident(), false)
    }
    
    // 'def' attribute on PanelRef (id=PlannedActivities) at ExposureDetailDV.Wcinjurydamage.pcf: line 171, column 38
    function def_refreshVariables_118 (def :  pcf.WCExposureActivitiesLV) : void {
      def.refreshVariables( gw.api.database.Query.make(entity.Activity).compare("Exposure", Equals, Exposure).select() )
    }
    
    // 'def' attribute on PanelRef (id=MedicalNotes) at ExposureDetailDV.Wcinjurydamage.pcf: line 180, column 33
    function def_refreshVariables_120 (def :  pcf.NotesLV) : void {
      def.refreshVariables(Exposure.Claim != null ? Exposure.Claim.getViewableNotes(NoteTopicType.TC_MEDICAL) : null)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Wcinjurydamage.pcf: line 190, column 57
    function def_refreshVariables_122 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 199, column 43
    function def_refreshVariables_125 (def :  pcf.WCInjuryDamageDV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 207, column 26
    function def_refreshVariables_127 (def :  pcf.MedCaseMgrDV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Wcinjurydamage.pcf: line 214, column 39
    function def_refreshVariables_130 (def :  pcf.ISODetailsDV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_49 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_69 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.nursecasemgr), null, Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.altcontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.nursecasemgr = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'initialValue' attribute on Variable at ExposureDetailDV.Wcinjurydamage.pcf: line 18, column 21
    function initialValue_0 () : Claim {
      return Exposure.Claim
    }
    
    // 'onPick' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_56 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.altcontact); var result = eval("Exposure.altcontact = Exposure.Claim.resolveContact(Exposure.altcontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_76 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.nursecasemgr); var result = eval("Claim.nursecasemgr = Claim.resolveContact(Claim.nursecasemgr) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_60 () : java.lang.Object {
      return Exposure.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_80 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 33, column 49
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_79 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 110, column 70
    function valueRoot_88 () : java.lang.Object {
      return Claim.ensureClaimInjuryIncident()
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 119, column 63
    function valueRoot_91 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 33, column 49
    function value_1 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 136, column 62
    function value_102 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 144, column 49
    function value_105 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 149, column 50
    function value_108 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 44, column 64
    function value_11 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 49, column 50
    function value_14 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 54, column 39
    function value_17 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 60, column 56
    function value_22 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 66, column 56
    function value_27 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 71, column 56
    function value_32 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 77, column 56
    function value_37 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 81, column 44
    function value_41 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 86, column 52
    function value_44 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_57 () : entity.Person {
      return Exposure.altcontact
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 40, column 55
    function value_7 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_77 () : entity.Person {
      return Claim.nursecasemgr
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 110, column 70
    function value_87 () : java.lang.String {
      return Claim.ensureClaimInjuryIncident().Description
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 119, column 63
    function value_90 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 123, column 60
    function value_93 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 127, column 59
    function value_96 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 131, column 61
    function value_99 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_61 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_61 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_61 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_81 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_81 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_62 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_61(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_82 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_81(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 54, column 39
    function verifyValueType_20 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=AltContact_Name_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 95, column 42
    function verifyValueType_66 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 106, column 42
    function verifyValueType_86 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on Card (id=WCMedCaseMgmt_MainCard) at ExposureDetailDV.Wcinjurydamage.pcf: line 22, column 81
    function visible_123 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim)
    }
    
    // 'visible' attribute on Card (id=Exposure_ISOCard) at ExposureDetailDV.Wcinjurydamage.pcf: line 212, column 59
    function visible_131 () : java.lang.Boolean {
      return not Exposure.Claim.ISOClaimLevelMessaging
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 60, column 56
    function visible_21 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Wcinjurydamage.pcf: line 71, column 56
    function visible_31 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_47 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_50 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claim_NurseCaseManager_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_70 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.nursecasemgr), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
  }
  
  
}