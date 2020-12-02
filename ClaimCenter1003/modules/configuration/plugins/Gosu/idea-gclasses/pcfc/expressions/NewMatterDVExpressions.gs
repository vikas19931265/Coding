package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newother/NewMatterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewMatterDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newother/NewMatterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewMatterDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_110 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.plaintifffirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_112 () : void {
      if (Matter.plaintifffirm != null) { ClaimContactDetailPopup.push(Matter.plaintifffirm, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_114 () : void {
      ClaimContactDetailPopup.push(Matter.plaintifffirm, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_133 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.defenseattorney), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_135 () : void {
      if (Matter.defenseattorney != null) { ClaimContactDetailPopup.push(Matter.defenseattorney, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_137 () : void {
      ClaimContactDetailPopup.push(Matter.defenseattorney, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_156 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.defensefirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_158 () : void {
      if (Matter.defensefirm != null) { ClaimContactDetailPopup.push(Matter.defensefirm, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_160 () : void {
      ClaimContactDetailPopup.push(Matter.defensefirm, Matter.Claim)
    }
    
    // 'action' attribute on MenuItem (id=Matter_AssignActivity_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_176 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Matter))), Matter != null ? Matter.Claim : null)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_18 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.plaintiff), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_20 () : void {
      if (Matter.plaintiff != null) { ClaimContactDetailPopup.push(Matter.plaintiff, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_21 () : void {
      ClaimContactDetailPopup.push(Matter.plaintiff, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_37 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.defendant), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_39 () : void {
      if (Matter.defendant != null) { ClaimContactDetailPopup.push(Matter.defendant, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_40 () : void {
      ClaimContactDetailPopup.push(Matter.defendant, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_87 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.plaintiffatt), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_89 () : void {
      if (Matter.plaintiffatt != null) { ClaimContactDetailPopup.push(Matter.plaintiffatt, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_91 () : void {
      ClaimContactDetailPopup.push(Matter.plaintiffatt, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_111 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.plaintifffirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_115 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.plaintifffirm, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_134 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.defenseattorney), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_138 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.defenseattorney, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_157 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.defensefirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_161 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.defensefirm, Matter.Claim)
    }
    
    // 'action' attribute on MenuItem (id=Matter_AssignActivity_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_177 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Matter))), Matter != null ? Matter.Claim : null)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_19 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.plaintiff), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_22 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.plaintiff, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_38 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.defendant), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_41 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.defendant, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_88 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.plaintiffatt), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_92 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.plaintiffatt, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_107 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.plaintifffirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_130 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.defenseattorney), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_15 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.plaintiff), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_153 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.defensefirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_34 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.defendant), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_84 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.plaintiffatt), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_108 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.plaintifffirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_131 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.defenseattorney), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_154 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.defensefirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_16 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.plaintiff), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_35 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.defendant), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_85 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.plaintiffatt), null, Matter.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=MatterType_Input) at NewMatterDV.pcf: line 23, column 40
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.MatterType = (__VALUE_TO_SET as typekey.MatterType)
    }
    
    // 'value' attribute on TextInput (id=Matter_CaseNumber_Input) at NewMatterDV.pcf: line 38, column 161
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.CaseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.plaintifffirm = (__VALUE_TO_SET as entity.LawFirm)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_141 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.defenseattorney = (__VALUE_TO_SET as entity.Attorney)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.defensefirm = (__VALUE_TO_SET as entity.LawFirm)
    }
    
    // 'value' attribute on CCAssigneeInput (id=Matter_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_179 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssigneeHolder[0] = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.plaintiff = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.defendant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=Matter_Name_Input) at NewMatterDV.pcf: line 31, column 30
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TrialDetails_SubroRelated_Input) at NewMatterDV.pcf: line 60, column 38
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.SubroRelated = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtType_Input) at NewMatterDV.pcf: line 72, column 86
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.CourtType = (__VALUE_TO_SET as typekey.MatterCourtType)
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtDistrict_Input) at NewMatterDV.pcf: line 82, column 87
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.CourtDistrict = (__VALUE_TO_SET as typekey.MatterCourtDistrict)
    }
    
    // 'value' attribute on TypeKeyInput (id=LegalSpecialty_Input) at NewMatterDV.pcf: line 90, column 87
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.LegalSpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TypeKeyInput (id=TrialDetails_PrimaryCause_Input) at NewMatterDV.pcf: line 98, column 87
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.PrimaryCause = (__VALUE_TO_SET as typekey.PrimaryCauseType)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.plaintiffatt = (__VALUE_TO_SET as entity.Attorney)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_116 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.plaintifffirm); var result = eval("Matter.plaintifffirm = Matter.Claim.resolveContact(Matter.plaintifffirm) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_139 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.defenseattorney); var result = eval("Matter.defenseattorney = Matter.Claim.resolveContact(Matter.defenseattorney) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_162 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.defensefirm); var result = eval("Matter.defensefirm = Matter.Claim.resolveContact(Matter.defensefirm) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_23 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.plaintiff); var result = eval("Matter.plaintiff = Matter.Claim.resolveContact(Matter.plaintiff) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_42 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.defendant); var result = eval("Matter.defendant = Matter.Claim.resolveContact(Matter.defendant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_93 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.plaintiffatt); var result = eval("Matter.plaintiffatt = Matter.Claim.resolveContact(Matter.plaintiffatt) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_120 () : java.lang.Object {
      return Matter.Claim.RelatedLawFirmArray
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Matter_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_180 () : java.lang.Object {
      return Matter.SuggestedAssignees
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_27 () : java.lang.Object {
      return Matter.Claim.getRelatedContacts()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_97 () : java.lang.Object {
      return Matter.Claim.RelatedAttorneyArray
    }
    
    // 'value' attribute on TypeKeyInput (id=MatterType_Input) at NewMatterDV.pcf: line 23, column 40
    function valueRoot_2 () : java.lang.Object {
      return Matter
    }
    
    // 'value' attribute on TypeKeyInput (id=MatterType_Input) at NewMatterDV.pcf: line 23, column 40
    function value_0 () : typekey.MatterType {
      return Matter.MatterType
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_117 () : entity.LawFirm {
      return Matter.plaintifffirm
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_140 () : entity.Attorney {
      return Matter.defenseattorney
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_163 () : entity.LawFirm {
      return Matter.defensefirm
    }
    
    // 'value' attribute on CCAssigneeInput (id=Matter_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_178 () : gw.api.assignment.Assignee {
      return AssigneeHolder[0]
    }
    
    // 'value' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_24 () : entity.Contact {
      return Matter.plaintiff
    }
    
    // 'value' attribute on TextInput (id=Matter_Name_Input) at NewMatterDV.pcf: line 31, column 30
    function value_4 () : java.lang.String {
      return Matter.Name
    }
    
    // 'value' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_43 () : entity.Contact {
      return Matter.defendant
    }
    
    // 'value' attribute on BooleanRadioInput (id=TrialDetails_SubroRelated_Input) at NewMatterDV.pcf: line 60, column 38
    function value_52 () : java.lang.Boolean {
      return Matter.SubroRelated
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtType_Input) at NewMatterDV.pcf: line 72, column 86
    function value_58 () : typekey.MatterCourtType {
      return Matter.CourtType
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtDistrict_Input) at NewMatterDV.pcf: line 82, column 87
    function value_64 () : typekey.MatterCourtDistrict {
      return Matter.CourtDistrict
    }
    
    // 'value' attribute on TypeKeyInput (id=LegalSpecialty_Input) at NewMatterDV.pcf: line 90, column 87
    function value_70 () : typekey.LegalSpecialty {
      return Matter.LegalSpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=TrialDetails_PrimaryCause_Input) at NewMatterDV.pcf: line 98, column 87
    function value_76 () : typekey.PrimaryCauseType {
      return Matter.PrimaryCause
    }
    
    // 'value' attribute on TextInput (id=Matter_CaseNumber_Input) at NewMatterDV.pcf: line 38, column 161
    function value_9 () : java.lang.String {
      return Matter.CaseNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_94 () : entity.Attorney {
      return Matter.plaintiffatt
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_121 ($$arg :  entity.LawFirm[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_121 ($$arg :  gw.api.database.IQueryBeanResult<entity.LawFirm>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_121 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_144 ($$arg :  entity.Attorney[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_144 ($$arg :  gw.api.database.IQueryBeanResult<entity.Attorney>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_144 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_167 ($$arg :  entity.LawFirm[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_167 ($$arg :  gw.api.database.IQueryBeanResult<entity.LawFirm>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_167 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Matter_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_181 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Matter_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_181 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_28 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_98 ($$arg :  entity.Attorney[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_98 ($$arg :  gw.api.database.IQueryBeanResult<entity.Attorney>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_98 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_122 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLawFirmArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_121(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_145 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAttorneyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_144(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_168 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLawFirmArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_167(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Matter_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_182 () : void {
      var __valueRangeArg = Matter.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_181(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_29 () : void {
      var __valueRangeArg = Matter.Claim.getRelatedContacts()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_48 () : void {
      var __valueRangeArg = Matter.Claim.getRelatedContacts()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_47(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_99 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAttorneyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_98(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at NewMatterDV.pcf: line 113, column 161
    function verifyValueType_105 () : void {
      var __valueTypeArg : entity.Attorney
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at NewMatterDV.pcf: line 123, column 161
    function verifyValueType_128 () : void {
      var __valueTypeArg : entity.LawFirm
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at NewMatterDV.pcf: line 133, column 161
    function verifyValueType_151 () : void {
      var __valueTypeArg : entity.Attorney
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at NewMatterDV.pcf: line 143, column 161
    function verifyValueType_174 () : void {
      var __valueTypeArg : entity.LawFirm
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_109 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.plaintifffirm), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_132 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.defenseattorney), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_14 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_155 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.defensefirm), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_17 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.plaintiff), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_36 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.defendant), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Label at NewMatterDV.pcf: line 64, column 87
    function visible_56 () : java.lang.Boolean {
      return Matter.MatterType == TC_LAWSUIT || Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on TextInput (id=Matter_CaseNumber_Input) at NewMatterDV.pcf: line 38, column 161
    function visible_8 () : java.lang.Boolean {
      return Matter.MatterType == TC_LAWSUIT || Matter.MatterType == TC_ARBITRATION || Matter.MatterType == TC_HEARING || Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_86 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.plaintiffatt), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get AssigneeHolder () : gw.api.assignment.Assignee[] {
      return getRequireValue("AssigneeHolder", 0) as gw.api.assignment.Assignee[]
    }
    
    property set AssigneeHolder ($arg :  gw.api.assignment.Assignee[]) {
      setRequireValue("AssigneeHolder", 0, $arg)
    }
    
    property get Matter () : Matter {
      return getRequireValue("Matter", 0) as Matter
    }
    
    property set Matter ($arg :  Matter) {
      setRequireValue("Matter", 0, $arg)
    }
    
    
  }
  
  
}