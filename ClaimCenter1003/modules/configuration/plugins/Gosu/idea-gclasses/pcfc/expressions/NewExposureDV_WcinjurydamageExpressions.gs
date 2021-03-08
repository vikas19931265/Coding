package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Wcinjurydamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewExposureDV_WcinjurydamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newexposure/NewExposureDV.Wcinjurydamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewExposureDV.Wcinjurydamage.pcf: line 37, column 63
    function action_16 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_30 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_32 () : void {
      if (Exposure.altcontact != null) { ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_33 () : void {
      ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_50 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.InjuryIncident.PrimaryDoctor), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_52 () : void {
      if (Exposure.InjuryIncident.PrimaryDoctor != null) { ClaimContactDetailPopup.push(Exposure.InjuryIncident.PrimaryDoctor, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_53 () : void {
      ClaimContactDetailPopup.push(Exposure.InjuryIncident.PrimaryDoctor, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_6 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_70 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.hospital), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_72 () : void {
      if (Exposure.hospital != null) { ClaimContactDetailPopup.push(Exposure.hospital, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_73 () : void {
      ClaimContactDetailPopup.push(Exposure.hospital, Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_8 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewExposureDV.Wcinjurydamage.pcf: line 37, column 63
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_31 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_34 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_51 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.InjuryIncident.PrimaryDoctor), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_54 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.InjuryIncident.PrimaryDoctor, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_71 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.hospital), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_74 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.hospital, Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewExposureDV.Wcinjurydamage.pcf: line 128, column 27
    function def_onEnter_113 (def :  pcf.EditableMedicalActionsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_27 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_47 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.InjuryIncident.PrimaryDoctor), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_67 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.hospital), null, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewExposureDV.Wcinjurydamage.pcf: line 128, column 27
    function def_refreshVariables_114 (def :  pcf.EditableMedicalActionsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_28 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_48 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.InjuryIncident.PrimaryDoctor), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_68 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.hospital), null, Exposure.Claim)
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at NewExposureDV.Wcinjurydamage.pcf: line 103, column 38
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at NewExposureDV.Wcinjurydamage.pcf: line 109, column 43
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleMethod = (__VALUE_TO_SET as typekey.SettleMethod)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Wcinjurydamage.pcf: line 119, column 43
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.altcontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.InjuryIncident.PrimaryDoctor = (__VALUE_TO_SET as entity.Doctor)
    }
    
    // 'value' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.hospital = (__VALUE_TO_SET as entity.MedicalCareOrg)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalTreatment_Input) at NewExposureDV.Wcinjurydamage.pcf: line 82, column 51
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.InjuryIncident.MedicalTreatmentType = (__VALUE_TO_SET as typekey.MedicalTreatmentType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PreexDisability_Input) at NewExposureDV.Wcinjurydamage.pcf: line 87, column 42
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.WCPreexDisblty = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PreexDisabilityInfo_Input) at NewExposureDV.Wcinjurydamage.pcf: line 92, column 46
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.WCPreexDisbltyInfo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Wcinjurydamage.pcf: line 119, column 43
    function filter_111 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_35 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.altcontact); var result = eval("Exposure.altcontact = Exposure.Claim.resolveContact(Exposure.altcontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_55 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.InjuryIncident.PrimaryDoctor); var result = eval("Exposure.InjuryIncident.PrimaryDoctor = Exposure.Claim.resolveContact(Exposure.InjuryIncident.PrimaryDoctor) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_75 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.hospital); var result = eval("Exposure.hospital = Exposure.Claim.resolveContact(Exposure.hospital) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'validationExpression' attribute on DateInput (id=SettlementDate_Input) at NewExposureDV.Wcinjurydamage.pcf: line 103, column 38
    function validationExpression_98 () : java.lang.Object {
      return Exposure.SettleDate == null || Exposure.SettleDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_39 () : java.lang.Object {
      return Exposure.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_59 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.Claim.getContactTypes(TC_DOCTOR)) as Doctor[]
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_79 () : java.lang.Object {
      return Exposure.Claim.RelatedMedicalCareOrgArray
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewExposureDV.Wcinjurydamage.pcf: line 23, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_58 () : java.lang.Object {
      return Exposure.InjuryIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewExposureDV.Wcinjurydamage.pcf: line 23, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_10 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at NewExposureDV.Wcinjurydamage.pcf: line 109, column 43
    function value_104 () : typekey.SettleMethod {
      return Exposure.SettleMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewExposureDV.Wcinjurydamage.pcf: line 119, column 43
    function value_108 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Wcinjurydamage.pcf: line 44, column 65
    function value_22 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewExposureDV.Wcinjurydamage.pcf: line 28, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_36 () : entity.Person {
      return Exposure.altcontact
    }
    
    // 'value' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_56 () : entity.Doctor {
      return Exposure.InjuryIncident.PrimaryDoctor
    }
    
    // 'value' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_76 () : entity.MedicalCareOrg {
      return Exposure.hospital
    }
    
    // 'value' attribute on TypeKeyInput (id=MedicalTreatment_Input) at NewExposureDV.Wcinjurydamage.pcf: line 82, column 51
    function value_86 () : typekey.MedicalTreatmentType {
      return Exposure.InjuryIncident.MedicalTreatmentType
    }
    
    // 'value' attribute on BooleanRadioInput (id=PreexDisability_Input) at NewExposureDV.Wcinjurydamage.pcf: line 87, column 42
    function value_90 () : java.lang.Boolean {
      return Exposure.WCPreexDisblty
    }
    
    // 'value' attribute on TextInput (id=PreexDisabilityInfo_Input) at NewExposureDV.Wcinjurydamage.pcf: line 92, column 46
    function value_94 () : java.lang.String {
      return Exposure.WCPreexDisbltyInfo
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at NewExposureDV.Wcinjurydamage.pcf: line 103, column 38
    function value_99 () : java.util.Date {
      return Exposure.SettleDate
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_40 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_40 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  entity.Doctor[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  gw.api.database.IQueryBeanResult<entity.Doctor>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_80 ($$arg :  entity.MedicalCareOrg[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_80 ($$arg :  gw.api.database.IQueryBeanResult<entity.MedicalCareOrg>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_80 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_41 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_61 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.Claim.getContactTypes(TC_DOCTOR)) as Doctor[]
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_81 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedMedicalCareOrgArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_80(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=AltContact_Name_Input) at NewExposureDV.Wcinjurydamage.pcf: line 55, column 36
    function verifyValueType_45 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at NewExposureDV.Wcinjurydamage.pcf: line 67, column 36
    function verifyValueType_65 () : void {
      var __valueTypeArg : entity.Doctor
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Hospital_Input) at NewExposureDV.Wcinjurydamage.pcf: line 76, column 44
    function verifyValueType_85 () : void {
      var __valueTypeArg : entity.MedicalCareOrg
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewExposureDV.Wcinjurydamage.pcf: line 44, column 65
    function visible_21 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewExposureDV.Wcinjurydamage.pcf: line 30, column 59
    function visible_25 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_26 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_29 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Exposure_Doctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_49 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.InjuryIncident.PrimaryDoctor), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_69 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.hospital), Exposure.Claim, null as List<SpecialistService>)" != "" && true
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