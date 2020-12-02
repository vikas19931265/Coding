package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/metro/MetroReportDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MetroReportDetailsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/metro/MetroReportDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MetroReportDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=DeferralReasonLink) at MetroReportDetailsScreen.pcf: line 71, column 95
    function action_35 () : void {
      MetroURL.push(metroReport.DelayMemoURL)
    }
    
    // 'action' attribute on Link (id=HoldReasonLink) at MetroReportDetailsScreen.pcf: line 80, column 91
    function action_38 () : void {
      MetroURL.push(metroReport.InformationURL)
    }
    
    // 'action' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_45 () : void {
      AddressBookPickerPopup.push(statictypeof (metroReport.DeceasedContact), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_47 () : void {
      if (metroReport.DeceasedContact != null) { ClaimContactDetailPopup.push(metroReport.DeceasedContact, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_49 () : void {
      ClaimContactDetailPopup.push(metroReport.DeceasedContact, claim)
    }
    
    // 'action' attribute on Link (id=DeferralReasonLink) at MetroReportDetailsScreen.pcf: line 71, column 95
    function action_dest_36 () : pcf.api.Destination {
      return pcf.MetroURL.createDestination(metroReport.DelayMemoURL)
    }
    
    // 'action' attribute on Link (id=HoldReasonLink) at MetroReportDetailsScreen.pcf: line 80, column 91
    function action_dest_39 () : pcf.api.Destination {
      return pcf.MetroURL.createDestination(metroReport.InformationURL)
    }
    
    // 'action' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_46 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (metroReport.DeceasedContact), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_50 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(metroReport.DeceasedContact, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_42 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (metroReport.DeceasedContact), null, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_43 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (metroReport.DeceasedContact), null, claim)
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_ReportNumber_Input) at MetroReportDetailsScreen.pcf: line 134, column 45
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.ReportNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_OfficerNumber_Input) at MetroReportDetailsScreen.pcf: line 139, column 44
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.OfficerName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=MetroInvestAgency_DateReported_Input) at MetroReportDetailsScreen.pcf: line 144, column 45
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.DateReported = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgencyCity_Input) at MetroReportDetailsScreen.pcf: line 150, column 42
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.AgentCity = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroInvestAgencyState_Input) at MetroReportDetailsScreen.pcf: line 157, column 38
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.AgentState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function defaultSetter_131 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.VehicleIncident = (__VALUE_TO_SET as entity.VehicleIncident)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForceDuplicate_Input) at MetroReportDetailsScreen.pcf: line 43, column 47
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.ForceDuplicate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.ThirdPartyVehicle = (__VALUE_TO_SET as entity.VehicleIncident)
    }
    
    // 'value' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.DeceasedContact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroReportType_Input) at MetroReportDetailsScreen.pcf: line 30, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.MetroReportType = (__VALUE_TO_SET as typekey.MetroReportType)
    }
    
    // 'value' attribute on DateInput (id=MetroDeceasedDOD_Input) at MetroReportDetailsScreen.pcf: line 102, column 46
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.DateOfDeath = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=MetroLossDescription_Input) at MetroReportDetailsScreen.pcf: line 110, column 48
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.LossDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_Name_Input) at MetroReportDetailsScreen.pcf: line 118, column 42
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.AgentName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroInvestAgency_Type_Input) at MetroReportDetailsScreen.pcf: line 124, column 48
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.MetroAgency = (__VALUE_TO_SET as typekey.MetroAgencyType)
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_Precinct_Input) at MetroReportDetailsScreen.pcf: line 129, column 41
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      metroReport.Precinct = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function editable_148 () : java.lang.Boolean {
      return metroReport.Status == TC_NEW  or metroReport.Status == TC_INSUFFICIENTDATA
    }
    
    // 'editable' attribute on TypeKeyInput (id=MetroReportType_Input) at MetroReportDetailsScreen.pcf: line 30, column 47
    function editable_4 () : java.lang.Boolean {
      return  metroReport.Status == TC_NEW or metroReport.Status == TC_INSUFFICIENTDATA
    }
    
    // EditButtons at MetroReportDetailsScreen.pcf: line 17, column 31
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at MetroReportDetailsScreen.pcf: line 32, column 533
    function onChange_3 () : void {
      if( metroReport.MetroReportType == TC_E or metroReport.MetroReportType == TC_H ) {                                 if (metroReport.LossType ==TC_WC) {                                   metroReport.DeceasedContact = claim.claimant;                                 } else {                                   metroReport.DeceasedContact = claim.Insured;                                 }                           } else {                                 metroReport.DeceasedContact = null;                   }
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_51 (PickedValue :  Contact) : void {
      var contactType = statictypeof (metroReport.DeceasedContact); var result = eval("metroReport.DeceasedContact = claim.resolveContact(metroReport.DeceasedContact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'pickValue' attribute on EditButtons at MetroReportDetailsScreen.pcf: line 17, column 31
    function pickValue_0 () : MetroReport {
      return metroReport
    }
    
    // 'value' attribute on Reflect at MetroReportDetailsScreen.pcf: line 178, column 37
    function reflectionValue_138 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.driver
    }
    
    // 'value' attribute on Reflect at MetroReportDetailsScreen.pcf: line 186, column 64
    function reflectionValue_143 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.driver.PrimaryAddressDisplayValue
    }
    
    // 'required' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function required_129 () : java.lang.Boolean {
      return metroReport.MetroReportType == TC_A or metroReport.MetroReportType == TC_M or                                   metroReport.MetroReportType == TC_D or metroReport.MetroReportType == TC_R or                                   metroReport.MetroReportType == TC_S
    }
    
    // 'required' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function required_149 () : java.lang.Boolean {
      return metroReport.MetroReportType == TC_M
    }
    
    // 'required' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function required_52 () : java.lang.Boolean {
      return metroReport.MetroReportType == TC_E or metroReport.MetroReportType == TC_H
    }
    
    // 'required' attribute on TextAreaInput (id=MetroLossDescription_Input) at MetroReportDetailsScreen.pcf: line 110, column 48
    function required_74 () : java.lang.Boolean {
      return metroReport.MetroReportType == TC_O
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function valueRange_133 () : java.lang.Object {
      return claim.VehicleIncidentsOnly
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_56 () : java.lang.Object {
      return claim.RelatedPersonArray
    }
    
    // 'value' attribute on TextInput (id=InsuredDriverName_Input) at MetroReportDetailsScreen.pcf: line 175, column 39
    function valueRoot_141 () : java.lang.Object {
      return metroReport.VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=InsuredDriverAddress_Input) at MetroReportDetailsScreen.pcf: line 183, column 83
    function valueRoot_146 () : java.lang.Object {
      return metroReport.VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyDriverName_Input) at MetroReportDetailsScreen.pcf: line 201, column 39
    function valueRoot_161 () : java.lang.Object {
      return metroReport.ThirdPartyVehicle
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyDriverAddress_Input) at MetroReportDetailsScreen.pcf: line 209, column 85
    function valueRoot_166 () : java.lang.Object {
      return metroReport.ThirdPartyVehicle.driver
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroReportType_Input) at MetroReportDetailsScreen.pcf: line 30, column 47
    function valueRoot_7 () : java.lang.Object {
      return metroReport
    }
    
    // 'value' attribute on TextInput (id=MetroOrderBy_Input) at MetroReportDetailsScreen.pcf: line 38, column 36
    function value_10 () : entity.User {
      return metroReport.CreateUser
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_OfficerNumber_Input) at MetroReportDetailsScreen.pcf: line 139, column 44
    function value_105 () : java.lang.String {
      return metroReport.OfficerName
    }
    
    // 'value' attribute on DateInput (id=MetroInvestAgency_DateReported_Input) at MetroReportDetailsScreen.pcf: line 144, column 45
    function value_111 () : java.util.Date {
      return metroReport.DateReported
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgencyCity_Input) at MetroReportDetailsScreen.pcf: line 150, column 42
    function value_117 () : java.lang.String {
      return metroReport.AgentCity
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroInvestAgencyState_Input) at MetroReportDetailsScreen.pcf: line 157, column 38
    function value_123 () : typekey.State {
      return metroReport.AgentState
    }
    
    // 'value' attribute on BooleanRadioInput (id=ForceDuplicate_Input) at MetroReportDetailsScreen.pcf: line 43, column 47
    function value_13 () : java.lang.Boolean {
      return metroReport.ForceDuplicate
    }
    
    // 'value' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function value_130 () : entity.VehicleIncident {
      return metroReport.VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=InsuredDriverName_Input) at MetroReportDetailsScreen.pcf: line 175, column 39
    function value_140 () : entity.Person {
      return metroReport.VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=InsuredDriverAddress_Input) at MetroReportDetailsScreen.pcf: line 183, column 83
    function value_145 () : java.lang.String {
      return metroReport.VehicleIncident.driver.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function value_150 () : entity.VehicleIncident {
      return metroReport.ThirdPartyVehicle
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyDriverName_Input) at MetroReportDetailsScreen.pcf: line 201, column 39
    function value_160 () : entity.Person {
      return metroReport.ThirdPartyVehicle.driver
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyDriverAddress_Input) at MetroReportDetailsScreen.pcf: line 209, column 85
    function value_165 () : java.lang.String {
      return metroReport.ThirdPartyVehicle.driver.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on DateInput (id=MetroDateSent_Input) at MetroReportDetailsScreen.pcf: line 48, column 51
    function value_18 () : java.util.Date {
      return metroReport.CreateTime
    }
    
    // 'value' attribute on DateInput (id=MetroDateReceived_Input) at MetroReportDetailsScreen.pcf: line 53, column 51
    function value_23 () : java.util.Date {
      return metroReport.ReceivedDate
    }
    
    // 'value' attribute on TextInput (id=MetroFailedReason_Input) at MetroReportDetailsScreen.pcf: line 58, column 100
    function value_28 () : java.lang.String {
      return metroReport.ErrorMessage
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroStatus_Input) at MetroReportDetailsScreen.pcf: line 63, column 50
    function value_32 () : typekey.MetroReportStatus {
      return metroReport.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroReportType_Input) at MetroReportDetailsScreen.pcf: line 30, column 47
    function value_5 () : typekey.MetroReportType {
      return metroReport.MetroReportType
    }
    
    // 'value' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_53 () : entity.Contact {
      return metroReport.DeceasedContact
    }
    
    // 'value' attribute on DateInput (id=MetroDeceasedDOD_Input) at MetroReportDetailsScreen.pcf: line 102, column 46
    function value_67 () : java.util.Date {
      return metroReport.DateOfDeath
    }
    
    // 'value' attribute on TextAreaInput (id=MetroLossDescription_Input) at MetroReportDetailsScreen.pcf: line 110, column 48
    function value_75 () : java.lang.String {
      return metroReport.LossDescription
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_Name_Input) at MetroReportDetailsScreen.pcf: line 118, column 42
    function value_81 () : java.lang.String {
      return metroReport.AgentName
    }
    
    // 'value' attribute on TypeKeyInput (id=MetroInvestAgency_Type_Input) at MetroReportDetailsScreen.pcf: line 124, column 48
    function value_87 () : typekey.MetroAgencyType {
      return metroReport.MetroAgency
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_Precinct_Input) at MetroReportDetailsScreen.pcf: line 129, column 41
    function value_93 () : java.lang.String {
      return metroReport.Precinct
    }
    
    // 'value' attribute on TextInput (id=MetroInvestAgency_ReportNumber_Input) at MetroReportDetailsScreen.pcf: line 134, column 45
    function value_99 () : java.lang.String {
      return metroReport.ReportNumber
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function verifyValueRangeIsAllowedType_134 ($$arg :  entity.VehicleIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function verifyValueRangeIsAllowedType_134 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function verifyValueRangeIsAllowedType_134 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function verifyValueRangeIsAllowedType_154 ($$arg :  entity.VehicleIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function verifyValueRangeIsAllowedType_154 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function verifyValueRangeIsAllowedType_154 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_57 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_57 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_57 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuredVehicle_Input) at MetroReportDetailsScreen.pcf: line 170, column 49
    function verifyValueRange_135 () : void {
      var __valueRangeArg = claim.VehicleIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_134(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ThirdPartyVehicle_Input) at MetroReportDetailsScreen.pcf: line 196, column 49
    function verifyValueRange_155 () : void {
      var __valueRangeArg = claim.VehicleIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_154(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_58 () : void {
      var __valueRangeArg = claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_57(__valueRangeArg)
    }
    
    // 'editVisible' attribute on EditButtons at MetroReportDetailsScreen.pcf: line 17, column 31
    function visible_1 () : java.lang.Boolean {
      return metroReport.Status == TC_NEW or metroReport.Status == TC_INSUFFICIENTDATA
    }
    
    // 'visible' attribute on InputSet at MetroReportDetailsScreen.pcf: line 160, column 52
    function visible_168 () : java.lang.Boolean {
      return metroReport.LossType ==TC_AUTO
    }
    
    // 'visible' attribute on DateInput (id=MetroDateSent_Input) at MetroReportDetailsScreen.pcf: line 48, column 51
    function visible_17 () : java.lang.Boolean {
      return metroReport.Status != TC_NEW
    }
    
    // 'visible' attribute on TextInput (id=MetroFailedReason_Input) at MetroReportDetailsScreen.pcf: line 58, column 100
    function visible_27 () : java.lang.Boolean {
      return metroReport.ErrorMessage != null and metroReport.ErrorMessage != ""
    }
    
    // 'visible' attribute on ContentInput (id=DeferralReason) at MetroReportDetailsScreen.pcf: line 67, column 54
    function visible_37 () : java.lang.Boolean {
      return metroReport.DelayMemoURL != null
    }
    
    // 'visible' attribute on ContentInput (id=HoldReason) at MetroReportDetailsScreen.pcf: line 76, column 56
    function visible_40 () : java.lang.Boolean {
      return metroReport.InformationURL != null
    }
    
    // 'visible' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_41 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=MetroDeceased_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_44 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (metroReport.DeceasedContact), claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get metroReport () : MetroReport {
      return getRequireValue("metroReport", 0) as MetroReport
    }
    
    property set metroReport ($arg :  MetroReport) {
      setRequireValue("metroReport", 0, $arg)
    }
    
    
  }
  
  
}