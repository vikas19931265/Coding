package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotPropertyContentsIncident700Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPropertyContentsIncident700PopupExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotPropertyContentsIncident700Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPropertyContentsIncident700PopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim, IncidentParam :  dynamic.Dynamic) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_onEnter_10 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_700) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_onEnter_12 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_800) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_onEnter_14 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_default) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_onEnter_8 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_600) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_refreshVariables_11 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_700) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_refreshVariables_13 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_800) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_refreshVariables_15 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_default) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function def_refreshVariables_9 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_600) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'icon' attribute on TitleBar at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 35, column 33
    function icon_4 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.PROPERTY_CONTENTS.DefaultHeaderIcon
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 19, column 31
    function initialValue_0 () : dynamic.Dynamic {
      return gw.api.snapshot.ClaimSnapshotUtil.getSnapshot(Claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 23, column 22
    function initialValue_1 () : String {
      return gw.api.snapshot.ClaimSnapshotUtil.getPageVersion(Snapshot)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 27, column 31
    function initialValue_2 () : dynamic.Dynamic {
      return IncidentParam
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 31, column 31
    function initialValue_3 () : dynamic.Dynamic {
      return ((Snapshot).Policy.PrimaryLocation)
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 59, column 27
    function mode_16 () : java.lang.Object {
      return 700
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemDescription_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 85, column 46
    function sortValue_18 (scheduledItem :  dynamic.Dynamic) : java.lang.Object {
      return scheduledItem.PropertyItem.Description
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemValue_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 91, column 46
    function sortValue_19 (scheduledItem :  dynamic.Dynamic) : java.lang.Object {
      return scheduledItem.PropertyItem.AppraisedValue
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 117, column 46
    function sortValue_29 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=LineItemName_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 124, column 46
    function sortValue_30 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.Description
    }
    
    // 'value' attribute on TextCell (id=LineItemCategory_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 130, column 46
    function sortValue_31 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.ContentCategory
    }
    
    // 'value' attribute on TextCell (id=LineItemPurchaseDate_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 145, column 39
    function sortValue_33 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.DateAcquired
    }
    
    // 'value' attribute on TextCell (id=LineItemAge_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 151, column 46
    function sortValue_35 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.Age
    }
    
    // 'value' attribute on TextCell (id=LineItemNotes_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 194, column 126
    function sortValue_37 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.ItemComment
    }
    
    // '$$sumValue' attribute on RowIterator (id=PropertyContentsScheduledItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 91, column 46
    function sumValueRoot_21 (scheduledItem :  dynamic.Dynamic) : java.lang.Object {
      return scheduledItem.PropertyItem
    }
    
    // '$$sumValue' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 169, column 35
    function sumValueRoot_43 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.ReplacementValue
    }
    
    // '$$sumValue' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 178, column 35
    function sumValueRoot_45 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.ActualCashValue
    }
    
    // '$$sumValue' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 187, column 35
    function sumValueRoot_47 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.AmountAfterLimit
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsScheduledItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 91, column 46
    function sumValue_20 (scheduledItem :  dynamic.Dynamic) : java.lang.Object {
      return scheduledItem.PropertyItem.AppraisedValue
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 169, column 35
    function sumValue_42 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.ReplacementValue.Amount
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 178, column 35
    function sumValue_44 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.ActualCashValue.Amount
    }
    
    // 'footerSumValue' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 187, column 35
    function sumValue_46 (item :  dynamic.Dynamic) : java.lang.Object {
      return item.AmountAfterLimit.Amount
    }
    
    // 'title' attribute on TitleBar (id=ScheduledItemsTitle) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 66, column 258
    function title_17 () : java.lang.String {
      return ((policyLocation.HighValueItems).length > 0) ? DisplayKey.get("Web.PropertyContentsIncident.ScheduledItems", (policyLocation.HighValueItems).length) : DisplayKey.get("Web.PropertyContentsIncident.NoScheduledItems")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 51, column 50
    function valueRoot_6 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on RowIterator (id=PropertyContentsScheduledItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 76, column 41
    function value_28 () : dynamic.Dynamic {
      return incident.PropertyContentsScheduledItems
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 51, column 50
    function value_5 () : dynamic.Dynamic {
      return incident.Description
    }
    
    // 'value' attribute on RowIterator (id=PropertyContentsLineItems) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 109, column 41
    function value_86 () : dynamic.Dynamic {
      return incident.ContentItemLine
    }
    
    // 'visible' attribute on TextCell (id=LineItemOriginalCost_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 139, column 35
    function visible_32 () : java.lang.Boolean {
      return InEditMode
    }
    
    // 'visible' attribute on TextCell (id=LineItemNotes_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 194, column 126
    function visible_38 () : java.lang.Boolean {
      return !InEditMode || (gw.api.print.PrintUtil.isPrintingPDF() || gw.api.print.PrintUtil.isPrintingCSV())
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimSnapshotPropertyContentsIncident700Popup {
      return super.CurrentLocation as pcf.ClaimSnapshotPropertyContentsIncident700Popup
    }
    
    property get IncidentParam () : dynamic.Dynamic {
      return getVariableValue("IncidentParam", 0) as dynamic.Dynamic
    }
    
    property set IncidentParam ($arg :  dynamic.Dynamic) {
      setVariableValue("IncidentParam", 0, $arg)
    }
    
    property get Snapshot () : dynamic.Dynamic {
      return getVariableValue("Snapshot", 0) as dynamic.Dynamic
    }
    
    property set Snapshot ($arg :  dynamic.Dynamic) {
      setVariableValue("Snapshot", 0, $arg)
    }
    
    property get Version () : String {
      return getVariableValue("Version", 0) as String
    }
    
    property set Version ($arg :  String) {
      setVariableValue("Version", 0, $arg)
    }
    
    property get incident () : dynamic.Dynamic {
      return getVariableValue("incident", 0) as dynamic.Dynamic
    }
    
    property set incident ($arg :  dynamic.Dynamic) {
      setVariableValue("incident", 0, $arg)
    }
    
    property get policyLocation () : dynamic.Dynamic {
      return getVariableValue("policyLocation", 0) as dynamic.Dynamic
    }
    
    property set policyLocation ($arg :  dynamic.Dynamic) {
      setVariableValue("policyLocation", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotPropertyContentsIncident700Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPropertyContentsIncident700PopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 117, column 46
    function valueRoot_50 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on TextCell (id=LineItemQuantity_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 117, column 46
    function value_49 () : dynamic.Dynamic {
      return item.NumberOfItems
    }
    
    // 'value' attribute on TextCell (id=LineItemName_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 124, column 46
    function value_52 () : dynamic.Dynamic {
      return item.Description
    }
    
    // 'value' attribute on TextCell (id=LineItemCategory_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 130, column 46
    function value_55 () : dynamic.Dynamic {
      return item.ContentCategory
    }
    
    // 'value' attribute on TextCell (id=LineItemOriginalCost_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 139, column 35
    function value_58 () : dynamic.Dynamic {
      return item.PurchaseCost
    }
    
    // 'value' attribute on TextCell (id=LineItemPurchaseDate_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 145, column 39
    function value_62 () : dynamic.Dynamic {
      return item.DateAcquired
    }
    
    // 'value' attribute on TextCell (id=LineItemAge_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 151, column 46
    function value_66 () : dynamic.Dynamic {
      return item.Age
    }
    
    // 'value' attribute on TextCell (id=LineItemDepreciationPercentage_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 160, column 35
    function value_69 () : dynamic.Dynamic {
      return item.DepreciationPercentage
    }
    
    // 'value' attribute on TextCell (id=LineItemReplacementValue_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 169, column 35
    function value_73 () : dynamic.Dynamic {
      return item.ReplacementValue
    }
    
    // 'value' attribute on TextCell (id=LineItemTotalACV_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 178, column 35
    function value_76 () : dynamic.Dynamic {
      return item.ActualCashValue
    }
    
    // 'value' attribute on TextCell (id=LineItemAmountAfterLimit_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 187, column 35
    function value_79 () : dynamic.Dynamic {
      return item.AmountAfterLimit 
    }
    
    // 'value' attribute on TextCell (id=LineItemNotes_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 194, column 126
    function value_82 () : dynamic.Dynamic {
      return item.ItemComment
    }
    
    // 'visible' attribute on TextCell (id=LineItemOriginalCost_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 139, column 35
    function visible_60 () : java.lang.Boolean {
      return InEditMode
    }
    
    // 'visible' attribute on TextCell (id=LineItemNotes_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 194, column 126
    function visible_84 () : java.lang.Boolean {
      return !InEditMode || (gw.api.print.PrintUtil.isPrintingPDF() || gw.api.print.PrintUtil.isPrintingCSV())
    }
    
    property get item () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotPropertyContentsIncident700Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPropertyContentsIncident700PopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemDescription_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 85, column 46
    function valueRoot_23 () : java.lang.Object {
      return scheduledItem.PropertyItem
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemDescription_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 85, column 46
    function value_22 () : dynamic.Dynamic {
      return scheduledItem.PropertyItem.Description
    }
    
    // 'value' attribute on TextCell (id=ScheduledItemValue_Cell) at ClaimSnapshotPropertyContentsIncident700Popup.pcf: line 91, column 46
    function value_25 () : dynamic.Dynamic {
      return scheduledItem.PropertyItem.AppraisedValue
    }
    
    property get scheduledItem () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}