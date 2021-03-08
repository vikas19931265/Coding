package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossDetailsDV_PrExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_68 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_70 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_71 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_92 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_94 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_95 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_69 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_72 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_93 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_96 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 202, column 27
    function def_onEnter_117 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 214, column 27
    function def_onEnter_119 (def :  pcf.EditableContributingFactorsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 225, column 27
    function def_onEnter_121 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 97, column 27
    function def_onEnter_50 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 110, column 27
    function def_onEnter_52 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Pr.pcf: line 121, column 54
    function def_onEnter_54 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_65 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_89 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 202, column 27
    function def_refreshVariables_118 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 214, column 27
    function def_refreshVariables_120 (def :  pcf.EditableContributingFactorsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 225, column 27
    function def_refreshVariables_122 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 97, column 27
    function def_refreshVariables_51 (def :  pcf.EditableFixedPropertyIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Pr.pcf: line 110, column 27
    function def_refreshVariables_53 (def :  pcf.EditableInjuryIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Pr.pcf: line 121, column 54
    function def_refreshVariables_55 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_66 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_90 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsDV.Pr.pcf: line 178, column 48
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsDV.Pr.pcf: line 195, column 40
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToAgent = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at LossDetailsDV.Pr.pcf: line 41, column 62
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.PropertyFireDamage.Arson = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at LossDetailsDV.Pr.pcf: line 48, column 51
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LocationOfTheft = (__VALUE_TO_SET as typekey.LocationOfTheft)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Pr.pcf: line 25, column 36
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsDV.Pr.pcf: line 54, column 41
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Pr.pcf: line 65, column 48
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Pr.pcf: line 82, column 32
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_ComputerSecurity_Input) at LossDetailsDV.Pr.pcf: line 90, column 41
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ComputerSecurity = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Pr.pcf: line 131, column 40
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsDV.Pr.pcf: line 137, column 46
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossCause_Input) at LossDetailsDV.Pr.pcf: line 32, column 39
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsDV.Pr.pcf: line 153, column 48
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsDV.Pr.pcf: line 14, column 53
    function initialValue_0 () : gw.api.claim.FnolWizardPropertyHelper {
      return new gw.api.claim.FnolWizardPropertyHelper(Claim)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Pr.pcf: line 84, column 74
    function onChange_39 () : void {
      gw.pcf.ClaimLossDetailsUtil.changedLossDate(Claim)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Pr.pcf: line 34, column 70
    function onChange_5 () : void {
      PropertyHelper.createDamageTypesPerLossCause()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_73 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_97 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at LossDetailsDV.Pr.pcf: line 180, column 43
    function reflectionValue_108 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at LossDetailsDV.Pr.pcf: line 155, column 42
    function reflectionValue_83 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'validationExpression' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Pr.pcf: line 82, column 32
    function validationExpression_40 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function valueRange_35 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_77 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at LossDetailsDV.Pr.pcf: line 41, column 62
    function valueRoot_13 () : java.lang.Object {
      return Claim.PropertyFireDamage
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Pr.pcf: line 25, column 36
    function valueRoot_3 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsDV.Pr.pcf: line 25, column 36
    function value_1 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsDV.Pr.pcf: line 178, column 48
    function value_109 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at LossDetailsDV.Pr.pcf: line 41, column 62
    function value_11 () : java.lang.Boolean {
      return Claim.PropertyFireDamage.Arson
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsDV.Pr.pcf: line 195, column 40
    function value_113 () : java.util.Date {
      return Claim.DateRptdToAgent
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at LossDetailsDV.Pr.pcf: line 48, column 51
    function value_17 () : typekey.LocationOfTheft {
      return Claim.LocationOfTheft
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsDV.Pr.pcf: line 54, column 41
    function value_22 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Pr.pcf: line 65, column 48
    function value_27 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function value_32 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at LossDetailsDV.Pr.pcf: line 82, column 32
    function value_41 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_ComputerSecurity_Input) at LossDetailsDV.Pr.pcf: line 90, column 41
    function value_46 () : java.lang.Boolean {
      return Claim.ComputerSecurity
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Pr.pcf: line 131, column 40
    function value_56 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=LossCause_Input) at LossDetailsDV.Pr.pcf: line 32, column 39
    function value_6 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsDV.Pr.pcf: line 137, column 46
    function value_60 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_74 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsDV.Pr.pcf: line 153, column 48
    function value_84 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_98 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_102 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_102 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_102 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function verifyValueRangeIsAllowedType_36 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function verifyValueRangeIsAllowedType_36 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function verifyValueRangeIsAllowedType_36 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_78 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_78 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_78 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_103 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_102(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Pr.pcf: line 73, column 41
    function verifyValueRange_37 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_36(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_79 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_78(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Picker_Input) at LossDetailsDV.Pr.pcf: line 172, column 36
    function verifyValueType_107 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at LossDetailsDV.Pr.pcf: line 41, column 62
    function visible_10 () : java.lang.Boolean {
      return PropertyHelper.PropertyFireDamage.Present
    }
    
    // 'visible' attribute on TypeKeyInput (id=LocationOfTheft_Input) at LossDetailsDV.Pr.pcf: line 48, column 51
    function visible_16 () : java.lang.Boolean {
      return Claim.LossCause == TC_BURGLARY
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at LossDetailsDV.Pr.pcf: line 65, column 48
    function visible_26 () : java.lang.Boolean {
      return  Claim.FaultRating == TC_1 
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_64 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_67 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_91 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get PropertyHelper () : gw.api.claim.FnolWizardPropertyHelper {
      return getVariableValue("PropertyHelper", 0) as gw.api.claim.FnolWizardPropertyHelper
    }
    
    property set PropertyHelper ($arg :  gw.api.claim.FnolWizardPropertyHelper) {
      setVariableValue("PropertyHelper", 0, $arg)
    }
    
    function createPropertyFireDamageIfNecessary() {
      var claimProperty = entity.Claim.Type.TypeInfo.getProperty("PropertyFireDamage")
      
      if(Claim.LossCause == TC_FIRE) {
        var constructor = claimProperty.FeatureType.TypeInfo.getConstructor({})
        claimProperty.Accessor.setValue(Claim, constructor.Constructor.newInstance({}))
      } else {
        var bean = claimProperty.Accessor.getValue(Claim) as KeyableBean
        if(bean!=null) {
          bean.remove()
          claimProperty.Accessor.setValue(Claim, null)
        }
      }
    }
    
    
  }
  
  
}