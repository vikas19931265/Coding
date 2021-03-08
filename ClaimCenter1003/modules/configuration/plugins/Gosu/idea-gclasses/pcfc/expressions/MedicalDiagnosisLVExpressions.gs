package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/MedicalDiagnosisLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MedicalDiagnosisLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/MedicalDiagnosisLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MedicalDiagnosisLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function action_11 () : void {
      ICDCodePopup.push(aMedicalDiagnosis.ICDCode.Code)
    }
    
    // 'action' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function action_14 () : void {
      ICD10Data.push(aMedicalDiagnosis.ICDCode.CodeTrimmed)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_29 () : void {
      AddressBookPickerPopup.push(Doctor.Type, aMedicalDiagnosis.InjuryIncident.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_31 () : void {
      if (aMedicalDiagnosis.Contact != null) { ClaimContactDetailPopup.push(aMedicalDiagnosis.Contact, aMedicalDiagnosis.InjuryIncident.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_32 () : void {
      ClaimContactDetailPopup.push(aMedicalDiagnosis.Contact, aMedicalDiagnosis.InjuryIncident.Claim)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ICDCodePopup.createDestination(aMedicalDiagnosis.ICDCode.Code)
    }
    
    // 'action' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ICD10Data.createDestination(aMedicalDiagnosis.ICDCode.CodeTrimmed)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_30 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(Doctor.Type, aMedicalDiagnosis.InjuryIncident.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(aMedicalDiagnosis.Contact, aMedicalDiagnosis.InjuryIncident.Claim)
    }
    
    // 'condition' attribute on ToolbarFlag at MedicalDiagnosisLV.pcf: line 40, column 30
    function condition_10 () : java.lang.Boolean {
      return aMedicalDiagnosis.ICDCode != null and aMedicalDiagnosis.IsPrimary != true and aMedicalDiagnosis.Contact != null
    }
    
    // 'condition' attribute on ToolbarFlag at MedicalDiagnosisLV.pcf: line 37, column 31
    function condition_9 () : java.lang.Boolean {
      return aMedicalDiagnosis.Contact != null and aMedicalDiagnosis.New != true and aMedicalDiagnosis.ICDCode != null
    }
    
    // 'def' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_26 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(Doctor.Type, null, aMedicalDiagnosis.InjuryIncident.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_27 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(Doctor.Type, null, aMedicalDiagnosis.InjuryIncident.Claim)
    }
    
    // 'value' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      aMedicalDiagnosis.ICDCode = (__VALUE_TO_SET as entity.ICDCode)
    }
    
    // 'value' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      aMedicalDiagnosis.Contact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on CheckBoxCell (id=Compensable_Cell) at MedicalDiagnosisLV.pcf: line 75, column 50
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      aMedicalDiagnosis.Compensable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateCell (id=DateStarted_Cell) at MedicalDiagnosisLV.pcf: line 83, column 50
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      aMedicalDiagnosis.DateStarted = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=DateEnded_Cell) at MedicalDiagnosisLV.pcf: line 90, column 48
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      aMedicalDiagnosis.DateEnded = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaCell (id=Comments_Cell) at MedicalDiagnosisLV.pcf: line 96, column 47
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      aMedicalDiagnosis.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'highlighted' attribute on Row (id=MedicalDiagnosisRow) at MedicalDiagnosisLV.pcf: line 43, column 34
    function highlighted_65 () : java.lang.Boolean {
      return aMedicalDiagnosis.IsPrimary == true
    }
    
    // 'inputConversion' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function inputConversion_16 (VALUE :  java.lang.String) : java.lang.Object {
      return helper.convertInputtedICDCode(VALUE)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_34 (PickedValue :  Contact) : void {
      var contactType = Doctor.Type; var result = eval("aMedicalDiagnosis.Contact = aMedicalDiagnosis.InjuryIncident.Claim.resolveContact(aMedicalDiagnosis.Contact) as " + contactType.Name + ";return null;"); helper.providerOnPick(aMedicalDiagnosis);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Provider_name_Cell) at MedicalDiagnosisLV.pcf: line 70, column 57
    function onPick_41 (PickedValue :  java.lang.Object) : void {
      helper.providerOnPick(aMedicalDiagnosis)
    }
    
    // 'validationExpression' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function validationExpression_13 () : java.lang.Object {
      return helper.validateICDCode(aMedicalDiagnosis.ICDCode.Code)
    }
    
    // 'validationExpression' attribute on DateCell (id=DateStarted_Cell) at MedicalDiagnosisLV.pcf: line 83, column 50
    function validationExpression_49 () : java.lang.Object {
      return aMedicalDiagnosis.DateStarted > aMedicalDiagnosis.DateEnded ? DisplayKey.get("NVV.Claim.MedCaseMgrDetails.MedicalDiagnosis.StartedOn.Validation") : null
    }
    
    // 'validationExpression' attribute on DateCell (id=DateEnded_Cell) at MedicalDiagnosisLV.pcf: line 90, column 48
    function validationExpression_55 () : java.lang.Object {
      return aMedicalDiagnosis.DateEnded > currDate ? DisplayKey.get("NVV.Claim.MedCaseMgrDetails.MedicalDiagnosis.EndedOn.Validation") : null
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_38 () : java.lang.Object {
      return injury.Claim.RelatedDoctorArray
    }
    
    // 'value' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function valueRoot_19 () : java.lang.Object {
      return aMedicalDiagnosis
    }
    
    // 'value' attribute on TextCell (id=ICDDesc_Cell) at MedicalDiagnosisLV.pcf: line 59, column 55
    function valueRoot_23 () : java.lang.Object {
      return aMedicalDiagnosis.ICDCode
    }
    
    // 'value' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function value_17 () : entity.ICDCode {
      return aMedicalDiagnosis.ICDCode
    }
    
    // 'value' attribute on TextCell (id=ICDDesc_Cell) at MedicalDiagnosisLV.pcf: line 59, column 55
    function value_22 () : java.lang.String {
      return aMedicalDiagnosis.ICDCode.CodeDesc
    }
    
    // 'value' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_35 () : entity.Contact {
      return aMedicalDiagnosis.Contact
    }
    
    // 'value' attribute on CheckBoxCell (id=Compensable_Cell) at MedicalDiagnosisLV.pcf: line 75, column 50
    function value_45 () : java.lang.Boolean {
      return aMedicalDiagnosis.Compensable
    }
    
    // 'value' attribute on DateCell (id=DateStarted_Cell) at MedicalDiagnosisLV.pcf: line 83, column 50
    function value_50 () : java.util.Date {
      return aMedicalDiagnosis.DateStarted
    }
    
    // 'value' attribute on DateCell (id=DateEnded_Cell) at MedicalDiagnosisLV.pcf: line 90, column 48
    function value_56 () : java.util.Date {
      return aMedicalDiagnosis.DateEnded
    }
    
    // 'value' attribute on TextAreaCell (id=Comments_Cell) at MedicalDiagnosisLV.pcf: line 96, column 47
    function value_61 () : java.lang.String {
      return aMedicalDiagnosis.Comments
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_40 () : void {
      var __valueRangeArg = injury.Claim.RelatedDoctorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_25 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=Provider_name_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_28 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(Doctor.Type, aMedicalDiagnosis.InjuryIncident.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get aMedicalDiagnosis () : entity.InjuryDiagnosis {
      return getIteratedValue(1) as entity.InjuryDiagnosis
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/MedicalDiagnosisLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MedicalDiagnosisLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at MedicalDiagnosisLV.pcf: line 15, column 30
    function initialValue_0 () : java.util.Date {
      return gw.api.util.DateUtil.currentDate()
    }
    
    // 'initialValue' attribute on Variable at MedicalDiagnosisLV.pcf: line 26, column 63
    function initialValue_1 () : gw.pcf.medicalcasemgmt.MedicalDiagnosisLVHelper {
      return new gw.pcf.medicalcasemgmt.MedicalDiagnosisLVHelper(injury)
    }
    
    // 'value' attribute on PickerCell (id=ICDCode_Cell) at MedicalDiagnosisLV.pcf: line 53, column 38
    function sortValue_2 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.ICDCode
    }
    
    // 'value' attribute on TextCell (id=ICDDesc_Cell) at MedicalDiagnosisLV.pcf: line 59, column 55
    function sortValue_3 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.ICDCode.CodeDesc
    }
    
    // 'value' attribute on ClaimContactCell (id=Provider_name_Cell) at MedicalDiagnosisLV.pcf: line 70, column 57
    function sortValue_4 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.Contact
    }
    
    // 'value' attribute on CheckBoxCell (id=Compensable_Cell) at MedicalDiagnosisLV.pcf: line 75, column 50
    function sortValue_5 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.Compensable
    }
    
    // 'value' attribute on DateCell (id=DateStarted_Cell) at MedicalDiagnosisLV.pcf: line 83, column 50
    function sortValue_6 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.DateStarted
    }
    
    // 'value' attribute on DateCell (id=DateEnded_Cell) at MedicalDiagnosisLV.pcf: line 90, column 48
    function sortValue_7 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.DateEnded
    }
    
    // 'value' attribute on TextAreaCell (id=Comments_Cell) at MedicalDiagnosisLV.pcf: line 96, column 47
    function sortValue_8 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : java.lang.Object {
      return aMedicalDiagnosis.Comments
    }
    
    // 'toAdd' attribute on RowIterator at MedicalDiagnosisLV.pcf: line 34, column 44
    function toAdd_66 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : void {
      injury.addToInjuryDiagnoses( aMedicalDiagnosis )
    }
    
    // 'toRemove' attribute on RowIterator at MedicalDiagnosisLV.pcf: line 34, column 44
    function toRemove_67 (aMedicalDiagnosis :  entity.InjuryDiagnosis) : void {
      aMedicalDiagnosis.addNoteIfPrimaryDiagnosisIsRemoved(); injury.removeFromInjuryDiagnoses( aMedicalDiagnosis ) 
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=MedicalDiagnosisLV) at MedicalDiagnosisLV.pcf: line 7, column 266
    function validationExpression_69 () : java.lang.Object {
      return (injury.InjuryDiagnoses.length > 1 and injury.InjuryDiagnoses.countWhere( \ i -> i.IsPrimary == true ) < 1 ) and isEditable == true ? DisplayKey.get("Validation.ClaimFile.MedCaseMgmt.SelectPrimaryDiagnosisCode") : null
    }
    
    // 'value' attribute on RowIterator at MedicalDiagnosisLV.pcf: line 34, column 44
    function value_68 () : entity.InjuryDiagnosis[] {
      return injury.InjuryDiagnoses
    }
    
    property get currDate () : java.util.Date {
      return getVariableValue("currDate", 0) as java.util.Date
    }
    
    property set currDate ($arg :  java.util.Date) {
      setVariableValue("currDate", 0, $arg)
    }
    
    property get helper () : gw.pcf.medicalcasemgmt.MedicalDiagnosisLVHelper {
      return getVariableValue("helper", 0) as gw.pcf.medicalcasemgmt.MedicalDiagnosisLVHelper
    }
    
    property set helper ($arg :  gw.pcf.medicalcasemgmt.MedicalDiagnosisLVHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get injury () : InjuryIncident {
      return getRequireValue("injury", 0) as InjuryIncident
    }
    
    property set injury ($arg :  InjuryIncident) {
      setRequireValue("injury", 0, $arg)
    }
    
    property get isEditable () : Boolean {
      return getRequireValue("isEditable", 0) as Boolean
    }
    
    property set isEditable ($arg :  Boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    
  }
  
  
}