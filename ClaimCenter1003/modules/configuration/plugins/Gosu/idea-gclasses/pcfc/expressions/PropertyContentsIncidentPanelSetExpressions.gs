package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/PropertyContentsIncidentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertyContentsIncidentPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/incidents/PropertyContentsIncidentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PropertyContentsIncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemAmountAfterLimit_Cell) at PropertyContentsIncidentPanelSet.pcf: line 231, column 32
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.AmountAfterLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at PropertyContentsIncidentPanelSet.pcf: line 151, column 46
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.NumberOfItems = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=LineItemName_Cell) at PropertyContentsIncidentPanelSet.pcf: line 158, column 41
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=LineItemCategory_Cell) at PropertyContentsIncidentPanelSet.pcf: line 165, column 60
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.ContentCategory = (__VALUE_TO_SET as typekey.ContentLineItemCategory)
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at PropertyContentsIncidentPanelSet.pcf: line 174, column 33
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.PurchaseCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateCell (id=LineItemPurchaseDate_Cell) at PropertyContentsIncidentPanelSet.pcf: line 181, column 36
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.DateAcquired = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=LineItemDepreciationPercentage_Cell) at PropertyContentsIncidentPanelSet.pcf: line 201, column 32
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.DepreciationPercentage = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemReplacementValue_Cell) at PropertyContentsIncidentPanelSet.pcf: line 212, column 32
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      item.ReplacementValue = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=LineItemQuantity_Cell) at PropertyContentsIncidentPanelSet.pcf: line 151, column 46
    function requestValidationExpression_64 (VALUE :  java.lang.Integer) : java.lang.Object {
      return (VALUE != null and VALUE < 1) ? DisplayKey.get("Web.PropertyContentsIncident.LineItemQuantityIllegal") : null
    }
    
    // 'requestValidationExpression' attribute on DateCell (id=LineItemPurchaseDate_Cell) at PropertyContentsIncidentPanelSet.pcf: line 181, column 36
    function requestValidationExpression_82 (VALUE :  java.util.Date) : java.lang.Object {
      return VALUE > (item.Incident.Claim.LossDate != null ? item.Incident.Claim.LossDate : java.util.Date.Today) ? DisplayKey.get("Web.PropertyContentsIncident.LineItemPurchaseDateError") : null
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at PropertyContentsIncidentPanelSet.pcf: line 151, column 46
    function valueRoot_67 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemTotalACV_Cell) at PropertyContentsIncidentPanelSet.pcf: line 223, column 33
    function value_101 () : gw.api.financials.CurrencyAmount {
      return item.ActualCashValue
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemAmountAfterLimit_Cell) at PropertyContentsIncidentPanelSet.pcf: line 231, column 32
    function value_104 () : gw.api.financials.CurrencyAmount {
      return item.AmountAfterLimit
    }
    
    // 'value' attribute on TextCell (id=LineItemNotes_Cell) at PropertyContentsIncidentPanelSet.pcf: line 240, column 124
    function value_108 () : java.lang.String {
      return item.ItemComment
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at PropertyContentsIncidentPanelSet.pcf: line 151, column 46
    function value_65 () : java.lang.Integer {
      return item.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=LineItemName_Cell) at PropertyContentsIncidentPanelSet.pcf: line 158, column 41
    function value_69 () : java.lang.String {
      return item.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=LineItemCategory_Cell) at PropertyContentsIncidentPanelSet.pcf: line 165, column 60
    function value_73 () : typekey.ContentLineItemCategory {
      return item.ContentCategory
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at PropertyContentsIncidentPanelSet.pcf: line 174, column 33
    function value_77 () : gw.api.financials.CurrencyAmount {
      return item.PurchaseCost
    }
    
    // 'value' attribute on DateCell (id=LineItemPurchaseDate_Cell) at PropertyContentsIncidentPanelSet.pcf: line 181, column 36
    function value_83 () : java.util.Date {
      return item.DateAcquired
    }
    
    // 'value' attribute on TextCell (id=LineItemAge_Cell) at PropertyContentsIncidentPanelSet.pcf: line 191, column 37
    function value_88 () : java.math.BigDecimal {
      return item.Age
    }
    
    // 'value' attribute on TextCell (id=LineItemDepreciationPercentage_Cell) at PropertyContentsIncidentPanelSet.pcf: line 201, column 32
    function value_92 () : java.math.BigDecimal {
      return item.DepreciationPercentage
    }
    
    // 'value' attribute on CurrencyCell (id=LineItemReplacementValue_Cell) at PropertyContentsIncidentPanelSet.pcf: line 212, column 32
    function value_97 () : gw.api.financials.CurrencyAmount {
      return item.ReplacementValue
    }
    
    // 'visible' attribute on TextCell (id=LineItemNotes_Cell) at PropertyContentsIncidentPanelSet.pcf: line 240, column 124
    function visible_110 () : java.lang.Boolean {
      return !inEditMode || (gw.api.print.PrintUtil.isPrintingPDF() || gw.api.print.PrintUtil.isPrintingCSV())
    }
    
    // 'visible' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at PropertyContentsIncidentPanelSet.pcf: line 174, column 33
    function visible_80 () : java.lang.Boolean {
      return inEditMode
    }
    
    property get item () : entity.AssessmentContentItem {
      return getIteratedValue(1) as entity.AssessmentContentItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/incidents/PropertyContentsIncidentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PropertyContentsIncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemDescription_Cell) at PropertyContentsIncidentPanelSet.pcf: line 105, column 63
    function valueRoot_32 () : java.lang.Object {
      return scheduledItem.PropertyItem
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemDescription_Cell) at PropertyContentsIncidentPanelSet.pcf: line 105, column 63
    function value_31 () : java.lang.String {
      return scheduledItem.PropertyItem.Description
    }
    
    // 'value' attribute on CurrencyCell (id=ScheduledItemValue_Cell) at PropertyContentsIncidentPanelSet.pcf: line 110, column 66
    function value_34 () : gw.api.financials.CurrencyAmount {
      return scheduledItem.PropertyItem.AppraisedValue
    }
    
    property get scheduledItem () : entity.PropertyContentsScheduledItem {
      return getIteratedValue(1) as entity.PropertyContentsScheduledItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/incidents/PropertyContentsIncidentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyContentsIncidentPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=DesktopActivities_PrintButton) at PropertyContentsIncidentPanelSet.pcf: line 128, column 25
    function action_41 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions("PropertyContentsLineItemsLV")
    }
    
    // 'available' attribute on ToolbarButton (id=DesktopActivities_PrintButton) at PropertyContentsIncidentPanelSet.pcf: line 128, column 25
    function available_40 () : java.lang.Boolean {
      return perm.User.printlistviews
    }
    
    // 'def' attribute on PanelRef (id=IncidentExposuresLV) at PropertyContentsIncidentPanelSet.pcf: line 50, column 36
    function def_onEnter_17 (def :  pcf.IncidentExposuresLV) : void {
      def.onEnter(incident)
    }
    
    // 'def' attribute on InputSetRef at PropertyContentsIncidentPanelSet.pcf: line 73, column 114
    function def_onEnter_23 (def :  pcf.OtherServicesLVInputSet) : void {
      def.onEnter(incident.Claim, incident, incident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on PanelRef (id=IncidentExposuresLV) at PropertyContentsIncidentPanelSet.pcf: line 50, column 36
    function def_refreshVariables_18 (def :  pcf.IncidentExposuresLV) : void {
      def.refreshVariables(incident)
    }
    
    // 'def' attribute on InputSetRef at PropertyContentsIncidentPanelSet.pcf: line 73, column 114
    function def_refreshVariables_24 (def :  pcf.OtherServicesLVInputSet) : void {
      def.refreshVariables(incident.Claim, incident, incident.ServiceRequests.toSet(), null, {})
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at PropertyContentsIncidentPanelSet.pcf: line 33, column 47
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      incident.PropertyLocation = (__VALUE_TO_SET as PolicyLocation)
    }
    
    // 'editable' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function editable_6 () : java.lang.Boolean {
      return incident.Claim.Policy.PolicyLocations.length > 1
    }
    
    // 'initialValue' attribute on Variable at PropertyContentsIncidentPanelSet.pcf: line 13, column 37
    function initialValue_0 () : entity.PolicyLocation {
      return incident.Claim.Policy.PrimaryLocation
    }
    
    // 'initialValue' attribute on Variable at PropertyContentsIncidentPanelSet.pcf: line 18, column 23
    function initialValue_1 () : boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'pickLocation' attribute on RowIterator (id=PropertyContentsScheduledItems) at PropertyContentsIncidentPanelSet.pcf: line 97, column 62
    function pickLocation_37 () : void {
      ChoosePropertyContentsScheduledItemPopup.push(incident, policyLocation)
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemDescription_Cell) at PropertyContentsIncidentPanelSet.pcf: line 105, column 63
    function sortValue_27 (scheduledItem :  entity.PropertyContentsScheduledItem) : java.lang.Object {
      return scheduledItem.PropertyItem.Description
    }
    
    // 'value' attribute on CurrencyCell (id=ScheduledItemValue_Cell) at PropertyContentsIncidentPanelSet.pcf: line 110, column 66
    function sortValue_28 (scheduledItem :  entity.PropertyContentsScheduledItem) : java.lang.Object {
      return scheduledItem.PropertyItem.AppraisedValue
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at PropertyContentsIncidentPanelSet.pcf: line 151, column 46
    function sortValue_42 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=LineItemName_Cell) at PropertyContentsIncidentPanelSet.pcf: line 158, column 41
    function sortValue_43 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=LineItemCategory_Cell) at PropertyContentsIncidentPanelSet.pcf: line 165, column 60
    function sortValue_44 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ContentCategory
    }
    
    // 'value' attribute on DateCell (id=LineItemPurchaseDate_Cell) at PropertyContentsIncidentPanelSet.pcf: line 181, column 36
    function sortValue_46 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.DateAcquired
    }
    
    // 'value' attribute on TextCell (id=LineItemAge_Cell) at PropertyContentsIncidentPanelSet.pcf: line 191, column 37
    function sortValue_48 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.Age
    }
    
    // 'value' attribute on TextCell (id=LineItemNotes_Cell) at PropertyContentsIncidentPanelSet.pcf: line 240, column 124
    function sortValue_51 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ItemComment
    }
    
    // '$$sumValue' attribute on RowIterator (id=PropertyContentsScheduledItems) at PropertyContentsIncidentPanelSet.pcf: line 110, column 66
    function sumValueRoot_30 (scheduledItem :  entity.PropertyContentsScheduledItem) : java.lang.Object {
      return scheduledItem.PropertyItem
    }
    
    // '$$sumValue' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 212, column 32
    function sumValueRoot_58 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsScheduledItems) at PropertyContentsIncidentPanelSet.pcf: line 110, column 66
    function sumValue_29 (scheduledItem :  entity.PropertyContentsScheduledItem) : java.lang.Object {
      return scheduledItem.PropertyItem.AppraisedValue
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 212, column 32
    function sumValue_57 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ReplacementValue
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 223, column 33
    function sumValue_59 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.ActualCashValue
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 231, column 32
    function sumValue_61 (item :  entity.AssessmentContentItem) : java.lang.Object {
      return item.AmountAfterLimit
    }
    
    // 'title' attribute on TitleBar (id=ScheduledItemsTitle) at PropertyContentsIncidentPanelSet.pcf: line 80, column 250
    function title_25 () : java.lang.String {
      return policyLocation.HighValueItems.length > 0 ? DisplayKey.get("Web.PropertyContentsIncident.ScheduledItems", policyLocation.HighValueItems.length) : DisplayKey.get("Web.PropertyContentsIncident.NoScheduledItems")
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 141, column 54
    function toCreateAndAdd_112 () : entity.AssessmentContentItem {
      return incident.createHomeownersContentItemLine()
    }
    
    // 'toRemove' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 141, column 54
    function toRemove_113 (item :  entity.AssessmentContentItem) : void {
      incident.removeFromContentItemLine( item )
    }
    
    // 'toRemove' attribute on RowIterator (id=PropertyContentsScheduledItems) at PropertyContentsIncidentPanelSet.pcf: line 97, column 62
    function toRemove_38 (scheduledItem :  entity.PropertyContentsScheduledItem) : void {
      incident.removeFromPropertyContentsScheduledItems(scheduledItem)
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function valueRange_11 () : java.lang.Object {
      return incident.Claim.Policy.PolicyLocations
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at PropertyContentsIncidentPanelSet.pcf: line 33, column 47
    function valueRoot_4 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on RowIterator (id=PropertyContentsLineItems) at PropertyContentsIncidentPanelSet.pcf: line 141, column 54
    function value_114 () : entity.AssessmentContentItem[] {
      return incident.HomeownersContentItemLines
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at PropertyContentsIncidentPanelSet.pcf: line 33, column 47
    function value_2 () : java.lang.String {
      return incident.Description
    }
    
    // 'value' attribute on RowIterator (id=PropertyContentsScheduledItems) at PropertyContentsIncidentPanelSet.pcf: line 97, column 62
    function value_39 () : entity.PropertyContentsScheduledItem[] {
      return incident.OrderedPropertyContentsScheduledItems
    }
    
    // 'value' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function value_8 () : PolicyLocation {
      return incident.PropertyLocation
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function verifyValueRangeIsAllowedType_12 ($$arg :  PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function verifyValueRange_13 () : void {
      var __valueRangeArg = incident.Claim.Policy.PolicyLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at PropertyContentsIncidentPanelSet.pcf: line 66, column 50
    function visible_19 () : java.lang.Boolean {
      return incident.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at PropertyContentsIncidentPanelSet.pcf: line 71, column 85
    function visible_21 () : java.lang.Boolean {
      return not incident.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'addVisible' attribute on IteratorButtons at PropertyContentsIncidentPanelSet.pcf: line 85, column 54
    function visible_26 () : java.lang.Boolean {
      return policyLocation.HighValueItems.length > incident.PropertyContentsScheduledItems.length
    }
    
    // 'visible' attribute on CurrencyCell (id=LineItemOriginalCost_Cell) at PropertyContentsIncidentPanelSet.pcf: line 174, column 33
    function visible_45 () : java.lang.Boolean {
      return inEditMode
    }
    
    // 'visible' attribute on TextCell (id=LineItemNotes_Cell) at PropertyContentsIncidentPanelSet.pcf: line 240, column 124
    function visible_52 () : java.lang.Boolean {
      return !inEditMode || (gw.api.print.PrintUtil.isPrintingPDF() || gw.api.print.PrintUtil.isPrintingCSV())
    }
    
    // 'visible' attribute on RangeInput (id=StorageLocation_Input) at PropertyContentsIncidentPanelSet.pcf: line 42, column 80
    function visible_7 () : java.lang.Boolean {
      return incident.Claim.Policy.PolicyLocations.length > 0
    }
    
    property get inEditMode () : boolean {
      return getVariableValue("inEditMode", 0) as java.lang.Boolean
    }
    
    property set inEditMode ($arg :  boolean) {
      setVariableValue("inEditMode", 0, $arg)
    }
    
    property get incident () : PropertyContentsIncident {
      return getRequireValue("incident", 0) as PropertyContentsIncident
    }
    
    property set incident ($arg :  PropertyContentsIncident) {
      setRequireValue("incident", 0, $arg)
    }
    
    property get policyLocation () : entity.PolicyLocation {
      return getVariableValue("policyLocation", 0) as entity.PolicyLocation
    }
    
    property set policyLocation ($arg :  entity.PolicyLocation) {
      setVariableValue("policyLocation", 0, $arg)
    }
    
    
  }
  
  
}