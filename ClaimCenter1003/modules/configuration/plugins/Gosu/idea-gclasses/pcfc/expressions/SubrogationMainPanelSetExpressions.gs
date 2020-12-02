package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubrogationMainPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends SubrogationMainPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at SubrogationMainPanelSet.pcf: line 368, column 50
    function action_189 () : void {
      MatterDetailGroup.go(claim, Matter)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at SubrogationMainPanelSet.pcf: line 368, column 50
    function action_dest_190 () : pcf.api.Destination {
      return pcf.MatterDetailGroup.createDestination(claim, Matter)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SubrogationMainPanelSet.pcf: line 368, column 50
    function valueRoot_192 () : java.lang.Object {
      return Matter
    }
    
    // 'value' attribute on DateCell (id=TrialDetails_TrialDate_Cell) at SubrogationMainPanelSet.pcf: line 382, column 47
    function valueRoot_198 () : java.lang.Object {
      return Matter.TrialDateActivity
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SubrogationMainPanelSet.pcf: line 368, column 50
    function value_191 () : java.lang.String {
      return Matter.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=TrialDetails_MatterType_Cell) at SubrogationMainPanelSet.pcf: line 374, column 61
    function value_194 () : typekey.MatterType {
      return Matter.MatterType
    }
    
    // 'value' attribute on DateCell (id=TrialDetails_TrialDate_Cell) at SubrogationMainPanelSet.pcf: line 382, column 47
    function value_197 () : java.util.Date {
      return Matter.TrialDateActivity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=Matter_CloseDate_Cell) at SubrogationMainPanelSet.pcf: line 387, column 47
    function value_200 () : java.util.Date {
      return Matter.CloseDate
    }
    
    property get Matter () : entity.Matter {
      return getIteratedValue(1) as entity.Matter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends SubrogationFinancialsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'useSubHeaderStyle' attribute on Row at SubrogationMainPanelSet.pcf: line 484, column 54
    function useSubHeaderStyle_229 () : java.lang.Boolean {
      return fsRow.Level == 1
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at SubrogationMainPanelSet.pcf: line 487, column 40
    function valueRoot_211 () : java.lang.Object {
      return fsRow
    }
    
    // 'value' attribute on TextCell (id=Label_Cell) at SubrogationMainPanelSet.pcf: line 487, column 40
    function value_210 () : java.lang.String {
      return fsRow.Label
    }
    
    // 'value' attribute on CurrencyCell (id=Paid_Cell) at SubrogationMainPanelSet.pcf: line 490, column 107
    function value_213 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.PAID]
    }
    
    // 'value' attribute on CurrencyCell (id=RecoveryAmount_Cell) at SubrogationMainPanelSet.pcf: line 493, column 113
    function value_215 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.RECOVERIES]
    }
    
    // 'value' attribute on CurrencyCell (id=NetPaidAmount_Cell) at SubrogationMainPanelSet.pcf: line 496, column 111
    function value_217 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.NET_PAID]
    }
    
    // 'value' attribute on CurrencyCell (id=DeductibleAmount_Cell) at SubrogationMainPanelSet.pcf: line 499, column 113
    function value_219 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.DEDUCTIBLE]
    }
    
    // 'value' attribute on CurrencyCell (id=ExpectedRecoveryAmount_Cell) at SubrogationMainPanelSet.pcf: line 502, column 120
    function value_221 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.EXPECTED_RECOVERY]
    }
    
    // 'value' attribute on CurrencyCell (id=SubroRecoveredAmount_Cell) at SubrogationMainPanelSet.pcf: line 505, column 125
    function value_223 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.SUBROGATION_RECOVERIES]
    }
    
    // 'value' attribute on CurrencyCell (id=PendingAmount_Cell) at SubrogationMainPanelSet.pcf: line 508, column 110
    function value_225 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.PENDING]
    }
    
    // 'value' attribute on CurrencyCell (id=AvailableRecoveryReserves_Cell) at SubrogationMainPanelSet.pcf: line 511, column 125
    function value_227 () : gw.api.financials.CurrencyAmount {
      return fsRow.Calculations[gw.subrogation.financials.SubrogationCalculationsEnum.OPEN_RECOVERY_RESERVES]
    }
    
    property get fsRow () : gw.subrogation.financials.AbstractSubroFinsNode {
      return getIteratedValue(2) as gw.subrogation.financials.AbstractSubroFinsNode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends SubrogationRecoveriesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at SubrogationMainPanelSet.pcf: line 568, column 48
    function valueRoot_254 () : java.lang.Object {
      return recovery
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at SubrogationMainPanelSet.pcf: line 568, column 48
    function value_253 () : java.util.Date {
      return recovery.CreateTime
    }
    
    // 'value' attribute on TextCell (id=ReserveLine_Cell) at SubrogationMainPanelSet.pcf: line 573, column 51
    function value_256 () : entity.ReserveLine {
      return recovery.ReserveLine
    }
    
    // 'value' attribute on CurrencyCell (id=RecoveryAmount_Cell) at SubrogationMainPanelSet.pcf: line 577, column 53
    function value_259 () : gw.api.financials.CurrencyAmount {
      return recovery.ReservingAmount
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationMainPanelSet.pcf: line 582, column 58
    function value_262 () : typekey.TransactionStatus {
      return recovery.Status
    }
    
    property get recovery () : entity.Recovery {
      return getIteratedValue(2) as entity.Recovery
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubrogationMainPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function action_135 () : void {
      SubrogationDetail.drilldown(subrogation)
    }
    
    // 'action' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function action_dest_136 () : pcf.api.Destination {
      return pcf.SubrogationDetail.createDestination(subrogation)
    }
    
    // 'available' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function available_133 () : java.lang.Boolean {
      return subrogation.Exposure == null or not subrogation.New
    }
    
    // 'checkBoxVisible' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 257, column 56
    function checkBoxVisible_176 () : java.lang.Boolean {
      return CurrentLocation.InEditMode or subrogationSummary.EscalateSubro
    }
    
    // 'condition' attribute on ToolbarFlag at SubrogationMainPanelSet.pcf: line 260, column 43
    function condition_132 () : java.lang.Boolean {
      return subrogation.Status != TC_OPEN and subrogation.Status != TC_CLOSED
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function defaultSetter_138 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogation.Exposure = (__VALUE_TO_SET as entity.Exposure)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationMainPanelSet.pcf: line 292, column 40
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogation.Status = (__VALUE_TO_SET as typekey.SubrogationStatus)
    }
    
    // 'value' attribute on TextCell (id=CloseComment_Cell) at SubrogationMainPanelSet.pcf: line 314, column 75
    function defaultSetter_165 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogation.CloseComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Outcome_Cell) at SubrogationMainPanelSet.pcf: line 322, column 75
    function defaultSetter_172 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogation.Outcome = (__VALUE_TO_SET as typekey.SubroClosedOutcome)
    }
    
    // 'editable' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function editable_134 () : java.lang.Boolean {
      return subrogation.Exposure == null
    }
    
    // 'editable' attribute on TextCell (id=CloseComment_Cell) at SubrogationMainPanelSet.pcf: line 314, column 75
    function editable_162 () : java.lang.Boolean {
      return subrogation.Status == TC_CLOSED and subrogation.isFieldChanged(entity.Subrogation#Status)
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function valueRange_140 () : java.lang.Object {
      return subrogation.Exposure == null ? subrogationSummary.UnsubrogatedExposures : new Exposure[]{subrogation.Exposure}
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function valueRoot_139 () : java.lang.Object {
      return subrogation
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function value_137 () : entity.Exposure {
      return subrogation.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=CustomizedLiability_Cell) at SubrogationMainPanelSet.pcf: line 284, column 93
    function value_146 () : java.lang.Boolean {
      return subrogation.CustomizedLiability
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationMainPanelSet.pcf: line 292, column 40
    function value_150 () : typekey.SubrogationStatus {
      return subrogation.Status
    }
    
    // 'value' attribute on TextCell (id=Owner_Cell) at SubrogationMainPanelSet.pcf: line 302, column 41
    function value_154 () : entity.User {
      return subrogation.AssignedUser
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at SubrogationMainPanelSet.pcf: line 307, column 75
    function value_159 () : java.util.Date {
      return subrogation.CloseDate
    }
    
    // 'value' attribute on TextCell (id=CloseComment_Cell) at SubrogationMainPanelSet.pcf: line 314, column 75
    function value_164 () : java.lang.String {
      return subrogation.CloseComment
    }
    
    // 'value' attribute on TypeKeyCell (id=Outcome_Cell) at SubrogationMainPanelSet.pcf: line 322, column 75
    function value_171 () : typekey.SubroClosedOutcome {
      return subrogation.Outcome
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function verifyValueRangeIsAllowedType_141 ($$arg :  entity.Exposure[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function verifyValueRangeIsAllowedType_141 ($$arg :  gw.api.database.IQueryBeanResult<entity.Exposure>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function verifyValueRangeIsAllowedType_141 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function verifyValueRange_142 () : void {
      var __valueRangeArg = subrogation.Exposure == null ? subrogationSummary.UnsubrogatedExposures : new Exposure[]{subrogation.Exposure}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_141(__valueRangeArg)
    }
    
    // 'visible' attribute on BooleanRadioCell (id=CustomizedLiability_Cell) at SubrogationMainPanelSet.pcf: line 284, column 93
    function visible_148 () : java.lang.Boolean {
      return not subrogationSummary.HasNoSubroAdversePartyOverrides
    }
    
    // 'visible' attribute on TextCell (id=Owner_Cell) at SubrogationMainPanelSet.pcf: line 302, column 41
    function visible_156 () : java.lang.Boolean {
      return subrogationSummary.EscalateSubro and subrogationSummary.SubrogateIndividualExposures
    }
    
    // 'valueVisible' attribute on DateCell (id=CloseDate_Cell) at SubrogationMainPanelSet.pcf: line 307, column 75
    function visible_158 () : java.lang.Boolean {
      return subrogation.Status == TC_CLOSED
    }
    
    property get subrogation () : Subrogation {
      return getIteratedValue(1) as Subrogation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubrogationFinancialsLVExpressionsImpl extends SubrogationMainPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SubrogationMainPanelSet.pcf: line 423, column 65
    function initialValue_207 () : gw.subrogation.financials.SubroFinsResult {
      return gw.subrogation.financials.SubrogationFinancialsHelper.getSubroFinancialsRows(claim, null)
    }
    
    // 'value' attribute on TextCell (id=AvailableRecoveryReservesHeader_Cell) at SubrogationMainPanelSet.pcf: line 476, column 216
    function value_208 () : java.lang.String {
      if(gw.api.system.CCConfigParameters.UseRecoveryReserves.getValue()) { return DisplayKey.get("Web.Subrogation.Financials.Header.OpenRecoveryReserves")} else { return "" }
    }
    
    // 'value' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 482, column 97
    function value_230 () : java.util.List<gw.subrogation.financials.AbstractSubroFinsNode> {
      return subroFinsResult.Nodes
    }
    
    // 'value' attribute on CurrencyCell (id=TotalPaid_Cell) at SubrogationMainPanelSet.pcf: line 522, column 109
    function value_231 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.PAID]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalRecovered_Cell) at SubrogationMainPanelSet.pcf: line 525, column 115
    function value_233 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.RECOVERIES]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalNetPaid_Cell) at SubrogationMainPanelSet.pcf: line 528, column 113
    function value_235 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.NET_PAID]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalDeductible_Cell) at SubrogationMainPanelSet.pcf: line 531, column 115
    function value_237 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.DEDUCTIBLE]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalExpectedRecovery_Cell) at SubrogationMainPanelSet.pcf: line 534, column 122
    function value_239 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.EXPECTED_RECOVERY]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalSubroRecovered_Cell) at SubrogationMainPanelSet.pcf: line 537, column 127
    function value_241 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.SUBROGATION_RECOVERIES]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalPending_Cell) at SubrogationMainPanelSet.pcf: line 540, column 112
    function value_243 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.PENDING]
    }
    
    // 'value' attribute on CurrencyCell (id=TotalAvailableRecoveryReserves_Cell) at SubrogationMainPanelSet.pcf: line 543, column 127
    function value_245 () : gw.api.financials.CurrencyAmount {
      return subroFinsResult.Totals[gw.subrogation.financials.SubrogationCalculationsEnum.OPEN_RECOVERY_RESERVES]
    }
    
    // 'visible' attribute on Row at SubrogationMainPanelSet.pcf: line 516, column 62
    function visible_247 () : java.lang.Boolean {
      return subroFinsResult.Totals.size() > 0
    }
    
    property get subroFinsResult () : gw.subrogation.financials.SubroFinsResult {
      return getVariableValue("subroFinsResult", 1) as gw.subrogation.financials.SubroFinsResult
    }
    
    property set subroFinsResult ($arg :  gw.subrogation.financials.SubroFinsResult) {
      setVariableValue("subroFinsResult", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubrogationMainPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignClaimLevelSubrogation) at SubrogationMainPanelSet.pcf: line 46, column 210
    function action_10 () : void {
      AssignSubrogationPopup.push(new gw.api.subrogation.SubrogationAssignmentPopup(claim.SubrogationSummary))
    }
    
    // 'action' attribute on ToolbarButton (id=CreateRecoveryReserve) at SubrogationMainPanelSet.pcf: line 411, column 129
    function action_206 () : void {
      createRecoveryReserve(claim)
    }
    
    // 'action' attribute on ToolbarButton (id=NewNoteButton) at SubrogationMainPanelSet.pcf: line 617, column 82
    function action_272 () : void {
      NewNotePopup.push(claim, NoteTopicType.TC_SUBROGATION)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateFromTemplate) at SubrogationMainPanelSet.pcf: line 652, column 85
    function action_282 () : void {
      ClaimNewDocumentFromTemplateWorksheet.goInWorkspace(claim, subrogationSummary.DocumentInitForUI)
    }
    
    // 'action' attribute on ToolbarButton (id=AttachDocument) at SubrogationMainPanelSet.pcf: line 657, column 85
    function action_285 () : void {
      ClaimNewDocumentLinkedWorksheet.goInWorkspace(claim, subrogationSummary.DocumentInitForUI)
    }
    
    // 'action' attribute on PickerToolbarButton (id=LinkDocument) at SubrogationMainPanelSet.pcf: line 663, column 75
    function action_288 () : void {
      PickExistingDocumentPopup.push(subrogationSummary.Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at SubrogationMainPanelSet.pcf: line 670, column 118
    function action_293 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=ReferForSubrogation) at SubrogationMainPanelSet.pcf: line 40, column 211
    function action_6 () : void {
      ReferSubrogationPopup.push(claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_61 () : void {
      AddressBookPickerPopup.push(statictypeof (claim.subrogator), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_63 () : void {
      if (claim.subrogator != null) { ClaimContactDetailPopup.push(claim.subrogator, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_65 () : void {
      ClaimContactDetailPopup.push(claim.subrogator, claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AssignClaimLevelSubrogation) at SubrogationMainPanelSet.pcf: line 46, column 210
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AssignSubrogationPopup.createDestination(new gw.api.subrogation.SubrogationAssignmentPopup(claim.SubrogationSummary))
    }
    
    // 'action' attribute on ToolbarButton (id=NewNoteButton) at SubrogationMainPanelSet.pcf: line 617, column 82
    function action_dest_273 () : pcf.api.Destination {
      return pcf.NewNotePopup.createDestination(claim, NoteTopicType.TC_SUBROGATION)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateFromTemplate) at SubrogationMainPanelSet.pcf: line 652, column 85
    function action_dest_283 () : pcf.api.Destination {
      return pcf.ClaimNewDocumentFromTemplateWorksheet.createDestination(claim, subrogationSummary.DocumentInitForUI)
    }
    
    // 'action' attribute on ToolbarButton (id=AttachDocument) at SubrogationMainPanelSet.pcf: line 657, column 85
    function action_dest_286 () : pcf.api.Destination {
      return pcf.ClaimNewDocumentLinkedWorksheet.createDestination(claim, subrogationSummary.DocumentInitForUI)
    }
    
    // 'action' attribute on PickerToolbarButton (id=LinkDocument) at SubrogationMainPanelSet.pcf: line 663, column 75
    function action_dest_289 () : pcf.api.Destination {
      return pcf.PickExistingDocumentPopup.createDestination(subrogationSummary.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_62 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (claim.subrogator), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_66 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(claim.subrogator, claim)
    }
    
    // 'action' attribute on ToolbarButton (id=ReferForSubrogation) at SubrogationMainPanelSet.pcf: line 40, column 211
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ReferSubrogationPopup.createDestination(claim)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AssignExposureLevelSubrogation) at SubrogationMainPanelSet.pcf: line 243, column 102
    function allCheckedRowsAction_122 (CheckedValues :  Subrogation[], CheckedValuesErrors :  java.util.Map) : void {
      AssignSubrogationPopup.push(new gw.api.subrogation.SubrogationAssignmentPopup(CheckedValues))
    }
    
    // 'available' attribute on CheckBoxInput (id=SubrogateIndividualExposures_Input) at SubrogationMainPanelSet.pcf: line 213, column 105
    function available_111 () : java.lang.Boolean {
      return subrogationSummary.SubrogateIndividualExposures ? not subrogationSummary.Subrogations.hasMatch(\ subrogation -> subrogation.Status == TC_OPEN or subrogation.Status == TC_CLOSED) : subrogationSummary.Claim.Exposures.length > 0 and subrogationSummary.Status != TC_CLOSED
    }
    
    // 'available' attribute on ToolbarButton (id=CreateFromTemplate) at SubrogationMainPanelSet.pcf: line 652, column 85
    function available_281 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentTemplateActionsAvailable
    }
    
    // 'available' attribute on ToolbarButton (id=AttachDocument) at SubrogationMainPanelSet.pcf: line 657, column 85
    function available_284 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable and documentsActionsHelper.DocumentContentActionsAvailable
    }
    
    // 'available' attribute on PickerToolbarButton (id=LinkDocument) at SubrogationMainPanelSet.pcf: line 663, column 75
    function available_287 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on ToolbarButton (id=RefreshAsyncContent) at SubrogationMainPanelSet.pcf: line 670, column 118
    function available_291 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentContentServerAvailable
    }
    
    // 'available' attribute on ToolbarButton (id=ReferForSubrogation) at SubrogationMainPanelSet.pcf: line 40, column 211
    function available_4 () : java.lang.Boolean {
      return perm.System.editsubrodetails
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=EditButton) at SubrogationMainPanelSet.pcf: line 623, column 83
    function checkedRowAction_274 (element :  entity.Note, CheckedValue :  entity.Note) : void {
      EditNotePopup.push(CheckedValue, false, true)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteButton) at SubrogationMainPanelSet.pcf: line 629, column 85
    function checkedRowAction_275 (element :  entity.Note, CheckedValue :  entity.Note) : void {
      gw.api.note.NotesUtilBase.deleteNote(CheckedValue)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PrintButton) at SubrogationMainPanelSet.pcf: line 636, column 84
    function checkedRowAction_276 (element :  entity.Note, CheckedValue :  entity.Note) : void {
      gw.api.print.PrintNoteAction.printNote(CheckedValue)
    }
    
    // 'def' attribute on ListViewInput (id=AdversePartyInfo) at SubrogationMainPanelSet.pcf: line 188, column 37
    function def_onEnter_109 (def :  pcf.EditableAdverseGeneralLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on ListViewInput (id=StatuteLimitations) at SubrogationMainPanelSet.pcf: line 333, column 37
    function def_onEnter_181 (def :  pcf.EditableStatuteLV) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on InputSetRef at SubrogationMainPanelSet.pcf: line 604, column 48
    function def_onEnter_269 (def :  pcf.DeductibleInputSet) : void {
      def.onEnter(claim)
    }
    
    // 'def' attribute on PanelRef at SubrogationMainPanelSet.pcf: line 612, column 58
    function def_onEnter_277 (def :  pcf.WideNotesLV) : void {
      def.onEnter(claim.getSubroNotes(), true)
    }
    
    // 'def' attribute on PanelRef at SubrogationMainPanelSet.pcf: line 644, column 42
    function def_onEnter_279 (def :  pcf.DocumentAlertPanelSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at SubrogationMainPanelSet.pcf: line 646, column 77
    function def_onEnter_294 (def :  pcf.SubrogationDocumentsLV) : void {
      def.onEnter(subrogationSummary.RelatedDocuments)
    }
    
    // 'def' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_58 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (claim.subrogator), null, claim)
    }
    
    // 'def' attribute on ListViewInput (id=AdversePartyInfo) at SubrogationMainPanelSet.pcf: line 188, column 37
    function def_refreshVariables_110 (def :  pcf.EditableAdverseGeneralLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on ListViewInput (id=StatuteLimitations) at SubrogationMainPanelSet.pcf: line 333, column 37
    function def_refreshVariables_182 (def :  pcf.EditableStatuteLV) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on InputSetRef at SubrogationMainPanelSet.pcf: line 604, column 48
    function def_refreshVariables_270 (def :  pcf.DeductibleInputSet) : void {
      def.refreshVariables(claim)
    }
    
    // 'def' attribute on PanelRef at SubrogationMainPanelSet.pcf: line 612, column 58
    function def_refreshVariables_278 (def :  pcf.WideNotesLV) : void {
      def.refreshVariables(claim.getSubroNotes(), true)
    }
    
    // 'def' attribute on PanelRef at SubrogationMainPanelSet.pcf: line 644, column 42
    function def_refreshVariables_280 (def :  pcf.DocumentAlertPanelSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at SubrogationMainPanelSet.pcf: line 646, column 77
    function def_refreshVariables_295 (def :  pcf.SubrogationDocumentsLV) : void {
      def.refreshVariables(subrogationSummary.RelatedDocuments)
    }
    
    // 'def' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_59 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (claim.subrogator), null, claim)
    }
    
    // 'value' attribute on CheckBoxInput (id=SubrogateIndividualExposures_Input) at SubrogationMainPanelSet.pcf: line 213, column 105
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogationSummary.SubrogateIndividualExposures = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at SubrogationMainPanelSet.pcf: line 62, column 53
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at SubrogationMainPanelSet.pcf: line 73, column 71
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at SubrogationMainPanelSet.pcf: line 80, column 59
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogationSummary.Status = (__VALUE_TO_SET as typekey.SubrogationStatus)
    }
    
    // 'value' attribute on TextInput (id=CloseComment_Input) at SubrogationMainPanelSet.pcf: line 94, column 48
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogationSummary.CloseComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Outcome_Input) at SubrogationMainPanelSet.pcf: line 102, column 48
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogationSummary.ClosedOutcome = (__VALUE_TO_SET as typekey.SubroClosedOutcome)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SubroExternalOwner_Input) at SubrogationMainPanelSet.pcf: line 109, column 36
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogationSummary.ExtOwned = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.subrogator = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ProrateDeductible_Input) at SubrogationMainPanelSet.pcf: line 159, column 68
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      subrogationSummary.ProrateDeductible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Status_Input) at SubrogationMainPanelSet.pcf: line 80, column 59
    function editable_25 () : java.lang.Boolean {
      return not subrogationSummary.SubrogateIndividualExposures
    }
    
    // 'editable' attribute on TextInput (id=CloseComment_Input) at SubrogationMainPanelSet.pcf: line 94, column 48
    function editable_36 () : java.lang.Boolean {
      return subrogationSummary.Subrogations.first().isFieldChanged(Subrogation#Status)
    }
    
    // 'initialValue' attribute on Variable at SubrogationMainPanelSet.pcf: line 16, column 34
    function initialValue_0 () : SubrogationSummary {
      return claim.SubrogationSummary
    }
    
    // 'initialValue' attribute on Variable at SubrogationMainPanelSet.pcf: line 21, column 23
    function initialValue_1 () : boolean {
      return not subrogationSummary.SubrogateIndividualExposures and subrogationSummary.Status == TC_CLOSED
    }
    
    // 'initialValue' attribute on Variable at SubrogationMainPanelSet.pcf: line 25, column 52
    function initialValue_2 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // EditButtons at SubrogationMainPanelSet.pcf: line 34, column 31
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at SubrogationMainPanelSet.pcf: line 111, column 115
    function onChange_52 () : void {
      if (!subrogationSummary.ExtOwned) { subrogationSummary.Claim.subrogator = null}
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=LinkDocument) at SubrogationMainPanelSet.pcf: line 663, column 75
    function onPick_290 (PickedValue :  Document) : void {
      subrogationSummary.linkDocumentForUI(PickedValue)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_67 (PickedValue :  Contact) : void {
      var contactType = statictypeof (claim.subrogator); var result = eval("claim.subrogator = claim.resolveContact(claim.subrogator) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'pickLocation' attribute on AddButton (id=AddResponsibleParty) at SubrogationMainPanelSet.pcf: line 196, column 63
    function pickLocation_107 () : void {
      NewSubroAdversePartyPopup.push(claim)
    }
    
    // 'selectOnEnter' attribute on Card (id=SubrogationFinancialsCard) at SubrogationMainPanelSet.pcf: line 402, column 99
    function selectOnEnter_271 () : java.lang.Boolean {
      return selectSubrogationFinancialsCard == true
    }
    
    // 'showConfirmMessage' attribute on CheckBoxInput (id=SubrogateIndividualExposures_Input) at SubrogationMainPanelSet.pcf: line 213, column 105
    function showConfirmMessage_112 () : java.lang.Boolean {
      return subrogationSummary.SubrogateIndividualExposures
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at SubrogationMainPanelSet.pcf: line 273, column 55
    function sortValue_123 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=CustomizedLiability_Cell) at SubrogationMainPanelSet.pcf: line 284, column 93
    function sortValue_124 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.CustomizedLiability
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationMainPanelSet.pcf: line 292, column 40
    function sortValue_126 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.Status
    }
    
    // 'value' attribute on TextCell (id=Owner_Cell) at SubrogationMainPanelSet.pcf: line 302, column 41
    function sortValue_127 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.AssignedUser
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at SubrogationMainPanelSet.pcf: line 307, column 75
    function sortValue_129 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.CloseDate
    }
    
    // 'value' attribute on TextCell (id=CloseComment_Cell) at SubrogationMainPanelSet.pcf: line 314, column 75
    function sortValue_130 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.CloseComment
    }
    
    // 'value' attribute on TypeKeyCell (id=Outcome_Cell) at SubrogationMainPanelSet.pcf: line 322, column 75
    function sortValue_131 (subrogation :  Subrogation) : java.lang.Object {
      return subrogation.Outcome
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SubrogationMainPanelSet.pcf: line 368, column 50
    function sortValue_185 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=TrialDetails_MatterType_Cell) at SubrogationMainPanelSet.pcf: line 374, column 61
    function sortValue_186 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.MatterType
    }
    
    // 'value' attribute on DateCell (id=TrialDetails_TrialDate_Cell) at SubrogationMainPanelSet.pcf: line 382, column 47
    function sortValue_187 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.TrialDateActivity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=Matter_CloseDate_Cell) at SubrogationMainPanelSet.pcf: line 387, column 47
    function sortValue_188 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.CloseDate
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 257, column 56
    function toCreateAndAdd_177 () : Subrogation {
      return subrogationSummary.createNewSubrogation()
    }
    
    // 'toRemove' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 257, column 56
    function toRemove_178 (subrogation :  Subrogation) : void {
      subrogationSummary.removeExposureSubrogation(subrogation)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_72 () : java.lang.Object {
      return claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at SubrogationMainPanelSet.pcf: line 56, column 55
    function valueRoot_13 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at SubrogationMainPanelSet.pcf: line 80, column 59
    function valueRoot_28 () : java.lang.Object {
      return subrogationSummary
    }
    
    // 'value' attribute on TextInput (id=SubroReferralOwner_Input) at SubrogationMainPanelSet.pcf: line 135, column 86
    function valueRoot_83 () : java.lang.Object {
      return subrogationSummary.Subrogations.singleWhere( \ subrogation -> subrogation.Exposure == null)
    }
    
    // 'value' attribute on CurrencyInput (id=DeductibleRepaid_Input) at SubrogationMainPanelSet.pcf: line 170, column 68
    function value_102 () : gw.api.financials.CurrencyAmount {
      return subrogationSummary.DeductibleRepaid
    }
    
    // 'value' attribute on TextInput (id=Jurisdiction_Input) at SubrogationMainPanelSet.pcf: line 56, column 55
    function value_12 () : typekey.Jurisdiction {
      return claim.JurisdictionState
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at SubrogationMainPanelSet.pcf: line 62, column 53
    function value_15 () : typekey.FaultRating {
      return claim.FaultRating
    }
    
    // 'value' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 257, column 56
    function value_179 () : entity.Subrogation[] {
      return subrogationSummary.Subrogations
    }
    
    // 'value' attribute on TextInput (id=SubroArbThoseInvolved_Input) at SubrogationMainPanelSet.pcf: line 346, column 58
    function value_183 () : java.lang.String {
      return claim.getPartiesInMatters()
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at SubrogationMainPanelSet.pcf: line 73, column 71
    function value_20 () : java.math.BigDecimal {
      return claim.Fault
    }
    
    // 'value' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 361, column 53
    function value_203 () : entity.Matter[] {
      return claim.getSubroMatters()
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at SubrogationMainPanelSet.pcf: line 80, column 59
    function value_26 () : typekey.SubrogationStatus {
      return subrogationSummary.Status
    }
    
    // 'value' attribute on DateInput (id=CloseDate_Input) at SubrogationMainPanelSet.pcf: line 88, column 48
    function value_32 () : java.util.Date {
      return subrogationSummary.CloseDate
    }
    
    // 'value' attribute on TextInput (id=CloseComment_Input) at SubrogationMainPanelSet.pcf: line 94, column 48
    function value_38 () : java.lang.String {
      return subrogationSummary.CloseComment
    }
    
    // 'value' attribute on TypeKeyInput (id=Outcome_Input) at SubrogationMainPanelSet.pcf: line 102, column 48
    function value_46 () : typekey.SubroClosedOutcome {
      return subrogationSummary.ClosedOutcome
    }
    
    // 'value' attribute on BooleanRadioInput (id=SubroExternalOwner_Input) at SubrogationMainPanelSet.pcf: line 109, column 36
    function value_53 () : java.lang.Boolean {
      return subrogationSummary.ExtOwned
    }
    
    // 'value' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_69 () : entity.Contact {
      return claim.subrogator
    }
    
    // 'value' attribute on TextInput (id=SubroReferralOwner_Input) at SubrogationMainPanelSet.pcf: line 135, column 86
    function value_82 () : entity.User {
      return subrogationSummary.Subrogations.singleWhere( \ subrogation -> subrogation.Exposure == null).AssignedUser
    }
    
    // 'value' attribute on DateInput (id=SubroReferralDate_Input) at SubrogationMainPanelSet.pcf: line 141, column 69
    function value_86 () : java.util.Date {
      return subrogationSummary.SubroReferralDate
    }
    
    // 'value' attribute on TextAreaInput (id=SubroReferralComment_Input) at SubrogationMainPanelSet.pcf: line 148, column 67
    function value_90 () : java.lang.String {
      return subrogationSummary.SubroReferralComment
    }
    
    // 'value' attribute on BooleanRadioInput (id=ProrateDeductible_Input) at SubrogationMainPanelSet.pcf: line 159, column 68
    function value_95 () : java.lang.Boolean {
      return subrogationSummary.ProrateDeductible
    }
    
    // 'value' attribute on CurrencyInput (id=DeductibleToRepay_Input) at SubrogationMainPanelSet.pcf: line 166, column 69
    function value_99 () : gw.api.financials.CurrencyAmount {
      return subrogationSummary.DeductibleToRepay
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_73 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_73 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_73 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_74 () : void {
      var __valueRangeArg = claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_73(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at SubrogationMainPanelSet.pcf: line 151, column 82
    function visible_105 () : java.lang.Boolean {
      return not subrogationSummary.SubroAdverseParties.IsEmpty
    }
    
    // 'visible' attribute on AddButton (id=AddSubrogation) at SubrogationMainPanelSet.pcf: line 229, column 134
    function visible_118 () : java.lang.Boolean {
      return subrogationSummary.Subrogations.length < claim.Exposures.length and perm.System.editsubrodetails
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=AssignExposureLevelSubrogation) at SubrogationMainPanelSet.pcf: line 243, column 102
    function visible_121 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and subrogationSummary.EscalateSubro
    }
    
    // 'visible' attribute on BooleanRadioCell (id=CustomizedLiability_Cell) at SubrogationMainPanelSet.pcf: line 284, column 93
    function visible_125 () : java.lang.Boolean {
      return not subrogationSummary.HasNoSubroAdversePartyOverrides
    }
    
    // 'visible' attribute on TextCell (id=Owner_Cell) at SubrogationMainPanelSet.pcf: line 302, column 41
    function visible_128 () : java.lang.Boolean {
      return subrogationSummary.EscalateSubro and subrogationSummary.SubrogateIndividualExposures
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at SubrogationMainPanelSet.pcf: line 73, column 71
    function visible_19 () : java.lang.Boolean {
      return claim.FaultRating == FaultRating.TC_1 
    }
    
    // 'visible' attribute on InputSet at SubrogationMainPanelSet.pcf: line 340, column 114
    function visible_204 () : java.lang.Boolean {
      return claim.getPartiesInMatters().length() > 0 or claim.getSubroMatters().length > 0
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateRecoveryReserve) at SubrogationMainPanelSet.pcf: line 411, column 129
    function visible_205 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.UseRecoveryReserves.Value and perm.Claim.createrecoveryreserve(claim)
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at SubrogationMainPanelSet.pcf: line 670, column 118
    function visible_292 () : java.lang.Boolean {
      return documentsActionsHelper.isShowAsynchronousRefreshAction(subrogationSummary.RelatedDocuments)
    }
    
    // 'visible' attribute on DateInput (id=CloseDate_Input) at SubrogationMainPanelSet.pcf: line 88, column 48
    function visible_31 () : java.lang.Boolean {
      return showCloseFields
    }
    
    // 'visible' attribute on ToolbarButton (id=ReferForSubrogation) at SubrogationMainPanelSet.pcf: line 40, column 211
    function visible_5 () : java.lang.Boolean {
      return (gw.api.print.PrintUtil.isPrintingPDF() or not CurrentLocation.InEditMode) and not claim.SubrogationSummary.EscalateSubro and claim.SubrogationStatus != SubrogationStatus.TC_CLOSED
    }
    
    // 'visible' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_57 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Subrogator_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_60 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (claim.subrogator), claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextAreaInput (id=SubroReferralComment_Input) at SubrogationMainPanelSet.pcf: line 148, column 67
    function visible_89 () : java.lang.Boolean {
      return subrogationSummary.EscalateSubro
    }
    
    // 'visible' attribute on ToolbarButton (id=AssignClaimLevelSubrogation) at SubrogationMainPanelSet.pcf: line 46, column 210
    function visible_9 () : java.lang.Boolean {
      return (gw.api.print.PrintUtil.isPrintingPDF() or not CurrentLocation.InEditMode) and claim.SubrogationSummary.EscalateSubro and not claim.SubrogationSummary.SubrogateIndividualExposures
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get selectSubrogationFinancialsCard () : boolean {
      return getRequireValue("selectSubrogationFinancialsCard", 0) as java.lang.Boolean
    }
    
    property set selectSubrogationFinancialsCard ($arg :  boolean) {
      setRequireValue("selectSubrogationFinancialsCard", 0, $arg)
    }
    
    property get showCloseFields () : boolean {
      return getVariableValue("showCloseFields", 0) as java.lang.Boolean
    }
    
    property set showCloseFields ($arg :  boolean) {
      setVariableValue("showCloseFields", 0, $arg)
    }
    
    property get subrogationSummary () : SubrogationSummary {
      return getVariableValue("subrogationSummary", 0) as SubrogationSummary
    }
    
    property set subrogationSummary ($arg :  SubrogationSummary) {
      setVariableValue("subrogationSummary", 0, $arg)
    }
    
        
        function createRecoveryReserve(aClaim : Claim) {
          CurrentLocation.startEditing()
    
          var success = false
          try {
            aClaim.AutoSetOpenRecoveryReserve()
            CurrentLocation.commit()
            success = true
          } finally {
            if (!success) {
              CurrentLocation.cancel()
            }
          }
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationMainPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubrogationRecoveriesLVExpressionsImpl extends SubrogationMainPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SubrogationMainPanelSet.pcf: line 557, column 54
    function initialValue_248 () : java.util.List<Recovery> {
      return claim.SubroClaimCostRecoveries
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at SubrogationMainPanelSet.pcf: line 568, column 48
    function sortValue_249 (recovery :  entity.Recovery) : java.lang.Object {
      return recovery.CreateTime
    }
    
    // 'value' attribute on TextCell (id=ReserveLine_Cell) at SubrogationMainPanelSet.pcf: line 573, column 51
    function sortValue_250 (recovery :  entity.Recovery) : java.lang.Object {
      return recovery.ReserveLine
    }
    
    // 'value' attribute on CurrencyCell (id=RecoveryAmount_Cell) at SubrogationMainPanelSet.pcf: line 577, column 53
    function sortValue_251 (recovery :  entity.Recovery) : java.lang.Object {
      return recovery.ReservingAmount
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationMainPanelSet.pcf: line 582, column 58
    function sortValue_252 (recovery :  entity.Recovery) : java.lang.Object {
      return recovery.Status
    }
    
    // 'value' attribute on RowIterator at SubrogationMainPanelSet.pcf: line 562, column 65
    function value_265 () : java.util.List<entity.Recovery> {
      return recoveries
    }
    
    // 'value' attribute on CurrencyCell (id=RecoveryAmountTotalFooter_Cell) at SubrogationMainPanelSet.pcf: line 595, column 89
    function value_266 () : gw.api.financials.CurrencyAmount {
      return recoveries.sumCurrencyAmount(\ rec -> rec.ReservingAmount )
    }
    
    // 'visible' attribute on Row at SubrogationMainPanelSet.pcf: line 587, column 170
    function visible_268 () : java.lang.Boolean {
      return recoveries.size() > 0 and !recoveries.hasMatch(\ rec -> rec.ReserveLine.ReservingCurrency != recoveries[0].ReserveLine.ReservingCurrency )
    }
    
    property get recoveries () : java.util.List<Recovery> {
      return getVariableValue("recoveries", 1) as java.util.List<Recovery>
    }
    
    property set recoveries ($arg :  java.util.List<Recovery>) {
      setVariableValue("recoveries", 1, $arg)
    }
    
    
  }
  
  
}