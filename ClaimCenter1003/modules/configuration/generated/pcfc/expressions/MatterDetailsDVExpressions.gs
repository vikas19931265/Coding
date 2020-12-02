package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/litigation/MatterDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MatterDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/litigation/MatterDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MatterDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_101 () : void {
      ClaimContactDetailPopup.push(Matter.plaintiffatt, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_120 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.plaintifffirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_122 () : void {
      if (Matter.plaintifffirm != null) { ClaimContactDetailPopup.push(Matter.plaintifffirm, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_124 () : void {
      ClaimContactDetailPopup.push(Matter.plaintifffirm, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_143 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.defenseattorney), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_145 () : void {
      if (Matter.defenseattorney != null) { ClaimContactDetailPopup.push(Matter.defenseattorney, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_147 () : void {
      ClaimContactDetailPopup.push(Matter.defenseattorney, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_166 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.defensefirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_168 () : void {
      if (Matter.defensefirm != null) { ClaimContactDetailPopup.push(Matter.defensefirm, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_170 () : void {
      ClaimContactDetailPopup.push(Matter.defensefirm, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_211 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.venue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_213 () : void {
      if (Matter.venue != null) { ClaimContactDetailPopup.push(Matter.venue, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_215 () : void {
      ClaimContactDetailPopup.push(Matter.venue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_22 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.plaintiff), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_24 () : void {
      if (Matter.plaintiff != null) { ClaimContactDetailPopup.push(Matter.plaintiff, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_240 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.judge), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_242 () : void {
      if (Matter.judge != null) { ClaimContactDetailPopup.push(Matter.judge, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_244 () : void {
      ClaimContactDetailPopup.push(Matter.judge, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_25 () : void {
      ClaimContactDetailPopup.push(Matter.plaintiff, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_272 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.arbitrationvenue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_274 () : void {
      if (Matter.arbitrationvenue != null) { ClaimContactDetailPopup.push(Matter.arbitrationvenue, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_276 () : void {
      ClaimContactDetailPopup.push(Matter.arbitrationvenue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_301 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.arbitrator), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_303 () : void {
      if (Matter.arbitrator != null) { ClaimContactDetailPopup.push(Matter.arbitrator, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_305 () : void {
      ClaimContactDetailPopup.push(Matter.arbitrator, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_333 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.hearingvenue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_335 () : void {
      if (Matter.hearingvenue != null) { ClaimContactDetailPopup.push(Matter.hearingvenue, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_337 () : void {
      ClaimContactDetailPopup.push(Matter.hearingvenue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_362 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.hearingjudge), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_364 () : void {
      if (Matter.hearingjudge != null) { ClaimContactDetailPopup.push(Matter.hearingjudge, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_366 () : void {
      ClaimContactDetailPopup.push(Matter.hearingjudge, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_394 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.mediationvenue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_396 () : void {
      if (Matter.mediationvenue != null) { ClaimContactDetailPopup.push(Matter.mediationvenue, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_398 () : void {
      ClaimContactDetailPopup.push(Matter.mediationvenue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_41 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.defendant), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_423 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.mediator), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_425 () : void {
      if (Matter.mediator != null) { ClaimContactDetailPopup.push(Matter.mediator, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_427 () : void {
      ClaimContactDetailPopup.push(Matter.mediator, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_43 () : void {
      if (Matter.defendant != null) { ClaimContactDetailPopup.push(Matter.defendant, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_44 () : void {
      ClaimContactDetailPopup.push(Matter.defendant, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_460 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.filedby), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_462 () : void {
      if (Matter.filedby != null) { ClaimContactDetailPopup.push(Matter.filedby, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_464 () : void {
      ClaimContactDetailPopup.push(Matter.filedby, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_97 () : void {
      AddressBookPickerPopup.push(statictypeof (Matter.plaintiffatt), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_99 () : void {
      if (Matter.plaintiffatt != null) { ClaimContactDetailPopup.push(Matter.plaintiffatt, Matter.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_102 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.plaintiffatt, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_121 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.plaintifffirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_125 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.plaintifffirm, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_144 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.defenseattorney), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_148 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.defenseattorney, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_167 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.defensefirm), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_171 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.defensefirm, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_212 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.venue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_216 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.venue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_23 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.plaintiff), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_241 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.judge), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_245 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.judge, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_26 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.plaintiff, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_273 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.arbitrationvenue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_277 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.arbitrationvenue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_302 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.arbitrator), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_306 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.arbitrator, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_334 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.hearingvenue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_338 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.hearingvenue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_363 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.hearingjudge), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_367 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.hearingjudge, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_395 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.mediationvenue), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_399 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.mediationvenue, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_42 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.defendant), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_424 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.mediator), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_428 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.mediator, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_45 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.defendant, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_461 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.filedby), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_465 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Matter.filedby, Matter.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_98 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Matter.plaintiffatt), Matter.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_117 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.plaintifffirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_140 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.defenseattorney), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_163 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.defensefirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_19 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.plaintiff), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_208 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.venue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_237 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.judge), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_269 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.arbitrationvenue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_298 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.arbitrator), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_330 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.hearingvenue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_359 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.hearingjudge), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_38 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.defendant), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_391 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.mediationvenue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_420 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.mediator), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_457 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.filedby), null, Matter.Claim)
    }
    
    // 'def' attribute on ListViewInput (id=MatterGeneral_Status) at MatterDetailsDV.pcf: line 524, column 27
    function def_onEnter_547 (def :  pcf.EditableMatterStatusLinesLV) : void {
      def.onEnter(Matter)
    }
    
    // 'def' attribute on ListViewInput (id=Counsel_SecAttorney) at MatterDetailsDV.pcf: line 536, column 27
    function def_onEnter_549 (def :  pcf.EditableSecondaryAttorneyLV) : void {
      def.onEnter(Matter)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_94 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Matter.plaintiffatt), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_118 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.plaintifffirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_141 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.defenseattorney), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_164 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.defensefirm), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_20 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.plaintiff), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_209 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.venue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_238 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.judge), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_270 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.arbitrationvenue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_299 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.arbitrator), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_331 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.hearingvenue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_360 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.hearingjudge), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_39 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.defendant), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_392 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.mediationvenue), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_421 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.mediator), null, Matter.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_458 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.filedby), null, Matter.Claim)
    }
    
    // 'def' attribute on ListViewInput (id=MatterGeneral_Status) at MatterDetailsDV.pcf: line 524, column 27
    function def_refreshVariables_548 (def :  pcf.EditableMatterStatusLinesLV) : void {
      def.refreshVariables(Matter)
    }
    
    // 'def' attribute on ListViewInput (id=Counsel_SecAttorney) at MatterDetailsDV.pcf: line 536, column 27
    function def_refreshVariables_550 (def :  pcf.EditableSecondaryAttorneyLV) : void {
      def.refreshVariables(Matter)
    }
    
    // 'def' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_95 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Matter.plaintiffatt), null, Matter.Claim)
    }
    
    // 'value' attribute on TextInput (id=Matter_Name_Input) at MatterDetailsDV.pcf: line 19, column 30
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.plaintiffatt = (__VALUE_TO_SET as entity.Attorney)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.plaintifffirm = (__VALUE_TO_SET as entity.LawFirm)
    }
    
    // 'value' attribute on TypeKeyInput (id=TrialDetails_MatterType_Input) at MatterDetailsDV.pcf: line 40, column 40
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.MatterType = (__VALUE_TO_SET as typekey.MatterType)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.defenseattorney = (__VALUE_TO_SET as entity.Attorney)
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_174 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.defensefirm = (__VALUE_TO_SET as entity.LawFirm)
    }
    
    // 'value' attribute on DateInput (id=Counsel_DefenseApptDate_Input) at MatterDetailsDV.pcf: line 165, column 161
    function defaultSetter_188 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.DefenseApptDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Counsel_SentToDefenseDate_Input) at MatterDetailsDV.pcf: line 172, column 161
    function defaultSetter_194 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.SentToDefenseDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=TrialDetails_TrialDate_Input) at MatterDetailsDV.pcf: line 189, column 87
    function defaultSetter_203 (__VALUE_TO_SET :  java.lang.Object) : void {
      TrialDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_219 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.venue = (__VALUE_TO_SET as entity.LegalVenue)
    }
    
    // 'value' attribute on TextInput (id=TrialDetails_Room_Input) at MatterDetailsDV.pcf: line 206, column 87
    function defaultSetter_232 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.Room = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_248 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.judge = (__VALUE_TO_SET as entity.Adjudicator)
    }
    
    // 'value' attribute on DateInput (id=ArbitrationDetails_TrialDate_Input) at MatterDetailsDV.pcf: line 231, column 91
    function defaultSetter_264 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArbitrationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_280 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.arbitrationvenue = (__VALUE_TO_SET as entity.LegalVenue)
    }
    
    // 'value' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.plaintiff = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=ArbitrationDetails_Room_Input) at MatterDetailsDV.pcf: line 248, column 91
    function defaultSetter_293 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.ArbitrationRoom = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_309 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.arbitrator = (__VALUE_TO_SET as entity.Adjudicator)
    }
    
    // 'value' attribute on DateInput (id=HearingDetails_HearingDate_Input) at MatterDetailsDV.pcf: line 273, column 87
    function defaultSetter_325 (__VALUE_TO_SET :  java.lang.Object) : void {
      HearingDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_341 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.hearingvenue = (__VALUE_TO_SET as entity.LegalVenue)
    }
    
    // 'value' attribute on TextInput (id=HearingDetails_Room_Input) at MatterDetailsDV.pcf: line 290, column 87
    function defaultSetter_354 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.HearingRoom = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_370 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.hearingjudge = (__VALUE_TO_SET as entity.Adjudicator)
    }
    
    // 'value' attribute on DateInput (id=MediationDetails_MediationDate_Input) at MatterDetailsDV.pcf: line 315, column 54
    function defaultSetter_386 (__VALUE_TO_SET :  java.lang.Object) : void {
      MediationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_402 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.mediationvenue = (__VALUE_TO_SET as entity.LegalVenue)
    }
    
    // 'value' attribute on TextInput (id=MediationDetails_Room_Input) at MatterDetailsDV.pcf: line 332, column 54
    function defaultSetter_415 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.MediationRoom = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_431 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.mediator = (__VALUE_TO_SET as entity.Adjudicator)
    }
    
    // 'value' attribute on TextInput (id=DocketNumber_Input) at MatterDetailsDV.pcf: line 401, column 161
    function defaultSetter_446 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.DocketNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=TrialDetails_FilingDate_Input) at MatterDetailsDV.pcf: line 410, column 161
    function defaultSetter_452 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.FileDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_468 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.filedby = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.defendant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on DateInput (id=ServiceDate_Input) at MatterDetailsDV.pcf: line 426, column 161
    function defaultSetter_480 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.ServiceDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=MethodServed_Input) at MatterDetailsDV.pcf: line 434, column 161
    function defaultSetter_486 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.MethodServed = (__VALUE_TO_SET as typekey.MatterMethodServed)
    }
    
    // 'value' attribute on DateInput (id=ResponseDue_Input) at MatterDetailsDV.pcf: line 441, column 161
    function defaultSetter_492 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.ResponseDue = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ResponseFiled_Input) at MatterDetailsDV.pcf: line 448, column 161
    function defaultSetter_498 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.ResponseFiled = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Matter_CaseNumber_Input) at MatterDetailsDV.pcf: line 25, column 36
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.CaseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AdDamnumSpecified_Input) at MatterDetailsDV.pcf: line 456, column 265
    function defaultSetter_505 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.AdDamnumSpecified = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=AdDamnumAmount_Input) at MatterDetailsDV.pcf: line 466, column 118
    function defaultSetter_512 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.AdDamnumAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PunitiveDamages_Input) at MatterDetailsDV.pcf: line 474, column 263
    function defaultSetter_519 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.PunitiveDamages = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=PunitiveAmount_Input) at MatterDetailsDV.pcf: line 484, column 116
    function defaultSetter_526 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.PunitiveAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=Matter_Resolution_Input) at MatterDetailsDV.pcf: line 495, column 45
    function defaultSetter_532 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.Resolution = (__VALUE_TO_SET as typekey.ResolutionType)
    }
    
    // 'value' attribute on CurrencyInput (id=Matter_FinalLegalCost_Input) at MatterDetailsDV.pcf: line 502, column 40
    function defaultSetter_536 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.FinalLegalCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=Matter_FinalSettleCost_Input) at MatterDetailsDV.pcf: line 509, column 41
    function defaultSetter_540 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.FinalSettleCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateInput (id=Matter_FinalSettleDate_Input) at MatterDetailsDV.pcf: line 515, column 41
    function defaultSetter_544 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.FinalSettleDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TrialDetails_SubroRelated_Input) at MatterDetailsDV.pcf: line 64, column 38
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.SubroRelated = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtType_Input) at MatterDetailsDV.pcf: line 85, column 85
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.CourtType = (__VALUE_TO_SET as typekey.MatterCourtType)
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtDistrict_Input) at MatterDetailsDV.pcf: line 95, column 87
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.CourtDistrict = (__VALUE_TO_SET as typekey.MatterCourtDistrict)
    }
    
    // 'value' attribute on TypeKeyInput (id=LegalSpecialty_Input) at MatterDetailsDV.pcf: line 103, column 87
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.LegalSpecialty = (__VALUE_TO_SET as typekey.LegalSpecialty)
    }
    
    // 'value' attribute on TypeKeyInput (id=TrialDetails_PrimaryCause2_Input) at MatterDetailsDV.pcf: line 111, column 87
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Matter.PrimaryCause = (__VALUE_TO_SET as typekey.PrimaryCauseType)
    }
    
    // 'editable' attribute on DateInput (id=TrialDetails_TrialDate_Input) at MatterDetailsDV.pcf: line 189, column 87
    function editable_200 () : java.lang.Boolean {
      return Matter.TrialDateActivity == null || Matter.TrialDateActivity.canEdit()
    }
    
    // 'editable' attribute on DateInput (id=ArbitrationDetails_TrialDate_Input) at MatterDetailsDV.pcf: line 231, column 91
    function editable_261 () : java.lang.Boolean {
      return Matter.ArbitrationDateActivity == null || Matter.ArbitrationDateActivity.canEdit()
    }
    
    // 'editable' attribute on DateInput (id=HearingDetails_HearingDate_Input) at MatterDetailsDV.pcf: line 273, column 87
    function editable_322 () : java.lang.Boolean {
      return Matter.HearingDateActivity == null || Matter.HearingDateActivity.canEdit()
    }
    
    // 'editable' attribute on DateInput (id=MediationDetails_MediationDate_Input) at MatterDetailsDV.pcf: line 315, column 54
    function editable_383 () : java.lang.Boolean {
      return Matter.MediationDateActivity == null || Matter.MediationDateActivity.canEdit()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_103 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.plaintiffatt); var result = eval("Matter.plaintiffatt = Matter.Claim.resolveContact(Matter.plaintiffatt) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_126 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.plaintifffirm); var result = eval("Matter.plaintifffirm = Matter.Claim.resolveContact(Matter.plaintifffirm) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_149 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.defenseattorney); var result = eval("Matter.defenseattorney = Matter.Claim.resolveContact(Matter.defenseattorney) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_172 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.defensefirm); var result = eval("Matter.defensefirm = Matter.Claim.resolveContact(Matter.defensefirm) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_217 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.venue); var result = eval("Matter.venue = Matter.Claim.resolveContact(Matter.venue) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_246 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.judge); var result = eval("Matter.judge = Matter.Claim.resolveContact(Matter.judge) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_27 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.plaintiff); var result = eval("Matter.plaintiff = Matter.Claim.resolveContact(Matter.plaintiff) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_278 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.arbitrationvenue); var result = eval("Matter.arbitrationvenue = Matter.Claim.resolveContact(Matter.arbitrationvenue) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_307 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.arbitrator); var result = eval("Matter.arbitrator = Matter.Claim.resolveContact(Matter.arbitrator) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_339 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.hearingvenue); var result = eval("Matter.hearingvenue = Matter.Claim.resolveContact(Matter.hearingvenue) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_368 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.hearingjudge); var result = eval("Matter.hearingjudge = Matter.Claim.resolveContact(Matter.hearingjudge) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_400 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.mediationvenue); var result = eval("Matter.mediationvenue = Matter.Claim.resolveContact(Matter.mediationvenue) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_429 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.mediator); var result = eval("Matter.mediator = Matter.Claim.resolveContact(Matter.mediator) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_46 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.defendant); var result = eval("Matter.defendant = Matter.Claim.resolveContact(Matter.defendant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_466 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Matter.filedby); var result = eval("Matter.filedby = Matter.Claim.resolveContact(Matter.filedby) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'validationExpression' attribute on BooleanRadioInput (id=AdDamnumSpecified_Input) at MatterDetailsDV.pcf: line 456, column 265
    function validationExpression_502 () : java.lang.Object {
      return (!Matter.AdDamnumSpecified and !(Matter.AdDamnumAmount == null || Matter.AdDamnumAmount.Amount == 0)? DisplayKey.get("Matter.AdDamnumSpecified.Validation"): null)
    }
    
    // 'validationExpression' attribute on BooleanRadioInput (id=PunitiveDamages_Input) at MatterDetailsDV.pcf: line 474, column 263
    function validationExpression_516 () : java.lang.Object {
      return (!Matter.PunitiveDamages and !(Matter.PunitiveAmount == null || Matter.PunitiveAmount.Amount == 0)? DisplayKey.get("Matter.PunitiveDamagesSpecified.Validation"): null)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_107 () : java.lang.Object {
      return Matter.Claim.RelatedAttorneyArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_130 () : java.lang.Object {
      return Matter.Claim.RelatedLawFirmArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_221 () : java.lang.Object {
      return Matter.Claim.RelatedLegalVenueArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_250 () : java.lang.Object {
      return Matter.Claim.RelatedAdjudicatorArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_31 () : java.lang.Object {
      return Matter.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=Matter_Name_Input) at MatterDetailsDV.pcf: line 19, column 30
    function valueRoot_2 () : java.lang.Object {
      return Matter
    }
    
    // 'value' attribute on TextInput (id=Matter_Name_Input) at MatterDetailsDV.pcf: line 19, column 30
    function value_0 () : java.lang.String {
      return Matter.Name
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_104 () : entity.Attorney {
      return Matter.plaintiffatt
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at MatterDetailsDV.pcf: line 33, column 56
    function value_11 () : java.lang.String {
      return Matter.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_127 () : entity.LawFirm {
      return Matter.plaintifffirm
    }
    
    // 'value' attribute on TypeKeyInput (id=TrialDetails_MatterType_Input) at MatterDetailsDV.pcf: line 40, column 40
    function value_14 () : typekey.MatterType {
      return Matter.MatterType
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_150 () : entity.Attorney {
      return Matter.defenseattorney
    }
    
    // 'value' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_173 () : entity.LawFirm {
      return Matter.defensefirm
    }
    
    // 'value' attribute on DateInput (id=Counsel_DefenseApptDate_Input) at MatterDetailsDV.pcf: line 165, column 161
    function value_187 () : java.util.Date {
      return Matter.DefenseApptDate
    }
    
    // 'value' attribute on DateInput (id=Counsel_SentToDefenseDate_Input) at MatterDetailsDV.pcf: line 172, column 161
    function value_193 () : java.util.Date {
      return Matter.SentToDefenseDate
    }
    
    // 'value' attribute on DateInput (id=TrialDetails_TrialDate_Input) at MatterDetailsDV.pcf: line 189, column 87
    function value_202 () : java.util.Date {
      return TrialDate
    }
    
    // 'value' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_218 () : entity.LegalVenue {
      return Matter.venue
    }
    
    // 'value' attribute on TextInput (id=TrialDetails_Room_Input) at MatterDetailsDV.pcf: line 206, column 87
    function value_231 () : java.lang.String {
      return Matter.Room
    }
    
    // 'value' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_247 () : entity.Adjudicator {
      return Matter.judge
    }
    
    // 'value' attribute on DateInput (id=ArbitrationDetails_TrialDate_Input) at MatterDetailsDV.pcf: line 231, column 91
    function value_263 () : java.util.Date {
      return ArbitrationDate
    }
    
    // 'value' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_279 () : entity.LegalVenue {
      return Matter.arbitrationvenue
    }
    
    // 'value' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_28 () : entity.Contact {
      return Matter.plaintiff
    }
    
    // 'value' attribute on TextInput (id=ArbitrationDetails_Room_Input) at MatterDetailsDV.pcf: line 248, column 91
    function value_292 () : java.lang.String {
      return Matter.ArbitrationRoom
    }
    
    // 'value' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_308 () : entity.Adjudicator {
      return Matter.arbitrator
    }
    
    // 'value' attribute on DateInput (id=HearingDetails_HearingDate_Input) at MatterDetailsDV.pcf: line 273, column 87
    function value_324 () : java.util.Date {
      return HearingDate
    }
    
    // 'value' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_340 () : entity.LegalVenue {
      return Matter.hearingvenue
    }
    
    // 'value' attribute on TextInput (id=HearingDetails_Room_Input) at MatterDetailsDV.pcf: line 290, column 87
    function value_353 () : java.lang.String {
      return Matter.HearingRoom
    }
    
    // 'value' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_369 () : entity.Adjudicator {
      return Matter.hearingjudge
    }
    
    // 'value' attribute on DateInput (id=MediationDetails_MediationDate_Input) at MatterDetailsDV.pcf: line 315, column 54
    function value_385 () : java.util.Date {
      return MediationDate
    }
    
    // 'value' attribute on TextInput (id=Matter_CaseNumber_Input) at MatterDetailsDV.pcf: line 25, column 36
    function value_4 () : java.lang.String {
      return Matter.CaseNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_401 () : entity.LegalVenue {
      return Matter.mediationvenue
    }
    
    // 'value' attribute on TextInput (id=MediationDetails_Room_Input) at MatterDetailsDV.pcf: line 332, column 54
    function value_414 () : java.lang.String {
      return Matter.MediationRoom
    }
    
    // 'value' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_430 () : entity.Adjudicator {
      return Matter.mediator
    }
    
    // 'value' attribute on TextInput (id=DocketNumber_Input) at MatterDetailsDV.pcf: line 401, column 161
    function value_445 () : java.lang.String {
      return Matter.DocketNumber
    }
    
    // 'value' attribute on DateInput (id=TrialDetails_FilingDate_Input) at MatterDetailsDV.pcf: line 410, column 161
    function value_451 () : java.util.Date {
      return Matter.FileDate
    }
    
    // 'value' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_467 () : entity.Contact {
      return Matter.filedby
    }
    
    // 'value' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_47 () : entity.Contact {
      return Matter.defendant
    }
    
    // 'value' attribute on DateInput (id=ServiceDate_Input) at MatterDetailsDV.pcf: line 426, column 161
    function value_479 () : java.util.Date {
      return Matter.ServiceDate
    }
    
    // 'value' attribute on TypeKeyInput (id=MethodServed_Input) at MatterDetailsDV.pcf: line 434, column 161
    function value_485 () : typekey.MatterMethodServed {
      return Matter.MethodServed
    }
    
    // 'value' attribute on DateInput (id=ResponseDue_Input) at MatterDetailsDV.pcf: line 441, column 161
    function value_491 () : java.util.Date {
      return Matter.ResponseDue
    }
    
    // 'value' attribute on DateInput (id=ResponseFiled_Input) at MatterDetailsDV.pcf: line 448, column 161
    function value_497 () : java.util.Date {
      return Matter.ResponseFiled
    }
    
    // 'value' attribute on BooleanRadioInput (id=AdDamnumSpecified_Input) at MatterDetailsDV.pcf: line 456, column 265
    function value_504 () : java.lang.Boolean {
      return Matter.AdDamnumSpecified
    }
    
    // 'value' attribute on CurrencyInput (id=AdDamnumAmount_Input) at MatterDetailsDV.pcf: line 466, column 118
    function value_511 () : gw.api.financials.CurrencyAmount {
      return Matter.AdDamnumAmount
    }
    
    // 'value' attribute on BooleanRadioInput (id=PunitiveDamages_Input) at MatterDetailsDV.pcf: line 474, column 263
    function value_518 () : java.lang.Boolean {
      return Matter.PunitiveDamages
    }
    
    // 'value' attribute on CurrencyInput (id=PunitiveAmount_Input) at MatterDetailsDV.pcf: line 484, column 116
    function value_525 () : gw.api.financials.CurrencyAmount {
      return Matter.PunitiveAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=Matter_Resolution_Input) at MatterDetailsDV.pcf: line 495, column 45
    function value_531 () : typekey.ResolutionType {
      return Matter.Resolution
    }
    
    // 'value' attribute on CurrencyInput (id=Matter_FinalLegalCost_Input) at MatterDetailsDV.pcf: line 502, column 40
    function value_535 () : gw.api.financials.CurrencyAmount {
      return Matter.FinalLegalCost
    }
    
    // 'value' attribute on CurrencyInput (id=Matter_FinalSettleCost_Input) at MatterDetailsDV.pcf: line 509, column 41
    function value_539 () : gw.api.financials.CurrencyAmount {
      return Matter.FinalSettleCost
    }
    
    // 'value' attribute on DateInput (id=Matter_FinalSettleDate_Input) at MatterDetailsDV.pcf: line 515, column 41
    function value_543 () : java.util.Date {
      return Matter.FinalSettleDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=TrialDetails_SubroRelated_Input) at MatterDetailsDV.pcf: line 64, column 38
    function value_56 () : java.lang.Boolean {
      return Matter.SubroRelated
    }
    
    // 'value' attribute on DateInput (id=Matter_CloseDate_Input) at MatterDetailsDV.pcf: line 68, column 35
    function value_60 () : java.util.Date {
      return Matter.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Matter_ReopenedReason_Input) at MatterDetailsDV.pcf: line 73, column 51
    function value_63 () : typekey.MatterReopenedReason {
      return Matter.ReopenedReason
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtType_Input) at MatterDetailsDV.pcf: line 85, column 85
    function value_68 () : typekey.MatterCourtType {
      return Matter.CourtType
    }
    
    // 'value' attribute on TypeKeyInput (id=CourtDistrict_Input) at MatterDetailsDV.pcf: line 95, column 87
    function value_74 () : typekey.MatterCourtDistrict {
      return Matter.CourtDistrict
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at MatterDetailsDV.pcf: line 29, column 47
    function value_8 () : java.lang.String {
      return Matter.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=LegalSpecialty_Input) at MatterDetailsDV.pcf: line 103, column 87
    function value_80 () : typekey.LegalSpecialty {
      return Matter.LegalSpecialty
    }
    
    // 'value' attribute on TypeKeyInput (id=TrialDetails_PrimaryCause2_Input) at MatterDetailsDV.pcf: line 111, column 87
    function value_86 () : typekey.PrimaryCauseType {
      return Matter.PrimaryCause
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_108 ($$arg :  entity.Attorney[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_108 ($$arg :  gw.api.database.IQueryBeanResult<entity.Attorney>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_108 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_131 ($$arg :  entity.LawFirm[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_131 ($$arg :  gw.api.database.IQueryBeanResult<entity.LawFirm>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_131 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_154 ($$arg :  entity.Attorney[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_154 ($$arg :  gw.api.database.IQueryBeanResult<entity.Attorney>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_154 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_177 ($$arg :  entity.LawFirm[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_177 ($$arg :  gw.api.database.IQueryBeanResult<entity.LawFirm>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_177 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_222 ($$arg :  entity.LegalVenue[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_222 ($$arg :  gw.api.database.IQueryBeanResult<entity.LegalVenue>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_222 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_251 ($$arg :  entity.Adjudicator[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_251 ($$arg :  gw.api.database.IQueryBeanResult<entity.Adjudicator>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_251 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_283 ($$arg :  entity.LegalVenue[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_283 ($$arg :  gw.api.database.IQueryBeanResult<entity.LegalVenue>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_283 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_312 ($$arg :  entity.Adjudicator[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_312 ($$arg :  gw.api.database.IQueryBeanResult<entity.Adjudicator>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_312 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_32 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_344 ($$arg :  entity.LegalVenue[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_344 ($$arg :  gw.api.database.IQueryBeanResult<entity.LegalVenue>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_344 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_373 ($$arg :  entity.Adjudicator[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_373 ($$arg :  gw.api.database.IQueryBeanResult<entity.Adjudicator>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_373 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_405 ($$arg :  entity.LegalVenue[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_405 ($$arg :  gw.api.database.IQueryBeanResult<entity.LegalVenue>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_405 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_434 ($$arg :  entity.Adjudicator[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_434 ($$arg :  gw.api.database.IQueryBeanResult<entity.Adjudicator>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_434 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_471 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_471 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_471 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_51 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_109 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAttorneyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_108(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_132 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLawFirmArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_131(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_155 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAttorneyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_154(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_178 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLawFirmArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_177(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_223 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLegalVenueArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_222(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_252 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAdjudicatorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_251(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_284 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLegalVenueArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_283(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_313 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAdjudicatorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_312(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_33 () : void {
      var __valueRangeArg = Matter.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_345 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLegalVenueArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_344(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_374 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAdjudicatorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_373(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_406 () : void {
      var __valueRangeArg = Matter.Claim.RelatedLegalVenueArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_405(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_435 () : void {
      var __valueRangeArg = Matter.Claim.RelatedAdjudicatorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_434(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_472 () : void {
      var __valueRangeArg = Matter.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_471(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_52 () : void {
      var __valueRangeArg = Matter.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at MatterDetailsDV.pcf: line 126, column 161
    function verifyValueType_115 () : void {
      var __valueTypeArg : entity.Attorney
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at MatterDetailsDV.pcf: line 136, column 161
    function verifyValueType_138 () : void {
      var __valueTypeArg : entity.LawFirm
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at MatterDetailsDV.pcf: line 146, column 161
    function verifyValueType_161 () : void {
      var __valueTypeArg : entity.Attorney
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at MatterDetailsDV.pcf: line 156, column 161
    function verifyValueType_184 () : void {
      var __valueTypeArg : entity.LawFirm
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at MatterDetailsDV.pcf: line 199, column 87
    function verifyValueType_229 () : void {
      var __valueTypeArg : entity.LegalVenue
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at MatterDetailsDV.pcf: line 216, column 87
    function verifyValueType_258 () : void {
      var __valueTypeArg : entity.Adjudicator
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at MatterDetailsDV.pcf: line 241, column 91
    function verifyValueType_290 () : void {
      var __valueTypeArg : entity.LegalVenue
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at MatterDetailsDV.pcf: line 258, column 91
    function verifyValueType_319 () : void {
      var __valueTypeArg : entity.Adjudicator
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at MatterDetailsDV.pcf: line 283, column 87
    function verifyValueType_351 () : void {
      var __valueTypeArg : entity.LegalVenue
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at MatterDetailsDV.pcf: line 300, column 87
    function verifyValueType_380 () : void {
      var __valueTypeArg : entity.Adjudicator
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at MatterDetailsDV.pcf: line 325, column 54
    function verifyValueType_412 () : void {
      var __valueTypeArg : entity.LegalVenue
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at MatterDetailsDV.pcf: line 342, column 54
    function verifyValueType_441 () : void {
      var __valueTypeArg : entity.Adjudicator
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_PlaintiffLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_119 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.plaintifffirm), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_DefenseAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_142 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.defenseattorney), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_DefenseLawFirm_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_165 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.defensefirm), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_18 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Plaintiff_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_21 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.plaintiff), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=TrialDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_210 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.venue), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=TrialDetails_Judge_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_239 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.judge), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Label at MatterDetailsDV.pcf: line 222, column 91
    function visible_260 () : java.lang.Boolean {
      return Matter.MatterType == TC_ARBITRATION || Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on ClaimContactInput (id=ArbitrationDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_271 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.arbitrationvenue), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=ArbitrationDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_300 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.arbitrator), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Label at MatterDetailsDV.pcf: line 264, column 87
    function visible_321 () : java.lang.Boolean {
      return Matter.MatterType == TC_HEARING || Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on ClaimContactInput (id=HearingDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_332 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.hearingvenue), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=HearingDetails_Arbitrator_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_361 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.hearingjudge), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Label at MatterDetailsDV.pcf: line 306, column 54
    function visible_382 () : java.lang.Boolean {
      return Matter.MatterType == TC_MEDIATION
    }
    
    // 'visible' attribute on ClaimContactInput (id=MediationDetails_Venue_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_393 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.mediationvenue), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Defendant_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_40 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.defendant), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MediationDetails_Mediator_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_422 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.mediator), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=TrialDetails_FiledBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_459 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.filedby), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on BooleanRadioInput (id=AdDamnumSpecified_Input) at MatterDetailsDV.pcf: line 456, column 265
    function visible_503 () : java.lang.Boolean {
      return (Matter.AdDamnumSpecified || !(Matter.AdDamnumAmount == null || Matter.AdDamnumAmount.Amount == 0)) || (Matter.MatterType == TC_LAWSUIT || Matter.MatterType == TC_ARBITRATION || Matter.MatterType == TC_HEARING || Matter.MatterType == TC_GENERAL)
    }
    
    // 'visible' attribute on CurrencyInput (id=AdDamnumAmount_Input) at MatterDetailsDV.pcf: line 466, column 118
    function visible_510 () : java.lang.Boolean {
      return Matter.AdDamnumSpecified || !(Matter.AdDamnumAmount == null || Matter.AdDamnumAmount.Amount == 0)
    }
    
    // 'visible' attribute on BooleanRadioInput (id=PunitiveDamages_Input) at MatterDetailsDV.pcf: line 474, column 263
    function visible_517 () : java.lang.Boolean {
      return (Matter.PunitiveDamages || !(Matter.PunitiveAmount == null || Matter.PunitiveAmount.Amount == 0)) || (Matter.MatterType == TC_LAWSUIT || Matter.MatterType == TC_ARBITRATION || Matter.MatterType == TC_HEARING || Matter.MatterType == TC_GENERAL)
    }
    
    // 'visible' attribute on CurrencyInput (id=PunitiveAmount_Input) at MatterDetailsDV.pcf: line 484, column 116
    function visible_524 () : java.lang.Boolean {
      return Matter.PunitiveDamages || !(Matter.PunitiveAmount == null || Matter.PunitiveAmount.Amount == 0)
    }
    
    // 'visible' attribute on Label at MatterDetailsDV.pcf: line 77, column 86
    function visible_66 () : java.lang.Boolean {
      return Matter.MatterType == TC_LAWSUIT|| Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on TypeKeyInput (id=CourtDistrict_Input) at MatterDetailsDV.pcf: line 95, column 87
    function visible_73 () : java.lang.Boolean {
      return Matter.MatterType == TC_LAWSUIT || Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on Label at MatterDetailsDV.pcf: line 116, column 161
    function visible_92 () : java.lang.Boolean {
      return Matter.MatterType == TC_LAWSUIT || Matter.MatterType == TC_ARBITRATION || Matter.MatterType == TC_HEARING || Matter.MatterType == TC_GENERAL
    }
    
    // 'visible' attribute on ClaimContactInput (id=Counsel_PlaintiffAttorney_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_96 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Matter.plaintiffatt), Matter.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Matter () : Matter {
      return getRequireValue("Matter", 0) as Matter
    }
    
    property set Matter ($arg :  Matter) {
      setRequireValue("Matter", 0, $arg)
    }
    
    
    property get TrialDate() : java.util.Date {
        return Matter.TrialDateActivity.TargetDate
    }  
    property set TrialDate(date : java.util.Date) {
        Matter.updateTrialDate( date )
    }
    
    property get ArbitrationDate() : java.util.Date {
        return Matter.ArbitrationDateActivity.TargetDate
    }
      
    property set ArbitrationDate(date : java.util.Date) {
        Matter.updateArbitrationDate( date )
    }
    
    
    property get HearingDate() : java.util.Date {
        return Matter.HearingDateActivity.TargetDate
    }
      
    property set HearingDate(date : java.util.Date) {
        Matter.updateHearingDate( date )
    }
    
    property get MediationDate() : java.util.Date {
        return Matter.MediationDateActivity.TargetDate
    }
      
    property set MediationDate(date : java.util.Date) {
        Matter.updateMediationDate( date )
    }
        
    
    
  }
  
  
}