package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_BasicInfoScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_BasicInfoScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_10 () : void {
      AddressBookPickerPopup.push(entity.Person.Type, Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_100 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_102 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_12 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_14 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ButtonInput (id=EditContact_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 123, column 49
    function action_75 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim, true)
    }
    
    // 'action' attribute on TextInput (id=Insured_Name_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 132, column 43
    function action_78 () : void {
      ClaimContactDetailPopup.push(Claim.Insured, Claim, true)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_98 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_103 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(entity.Person.Type, Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ButtonInput (id=EditContact_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 123, column 49
    function action_dest_76 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim, true)
    }
    
    // 'action' attribute on TextInput (id=Insured_Name_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 132, column 43
    function action_dest_79 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.Insured, Claim, true)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_99 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_onEnter_124 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Auto) : void {
      def.onEnter(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_onEnter_126 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Gl) : void {
      def.onEnter(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_onEnter_128 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Pr) : void {
      def.onEnter(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_onEnter_130 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Trav) : void {
      def.onEnter(Claim, Wizard)
    }
    
    // 'def' attribute on InputSetRef (id=reporter_businessphone) at FNOLWizard_BasicInfoScreen.default.pcf: line 94, column 49
    function def_onEnter_52 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(Claim.reporter, contact#WorkPhone), DisplayKey.get("Web.BasicInfoScreen.BasicInfoDetailViewPanel.BusinessPhone.Label"), false))
    }
    
    // 'def' attribute on InputSetRef (id=reporter_homephone) at FNOLWizard_BasicInfoScreen.default.pcf: line 99, column 49
    function def_onEnter_56 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(Claim.reporter, contact#HomePhone), DisplayKey.get("Web.BasicInfoScreen.BasicInfoDetailViewPanel.HomePhone.Label"), false))
    }
    
    // 'def' attribute on InputSetRef (id=reporter_mobile) at FNOLWizard_BasicInfoScreen.default.pcf: line 104, column 49
    function def_onEnter_60 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(Claim.reporter, Person#CellPhone), DisplayKey.get("Web.BasicInfoScreen.BasicInfoDetailViewPanel.Mobile.Label"), false))
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_7 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.Person.Type, null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_95 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_refreshVariables_125 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Auto) : void {
      def.refreshVariables(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_refreshVariables_127 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Gl) : void {
      def.refreshVariables(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_refreshVariables_129 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Pr) : void {
      def.refreshVariables(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function def_refreshVariables_131 (def :  pcf.FNOLWizard_BasicInfoRightPanelSet_Trav) : void {
      def.refreshVariables(Claim, Wizard)
    }
    
    // 'def' attribute on InputSetRef (id=reporter_businessphone) at FNOLWizard_BasicInfoScreen.default.pcf: line 94, column 49
    function def_refreshVariables_53 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(Claim.reporter, contact#WorkPhone), DisplayKey.get("Web.BasicInfoScreen.BasicInfoDetailViewPanel.BusinessPhone.Label"), false))
    }
    
    // 'def' attribute on InputSetRef (id=reporter_homephone) at FNOLWizard_BasicInfoScreen.default.pcf: line 99, column 49
    function def_refreshVariables_57 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(Claim.reporter, contact#HomePhone), DisplayKey.get("Web.BasicInfoScreen.BasicInfoDetailViewPanel.HomePhone.Label"), false))
    }
    
    // 'def' attribute on InputSetRef (id=reporter_mobile) at FNOLWizard_BasicInfoScreen.default.pcf: line 104, column 49
    function def_refreshVariables_61 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.StandardPhoneOwner(new gw.api.phone.ContactPhoneDelegate(Claim.reporter, Person#CellPhone), DisplayKey.get("Web.BasicInfoScreen.BasicInfoDetailViewPanel.Mobile.Label"), false))
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_8 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.Person.Type, null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_96 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_MainContactType_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 171, column 64
    function defaultSetter_119 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 64, column 54
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=HowReported_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 44, column 52
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 73, column 43
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=reporter_primarytype_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 111, column 49
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      (Claim.reporter as Person).PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=reporter_email_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 117, column 49
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      (Claim.reporter as Person).EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=MainContactChoice_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 151, column 60
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      basicInfoUtils.MainContactSamePerson = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 64, column 54
    function filter_30 (VALUE :  typekey.PersonRelationType, VALUES :  typekey.PersonRelationType[]) : java.lang.Boolean {
      return VALUE.hasCategory(claimPolicyType)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_BasicInfoScreen.default.pcf: line 17, column 48
    function initialValue_0 () : gw.pcf.fnol.BasicInfoScreenUtils {
      return new gw.pcf.fnol.BasicInfoScreenUtils(Claim)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_BasicInfoScreen.default.pcf: line 21, column 26
    function initialValue_1 () : PolicyType {
      return Claim.Policy.PolicyType
    }
    
    // 'mode' attribute on PanelRef (id=RightPanel) at FNOLWizard_BasicInfoScreen.default.pcf: line 180, column 82
    function mode_132 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.getUIMode(Claim)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 55, column 81
    function onChange_13 () : void {
      basicInfoUtils.setReportedByToInsured()
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_BasicInfoScreen.default.pcf: line 65, column 101
    function onChange_26 () : void {
      basicInfoUtils.fillMainContactFromReportedByForSamePerson()
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_BasicInfoScreen.default.pcf: line 152, column 114
    function onChange_89 () : void {
      basicInfoUtils.fillMainContactFromReportedByForSamePersonOrResetToNull()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_104 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_16 (PickedValue :  Contact) : void {
      var contactType = entity.Person.Type; var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 73, column 43
    function validationExpression_32 () : java.lang.Object {
      return Claim.ReportedDate != null and Claim.ReportedDate > gw.api.util.DateUtil.currentDate() ? DisplayKey.get("Java.Validation.Date.ForbidFuture") : null
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_20 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on TypeKeyInput (id=HowReported_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 44, column 52
    function valueRoot_4 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 81, column 49
    function valueRoot_41 () : java.lang.Object {
      return (Claim.reporter as Person)
    }
    
    // 'value' attribute on TextInput (id=Insured_Address_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 136, column 65
    function valueRoot_84 () : java.lang.Object {
      return Claim.Insured
    }
    
    // 'value' attribute on BooleanRadioInput (id=MainContactChoice_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 151, column 60
    function valueRoot_92 () : java.lang.Object {
      return basicInfoUtils
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_105 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_MainContactType_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 171, column 64
    function value_118 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_17 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=HowReported_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 44, column 52
    function value_2 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 64, column 54
    function value_27 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 73, column 43
    function value_33 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on DateInput (id=DOB_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 81, column 49
    function value_40 () : java.util.Date {
      return (Claim.reporter as Person).DateOfBirth
    }
    
    // 'value' attribute on TextInput (id=reporter_Address_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 89, column 49
    function value_46 () : java.lang.String {
      return (Claim.reporter as Person).PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=reporter_primarytype_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 111, column 49
    function value_63 () : typekey.PrimaryPhoneType {
      return (Claim.reporter as Person).PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=reporter_email_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 117, column 49
    function value_69 () : java.lang.String {
      return (Claim.reporter as Person).EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=Insured_Name_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 132, column 43
    function value_80 () : entity.Contact {
      return Claim.Insured
    }
    
    // 'value' attribute on TextInput (id=Insured_Address_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 136, column 65
    function value_83 () : java.lang.String {
      return Claim.Insured.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Insured_WorkPhone_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 140, column 56
    function value_86 () : java.lang.String {
      return Claim.Insured.PrimaryPhoneValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=MainContactChoice_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 151, column 60
    function value_90 () : java.lang.Boolean {
      return basicInfoUtils.MainContactSamePerson
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_109 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_109 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_109 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_110 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_109(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_22 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Name_Input) at FNOLWizard_BasicInfoScreen.default.pcf: line 163, column 64
    function verifyValueType_116 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_101 () : java.lang.Boolean {
      return !basicInfoUtils.MainContactSamePerson
    }
    
    // 'visible' attribute on Label at FNOLWizard_BasicInfoScreen.default.pcf: line 76, column 49
    function visible_38 () : java.lang.Boolean {
      return Claim.reporter != null
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_6 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_9 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(entity.Person.Type, Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_97 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
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
    
    property get basicInfoUtils () : gw.pcf.fnol.BasicInfoScreenUtils {
      return getVariableValue("basicInfoUtils", 0) as gw.pcf.fnol.BasicInfoScreenUtils
    }
    
    property set basicInfoUtils ($arg :  gw.pcf.fnol.BasicInfoScreenUtils) {
      setVariableValue("basicInfoUtils", 0, $arg)
    }
    
    property get claimPolicyType () : PolicyType {
      return getVariableValue("claimPolicyType", 0) as PolicyType
    }
    
    property set claimPolicyType ($arg :  PolicyType) {
      setVariableValue("claimPolicyType", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  
}