package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotExposureReplacementServices600DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposureReplacementServices600DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotExposureReplacementServices600DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposureReplacementServices600DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_Service_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 61, column 46
    function sortValue_10 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Service
    }
    
    // 'value' attribute on TextCell (id=Exposure_RSBenProvider_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 40, column 46
    function sortValue_6 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_Phone_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 46, column 46
    function sortValue_7 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_ServiceType_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 51, column 46
    function sortValue_8 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.EssentialServiceType
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_ProviderType_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 56, column 46
    function sortValue_9 (ClaimContactRole :  dynamic.Dynamic) : java.lang.Object {
      return ClaimContactRole.ClaimContact.ProviderType
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_BenefitsBeginDate_Input) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 17, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure.RSBenefits
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_BenefitsBeginDate_Input) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 17, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.RSBenefits.BenefitsBeginDate 
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposureReplacementServices600DV.pcf: line 34, column 44
    function value_26 () : java.lang.Object[] {
      return util.Snapshot.getClaimContactRolesByRole(Exposure.Claim, "rsbenprovider")
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_BenefitsEndDate_Input) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 22, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.RSBenefits.BenefitsEndDate
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getRequireValue("Exposure", 0) as dynamic.Dynamic
    }
    
    property set Exposure ($arg :  dynamic.Dynamic) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotExposureReplacementServices600DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposureReplacementServices600DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Exposure_RSBenProvider_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 40, column 46
    function valueRoot_12 () : java.lang.Object {
      return ClaimContactRole.ClaimContact
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_Phone_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 46, column 46
    function valueRoot_15 () : java.lang.Object {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Exposure_RSBenProvider_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 40, column 46
    function value_11 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_Phone_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 46, column 46
    function value_14 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_ServiceType_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 51, column 46
    function value_17 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.EssentialServiceType
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_ProviderType_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 56, column 46
    function value_20 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.ProviderType
    }
    
    // 'value' attribute on TextCell (id=EditableServiceProvider_Service_Cell) at ClaimSnapshotExposureReplacementServices600DV.pcf: line 61, column 46
    function value_23 () : dynamic.Dynamic {
      return ClaimContactRole.ClaimContact.Service
    }
    
    property get ClaimContactRole () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}