package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Set
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/BaggageIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BaggageIncidentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/BaggageIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BaggageIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=DesktopActivities_PrintButton) at BaggageIncidentDV.pcf: line 171, column 27
    function action_80 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions("BaggageContentsLineItemsLV")
    }
    
    // 'available' attribute on ToolbarButton (id=DesktopActivities_PrintButton) at BaggageIncidentDV.pcf: line 171, column 27
    function available_79 () : java.lang.Boolean {
      return perm.User.printlistviews
    }
    
    // 'def' attribute on InputSetRef at BaggageIncidentDV.pcf: line 95, column 65
    function def_onEnter_43 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(aBaggageIncident.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at BaggageIncidentDV.pcf: line 151, column 40
    function def_onEnter_75 (def :  pcf.AppraisalServiceInputSet) : void {
      def.onEnter(AppraisalServiceRequest, aBaggageIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at BaggageIncidentDV.pcf: line 153, column 146
    function def_onEnter_77 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(Claim, aBaggageIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef at BaggageIncidentDV.pcf: line 95, column 65
    function def_refreshVariables_44 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(aBaggageIncident.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at BaggageIncidentDV.pcf: line 151, column 40
    function def_refreshVariables_76 (def :  pcf.AppraisalServiceInputSet) : void {
      def.refreshVariables(AppraisalServiceRequest, aBaggageIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at BaggageIncidentDV.pcf: line 153, column 146
    function def_refreshVariables_78 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(Claim, aBaggageIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDescription_Input) at BaggageIncidentDV.pcf: line 50, column 48
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.PropertyDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.RelatedTripRU = (__VALUE_TO_SET as entity.TripRU)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DelayOnly_Input) at BaggageIncidentDV.pcf: line 65, column 44
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.DelayOnly = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=BaggageMissingFrom_Input) at BaggageIncidentDV.pcf: line 75, column 54
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.BaggageMissingFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=BaggageRecoveredOn_Input) at BaggageIncidentDV.pcf: line 83, column 54
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.BaggageRecoveredOn = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at BaggageIncidentDV.pcf: line 90, column 47
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CarrierCompensated_Input) at BaggageIncidentDV.pcf: line 104, column 53
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.CarrierCompensated = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=CarrierCompensatedAmount_Input) at BaggageIncidentDV.pcf: line 112, column 64
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.CarrierCompensatedAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at BaggageIncidentDV.pcf: line 121, column 35
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.EstimatesReceived = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TypeKeyInput (id=BaggageType_Input) at BaggageIncidentDV.pcf: line 41, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.BaggageType = (__VALUE_TO_SET as typekey.BaggageType)
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at BaggageIncidentDV.pcf: line 129, column 65
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.EstRepairCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at BaggageIncidentDV.pcf: line 135, column 65
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      aBaggageIncident.EstRepairTime = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at BaggageIncidentDV.pcf: line 16, column 21
    function initialValue_0 () : Claim {
      return aBaggageIncident.Claim
    }
    
    // 'initialValue' attribute on Variable at BaggageIncidentDV.pcf: line 21, column 23
    function initialValue_1 () : boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at BaggageIncidentDV.pcf: line 25, column 30
    function initialValue_2 () : java.util.Date {
      return gw.api.util.DateUtil.currentDate()
    }
    
    // 'initialValue' attribute on Variable at BaggageIncidentDV.pcf: line 29, column 22
    function initialValue_3 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.CONTENTSINSPECTAPPRAISAL
    }
    
    // 'initialValue' attribute on Variable at BaggageIncidentDV.pcf: line 33, column 51
    function initialValue_4 () : java.util.Set<ServiceRequest> {
      return createOtherServiceRequests()
    }
    
    // 'label' attribute on TextAreaInput (id=Description_Input) at BaggageIncidentDV.pcf: line 90, column 47
    function label_37 () : java.lang.Object {
      return aBaggageIncident.DelayOnly == true ? DisplayKey.get("Web.BaggageIncident.DelayDescription") : DisplayKey.get("Web.BaggageIncident.DamageDescription")
    }
    
    // 'required' attribute on TextAreaInput (id=PropertyDescription_Input) at BaggageIncidentDV.pcf: line 50, column 48
    function required_9 () : java.lang.Boolean {
      return aBaggageIncident.BaggageType == TC_OTHER 
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at BaggageIncidentDV.pcf: line 194, column 48
    function sortValue_81 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=LineItemDescription_Cell) at BaggageIncidentDV.pcf: line 200, column 43
    function sortValue_82 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=LineItemCategory_Cell) at BaggageIncidentDV.pcf: line 207, column 62
    function sortValue_83 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ContentCategory
    }
    
    // 'value' attribute on DateCell (id=LineItemPurchaseDate_Cell) at BaggageIncidentDV.pcf: line 223, column 38
    function sortValue_85 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.DateAcquired
    }
    
    // 'value' attribute on TextCell (id=LineItemAge_Cell) at BaggageIncidentDV.pcf: line 233, column 39
    function sortValue_87 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.Age
    }
    
    // 'value' attribute on BooleanRadioCell (id=LineItemProofOfOwnershipProvided_Cell) at BaggageIncidentDV.pcf: line 278, column 56
    function sortValue_90 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ProofOfOwnershipProvided
    }
    
    // 'value' attribute on TextCell (id=LineItemNotes_Cell) at BaggageIncidentDV.pcf: line 284, column 126
    function sortValue_91 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ItemComment
    }
    
    // '$$sumValue' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 254, column 34
    function sumValueRoot_98 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item
    }
    
    // 'footerSumValue' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 273, column 35
    function sumValue_101 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.AmountAfterLimit
    }
    
    // 'footerSumValue' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 254, column 34
    function sumValue_97 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ReplacementValue
    }
    
    // 'footerSumValue' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 265, column 35
    function sumValue_99 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ActualCashValue
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 184, column 56
    function toCreateAndAdd_156 () : entity.AssessmentContentItem {
      return aBaggageIncident.createTravelContentItemLine()
    }
    
    // 'toRemove' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 184, column 56
    function toRemove_157 (item :  entity.AssessmentContentItem) : void {
      aBaggageIncident.removeFromContentItemLine( item )
    }
    
    // 'validationExpression' attribute on DateInput (id=BaggageMissingFrom_Input) at BaggageIncidentDV.pcf: line 75, column 54
    function validationExpression_25 () : java.lang.Object {
      return aBaggageIncident.BaggageMissingFrom > gw.api.util.DateUtil.currentDate() or aBaggageIncident.BaggageMissingFrom > aBaggageIncident.BaggageRecoveredOn ? DisplayKey.get("Web.BaggageIncident.BaggageMissingFrom.Validation") : null
    }
    
    // 'validationExpression' attribute on DateInput (id=BaggageRecoveredOn_Input) at BaggageIncidentDV.pcf: line 83, column 54
    function validationExpression_31 () : java.lang.Object {
      return aBaggageIncident.BaggageRecoveredOn > gw.api.util.DateUtil.currentDate() ? DisplayKey.get("Web.BaggageIncident.BaggageRecoveredOn.Validation") : null
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function valueRange_17 () : java.lang.Object {
      return aBaggageIncident.Claim.Policy.RiskUnits.whereTypeIs(TripRU)
    }
    
    // 'value' attribute on TypeKeyInput (id=BaggageType_Input) at BaggageIncidentDV.pcf: line 41, column 41
    function valueRoot_7 () : java.lang.Object {
      return aBaggageIncident
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDescription_Input) at BaggageIncidentDV.pcf: line 50, column 48
    function value_10 () : java.lang.String {
      return aBaggageIncident.PropertyDesc
    }
    
    // 'value' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function value_14 () : entity.TripRU {
      return aBaggageIncident.RelatedTripRU
    }
    
    // 'value' attribute on RowIterator (id=ContentsLineItems) at BaggageIncidentDV.pcf: line 184, column 56
    function value_158 () : entity.AssessmentContentItem[] {
      return aBaggageIncident.TravelContentItemLines
    }
    
    // 'value' attribute on BooleanRadioInput (id=DelayOnly_Input) at BaggageIncidentDV.pcf: line 65, column 44
    function value_21 () : java.lang.Boolean {
      return aBaggageIncident.DelayOnly
    }
    
    // 'value' attribute on DateInput (id=BaggageMissingFrom_Input) at BaggageIncidentDV.pcf: line 75, column 54
    function value_26 () : java.util.Date {
      return aBaggageIncident.BaggageMissingFrom
    }
    
    // 'value' attribute on DateInput (id=BaggageRecoveredOn_Input) at BaggageIncidentDV.pcf: line 83, column 54
    function value_32 () : java.util.Date {
      return aBaggageIncident.BaggageRecoveredOn
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at BaggageIncidentDV.pcf: line 90, column 47
    function value_38 () : java.lang.String {
      return aBaggageIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=CarrierCompensated_Input) at BaggageIncidentDV.pcf: line 104, column 53
    function value_45 () : java.lang.Boolean {
      return aBaggageIncident.CarrierCompensated
    }
    
    // 'value' attribute on TypeKeyInput (id=BaggageType_Input) at BaggageIncidentDV.pcf: line 41, column 41
    function value_5 () : typekey.BaggageType {
      return aBaggageIncident.BaggageType
    }
    
    // 'value' attribute on CurrencyInput (id=CarrierCompensatedAmount_Input) at BaggageIncidentDV.pcf: line 112, column 64
    function value_50 () : gw.api.financials.CurrencyAmount {
      return aBaggageIncident.CarrierCompensatedAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at BaggageIncidentDV.pcf: line 121, column 35
    function value_55 () : typekey.YesNo {
      return aBaggageIncident.EstimatesReceived
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at BaggageIncidentDV.pcf: line 129, column 65
    function value_60 () : gw.api.financials.CurrencyAmount {
      return aBaggageIncident.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at BaggageIncidentDV.pcf: line 135, column 65
    function value_66 () : java.lang.String {
      return aBaggageIncident.EstRepairTime
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.TripRU[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.TripRU>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedToTrip_Input) at BaggageIncidentDV.pcf: line 57, column 36
    function verifyValueRange_19 () : void {
      var __valueRangeArg = aBaggageIncident.Claim.Policy.RiskUnits.whereTypeIs(TripRU)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'visible' attribute on CurrencyInput (id=CarrierCompensatedAmount_Input) at BaggageIncidentDV.pcf: line 112, column 64
    function visible_49 () : java.lang.Boolean {
      return aBaggageIncident.CarrierCompensated == true
    }
    
    // 'visible' attribute on CurrencyInput (id=EstimateCost_Input) at BaggageIncidentDV.pcf: line 129, column 65
    function visible_59 () : java.lang.Boolean {
      return aBaggageIncident.EstimatesReceived == TC_YES
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at BaggageIncidentDV.pcf: line 143, column 37
    function visible_71 () : java.lang.Boolean {
      return Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at BaggageIncidentDV.pcf: line 148, column 72
    function visible_73 () : java.lang.Boolean {
      return not Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at BaggageIncidentDV.pcf: line 216, column 35
    function visible_84 () : java.lang.Boolean {
      return inEditMode
    }
    
    // 'visible' attribute on TextCell (id=LineItemNotes_Cell) at BaggageIncidentDV.pcf: line 284, column 126
    function visible_92 () : java.lang.Boolean {
      return !inEditMode || (gw.api.print.PrintUtil.isPrintingPDF() || gw.api.print.PrintUtil.isPrintingCSV())
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get aBaggageIncident () : BaggageIncident {
      return getRequireValue("aBaggageIncident", 0) as BaggageIncident
    }
    
    property set aBaggageIncident ($arg :  BaggageIncident) {
      setRequireValue("aBaggageIncident", 0, $arg)
    }
    
    property get appraisalIncidentCode () : String {
      return getVariableValue("appraisalIncidentCode", 0) as String
    }
    
    property set appraisalIncidentCode ($arg :  String) {
      setVariableValue("appraisalIncidentCode", 0, $arg)
    }
    
    property get currDate () : java.util.Date {
      return getVariableValue("currDate", 0) as java.util.Date
    }
    
    property set currDate ($arg :  java.util.Date) {
      setVariableValue("currDate", 0, $arg)
    }
    
    property get inEditMode () : boolean {
      return getVariableValue("inEditMode", 0) as java.lang.Boolean
    }
    
    property set inEditMode ($arg :  boolean) {
      setVariableValue("inEditMode", 0, $arg)
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
      return aBaggageIncident.ServiceRequests.firstWhere(\ sr ->
          sr.Instruction.Services.Count == 1
              and sr.Instruction.Services.single().Service.Code == serviceCode
              and (otherServiceRequests == null or not otherServiceRequests.contains(sr))
      )
    }
    
    property get AppraisalServiceRequest() : ServiceRequest {
      return findServiceRequest(appraisalIncidentCode)
    }
    
    function createOtherServiceRequests() :  Set<ServiceRequest> {
      return aBaggageIncident.ServiceRequests.where(\sr -> sr != AppraisalServiceRequest).toSet()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/BaggageIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BaggageIncidentDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at BaggageIncidentDV.pcf: line 194, column 48
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.NumberOfItems = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=LineItemDescription_Cell) at BaggageIncidentDV.pcf: line 200, column 43
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=LineItemCategory_Cell) at BaggageIncidentDV.pcf: line 207, column 62
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.ContentCategory = (__VALUE_TO_SET as typekey.ContentLineItemCategory)
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at BaggageIncidentDV.pcf: line 216, column 35
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.PurchaseCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateCell (id=LineItemPurchaseDate_Cell) at BaggageIncidentDV.pcf: line 223, column 38
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.DateAcquired = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=LineItemDepreciationPercentage_Cell) at BaggageIncidentDV.pcf: line 243, column 34
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.DepreciationPercentage = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemReplacementValue_Cell) at BaggageIncidentDV.pcf: line 254, column 34
    function defaultSetter_138 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.ReplacementValue = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemAmountAfterLimit_Cell) at BaggageIncidentDV.pcf: line 273, column 35
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.AmountAfterLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioCell (id=LineItemProofOfOwnershipProvided_Cell) at BaggageIncidentDV.pcf: line 278, column 56
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.ProofOfOwnershipProvided = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=LineItemQuantity_Cell) at BaggageIncidentDV.pcf: line 194, column 48
    function requestValidationExpression_104 (VALUE :  java.lang.Integer) : java.lang.Object {
      return (VALUE != null and VALUE < 1) ? DisplayKey.get("Web.PropertyContentsIncident.LineItemQuantityIllegal") : null
    }
    
    // 'requestValidationExpression' attribute on DateCell (id=LineItemPurchaseDate_Cell) at BaggageIncidentDV.pcf: line 223, column 38
    function requestValidationExpression_122 (VALUE :  java.util.Date) : java.lang.Object {
      return VALUE > (item.Incident.Claim.LossDate != null ? item.Incident.Claim.LossDate : java.util.Date.Today) ? DisplayKey.get("Web.PropertyContentsIncident.LineItemPurchaseDateError") : null
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at BaggageIncidentDV.pcf: line 194, column 48
    function valueRoot_107 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at BaggageIncidentDV.pcf: line 194, column 48
    function value_105 () : java.lang.Integer {
      return item.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=LineItemDescription_Cell) at BaggageIncidentDV.pcf: line 200, column 43
    function value_109 () : java.lang.String {
      return item.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=LineItemCategory_Cell) at BaggageIncidentDV.pcf: line 207, column 62
    function value_113 () : typekey.ContentLineItemCategory {
      return item.ContentCategory
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at BaggageIncidentDV.pcf: line 216, column 35
    function value_117 () : gw.api.financials.CurrencyAmount {
      return item.PurchaseCost
    }
    
    // 'value' attribute on DateCell (id=LineItemPurchaseDate_Cell) at BaggageIncidentDV.pcf: line 223, column 38
    function value_123 () : java.util.Date {
      return item.DateAcquired
    }
    
    // 'value' attribute on TextCell (id=LineItemAge_Cell) at BaggageIncidentDV.pcf: line 233, column 39
    function value_128 () : java.math.BigDecimal {
      return item.Age
    }
    
    // 'value' attribute on TextCell (id=LineItemDepreciationPercentage_Cell) at BaggageIncidentDV.pcf: line 243, column 34
    function value_132 () : java.math.BigDecimal {
      return item.DepreciationPercentage
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemReplacementValue_Cell) at BaggageIncidentDV.pcf: line 254, column 34
    function value_137 () : gw.api.financials.CurrencyAmount {
      return item.ReplacementValue
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemTotalACV_Cell) at BaggageIncidentDV.pcf: line 265, column 35
    function value_141 () : gw.api.financials.CurrencyAmount {
      return item.ActualCashValue
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemAmountAfterLimit_Cell) at BaggageIncidentDV.pcf: line 273, column 35
    function value_144 () : gw.api.financials.CurrencyAmount {
      return item.AmountAfterLimit
    }
    
    // 'value' attribute on BooleanRadioCell (id=LineItemProofOfOwnershipProvided_Cell) at BaggageIncidentDV.pcf: line 278, column 56
    function value_148 () : java.lang.Boolean {
      return item.ProofOfOwnershipProvided
    }
    
    // 'value' attribute on TextCell (id=LineItemNotes_Cell) at BaggageIncidentDV.pcf: line 284, column 126
    function value_152 () : java.lang.String {
      return item.ItemComment
    }
    
    // 'visible' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at BaggageIncidentDV.pcf: line 216, column 35
    function visible_120 () : java.lang.Boolean {
      return inEditMode
    }
    
    // 'visible' attribute on TextCell (id=LineItemNotes_Cell) at BaggageIncidentDV.pcf: line 284, column 126
    function visible_154 () : java.lang.Boolean {
      return !inEditMode || (gw.api.print.PrintUtil.isPrintingPDF() || gw.api.print.PrintUtil.isPrintingCSV())
    }
    
    property get item () : entity.AssessmentContentItem {
      return getIteratedValue(1) as entity.AssessmentContentItem
    }
    
    
  }
  
  
}