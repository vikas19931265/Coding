package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Set
@javax.annotation.Generated("config/web/pcf/shared/vehicle/VehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleIncidentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/vehicle/VehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_135 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.driver), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_137 () : void {
      if (VehicleIncident.driver != null) { ClaimContactDetailPopup.push(VehicleIncident.driver, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_138 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.driver, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_174 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_176 () : void {
      if (VehicleIncident.incidentowner != null) { ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_180 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_358 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_360 () : void {
      if (VehicleIncident.InsuredRep != null) { ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_362 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_393 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.recoveryagent), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_395 () : void {
      if (VehicleIncident.recoveryagent != null) { ClaimContactDetailPopup.push(VehicleIncident.recoveryagent, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_397 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.recoveryagent, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_136 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.driver), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_139 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.driver, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_175 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_181 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_359 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_363 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_394 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.recoveryagent), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_398 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.recoveryagent, Claim)
    }
    
    // 'available' attribute on Reflect at VehicleIncidentDV.pcf: line 82, column 31
    function available_23 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return Claim.canEditVehicle(VALUE)
    }
    
    // 'available' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 78, column 39
    function available_26 () : java.lang.Boolean {
      return Claim.canEditVehicle(VehicleIncident.Vehicle)
    }
    
    // 'def' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_132 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.driver), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_171 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 347, column 57
    function def_onEnter_227 (def :  pcf.LoanInformationInputSet) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Driver_Citations) at VehicleIncidentDV.pcf: line 354, column 27
    function def_onEnter_229 (def :  pcf.DriverCitationsLV) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Contacts) at VehicleIncidentDV.pcf: line 366, column 27
    function def_onEnter_231 (def :  pcf.EditableIncidentContactsLV) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at VehicleIncidentDV.pcf: line 386, column 40
    function def_onEnter_237 (def :  pcf.AppraisalServiceInputSet) : void {
      def.onEnter(PropertyAppraisalServiceRequest, VehicleIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef (id=RentalServiceInputSet) at VehicleIncidentDV.pcf: line 389, column 37
    function def_onEnter_239 (def :  pcf.RentalServiceInputSet) : void {
      def.onEnter(RentalServiceRequest, VehicleIncident, unusedServiceRequests)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 391, column 145
    function def_onEnter_241 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(Claim, VehicleIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_355 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_390 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.recoveryagent), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=RecoveryAddress) at VehicleIncidentDV.pcf: line 608, column 143
    function def_onEnter_418 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(VehicleIncident.RecoveryAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_133 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.driver), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_172 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 347, column 57
    function def_refreshVariables_228 (def :  pcf.LoanInformationInputSet) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Driver_Citations) at VehicleIncidentDV.pcf: line 354, column 27
    function def_refreshVariables_230 (def :  pcf.DriverCitationsLV) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on ListViewInput (id=Contacts) at VehicleIncidentDV.pcf: line 366, column 27
    function def_refreshVariables_232 (def :  pcf.EditableIncidentContactsLV) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at VehicleIncidentDV.pcf: line 386, column 40
    function def_refreshVariables_238 (def :  pcf.AppraisalServiceInputSet) : void {
      def.refreshVariables(PropertyAppraisalServiceRequest, VehicleIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef (id=RentalServiceInputSet) at VehicleIncidentDV.pcf: line 389, column 37
    function def_refreshVariables_240 (def :  pcf.RentalServiceInputSet) : void {
      def.refreshVariables(RentalServiceRequest, VehicleIncident, unusedServiceRequests)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentDV.pcf: line 391, column 145
    function def_refreshVariables_242 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(Claim, VehicleIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_356 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_391 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.recoveryagent), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=RecoveryAddress) at VehicleIncidentDV.pcf: line 608, column 143
    function def_refreshVariables_419 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(VehicleIncident.RecoveryAddressOwner)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at VehicleIncidentDV.pcf: line 175, column 54
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LicensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_BoatType_Input) at VehicleIncidentDV.pcf: line 188, column 60
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.BoatType = (__VALUE_TO_SET as typekey.BoatType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_OffRoadStyle_Input) at VehicleIncidentDV.pcf: line 201, column 109
    function defaultSetter_126 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.OffRoadStyle = (__VALUE_TO_SET as typekey.OffRoadVehicleStyle)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at VehicleIncidentDV.pcf: line 43, column 43
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossParty = (__VALUE_TO_SET as typekey.LossPartyType)
    }
    
    // 'value' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.driver = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonForUse_Input) at VehicleIncidentDV.pcf: line 227, column 43
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleUseReason = (__VALUE_TO_SET as typekey.ReasonForUse)
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationToInsured_Input) at VehicleIncidentDV.pcf: line 235, column 24
    function defaultSetter_162 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.DriverRelation = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at VehicleIncidentDV.pcf: line 264, column 24
    function defaultSetter_167 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.OwnersPermission = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_184 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.incidentowner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Input) at VehicleIncidentDV.pcf: line 299, column 62
    function defaultSetter_196 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.MinorOnPolicy = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at VehicleIncidentDV.pcf: line 60, column 41
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleType = (__VALUE_TO_SET as typekey.VehicleType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at VehicleIncidentDV.pcf: line 309, column 110
    function defaultSetter_202 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.PercentageDrivenByMinor = (__VALUE_TO_SET as typekey.PercentageDriven)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at VehicleIncidentDV.pcf: line 403, column 39
    function defaultSetter_244 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at VehicleIncidentDV.pcf: line 410, column 47
    function defaultSetter_248 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleParked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossOccured_Input) at VehicleIncidentDV.pcf: line 419, column 41
    function defaultSetter_252 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossOccured = (__VALUE_TO_SET as typekey.LossOccured)
    }
    
    // 'value' attribute on TextInput (id=LossDesc_Input) at VehicleIncidentDV.pcf: line 427, column 58
    function defaultSetter_257 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at VehicleIncidentDV.pcf: line 433, column 51
    function defaultSetter_263 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AirbagsDeployed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at VehicleIncidentDV.pcf: line 438, column 51
    function defaultSetter_268 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.EquipmentFailure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at VehicleIncidentDV.pcf: line 443, column 50
    function defaultSetter_272 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleOperable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at VehicleIncidentDV.pcf: line 448, column 44
    function defaultSetter_276 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.TotalLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 78, column 39
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at VehicleIncidentDV.pcf: line 453, column 47
    function defaultSetter_280 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Collision_Indicator_Input) at VehicleIncidentDV.pcf: line 461, column 43
    function defaultSetter_284 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Collision = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HitAndRun_Input) at VehicleIncidentDV.pcf: line 469, column 45
    function defaultSetter_289 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.HitAndRun = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PhantomVehicle_Input) at VehicleIncidentDV.pcf: line 477, column 46
    function defaultSetter_295 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.PhantomVehicle = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at VehicleIncidentDV.pcf: line 484, column 81
    function defaultSetter_301 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Speed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at VehicleIncidentDV.pcf: line 491, column 46
    function defaultSetter_307 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleDirection = (__VALUE_TO_SET as typekey.VehicleDirection)
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at VehicleIncidentDV.pcf: line 498, column 46
    function defaultSetter_313 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.CollisionPoint = (__VALUE_TO_SET as typekey.CollisionPoint)
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_TrafficViolation_Input) at VehicleIncidentDV.pcf: line 505, column 46
    function defaultSetter_319 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.TrafficViolation = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at VehicleIncidentDV.pcf: line 515, column 131
    function defaultSetter_326 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehStolenInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at VehicleIncidentDV.pcf: line 523, column 48
    function defaultSetter_332 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehLockInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at VehicleIncidentDV.pcf: line 531, column 48
    function defaultSetter_338 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AntiThftInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at VehicleIncidentDV.pcf: line 540, column 48
    function defaultSetter_344 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.OdomRead = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at VehicleIncidentDV.pcf: line 550, column 48
    function defaultSetter_350 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AffdvCmplInd = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_366 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.InsuredRep = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at VehicleIncidentDV.pcf: line 90, column 46
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=RecoveryDate_Input) at VehicleIncidentDV.pcf: line 580, column 49
    function defaultSetter_379 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.RecovDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryState_Input) at VehicleIncidentDV.pcf: line 587, column 49
    function defaultSetter_385 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.RecovState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle = (__VALUE_TO_SET as entity.Vehicle)
    }
    
    // 'value' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_401 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.recoveryagent = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCondition_Input) at VehicleIncidentDV.pcf: line 602, column 48
    function defaultSetter_413 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.RecovCondType = (__VALUE_TO_SET as typekey.RecovCondType)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at VehicleIncidentDV.pcf: line 102, column 47
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at VehicleIncidentDV.pcf: line 115, column 42
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Style = (__VALUE_TO_SET as typekey.VehicleStyle)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at VehicleIncidentDV.pcf: line 127, column 47
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Color = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at VehicleIncidentDV.pcf: line 139, column 155
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_SerialNumber_Input) at VehicleIncidentDV.pcf: line 151, column 153
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.SerialNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at VehicleIncidentDV.pcf: line 164, column 42
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Driver_LicenseState_Input) at VehicleIncidentDV.pcf: line 340, column 42
    function filter_225 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_DRIVING_LIC)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Vehicle_State_Input) at VehicleIncidentDV.pcf: line 164, column 42
    function filter_97 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 16, column 21
    function initialValue_0 () : Claim {
      return VehicleIncident.Claim
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 20, column 22
    function initialValue_1 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.AUTOAPPRAISAL
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentDV.pcf: line 24, column 51
    function initialValue_2 () : java.util.Set<ServiceRequest> {
      return createOtherServiceRequests()
    }
    
    // 'newValue' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function newValue_6 () : java.lang.Object {
      return new Vehicle(VehicleIncident)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_140 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.driver); var result = eval("VehicleIncident.driver = Claim.resolveContact(VehicleIncident.driver) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_182 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.incidentowner); var result = eval("VehicleIncident.incidentowner = Claim.resolveContact(VehicleIncident.incidentowner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_364 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.InsuredRep); var result = eval("VehicleIncident.InsuredRep = Claim.resolveContact(VehicleIncident.InsuredRep) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_399 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.recoveryagent); var result = eval("VehicleIncident.recoveryagent = Claim.resolveContact(VehicleIncident.recoveryagent) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 179, column 39
    function reflectionValue_101 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.LicensePlate
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 192, column 35
    function reflectionValue_110 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.BoatType
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 45, column 39
    function reflectionValue_12 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return (VehicleIncident.Claim.Policy.isPolicyVehicle(VALUE)) ? (typekey.LossPartyType.TC_INSURED) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 205, column 39
    function reflectionValue_121 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.OffRoadStyle
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 237, column 38
    function reflectionValue_159 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (VALUE==Claim.reporter) ? (Claim.ReportedByType) : (VALUE==Claim.maincontact) ? (Claim.MainContactType) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 266, column 42
    function reflectionValue_165 (TRIGGER_INDEX :  int, VALUE :  typekey.PersonRelationType) : java.lang.Object {
      return (VALUE == TC_SELF) ? (true) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // ClaimContactInput (id=Owner_Picker_Input) at VehicleIncidentDV.pcf: line 284, column 42
    function reflectionValue_178 (TRIGGER_INDEX :  int, VALUE :  typekey.PersonRelationType) : java.lang.Object {
      return (VALUE==TC_SELF) ? (VehicleIncident.driver) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at VehicleIncidentDV.pcf: line 62, column 39
    function reflectionValue_18 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return (VehicleIncident.Claim.Policy.isPolicyVehicle(VALUE)) ? (typekey.VehicleType.TC_LISTED) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 316, column 44
    function reflectionValue_206 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 325, column 53
    function reflectionValue_211 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 333, column 40
    function reflectionValue_216 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.LicenseNumber
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 343, column 39
    function reflectionValue_221 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.LicenseState
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 82, column 31
    function reflectionValue_24 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Year
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 94, column 31
    function reflectionValue_33 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Make
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 106, column 32
    function reflectionValue_42 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Model
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 119, column 32
    function reflectionValue_51 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Style
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 131, column 32
    function reflectionValue_60 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Color
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 143, column 30
    function reflectionValue_69 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Vin
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 155, column 39
    function reflectionValue_80 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.SerialNumber
    }
    
    // 'value' attribute on Reflect at VehicleIncidentDV.pcf: line 168, column 32
    function reflectionValue_91 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.State
    }
    
    // 'required' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function required_141 () : java.lang.Boolean {
      return !VehicleIncident.VehicleParked
    }
    
    // 'required' attribute on TypeKeyInput (id=RelationToInsured_Input) at VehicleIncidentDV.pcf: line 235, column 24
    function required_160 () : java.lang.Boolean {
      return (VehicleIncident.LossParty ==  TC_INSURED) and !VehicleIncident.VehicleParked
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_145 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_186 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function valueRange_7 () : java.lang.Object {
      return VehicleIncident.AvailableVehicles
    }
    
    // 'value' attribute on TextInput (id=Driver_Phone_Input) at VehicleIncidentDV.pcf: line 313, column 58
    function valueRoot_209 () : java.lang.Object {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 78, column 39
    function valueRoot_29 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function valueRoot_5 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at VehicleIncidentDV.pcf: line 175, column 54
    function value_104 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 48, column 55
    function value_11 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return typekey.LossPartyType.TC_INSURED
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_BoatType_Input) at VehicleIncidentDV.pcf: line 188, column 60
    function value_114 () : typekey.BoatType {
      return VehicleIncident.Vehicle.BoatType
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_OffRoadStyle_Input) at VehicleIncidentDV.pcf: line 201, column 109
    function value_125 () : typekey.OffRoadVehicleStyle {
      return VehicleIncident.Vehicle.OffRoadStyle
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at VehicleIncidentDV.pcf: line 43, column 43
    function value_13 () : typekey.LossPartyType {
      return VehicleIncident.LossParty
    }
    
    // 'value' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_142 () : entity.Person {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on TypeKeyInput (id=ReasonForUse_Input) at VehicleIncidentDV.pcf: line 227, column 43
    function value_153 () : typekey.ReasonForUse {
      return VehicleIncident.VehicleUseReason
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 243, column 43
    function value_157 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 246, column 44
    function value_158 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return Claim.MainContactType
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationToInsured_Input) at VehicleIncidentDV.pcf: line 235, column 24
    function value_161 () : typekey.PersonRelationType {
      return VehicleIncident.DriverRelation
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at VehicleIncidentDV.pcf: line 264, column 24
    function value_166 () : java.lang.Boolean {
      return VehicleIncident.OwnersPermission
    }
    
    // 'value' attribute on ReflectCondition at VehicleIncidentDV.pcf: line 65, column 52
    function value_17 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return typekey.VehicleType.TC_LISTED
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at VehicleIncidentDV.pcf: line 287, column 45
    function value_177 (TRIGGER_INDEX :  int, VALUE :  typekey.PersonRelationType) : java.lang.Object {
      return VehicleIncident.driver
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_183 () : entity.Contact {
      return VehicleIncident.incidentowner
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at VehicleIncidentDV.pcf: line 60, column 41
    function value_19 () : typekey.VehicleType {
      return VehicleIncident.VehicleType
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Input) at VehicleIncidentDV.pcf: line 299, column 62
    function value_195 () : typekey.YesNo {
      return VehicleIncident.MinorOnPolicy
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at VehicleIncidentDV.pcf: line 309, column 110
    function value_201 () : typekey.PercentageDriven {
      return VehicleIncident.PercentageDrivenByMinor
    }
    
    // 'value' attribute on TextInput (id=Driver_Phone_Input) at VehicleIncidentDV.pcf: line 313, column 58
    function value_208 () : java.lang.String {
      return VehicleIncident.driver.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=Driver_Address_Input) at VehicleIncidentDV.pcf: line 322, column 67
    function value_213 () : java.lang.String {
      return VehicleIncident.driver.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Driver_License_Input) at VehicleIncidentDV.pcf: line 330, column 54
    function value_218 () : java.lang.String {
      return VehicleIncident.driver.LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Driver_LicenseState_Input) at VehicleIncidentDV.pcf: line 340, column 42
    function value_223 () : typekey.Jurisdiction {
      return VehicleIncident.driver.LicenseState
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at VehicleIncidentDV.pcf: line 403, column 39
    function value_243 () : java.lang.String {
      return VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at VehicleIncidentDV.pcf: line 410, column 47
    function value_247 () : java.lang.Boolean {
      return VehicleIncident.VehicleParked
    }
    
    // 'value' attribute on TypeKeyInput (id=LossOccured_Input) at VehicleIncidentDV.pcf: line 419, column 41
    function value_251 () : typekey.LossOccured {
      return VehicleIncident.LossOccured
    }
    
    // 'value' attribute on TextInput (id=LossDesc_Input) at VehicleIncidentDV.pcf: line 427, column 58
    function value_256 () : java.lang.String {
      return VehicleIncident.LossDesc
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at VehicleIncidentDV.pcf: line 433, column 51
    function value_262 () : java.lang.Boolean {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at VehicleIncidentDV.pcf: line 438, column 51
    function value_267 () : java.lang.Boolean {
      return VehicleIncident.EquipmentFailure
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at VehicleIncidentDV.pcf: line 78, column 39
    function value_27 () : java.lang.Integer {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at VehicleIncidentDV.pcf: line 443, column 50
    function value_271 () : java.lang.Boolean {
      return VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at VehicleIncidentDV.pcf: line 448, column 44
    function value_275 () : java.lang.Boolean {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at VehicleIncidentDV.pcf: line 453, column 47
    function value_279 () : gw.api.financials.CurrencyAmount {
      return VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Collision_Indicator_Input) at VehicleIncidentDV.pcf: line 461, column 43
    function value_283 () : java.lang.Boolean {
      return VehicleIncident.Collision
    }
    
    // 'value' attribute on BooleanRadioInput (id=HitAndRun_Input) at VehicleIncidentDV.pcf: line 469, column 45
    function value_288 () : java.lang.Boolean {
      return VehicleIncident.HitAndRun
    }
    
    // 'value' attribute on BooleanRadioInput (id=PhantomVehicle_Input) at VehicleIncidentDV.pcf: line 477, column 46
    function value_294 () : java.lang.Boolean {
      return VehicleIncident.PhantomVehicle
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function value_3 () : entity.Vehicle {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at VehicleIncidentDV.pcf: line 484, column 81
    function value_300 () : java.lang.Integer {
      return VehicleIncident.Speed
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at VehicleIncidentDV.pcf: line 491, column 46
    function value_306 () : typekey.VehicleDirection {
      return VehicleIncident.VehicleDirection
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at VehicleIncidentDV.pcf: line 498, column 46
    function value_312 () : typekey.CollisionPoint {
      return VehicleIncident.CollisionPoint
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_TrafficViolation_Input) at VehicleIncidentDV.pcf: line 505, column 46
    function value_318 () : typekey.YesNo {
      return VehicleIncident.TrafficViolation
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at VehicleIncidentDV.pcf: line 515, column 131
    function value_325 () : java.lang.Boolean {
      return VehicleIncident.VehStolenInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at VehicleIncidentDV.pcf: line 523, column 48
    function value_331 () : java.lang.Boolean {
      return VehicleIncident.VehLockInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at VehicleIncidentDV.pcf: line 531, column 48
    function value_337 () : java.lang.Boolean {
      return VehicleIncident.AntiThftInd
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at VehicleIncidentDV.pcf: line 540, column 48
    function value_343 () : java.lang.Integer {
      return VehicleIncident.OdomRead
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at VehicleIncidentDV.pcf: line 550, column 48
    function value_349 () : typekey.YesNo {
      return VehicleIncident.AffdvCmplInd
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at VehicleIncidentDV.pcf: line 90, column 46
    function value_36 () : java.lang.String {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_365 () : entity.Contact {
      return VehicleIncident.InsuredRep
    }
    
    // 'value' attribute on DateInput (id=RecoveryDate_Input) at VehicleIncidentDV.pcf: line 580, column 49
    function value_378 () : java.util.Date {
      return VehicleIncident.RecovDate
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryState_Input) at VehicleIncidentDV.pcf: line 587, column 49
    function value_384 () : typekey.State {
      return VehicleIncident.RecovState
    }
    
    // 'value' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_400 () : entity.Contact {
      return VehicleIncident.recoveryagent
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCondition_Input) at VehicleIncidentDV.pcf: line 602, column 48
    function value_412 () : typekey.RecovCondType {
      return VehicleIncident.RecovCondType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at VehicleIncidentDV.pcf: line 102, column 47
    function value_45 () : java.lang.String {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at VehicleIncidentDV.pcf: line 115, column 42
    function value_54 () : typekey.VehicleStyle {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at VehicleIncidentDV.pcf: line 127, column 47
    function value_63 () : java.lang.String {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at VehicleIncidentDV.pcf: line 139, column 155
    function value_73 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=Vehicle_SerialNumber_Input) at VehicleIncidentDV.pcf: line 151, column 153
    function value_84 () : java.lang.String {
      return VehicleIncident.Vehicle.SerialNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at VehicleIncidentDV.pcf: line 164, column 42
    function value_94 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_146 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_146 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_146 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_187 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_187 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_187 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_369 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_369 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_369 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_404 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_404 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_404 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function verifyValueRangeIsAllowedType_8 ($$arg :  entity.Vehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.database.IQueryBeanResult<entity.Vehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_147 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_146(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_188 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_187(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_370 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_369(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_405 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_404(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at VehicleIncidentDV.pcf: line 37, column 37
    function verifyValueRange_9 () : void {
      var __valueRangeArg = VehicleIncident.AvailableVehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Driver_Picker_Input) at VehicleIncidentDV.pcf: line 221, column 25
    function verifyValueType_152 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_BoatType_Input) at VehicleIncidentDV.pcf: line 188, column 60
    function visible_113 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style == TC_BOAT
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_OffRoadStyle_Input) at VehicleIncidentDV.pcf: line 201, column 109
    function visible_124 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style == TC_ATV or VehicleIncident.Vehicle.Style == TC_SNOWMOBILE
    }
    
    // 'visible' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_131 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Driver_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_134 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.driver), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_173 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_179 () : java.lang.Boolean {
      return VehicleIncident.LossParty == TC_THIRD_PARTY
    }
    
    // 'visible' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Input) at VehicleIncidentDV.pcf: line 299, column 62
    function visible_194 () : java.lang.Boolean {
      return VehicleIncident.DriverRelation == TC_CHILD
    }
    
    // 'visible' attribute on TypeKeyInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at VehicleIncidentDV.pcf: line 309, column 110
    function visible_200 () : java.lang.Boolean {
      return  VehicleIncident.DriverRelToOwner == TC_CHILD and VehicleIncident.MinorOnPolicy == TC_NO 
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at VehicleIncidentDV.pcf: line 378, column 37
    function visible_233 () : java.lang.Boolean {
      return Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at VehicleIncidentDV.pcf: line 383, column 72
    function visible_235 () : java.lang.Boolean {
      return not Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextInput (id=LossDesc_Input) at VehicleIncidentDV.pcf: line 427, column 58
    function visible_255 () : java.lang.Boolean {
      return VehicleIncident.LossOccured==TC_OTHER
    }
    
    // 'visible' attribute on TextInput (id=Speed_Input) at VehicleIncidentDV.pcf: line 484, column 81
    function visible_299 () : java.lang.Boolean {
      return VehicleIncident.Collision and !VehicleIncident.VehicleParked
    }
    
    // 'visible' attribute on Label at VehicleIncidentDV.pcf: line 509, column 98
    function visible_323 () : java.lang.Boolean {
      return VehicleIncident.LossParty ==  TC_INSURED or VehicleIncident.LossParty == null
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at VehicleIncidentDV.pcf: line 515, column 131
    function visible_324 () : java.lang.Boolean {
      return (VehicleIncident.LossParty ==  TC_INSURED or VehicleIncident.LossParty == null) or VehicleIncident.VehStolenInd
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_357 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_361 () : java.lang.Boolean {
      return VehicleIncident.AffdvCmplInd == TC_YES
    }
    
    // 'visible' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_392 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.recoveryagent), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on InputSetRef (id=RecoveryAddress) at VehicleIncidentDV.pcf: line 608, column 143
    function visible_417 () : java.lang.Boolean {
      return VehicleIncident.VehStolenInd and (VehicleIncident.RecovCondType != null and VehicleIncident.RecovCondType != TC_NOT_RECOV)
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_VIN_Input) at VehicleIncidentDV.pcf: line 139, column 155
    function visible_72 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style != TC_BOAT and VehicleIncident.Vehicle.Style != TC_ATV and VehicleIncident.Vehicle.Style != TC_SNOWMOBILE
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_SerialNumber_Input) at VehicleIncidentDV.pcf: line 151, column 153
    function visible_83 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style == TC_BOAT or VehicleIncident.Vehicle.Style == TC_ATV or VehicleIncident.Vehicle.Style == TC_SNOWMOBILE
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getRequireValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setRequireValue("VehicleIncident", 0, $arg)
    }
    
    property get appraisalIncidentCode () : String {
      return getVariableValue("appraisalIncidentCode", 0) as String
    }
    
    property set appraisalIncidentCode ($arg :  String) {
      setVariableValue("appraisalIncidentCode", 0, $arg)
    }
    
    property get otherServiceRequests () : java.util.Set<ServiceRequest> {
      return getVariableValue("otherServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set otherServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setVariableValue("otherServiceRequests", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    function findServiceRequest(serviceCode : String) : ServiceRequest {
      return VehicleIncident.ServiceRequests.firstWhere(\ sr ->
          sr.Instruction.Services.Count == 1
              and sr.Instruction.Services.single().Service.Code == serviceCode
              and (otherServiceRequests == null or not otherServiceRequests.contains(sr))
      )
    }
    
    property get PropertyAppraisalServiceRequest() : ServiceRequest {
      return findServiceRequest(appraisalIncidentCode)
    }
    
    property get RentalServiceRequest() : ServiceRequest {
      return findServiceRequest(gw.vendormanagement.SpecialistServiceCodeConstants.AUTORENTAL)
    }
    
    function createOtherServiceRequests() :  Set<ServiceRequest> {
      return VehicleIncident.ServiceRequests.where(\sr -> sr != PropertyAppraisalServiceRequest and sr != RentalServiceRequest).toSet()
    }
    
    function areAllOtherRequestsEditable() : boolean {
      return otherServiceRequests.allMatch( \ sr -> sr.IsEditableInUI)
    }
    
    
  }
  
  
}