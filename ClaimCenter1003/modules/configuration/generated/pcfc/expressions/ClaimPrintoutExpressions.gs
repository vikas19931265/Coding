package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPrintoutExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 159, column 53
    function locationRef_22 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Associations1Section) at ClaimPrintout.pcf: line 154, column 48
    function printable_24 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // PrintSection (id=Associations1Section) at ClaimPrintout.pcf: line 154, column 48
    function visible_23 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 560, column 46
    function locationRef_135 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 556, column 52
    function locationRef_136 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Associations2Section) at ClaimPrintout.pcf: line 551, column 48
    function printable_138 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // PrintSection (id=Associations2Section) at ClaimPrintout.pcf: line 551, column 48
    function visible_137 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function defaultSetter_366 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1212, column 53
    function locationRef_359 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1222, column 46
    function locationRef_360 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1218, column 52
    function locationRef_361 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function value_363 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function visible_362 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function visible_364 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function visible_368 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 296, column 57
    function locationRef_62 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Checks1Section) at ClaimPrintout.pcf: line 291, column 52
    function printable_64 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // PrintSection (id=Checks1Section) at ClaimPrintout.pcf: line 291, column 52
    function visible_63 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 769, column 39
    function locationRef_195 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 765, column 56
    function locationRef_196 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Checks2Section) at ClaimPrintout.pcf: line 760, column 52
    function printable_198 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // PrintSection (id=Checks2Section) at ClaimPrintout.pcf: line 760, column 52
    function visible_197 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function defaultSetter_552 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1687, column 57
    function locationRef_545 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1697, column 39
    function locationRef_546 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1693, column 56
    function locationRef_547 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function value_549 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function visible_548 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function visible_550 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function visible_554 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiability1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 202, column 121
    function label_38 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 207, column 70
    function locationRef_36 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 202, column 121
    function printable_39 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 202, column 121
    function visible_37 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiability2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 604, column 121
    function label_152 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 609, column 70
    function locationRef_150 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 604, column 121
    function printable_153 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 604, column 121
    function visible_151 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiabilitySectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function defaultSetter_409 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function label_407 () : java.lang.Object {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function label_413 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1271, column 70
    function locationRef_403 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function value_405 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function visible_404 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function visible_406 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function visible_412 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 190, column 119
    function label_34 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 195, column 69
    function locationRef_32 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 190, column 119
    function printable_35 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 190, column 119
    function visible_33 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 592, column 119
    function label_148 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 597, column 69
    function locationRef_146 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 592, column 119
    function printable_149 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 592, column 119
    function visible_147 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function defaultSetter_397 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function label_395 () : java.lang.Object {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function label_401 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1259, column 69
    function locationRef_391 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function value_393 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function visible_392 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function visible_394 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function visible_400 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 178, column 115
    function label_30 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 183, column 67
    function locationRef_28 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 178, column 115
    function printable_31 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 178, column 115
    function visible_29 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 580, column 115
    function label_144 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 585, column 67
    function locationRef_142 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 580, column 115
    function printable_145 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 580, column 115
    function visible_143 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function defaultSetter_385 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function label_383 () : java.lang.Object {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function label_389 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1247, column 67
    function locationRef_379 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function value_381 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function visible_380 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function visible_382 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function visible_388 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPrintoutExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'action' attribute on NonDownloadPrintOutButton at ClaimPrintout.pcf: line 101, column 58
    function action_10 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on PrintOutButton (id=ClaimPrint) at ClaimPrintout.pcf: line 98, column 21
    function action_9 () : void {
      gw.api.print.PrintOutAction.printPrintOut(printSettings)
    }
    
    // 'canVisit' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    static function canVisit_657 (Claim :  Claim) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.Claim.print(Claim)
    }
    
    // 'value' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      Choice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 63, column 48
    function initialValue_0 () : gw.api.print.ClaimPrintoutHelper {
      return new gw.api.print.ClaimPrintoutHelper(Claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 67, column 42
    function initialValue_1 () : gw.api.print.PrintSettings {
      return helper.createPrintSettings()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 71, column 24
    function initialValue_2 () : Exposure {
      return helper.getMedicalDetails()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 75, column 24
    function initialValue_3 () : Exposure {
      return helper.getIndemityTimeLoss()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 79, column 24
    function initialValue_4 () : Exposure {
      return helper.getEmployerLiability()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 83, column 23
    function initialValue_5 () : boolean {
      return (helper.isWorkersCompClaim() or helper.isHomeownersClaim()) and (gw.api.policy.PolicyTabUtil.hasTab(Claim, "Properties") or gw.api.policy.PolicyTabUtil.hasTab(Claim, "Classcodes"))
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 87, column 23
    function initialValue_6 () : boolean {
      return helper.isTravelClaim() and (gw.api.policy.PolicyTabUtil.hasTab(Claim, "Trips") or gw.api.policy.PolicyTabUtil.hasTab(Claim, "Classcodes"))
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 91, column 23
    function initialValue_7 () : boolean {
      return (helper.isWorkersCompClaim() or helper.isHomeownersClaim()) and gw.api.policy.PolicyTabUtil.hasTab(Claim, "Statcodes")
    }
    
    // 'label' attribute on PrintGroup (id=AllClaimPagesWithDetails) at ClaimPrintout.pcf: line 393, column 260
    function label_8 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? DisplayKey.get("Java.PrintClaimOptionsForm.Label.AllClaimPagesWithDetailsForWC") : DisplayKey.get("Java.PrintClaimOptionsForm.Label.AllClaimPagesWithDetails")
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 925, column 32
    function locationRef_244 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 930, column 40
    function locationRef_245 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 935, column 32
    function locationRef_246 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 941, column 36
    function locationRef_247 (selectedClaimContact :  ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 946, column 38
    function locationRef_248 (ClaimUserModel :  ClaimUserModel) : pcf.api.Destination {
      return pcf.ClaimUserPrintDetails.createDestination(Claim, ClaimUserModel)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 953, column 33
    function locationRef_249 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 960, column 38
    function locationRef_251 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 966, column 35
    function locationRef_253 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 972, column 32
    function locationRef_254 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 978, column 38
    function locationRef_255 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 983, column 39
    function locationRef_256 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 988, column 33
    function locationRef_257 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 993, column 32
    function locationRef_258 (DocumentParam :  Document) : pcf.api.Destination {
      return pcf.DocumentDetailsPrint.createDestination(Claim, DocumentParam)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 999, column 34
    function locationRef_259 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 1005, column 35
    function locationRef_260 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 1010, column 30
    function locationRef_261 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'printable' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 953, column 33
    function printable_250 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 960, column 38
    function printable_252 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'value' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function value_87 () : java.lang.String {
      return Choice
    }
    
    property get Choice () : java.lang.String {
      return getVariableValue("Choice", 0) as java.lang.String
    }
    
    property set Choice ($arg :  java.lang.String) {
      setVariableValue("Choice", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimPrintout {
      return super.CurrentLocation as pcf.ClaimPrintout
    }
    
    property get canShowClaimPolicyLocations () : boolean {
      return getVariableValue("canShowClaimPolicyLocations", 0) as java.lang.Boolean
    }
    
    property set canShowClaimPolicyLocations ($arg :  boolean) {
      setVariableValue("canShowClaimPolicyLocations", 0, $arg)
    }
    
    property get canShowClaimPolicyTrips () : boolean {
      return getVariableValue("canShowClaimPolicyTrips", 0) as java.lang.Boolean
    }
    
    property set canShowClaimPolicyTrips ($arg :  boolean) {
      setVariableValue("canShowClaimPolicyTrips", 0, $arg)
    }
    
    property get canShowPolicyStatCodes () : boolean {
      return getVariableValue("canShowPolicyStatCodes", 0) as java.lang.Boolean
    }
    
    property set canShowPolicyStatCodes ($arg :  boolean) {
      setVariableValue("canShowPolicyStatCodes", 0, $arg)
    }
    
    property get employerLiability () : Exposure {
      return getVariableValue("employerLiability", 0) as Exposure
    }
    
    property set employerLiability ($arg :  Exposure) {
      setVariableValue("employerLiability", 0, $arg)
    }
    
    property get helper () : gw.api.print.ClaimPrintoutHelper {
      return getVariableValue("helper", 0) as gw.api.print.ClaimPrintoutHelper
    }
    
    property set helper ($arg :  gw.api.print.ClaimPrintoutHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get indemityTimeLoss () : Exposure {
      return getVariableValue("indemityTimeLoss", 0) as Exposure
    }
    
    property set indemityTimeLoss ($arg :  Exposure) {
      setVariableValue("indemityTimeLoss", 0, $arg)
    }
    
    property get medicalDetails () : Exposure {
      return getVariableValue("medicalDetails", 0) as Exposure
    }
    
    property set medicalDetails ($arg :  Exposure) {
      setVariableValue("medicalDetails", 0, $arg)
    }
    
    property get printSettings () : gw.api.print.PrintSettings {
      return getVariableValue("printSettings", 0) as gw.api.print.PrintSettings
    }
    
    property set printSettings ($arg :  gw.api.print.PrintSettings) {
      setVariableValue("printSettings", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshot2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 872, column 54
    function locationRef_221 () : pcf.api.Destination {
      return pcf.ClaimSnapshotLossDetails.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 875, column 55
    function locationRef_223 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPartiesInvolved.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 878, column 84
    function locationRef_225 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPolicy.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 881, column 85
    function locationRef_227 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 884, column 53
    function locationRef_229 () : pcf.api.Destination {
      return pcf.ClaimSnapshotNotes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 887, column 47
    function locationRef_231 () : pcf.api.Destination {
      return pcf.ClaimSnapshotDocuments.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 890, column 54
    function locationRef_233 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExtraFields.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 872, column 54
    function printable_220 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 875, column 55
    function printable_222 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 878, column 84
    function printable_224 () : java.lang.Boolean {
      return perm.Policy.view(Claim.Policy) and perm.System.viewpolicy
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 881, column 85
    function printable_226 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 884, column 53
    function printable_228 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 887, column 47
    function printable_230 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'printable' attribute on PrintSection (id=ClaimSnapshot2Section) at ClaimPrintout.pcf: line 866, column 52
    function printable_235 () : java.lang.Boolean {
      return helper.canPrintClaimSnapshot()
    }
    
    // PrintSection (id=ClaimSnapshot2Section) at ClaimPrintout.pcf: line 866, column 52
    function visible_234 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshot3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function defaultSetter_637 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function label_635 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? DisplayKey.get("Java.PrintClaimOptionsForm.Options.FirstReportOfInjurySnapshot") : DisplayKey.get("Java.PrintClaimOptionsForm.Options.FNOLSnapshot")
    }
    
    // 'label' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function label_641 () : java.lang.String {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? DisplayKey.get("Java.PrintClaimOptionsForm.Options.FirstReportOfInjurySnapshot") : DisplayKey.get("Java.PrintClaimOptionsForm.Options.FNOLSnapshot")
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1831, column 54
    function locationRef_619 () : pcf.api.Destination {
      return pcf.ClaimSnapshotLossDetails.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1834, column 55
    function locationRef_621 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPartiesInvolved.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1837, column 84
    function locationRef_623 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPolicy.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1840, column 85
    function locationRef_625 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1843, column 53
    function locationRef_627 () : pcf.api.Destination {
      return pcf.ClaimSnapshotNotes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1846, column 47
    function locationRef_629 () : pcf.api.Destination {
      return pcf.ClaimSnapshotDocuments.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1849, column 54
    function locationRef_631 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExtraFields.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1831, column 54
    function printable_618 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1834, column 55
    function printable_620 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1837, column 84
    function printable_622 () : java.lang.Boolean {
      return perm.Policy.view(Claim.Policy) and perm.System.viewpolicy
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1840, column 85
    function printable_624 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1843, column 53
    function printable_626 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1846, column 47
    function printable_628 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function value_633 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function visible_632 () : java.lang.Boolean {
      return helper.canPrintClaimSnapshot()
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function visible_634 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function visible_640 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 320, column 61
    function locationRef_68 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'printable' attribute on PrintSection (id=Documents1Section) at ClaimPrintout.pcf: line 315, column 42
    function printable_70 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=Documents1Section) at ClaimPrintout.pcf: line 315, column 42
    function visible_69 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 794, column 61
    function locationRef_202 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'printable' attribute on PrintSection (id=Documents2Section) at ClaimPrintout.pcf: line 789, column 42
    function printable_204 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=Documents2Section) at ClaimPrintout.pcf: line 789, column 42
    function visible_203 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function defaultSetter_572 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1728, column 61
    function locationRef_566 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1734, column 62
    function locationRef_567 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, false)
    }
    
    // PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function value_569 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function visible_568 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function visible_570 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function visible_574 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 332, column 52
    function locationRef_71 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations1Section) at ClaimPrintout.pcf: line 327, column 48
    function printable_73 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // PrintSection (id=Evaluations1Section) at ClaimPrintout.pcf: line 327, column 48
    function visible_72 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 811, column 40
    function locationRef_205 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 807, column 51
    function locationRef_206 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations2Section) at ClaimPrintout.pcf: line 801, column 48
    function printable_208 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // PrintSection (id=Evaluations2Section) at ClaimPrintout.pcf: line 801, column 48
    function visible_207 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function defaultSetter_583 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1746, column 52
    function locationRef_576 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1757, column 40
    function locationRef_577 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1753, column 51
    function locationRef_578 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function value_580 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function visible_579 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function visible_581 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function visible_585 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 220, column 50
    function locationRef_40 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Exposures1Section) at ClaimPrintout.pcf: line 215, column 80
    function printable_42 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // PrintSection (id=Exposures1Section) at ClaimPrintout.pcf: line 215, column 80
    function visible_41 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 626, column 38
    function locationRef_154 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 622, column 49
    function locationRef_155 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Exposures2Section) at ClaimPrintout.pcf: line 617, column 80
    function printable_157 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // PrintSection (id=Exposures2Section) at ClaimPrintout.pcf: line 617, column 80
    function visible_156 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function defaultSetter_422 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1284, column 50
    function locationRef_415 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1294, column 38
    function locationRef_416 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1290, column 49
    function locationRef_417 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function value_419 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function visible_418 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function visible_420 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function visible_424 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 257, column 63
    function locationRef_49 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 259, column 73
    function locationRef_50 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 261, column 77
    function locationRef_51 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 263, column 73
    function locationRef_52 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 265, column 73
    function locationRef_53 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 267, column 78
    function locationRef_54 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 269, column 82
    function locationRef_55 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 271, column 81
    function locationRef_56 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary1Section) at ClaimPrintout.pcf: line 252, column 44
    function printable_58 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // PrintSection (id=FinancialsSummary1Section) at ClaimPrintout.pcf: line 252, column 44
    function visible_57 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 722, column 63
    function locationRef_181 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 724, column 73
    function locationRef_182 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 726, column 77
    function locationRef_183 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 728, column 73
    function locationRef_184 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 730, column 73
    function locationRef_185 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 732, column 78
    function locationRef_186 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 734, column 82
    function locationRef_187 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 736, column 81
    function locationRef_188 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary2Section) at ClaimPrintout.pcf: line 717, column 44
    function printable_190 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // PrintSection (id=FinancialsSummary2Section) at ClaimPrintout.pcf: line 717, column 44
    function visible_189 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function defaultSetter_510 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1501, column 63
    function locationRef_484 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1503, column 73
    function locationRef_485 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1505, column 77
    function locationRef_486 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1507, column 73
    function locationRef_487 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1509, column 73
    function locationRef_488 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1511, column 78
    function locationRef_489 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1513, column 82
    function locationRef_490 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1515, column 81
    function locationRef_491 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1521, column 63
    function locationRef_492 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1523, column 73
    function locationRef_493 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1529, column 63
    function locationRef_494 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1531, column 77
    function locationRef_495 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1537, column 63
    function locationRef_496 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1539, column 73
    function locationRef_497 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1545, column 63
    function locationRef_498 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1547, column 73
    function locationRef_499 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1553, column 63
    function locationRef_500 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1555, column 78
    function locationRef_501 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1561, column 63
    function locationRef_502 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1563, column 82
    function locationRef_503 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1569, column 63
    function locationRef_504 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1571, column 81
    function locationRef_505 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function value_507 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function visible_506 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // 'childrenVisible' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function visible_508 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function visible_512 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransaction1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 284, column 125
    function locationRef_59 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransaction1Section) at ClaimPrintout.pcf: line 278, column 62
    function printable_61 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // PrintSection (id=FinancialsTransaction1Section) at ClaimPrintout.pcf: line 278, column 62
    function visible_60 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransaction2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 752, column 45
    function locationRef_191 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 748, column 124
    function locationRef_192 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransaction2Section) at ClaimPrintout.pcf: line 743, column 62
    function printable_194 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // PrintSection (id=FinancialsTransaction2Section) at ClaimPrintout.pcf: line 743, column 62
    function visible_193 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransactionSectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function defaultSetter_541 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1584, column 125
    function locationRef_514 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1594, column 45
    function locationRef_515 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1590, column 124
    function locationRef_516 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1603, column 129
    function locationRef_517 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RESERVE)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1614, column 45
    function locationRef_519 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1610, column 128
    function locationRef_520 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RESERVE)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1623, column 129
    function locationRef_522 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.PAYMENT)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1634, column 45
    function locationRef_524 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1630, column 128
    function locationRef_525 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.PAYMENT)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1643, column 130
    function locationRef_527 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1654, column 45
    function locationRef_529 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1650, column 129
    function locationRef_530 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1663, column 138
    function locationRef_532 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY_RESERVE)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1674, column 45
    function locationRef_534 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1670, column 137
    function locationRef_535 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY_RESERVE)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionReservesWithoutDetailsOption) at ClaimPrintout.pcf: line 1601, column 54
    function printable_518 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionPaymentsWithoutDetailsOption) at ClaimPrintout.pcf: line 1621, column 54
    function printable_523 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionRecoveriesWithoutDetailsOption) at ClaimPrintout.pcf: line 1641, column 56
    function printable_528 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionRecoveryReservesWithoutDetailsOption) at ClaimPrintout.pcf: line 1661, column 119
    function printable_533 () : java.lang.Boolean {
      return perm.Claim.viewrecoveryreserves(Claim) and gw.api.print.ClaimPrintoutHelper.UseRecoveryReserves
    }
    
    // PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function value_538 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function visible_537 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function visible_539 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function visible_543 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 384, column 48
    function filter_83 (VALUE :  gw.entity.TypeKey) : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 384, column 48
    function locationRef_84 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=History1Section) at ClaimPrintout.pcf: line 377, column 50
    function printable_86 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // PrintSection (id=History1Section) at ClaimPrintout.pcf: line 377, column 50
    function visible_85 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 905, column 48
    function filter_236 (VALUE :  gw.entity.TypeKey) : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 905, column 48
    function locationRef_237 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=History2Section) at ClaimPrintout.pcf: line 898, column 50
    function printable_239 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // PrintSection (id=History2Section) at ClaimPrintout.pcf: line 898, column 50
    function visible_238 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function defaultSetter_651 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1864, column 48
    function filter_643 (VALUE :  gw.entity.TypeKey) : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1872, column 48
    function filter_645 (VALUE :  HistoryType) : gw.api.filters.IFilter {
      return new gw.api.filters.TypeKeyFilter(VALUE, History#Type.PropertyInfo as gw.entity.ITypekeyPropertyInfo)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1864, column 48
    function locationRef_644 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1872, column 48
    function locationRef_646 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function value_648 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function visible_647 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // 'childrenVisible' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function visible_649 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function visible_653 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownerPropertyIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 506, column 106
    function locationRef_117 () : pcf.api.Destination {
      return pcf.DwellingIncidentPrint.createDestination(Claim, helper.DwellingIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 510, column 122
    function locationRef_119 () : pcf.api.Destination {
      return pcf.PropertyContentsIncidentPrint.createDestination(Claim, helper.PersonalPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 514, column 118
    function locationRef_121 () : pcf.api.Destination {
      return pcf.OtherStructureIncidentPrint.createDestination(Claim, helper.OtherStructureIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 518, column 118
    function locationRef_123 () : pcf.api.Destination {
      return pcf.LivingExpensesIncidentPrint.createDestination(Claim, helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 506, column 106
    function printable_116 () : java.lang.Boolean {
      return helper.DwellingIncident != null and perm.Incident.view(helper.DwellingIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 510, column 122
    function printable_118 () : java.lang.Boolean {
      return helper.PersonalPropertyIncident != null and perm.Incident.view(helper.PersonalPropertyIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 514, column 118
    function printable_120 () : java.lang.Boolean {
      return helper.OtherStructureIncident != null and perm.Incident.view(helper.OtherStructureIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 518, column 118
    function printable_122 () : java.lang.Boolean {
      return helper.LivingExpensesIncident != null and perm.Incident.view(helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOption (id=HomeownerIncidentOption) at ClaimPrintout.pcf: line 502, column 50
    function printable_124 () : java.lang.Boolean {
      return helper.isHomeownersClaim()
    }
    
    // PrintSection (id=HomeownerPropertyIncident2Section) at ClaimPrintout.pcf: line 498, column 48
    function visible_125 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownerPropertyIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function defaultSetter_341 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1162, column 106
    function locationRef_329 () : pcf.api.Destination {
      return pcf.DwellingIncidentPrint.createDestination(Claim, helper.DwellingIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1166, column 122
    function locationRef_331 () : pcf.api.Destination {
      return pcf.PropertyContentsIncidentPrint.createDestination(Claim, helper.PersonalPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1170, column 118
    function locationRef_333 () : pcf.api.Destination {
      return pcf.OtherStructureIncidentPrint.createDestination(Claim, helper.OtherStructureIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1174, column 118
    function locationRef_335 () : pcf.api.Destination {
      return pcf.LivingExpensesIncidentPrint.createDestination(Claim, helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1162, column 106
    function printable_328 () : java.lang.Boolean {
      return helper.DwellingIncident != null and perm.Incident.view(helper.DwellingIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1166, column 122
    function printable_330 () : java.lang.Boolean {
      return helper.PersonalPropertyIncident != null and perm.Incident.view(helper.PersonalPropertyIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1170, column 118
    function printable_332 () : java.lang.Boolean {
      return helper.OtherStructureIncident != null and perm.Incident.view(helper.OtherStructureIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1174, column 118
    function printable_334 () : java.lang.Boolean {
      return helper.LivingExpensesIncident != null and perm.Incident.view(helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOption (id=HomeownerIncidentOption) at ClaimPrintout.pcf: line 1158, column 50
    function printable_336 () : java.lang.Boolean {
      return helper.isHomeownersClaim()
    }
    
    // PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function value_338 () : java.lang.Object {
      return null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function visible_339 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function visible_343 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 489, column 44
    function locationRef_112 (InjuryIncident :  InjuryIncident) : pcf.api.Destination {
      return pcf.InjuryIncidentDetailPrint.createDestination(InjuryIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 485, column 57
    function locationRef_114 () : pcf.api.Destination {
      return pcf.InjuryIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 485, column 57
    function printable_113 () : java.lang.Boolean {
      return !helper.InjuryIncidents.IsEmpty
    }
    
    // PrintSection (id=InjuryIncident2Section) at ClaimPrintout.pcf: line 479, column 106
    function visible_115 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function defaultSetter_326 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1145, column 44
    function locationRef_320 (InjuryIncident :  InjuryIncident) : pcf.api.Destination {
      return pcf.InjuryIncidentDetailPrint.createDestination(InjuryIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1141, column 57
    function locationRef_322 () : pcf.api.Destination {
      return pcf.InjuryIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1141, column 57
    function printable_321 () : java.lang.Boolean {
      return !helper.InjuryIncidents.IsEmpty
    }
    
    // PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function value_323 () : java.lang.Object {
      return null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function visible_324 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function visible_327 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 369, column 48
    function locationRef_80 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Litigation1Section) at ClaimPrintout.pcf: line 364, column 45
    function printable_82 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // PrintSection (id=Litigation1Section) at ClaimPrintout.pcf: line 364, column 45
    function visible_81 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 858, column 36
    function locationRef_216 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 854, column 47
    function locationRef_217 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Litigation2Section) at ClaimPrintout.pcf: line 849, column 45
    function printable_219 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // PrintSection (id=Litigation2Section) at ClaimPrintout.pcf: line 849, column 45
    function visible_218 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function defaultSetter_614 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1807, column 48
    function locationRef_607 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1817, column 36
    function locationRef_608 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1813, column 47
    function locationRef_609 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function value_611 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function visible_610 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function visible_612 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function visible_616 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 147, column 52
    function locationRef_19 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails1Section) at ClaimPrintout.pcf: line 142, column 49
    function printable_21 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=LossDetails1Section) at ClaimPrintout.pcf: line 142, column 49
    function visible_20 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 436, column 52
    function locationRef_100 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails2Section) at ClaimPrintout.pcf: line 431, column 49
    function printable_102 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=LossDetails2Section) at ClaimPrintout.pcf: line 431, column 49
    function visible_101 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function defaultSetter_295 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1091, column 52
    function locationRef_290 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function value_292 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function visible_291 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function visible_293 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function visible_297 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 345, column 53
    function locationRef_74 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations1Section) at ClaimPrintout.pcf: line 339, column 48
    function printable_76 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // PrintSection (id=Negotiations1Section) at ClaimPrintout.pcf: line 339, column 48
    function visible_75 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 829, column 41
    function locationRef_209 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 825, column 52
    function locationRef_210 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations2Section) at ClaimPrintout.pcf: line 819, column 48
    function printable_212 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // PrintSection (id=Negotiations2Section) at ClaimPrintout.pcf: line 819, column 48
    function visible_211 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function defaultSetter_594 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1771, column 53
    function locationRef_587 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1782, column 41
    function locationRef_588 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1778, column 52
    function locationRef_589 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function value_591 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function visible_590 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function visible_592 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function visible_596 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 308, column 54
    function locationRef_65 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Notes1Section) at ClaimPrintout.pcf: line 303, column 48
    function printable_67 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // PrintSection (id=Notes1Section) at ClaimPrintout.pcf: line 303, column 48
    function visible_66 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 782, column 54
    function locationRef_199 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Notes2Section) at ClaimPrintout.pcf: line 777, column 48
    function printable_201 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // PrintSection (id=Notes2Section) at ClaimPrintout.pcf: line 777, column 48
    function visible_200 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function defaultSetter_562 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1710, column 65
    function locationRef_556 () : pcf.api.Destination {
      return pcf.ClaimNoConfidentialNotesPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1716, column 54
    function locationRef_557 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function value_559 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function visible_558 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function visible_560 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function visible_564 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 232, column 49
    function locationRef_43 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved1Section) at ClaimPrintout.pcf: line 227, column 50
    function printable_45 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // PrintSection (id=PartiesInvolved1Section) at ClaimPrintout.pcf: line 227, column 50
    function visible_44 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 644, column 49
    function locationRef_158 (selectedClaimContact :  entity.ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact) 
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 640, column 48
    function locationRef_159 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved2Section) at ClaimPrintout.pcf: line 634, column 50
    function printable_161 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // PrintSection (id=PartiesInvolved2Section) at ClaimPrintout.pcf: line 634, column 50
    function visible_160 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function defaultSetter_433 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1307, column 49
    function locationRef_426 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1318, column 42
    function locationRef_427 (selectedClaimContact :  ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1314, column 48
    function locationRef_428 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function value_430 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function visible_429 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'childrenVisible' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function visible_431 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function visible_435 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 245, column 54
    function locationRef_46 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Policy1Section) at ClaimPrintout.pcf: line 239, column 44
    function printable_48 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // PrintSection (id=Policy1Section) at ClaimPrintout.pcf: line 239, column 44
    function visible_47 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 658, column 54
    function locationRef_162 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 666, column 39
    function locationRef_163 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 662, column 46
    function locationRef_165 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 675, column 44
    function locationRef_166 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 671, column 53
    function locationRef_168 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 684, column 36
    function locationRef_169 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 680, column 49
    function locationRef_171 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 692, column 41
    function locationRef_172 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 688, column 58
    function locationRef_173 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 701, column 38
    function locationRef_174 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 697, column 48
    function locationRef_176 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 709, column 44
    function locationRef_177 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 705, column 61
    function locationRef_178 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 662, column 46
    function printable_164 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 671, column 53
    function printable_167 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 680, column 49
    function printable_170 () : java.lang.Boolean {
      return canShowClaimPolicyTrips
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 697, column 48
    function printable_175 () : java.lang.Boolean {
      return canShowPolicyStatCodes
    }
    
    // 'printable' attribute on PrintSection (id=Policy2Section) at ClaimPrintout.pcf: line 652, column 44
    function printable_180 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // PrintSection (id=Policy2Section) at ClaimPrintout.pcf: line 652, column 44
    function visible_179 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function defaultSetter_480 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1332, column 54
    function locationRef_437 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1346, column 39
    function locationRef_438 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1342, column 54
    function locationRef_439 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1361, column 44
    function locationRef_441 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1357, column 53
    function locationRef_443 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1375, column 36
    function locationRef_445 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1371, column 51
    function locationRef_446 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1388, column 41
    function locationRef_448 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1384, column 58
    function locationRef_449 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1401, column 38
    function locationRef_450 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1397, column 60
    function locationRef_451 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodesPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1413, column 44
    function locationRef_453 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1409, column 61
    function locationRef_454 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1422, column 54
    function locationRef_455 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1429, column 39
    function locationRef_456 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1425, column 54
    function locationRef_457 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1437, column 54
    function locationRef_459 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1445, column 39
    function locationRef_460 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1441, column 46
    function locationRef_462 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1454, column 44
    function locationRef_463 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1450, column 53
    function locationRef_465 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1463, column 36
    function locationRef_466 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1459, column 49
    function locationRef_468 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1471, column 41
    function locationRef_469 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1467, column 58
    function locationRef_470 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1480, column 38
    function locationRef_471 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1476, column 48
    function locationRef_473 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1488, column 44
    function locationRef_474 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1484, column 61
    function locationRef_475 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=PolicyVehiclesLocationsOption) at ClaimPrintout.pcf: line 1339, column 44
    function printable_440 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1357, column 53
    function printable_442 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'printable' attribute on PrintOption (id=PolicyTrips) at ClaimPrintout.pcf: line 1368, column 47
    function printable_447 () : java.lang.Boolean {
      return canShowClaimPolicyTrips
    }
    
    // 'printable' attribute on PrintOption (id=PolicyStatCodesOption) at ClaimPrintout.pcf: line 1395, column 46
    function printable_452 () : java.lang.Boolean {
      return canShowPolicyStatCodes
    }
    
    // PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function value_477 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function visible_476 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function visible_478 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function visible_482 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 471, column 51
    function locationRef_107 (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
      return pcf.FixedPropertyIncidentDetailPrint.createDestination(fixedPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 467, column 64
    function locationRef_109 () : pcf.api.Destination {
      return pcf.FixedPropertyIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 467, column 64
    function printable_108 () : java.lang.Boolean {
      return !helper.FixedPropertyIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintSection (id=PropertyIncident2Section) at ClaimPrintout.pcf: line 461, column 49
    function printable_111 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=PropertyIncident2Section) at ClaimPrintout.pcf: line 461, column 49
    function visible_110 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function defaultSetter_316 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1127, column 51
    function locationRef_309 (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
      return pcf.FixedPropertyIncidentDetailPrint.createDestination(fixedPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1123, column 64
    function locationRef_311 () : pcf.api.Destination {
      return pcf.FixedPropertyIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1123, column 64
    function printable_310 () : java.lang.Boolean {
      return !helper.FixedPropertyIncidents.IsEmpty
    }
    
    // PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function value_313 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function visible_312 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function visible_314 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function visible_318 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 171, column 45
    function locationRef_25 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations1Section) at ClaimPrintout.pcf: line 166, column 49
    function printable_27 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=SpecialInvestigations1Section) at ClaimPrintout.pcf: line 166, column 49
    function visible_26 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 573, column 45
    function locationRef_139 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations2Section) at ClaimPrintout.pcf: line 568, column 49
    function printable_141 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=SpecialInvestigations2Section) at ClaimPrintout.pcf: line 568, column 49
    function visible_140 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function defaultSetter_375 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1235, column 45
    function locationRef_370 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function value_372 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function visible_371 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function visible_373 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function visible_377 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 357, column 54
    function locationRef_77 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation1Section) at ClaimPrintout.pcf: line 352, column 87
    function printable_79 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // PrintSection (id=Subrogation1Section) at ClaimPrintout.pcf: line 352, column 87
    function visible_78 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 842, column 54
    function locationRef_213 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation2Section) at ClaimPrintout.pcf: line 837, column 87
    function printable_215 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // PrintSection (id=Subrogation2Section) at ClaimPrintout.pcf: line 837, column 87
    function visible_214 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function defaultSetter_603 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1795, column 54
    function locationRef_598 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function value_600 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function visible_599 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function visible_601 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function visible_605 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 119, column 48
    function locationRef_11 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 121, column 47
    function locationRef_12 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 123, column 51
    function locationRef_13 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Summary1Section) at ClaimPrintout.pcf: line 114, column 50
    function printable_15 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // PrintSection (id=Summary1Section) at ClaimPrintout.pcf: line 114, column 50
    function visible_14 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 403, column 48
    function locationRef_91 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 405, column 47
    function locationRef_92 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 407, column 51
    function locationRef_93 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Summary2Section) at ClaimPrintout.pcf: line 398, column 50
    function printable_95 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // PrintSection (id=Summary2Section) at ClaimPrintout.pcf: line 398, column 50
    function visible_94 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function defaultSetter_275 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1028, column 48
    function locationRef_264 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1030, column 47
    function locationRef_265 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1032, column 51
    function locationRef_266 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1038, column 48
    function locationRef_267 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1044, column 54
    function locationRef_268 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim, true)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1050, column 47
    function locationRef_269 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1056, column 51
    function locationRef_270 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function value_272 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function visible_271 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function visible_273 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function visible_277 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TravelIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 535, column 42
    function locationRef_127 (TripIncident :  TripIncident) : pcf.api.Destination {
      return pcf.TripIncidentDetailPrint.createDestination(Claim, TripIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 531, column 55
    function locationRef_129 () : pcf.api.Destination {
      return pcf.TripIncidentsPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 543, column 45
    function locationRef_130 (BaggageIncident :  BaggageIncident) : pcf.api.Destination {
      return pcf.BaggageIncidentDetailPrint.createDestination(Claim, BaggageIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 539, column 58
    function locationRef_132 () : pcf.api.Destination {
      return pcf.BaggageIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 531, column 55
    function printable_128 () : java.lang.Boolean {
      return !helper.TripIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 539, column 58
    function printable_131 () : java.lang.Boolean {
      return !helper.BaggageIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintSection (id=TravelIncident2Section) at ClaimPrintout.pcf: line 525, column 44
    function printable_134 () : java.lang.Boolean {
      return helper.isTravelClaim()
    }
    
    // PrintSection (id=TravelIncident2Section) at ClaimPrintout.pcf: line 525, column 44
    function visible_133 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TravelIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function defaultSetter_355 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1191, column 42
    function locationRef_345 (TripIncident :  TripIncident) : pcf.api.Destination {
      return pcf.TripIncidentDetailPrint.createDestination(Claim, TripIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1187, column 55
    function locationRef_347 () : pcf.api.Destination {
      return pcf.TripIncidentsPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1199, column 45
    function locationRef_348 (BaggageIncident :  BaggageIncident) : pcf.api.Destination {
      return pcf.BaggageIncidentDetailPrint.createDestination(Claim, BaggageIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1195, column 58
    function locationRef_350 () : pcf.api.Destination {
      return pcf.BaggageIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1187, column 55
    function printable_346 () : java.lang.Boolean {
      return !helper.TripIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1195, column 58
    function printable_349 () : java.lang.Boolean {
      return !helper.BaggageIncidents.IsEmpty
    }
    
    // PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function value_352 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function visible_351 () : java.lang.Boolean {
      return helper.isTravelClaim()
    }
    
    // 'childrenVisible' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function visible_353 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function visible_357 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 452, column 45
    function locationRef_103 (vehicleIncident :  VehicleIncident) : pcf.api.Destination {
      return pcf.VehicleIncidentDetailPrint.createDestination(vehicleIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 448, column 55
    function locationRef_104 () : pcf.api.Destination {
      return pcf.VehicleIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=VehicleIncident2Section) at ClaimPrintout.pcf: line 443, column 74
    function printable_106 () : java.lang.Boolean {
      return helper.isAutoClaim() and perm.System.viewclaimbasics
    }
    
    // PrintSection (id=VehicleIncident2Section) at ClaimPrintout.pcf: line 443, column 74
    function visible_105 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function defaultSetter_305 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1108, column 45
    function locationRef_299 (vehicleIncident :  VehicleIncident) : pcf.api.Destination {
      return pcf.VehicleIncidentDetailPrint.createDestination(vehicleIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1104, column 55
    function locationRef_300 () : pcf.api.Destination {
      return pcf.VehicleIncidentPrint.createDestination(Claim)
    }
    
    // PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function value_302 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function visible_301 () : java.lang.Boolean {
      return helper.isAutoClaim() and perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function visible_303 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function visible_307 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 135, column 49
    function locationRef_16 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Workplan1Section) at ClaimPrintout.pcf: line 130, column 46
    function printable_18 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // PrintSection (id=Workplan1Section) at ClaimPrintout.pcf: line 130, column 46
    function visible_17 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 423, column 38
    function locationRef_96 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 419, column 48
    function locationRef_97 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Workplan2Section) at ClaimPrintout.pcf: line 414, column 46
    function printable_99 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // PrintSection (id=Workplan2Section) at ClaimPrintout.pcf: line 414, column 46
    function visible_98 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function defaultSetter_286 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1068, column 49
    function locationRef_279 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1078, column 38
    function locationRef_280 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1074, column 48
    function locationRef_281 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function value_283 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function visible_282 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function visible_284 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function visible_288 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  
}