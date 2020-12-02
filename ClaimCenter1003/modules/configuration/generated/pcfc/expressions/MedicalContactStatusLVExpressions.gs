package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/MedicalContactStatusLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MedicalContactStatusLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/MedicalContactStatusLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MedicalContactStatusLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_InfoSource_Cell) at MedicalContactStatusLV.pcf: line 34, column 43
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      MedicalContactStatus.InfoSource = (__VALUE_TO_SET as typekey.InfoSource)
    }
    
    // 'value' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      MedicalContactStatus.ClaimContact = (__VALUE_TO_SET as entity.ClaimContact)
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_MedicalTreatmentStatus_Cell) at MedicalContactStatusLV.pcf: line 48, column 55
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      MedicalContactStatus.MedicalTreatmentStatus = (__VALUE_TO_SET as typekey.MedicalTreatmentStatus)
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_TreatmentOutcome_Cell) at MedicalContactStatusLV.pcf: line 54, column 49
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      MedicalContactStatus.TreatmentOutcome = (__VALUE_TO_SET as typekey.TreatmentOutcome)
    }
    
    // 'value' attribute on DateCell (id=NextFollowUpDate_Cell) at MedicalContactStatusLV.pcf: line 60, column 58
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      MedicalContactStatus.NextFollowUpDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=MedicalContactStatus_CommunicationDate_Cell) at MedicalContactStatusLV.pcf: line 28, column 59
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      MedicalContactStatus.CommunicationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'validationExpression' attribute on DateCell (id=NextFollowUpDate_Cell) at MedicalContactStatusLV.pcf: line 60, column 58
    function validationExpression_29 () : java.lang.Object {
      return MedicalContactStatus.NextFollowUpDate == null || MedicalContactStatus.NextFollowUpDate.after( MedicalContactStatus.CommunicationDate ) ? null : DisplayKey.get("MedicalContactStatus.NextFollowUpDate.ValidationErrorMessage")
    }
    
    // 'valueRange' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function valueRange_17 () : java.lang.Object {
      return Claim.getAllContactsWithRoles((new ContactRole[] { TC_HOSPITAL, TC_DOCTOR, TC_FIRSTINTAKEDOCTOR, TC_PRIMARYDOCTOR, TC_OCCTHERAPIST, TC_PHYSTHERAPIST })?.toList() )
    }
    
    // 'value' attribute on DateCell (id=MedicalContactStatus_CommunicationDate_Cell) at MedicalContactStatusLV.pcf: line 28, column 59
    function valueRoot_8 () : java.lang.Object {
      return MedicalContactStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_InfoSource_Cell) at MedicalContactStatusLV.pcf: line 34, column 43
    function value_10 () : typekey.InfoSource {
      return MedicalContactStatus.InfoSource
    }
    
    // 'value' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function value_14 () : entity.ClaimContact {
      return MedicalContactStatus.ClaimContact
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_MedicalTreatmentStatus_Cell) at MedicalContactStatusLV.pcf: line 48, column 55
    function value_21 () : typekey.MedicalTreatmentStatus {
      return MedicalContactStatus.MedicalTreatmentStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_TreatmentOutcome_Cell) at MedicalContactStatusLV.pcf: line 54, column 49
    function value_25 () : typekey.TreatmentOutcome {
      return MedicalContactStatus.TreatmentOutcome
    }
    
    // 'value' attribute on DateCell (id=NextFollowUpDate_Cell) at MedicalContactStatusLV.pcf: line 60, column 58
    function value_30 () : java.util.Date {
      return MedicalContactStatus.NextFollowUpDate
    }
    
    // 'value' attribute on DateCell (id=MedicalContactStatus_CommunicationDate_Cell) at MedicalContactStatusLV.pcf: line 28, column 59
    function value_6 () : java.util.Date {
      return MedicalContactStatus.CommunicationDate
    }
    
    // 'valueRange' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.ClaimContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.ClaimContact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function verifyValueRange_19 () : void {
      var __valueRangeArg = Claim.getAllContactsWithRoles((new ContactRole[] { TC_HOSPITAL, TC_DOCTOR, TC_FIRSTINTAKEDOCTOR, TC_PRIMARYDOCTOR, TC_OCCTHERAPIST, TC_PHYSTHERAPIST })?.toList() )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    property get MedicalContactStatus () : entity.MedicalContactStatus {
      return getIteratedValue(1) as entity.MedicalContactStatus
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/medicalcasemgmt/MedicalContactStatusLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MedicalContactStatusLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=MedicalContactStatus_CommunicationDate_Cell) at MedicalContactStatusLV.pcf: line 28, column 59
    function sortValue_0 (MedicalContactStatus :  entity.MedicalContactStatus) : java.lang.Object {
      return MedicalContactStatus.CommunicationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_InfoSource_Cell) at MedicalContactStatusLV.pcf: line 34, column 43
    function sortValue_1 (MedicalContactStatus :  entity.MedicalContactStatus) : java.lang.Object {
      return MedicalContactStatus.InfoSource
    }
    
    // 'value' attribute on RangeCell (id=MedicalContactStatus_ProviderName_Cell) at MedicalContactStatusLV.pcf: line 42, column 44
    function sortValue_2 (MedicalContactStatus :  entity.MedicalContactStatus) : java.lang.Object {
      return MedicalContactStatus.ClaimContact
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_MedicalTreatmentStatus_Cell) at MedicalContactStatusLV.pcf: line 48, column 55
    function sortValue_3 (MedicalContactStatus :  entity.MedicalContactStatus) : java.lang.Object {
      return MedicalContactStatus.MedicalTreatmentStatus
    }
    
    // 'value' attribute on TypeKeyCell (id=MedicalContactStatus_TreatmentOutcome_Cell) at MedicalContactStatusLV.pcf: line 54, column 49
    function sortValue_4 (MedicalContactStatus :  entity.MedicalContactStatus) : java.lang.Object {
      return MedicalContactStatus.TreatmentOutcome
    }
    
    // 'value' attribute on DateCell (id=NextFollowUpDate_Cell) at MedicalContactStatusLV.pcf: line 60, column 58
    function sortValue_5 (MedicalContactStatus :  entity.MedicalContactStatus) : java.lang.Object {
      return MedicalContactStatus.NextFollowUpDate
    }
    
    // 'toAdd' attribute on RowIterator at MedicalContactStatusLV.pcf: line 20, column 49
    function toAdd_35 (MedicalContactStatus :  entity.MedicalContactStatus) : void {
      Claim.addToMedicalContactStatus(MedicalContactStatus)
    }
    
    // 'toRemove' attribute on RowIterator at MedicalContactStatusLV.pcf: line 20, column 49
    function toRemove_36 (MedicalContactStatus :  entity.MedicalContactStatus) : void {
      Claim.removeFromMedicalContactStatus(MedicalContactStatus)
    }
    
    // 'value' attribute on RowIterator at MedicalContactStatusLV.pcf: line 20, column 49
    function value_37 () : entity.MedicalContactStatus[] {
      return Claim.MedicalContactStatus
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}