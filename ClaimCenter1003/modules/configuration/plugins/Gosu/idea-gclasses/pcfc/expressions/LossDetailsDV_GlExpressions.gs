package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossDetailsDV_GlExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_50 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_52 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_53 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_74 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_76 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_77 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_51 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_54 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_75 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_78 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 187, column 27
    function def_onEnter_107 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 199, column 27
    function def_onEnter_109 (def :  pcf.EditableContributingFactorsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 209, column 27
    function def_onEnter_111 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Gl.pcf: line 70, column 54
    function def_onEnter_32 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Properties) at LossDetailsDV.Gl.pcf: line 79, column 27
    function def_onEnter_34 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 91, column 27
    function def_onEnter_36 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_47 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_71 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 187, column 27
    function def_refreshVariables_108 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 199, column 27
    function def_refreshVariables_110 (def :  pcf.EditableContributingFactorsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 209, column 27
    function def_refreshVariables_112 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Gl.pcf: line 70, column 54
    function def_refreshVariables_33 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Properties) at LossDetailsDV.Gl.pcf: line 79, column 27
    function def_refreshVariables_35 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Gl.pcf: line 91, column 27
    function def_refreshVariables_37 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_48 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_72 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Gl.pcf: line 21, column 36
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToInsured_Input) at LossDetailsDV.Gl.pcf: line 175, column 42
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToInsured = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedofManifestation_Input) at LossDetailsDV.Gl.pcf: line 181, column 42
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ManifestationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Gl.pcf: line 45, column 48
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Gl.pcf: line 62, column 32
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Gl.pcf: line 105, column 40
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsDV.Gl.pcf: line 111, column 46
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossCause_Input) at LossDetailsDV.Gl.pcf: line 28, column 40
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsDV.Gl.pcf: line 127, column 48
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsDV.Gl.pcf: line 34, column 41
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsDV.Gl.pcf: line 152, column 48
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsDV.Gl.pcf: line 169, column 40
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToAgent = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Gl.pcf: line 64, column 74
    function onChange_25 () : void {
      gw.pcf.ClaimLossDetailsUtil.changedLossDate(Claim)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_55 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_79 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at LossDetailsDV.Gl.pcf: line 129, column 42
    function reflectionValue_65 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at LossDetailsDV.Gl.pcf: line 154, column 43
    function reflectionValue_90 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'validationExpression' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Gl.pcf: line 62, column 32
    function validationExpression_26 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function valueRange_21 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_59 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Gl.pcf: line 21, column 36
    function valueRoot_2 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Gl.pcf: line 21, column 36
    function value_0 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedofManifestation_Input) at LossDetailsDV.Gl.pcf: line 181, column 42
    function value_103 () : java.util.Date {
      return Claim.ManifestationDate
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Gl.pcf: line 45, column 48
    function value_13 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function value_18 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Gl.pcf: line 62, column 32
    function value_27 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Gl.pcf: line 105, column 40
    function value_38 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=LossCause_Input) at LossDetailsDV.Gl.pcf: line 28, column 40
    function value_4 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsDV.Gl.pcf: line 111, column 46
    function value_42 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_56 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsDV.Gl.pcf: line 127, column 48
    function value_66 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsDV.Gl.pcf: line 34, column 41
    function value_8 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_80 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsDV.Gl.pcf: line 152, column 48
    function value_91 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsDV.Gl.pcf: line 169, column 40
    function value_95 () : java.util.Date {
      return Claim.DateRptdToAgent
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToInsured_Input) at LossDetailsDV.Gl.pcf: line 175, column 42
    function value_99 () : java.util.Date {
      return Claim.DateRptdToInsured
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_84 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_84 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_84 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Gl.pcf: line 53, column 41
    function verifyValueRange_23 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_61 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_85 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_84(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Picker_Input) at LossDetailsDV.Gl.pcf: line 146, column 36
    function verifyValueType_89 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Gl.pcf: line 45, column 48
    function visible_12 () : java.lang.Boolean {
      return  Claim.FaultRating == TC_1 
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_46 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_49 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_73 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}