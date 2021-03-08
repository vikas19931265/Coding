package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.cc.claim.NewClaimAssignmentOption
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AssignSaveScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_AssignSaveScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AssignSaveScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_AssignSaveScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_0 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on MenuItem (id=ClaimAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_17 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on MenuItem (id=ClaimAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'value' attribute on Choice (id=CommonAssignChoice) at FNOLWizard_AssignSaveScreen.pcf: line 24, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssignableInstanceForClaim.Assignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on TextAreaInput (id=Note_Input) at FNOLWizard_AssignSaveScreen.pcf: line 67, column 45
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.AssignSaveNoteBody = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'required' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function required_2 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'required' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function required_21 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 137, column 44
    function sortValue_55 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 143, column 49
    function sortValue_56 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 149, column 49
    function sortValue_57 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Incident_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 160, column 44
    function sortValue_58 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Status_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 165, column 50
    function sortValue_59 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyCell (id=CreatedVia_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 170, column 39
    function sortValue_60 (Exposure :  entity.Exposure) : java.lang.Object {
      return Exposure.CreatedVia
    }
    
    // 'toRemove' attribute on RowIterator at FNOLWizard_AssignSaveScreen.pcf: line 128, column 41
    function toRemove_103 (Exposure :  entity.Exposure) : void {
      Wizard.removeExposureWithRenumbering(Exposure)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_6 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'value' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRoot_24 () : java.lang.Object {
      return AssignableInstanceForClaim
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRoot_5 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on RowIterator at FNOLWizard_AssignSaveScreen.pcf: line 128, column 41
    function value_104 () : entity.Exposure[] {
      return Claim.Exposures
    }
    
    // 'value' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_22 () : gw.api.assignment.Assignee {
      return AssignableInstanceForClaim.Assignee
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_3 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'value' attribute on TextAreaInput (id=Note_Input) at FNOLWizard_AssignSaveScreen.pcf: line 67, column 45
    function value_39 () : java.lang.String {
      return Wizard.AssignSaveNoteBody
    }
    
    // 'value' attribute on MenuItemTree at FNOLWizard_AssignSaveScreen.pcf: line 90, column 63
    function value_49 () : gw.api.exposure.NewExposureMenuItem[] {
      return gw.api.exposure.NewExposureMenuUtil.createItemsByCoverage(Claim)
    }
    
    // 'value' attribute on MenuItemTree at FNOLWizard_AssignSaveScreen.pcf: line 105, column 65
    function value_54 () : gw.api.exposure.NewExposureMenuItem[] {
      return gw.api.exposure.NewExposureMenuUtil.createItemsByCoverageType(Claim)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=ClaimAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_8 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at FNOLWizard_AssignSaveScreen.pcf: line 45, column 95
    function visible_16 () : java.lang.Boolean {
      return ((Claim.Exposures != null) && (Claim.Exposures.length > 0))
    }
    
    // 'visible' attribute on DetailViewPanel at FNOLWizard_AssignSaveScreen.pcf: line 73, column 50
    function visible_43 () : java.lang.Boolean {
      return Claim.LossType != LossType.TC_WC
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
    
    
    property get AssignableInstanceForClaim() : NewClaimAssignmentOption {
      var allAssignments = Wizard.IndividualAssignments
      for (var instanceAssignment in allAssignments){
        if (instanceAssignment.Target == Claim) {
           return instanceAssignment
        }
      }
      return null   
    }
          
    
    function getAssignableInstanceForExposure(exposureToFind : Exposure) : NewClaimAssignmentOption {  
      var allAssignments = Wizard.IndividualAssignments
      for (var instanceAssignment in allAssignments){
        if (instanceAssignment.Target == exposureToFind) {
           return instanceAssignment
        }
      }  
      return null
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AssignSaveScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FNOLWizard_AssignSaveScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 137, column 44
    function action_63 () : void {
      NewClaimWizard_ExposurePagePopup.push(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 143, column 49
    function action_68 () : void {
      NewClaimWizard_ExposurePagePopup.push(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 149, column 49
    function action_73 () : void {
      NewClaimWizard_ExposurePagePopup.push(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on MenuItem (id=Exposures_Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_91 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Exposure))))
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 137, column 44
    function action_dest_64 () : pcf.api.Destination {
      return pcf.NewClaimWizard_ExposurePagePopup.createDestination(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 143, column 49
    function action_dest_69 () : pcf.api.Destination {
      return pcf.NewClaimWizard_ExposurePagePopup.createDestination(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 149, column 49
    function action_dest_74 () : pcf.api.Destination {
      return pcf.NewClaimWizard_ExposurePagePopup.createDestination(Claim, Exposure, Wizard)
    }
    
    // 'action' attribute on MenuItem (id=Exposures_Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_dest_92 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Exposure))))
    }
    
    // 'value' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      getAssignableInstanceForExposure(Exposure).Assignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposures_Order_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 137, column 44
    function outputConversion_65 (VALUE :  entity.Exposure) : java.lang.String {
      return VALUE.ClaimOrder as String
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function valueRange_96 () : java.lang.Object {
      return getAssignableInstanceForExposure(Exposure).Target.SuggestedAssignees
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 143, column 49
    function valueRoot_71 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function valueRoot_95 () : java.lang.Object {
      return getAssignableInstanceForExposure(Exposure)
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 137, column 44
    function value_66 () : entity.Exposure {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 143, column 49
    function value_70 () : typekey.ExposureType {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 149, column 49
    function value_75 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Exposures_Claimant_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 155, column 43
    function value_78 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextCell (id=Incident_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 160, column 44
    function value_81 () : entity.Incident {
      return Exposure.Incident
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Status_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 165, column 50
    function value_84 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyCell (id=CreatedVia_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 170, column 39
    function value_87 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function value_93 () : gw.api.assignment.Assignee {
      return getAssignableInstanceForExposure(Exposure).Assignee
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_97 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_97 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRange_98 () : void {
      var __valueRangeArg = getAssignableInstanceForExposure(Exposure).Target.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_97(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=CreatedVia_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 170, column 39
    function verifyValueType_90 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on AssigneeCell (id=Exposures_Assignee_Cell) at FNOLWizard_AssignSaveScreen.pcf: line 182, column 51
    function visible_101 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    property get Exposure () : entity.Exposure {
      return getIteratedValue(1) as entity.Exposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AssignSaveScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MenuItemTreeEntry2ExpressionsImpl extends FNOLWizard_AssignSaveScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 111, column 44
    function action_50 () : void {
      NewClaimWizard_NewExposurePopup.push(Claim, Wizard, item.loadCoverageFromBundle(Claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'action' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 111, column 44
    function action_dest_51 () : pcf.api.Destination {
      return pcf.NewClaimWizard_NewExposurePopup.createDestination(Claim, Wizard, item.loadCoverageFromBundle(Claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'children' attribute on MenuItemTree at FNOLWizard_AssignSaveScreen.pcf: line 105, column 65
    function children_53 () : java.lang.Object {
      return item.Children
    }
    
    // 'label' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 111, column 44
    function label_52 () : java.lang.Object {
      return item.DisplayLabel
    }
    
    property get item () : gw.api.exposure.NewExposureMenuItem {
      return getIteratedValue(1) as gw.api.exposure.NewExposureMenuItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AssignSaveScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MenuItemTreeEntryExpressionsImpl extends FNOLWizard_AssignSaveScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 96, column 42
    function action_45 () : void {
      NewClaimWizard_NewExposurePopup.push(Claim, Wizard, item.loadCoverageFromBundle(Claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'action' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 96, column 42
    function action_dest_46 () : pcf.api.Destination {
      return pcf.NewClaimWizard_NewExposurePopup.createDestination(Claim, Wizard, item.loadCoverageFromBundle(Claim), item.CoverageType, item.CoverageSubtype)
    }
    
    // 'available' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 96, column 42
    function available_44 () : java.lang.Boolean {
      return (item.CoverageType != null and item.CoverageSubtype != null) or item.Children.length > 0
    }
    
    // 'children' attribute on MenuItemTree at FNOLWizard_AssignSaveScreen.pcf: line 90, column 63
    function children_48 () : java.lang.Object {
      return item.Children
    }
    
    // 'label' attribute on MenuItem (id=item) at FNOLWizard_AssignSaveScreen.pcf: line 96, column 42
    function label_47 () : java.lang.Object {
      return item.DisplayLabel
    }
    
    property get item () : gw.api.exposure.NewExposureMenuItem {
      return getIteratedValue(1) as gw.api.exposure.NewExposureMenuItem
    }
    
    
  }
  
  
}