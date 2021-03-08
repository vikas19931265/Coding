package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoiceItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BulkInvoiceItemsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoiceItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BulkInvoiceItemsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at BulkInvoiceItemsLV.pcf: line 37, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return gw.api.filters.StandardQueryFilters.ALL
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at BulkInvoiceItemsLV.pcf: line 39, column 86
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.financials.BulkInvoiceUIHelper.BulkInvoiceItemFilterSet
    }
    
    // 'initialValue' attribute on Variable at BulkInvoiceItemsLV.pcf: line 23, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<BulkInvoiceItem> {
      return gw.api.financials.BulkInvoiceUIHelper.getSortedBulkInvoiceItemQuery(bulkInvoice, claimNumberFilter)
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_Alerts_Cell) at BulkInvoiceItemsLV.pcf: line 154, column 44
    function sortValue_10 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.Explanation
    }
    
    // 'value' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_Status_Cell) at BulkInvoiceItemsLV.pcf: line 159, column 54
    function sortValue_11 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.Status
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_ClaimNumber_Cell) at BulkInvoiceItemsLV.pcf: line 51, column 24
    function sortValue_3 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.ClaimNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_PaymentType_Cell) at BulkInvoiceItemsLV.pcf: line 117, column 43
    function sortValue_5 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.PaymentType
    }
    
    // 'sortBy' attribute on CurrencyCell (id=BulkInvoiceItemsLV_Amount_Cell) at BulkInvoiceItemsLV.pcf: line 132, column 49
    function sortValue_6 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.Amount
    }
    
    // 'value' attribute on CurrencyCell (id=BulkInvoiceItemsLV_DeductionsAmount_Cell) at BulkInvoiceItemsLV.pcf: line 138, column 49
    function sortValue_7 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.DeductionsAmount
    }
    
    // 'value' attribute on DateCell (id=BulkInvoiceItemsLV_ServiceDate_Cell) at BulkInvoiceItemsLV.pcf: line 144, column 46
    function sortValue_8 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.DateOfService
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_Description_Cell) at BulkInvoiceItemsLV.pcf: line 150, column 44
    function sortValue_9 (invoiceItem :  entity.BulkInvoiceItem) : java.lang.Object {
      return invoiceItem.Description
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at BulkInvoiceItemsLV.pcf: line 32, column 82
    function toCreateAndAdd_94 () : entity.BulkInvoiceItem {
      return bulkInvoice.addNewInvoiceItem()
    }
    
    // 'toRemove' attribute on RowIterator at BulkInvoiceItemsLV.pcf: line 32, column 82
    function toRemove_95 (invoiceItem :  entity.BulkInvoiceItem) : void {
      bulkInvoice.removeFromInvoiceItems(invoiceItem)
    }
    
    // 'footerLabel' attribute on RowIterator at BulkInvoiceItemsLV.pcf: line 132, column 49
    function value_13 () : java.lang.Object {
      return gw.api.util.CurrencyUtil.renderAsCurrency(bulkInvoice.TotalCurrencyAmount)
    }
    
    // 'footerLabel' attribute on RowIterator at BulkInvoiceItemsLV.pcf: line 138, column 49
    function value_14 () : java.lang.Object {
      return gw.api.util.CurrencyUtil.renderAsCurrency(bulkInvoice.DeductionsSum)
    }
    
    // 'value' attribute on RowIterator at BulkInvoiceItemsLV.pcf: line 32, column 82
    function value_96 () : gw.api.database.IQueryBeanResult<entity.BulkInvoiceItem> {
      return bulkInvoiceItems
    }
    
    // 'visible' attribute on BooleanRadioCell (id=BulkInvoiceItemsLV_Archived_Cell) at BulkInvoiceItemsLV.pcf: line 80, column 54
    function visible_4 () : java.lang.Boolean {
      return bulkInvoice.hasArchivedClaims()
    }
    
    property get bulkInvoice () : BulkInvoice {
      return getRequireValue("bulkInvoice", 0) as BulkInvoice
    }
    
    property set bulkInvoice ($arg :  BulkInvoice) {
      setRequireValue("bulkInvoice", 0, $arg)
    }
    
    property get bulkInvoiceItems () : gw.api.database.IQueryBeanResult<BulkInvoiceItem> {
      return getVariableValue("bulkInvoiceItems", 0) as gw.api.database.IQueryBeanResult<BulkInvoiceItem>
    }
    
    property set bulkInvoiceItems ($arg :  gw.api.database.IQueryBeanResult<BulkInvoiceItem>) {
      setVariableValue("bulkInvoiceItems", 0, $arg)
    }
    
    property get claimNumberFilter () : String {
      return getRequireValue("claimNumberFilter", 0) as String
    }
    
    property set claimNumberFilter ($arg :  String) {
      setRequireValue("claimNumberFilter", 0, $arg)
    }
    
    property get helper () : gw.api.financials.BulkPayHelper {
      return getRequireValue("helper", 0) as gw.api.financials.BulkPayHelper
    }
    
    property set helper ($arg :  gw.api.financials.BulkPayHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    function verifyClaimPermission(claimNum : String, item : BulkInvoiceItem) : String {
      var claim = gw.api.database.Query.make(entity.Claim).compare("ClaimNumber", Equals, claimNum).select().FirstResult
      var claimInfo = gw.api.database.Query.make(entity.ClaimInfo).compare("ClaimNumber", Equals, claimNum).select().FirstResult
      if (claimInfo == null) {
        return DisplayKey.get("Web.Financials.BulkPay.InvoiceItem.Alert.ClaimNotFound", claimNum)
      }
      //if archived claim, throw exception, however, if the archived claim is already saved previously, it is okay
      if (claimInfo.ArchiveState != null and item.ClaimNumber != claimNum) {
        return DisplayKey.get("Web.Financials.BulkPay.InvoiceItem.Alert.ClaimIsArchived",  claimNum )
      }
      if (claim != null and !perm.Claim.view(claim)) {
        return DisplayKey.get("Web.Financials.BulkPay.Error.NoPermissionForClaim") 
      }
      return null
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoiceItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RecentClaimNumber) at BulkInvoiceItemsLV.pcf: line 71, column 48
    function action_19 () : void {
      invoiceItem.ClaimNumber = recentClaim.Claim.ClaimNumber; gw.api.financials.BulkInvoiceUIHelper.updateInvoiceItem(helper, invoiceItem)
    }
    
    // 'label' attribute on MenuItem (id=RecentClaimNumber) at BulkInvoiceItemsLV.pcf: line 71, column 48
    function label_20 () : java.lang.Object {
      return recentClaim.DisplayName
    }
    
    property get recentClaim () : entity.ClaimRecentView {
      return getIteratedValue(2) as entity.ClaimRecentView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/BulkInvoiceItemsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BulkInvoiceItemsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=InvoiceItemClaimSearchPicker) at BulkInvoiceItemsLV.pcf: line 58, column 171
    function action_16 () : void {
      ClaimSearchPopup.push()
    }
    
    // 'action' attribute on PickerMenuItem (id=InvoiceItemClaimSearchPicker) at BulkInvoiceItemsLV.pcf: line 58, column 171
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimSearchPopup.createDestination()
    }
    
    // 'available' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function available_34 () : java.lang.Boolean {
      return invoiceItem.Claim != null
    }
    
    // 'available' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function available_46 () : java.lang.Boolean {
      return invoiceItem.ReserveLineWrapper != null and invoiceItem.ReserveLineWrapper.ReserveLine == null
    }
    
    // 'available' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_PaymentType_Cell) at BulkInvoiceItemsLV.pcf: line 117, column 43
    function available_55 () : java.lang.Boolean {
      return invoiceItem.Claim != null and invoiceItem.ReserveLineWrapper != null
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_ClaimNumber_Cell) at BulkInvoiceItemsLV.pcf: line 51, column 24
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      invoiceItem.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      invoiceItem.ReserveLineWrapper = (__VALUE_TO_SET as entity.ReserveLineWrapper)
    }
    
    // 'value' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      invoiceItem.Exposure = (__VALUE_TO_SET as entity.Exposure)
    }
    
    // 'value' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_PaymentType_Cell) at BulkInvoiceItemsLV.pcf: line 117, column 43
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      invoiceItem.PaymentType = (__VALUE_TO_SET as typekey.PaymentType)
    }
    
    // 'value' attribute on DateCell (id=BulkInvoiceItemsLV_ServiceDate_Cell) at BulkInvoiceItemsLV.pcf: line 144, column 46
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      invoiceItem.DateOfService = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_Description_Cell) at BulkInvoiceItemsLV.pcf: line 150, column 44
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      invoiceItem.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on CurrencyCell (id=BulkInvoiceItemsLV_Amount_Cell) at BulkInvoiceItemsLV.pcf: line 132, column 49
    function editable_63 () : java.lang.Boolean {
      return !invoiceItem.BulkInvoice.SplitEqually and invoiceItem.isEditable()
    }
    
    // 'editable' attribute on Row at BulkInvoiceItemsLV.pcf: line 42, column 41
    function editable_92 () : java.lang.Boolean {
      return invoiceItem.Editable
    }
    
    // 'filter' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_PaymentType_Cell) at BulkInvoiceItemsLV.pcf: line 117, column 43
    function filter_59 (VALUE :  typekey.PaymentType, VALUES :  typekey.PaymentType[]) : java.lang.Boolean {
      return helper.isPaymentTypeValidForItem( invoiceItem, VALUE )
    }
    
    // 'onChange' attribute on PostOnChange at BulkInvoiceItemsLV.pcf: line 53, column 102
    function onChange_15 () : void {
      gw.api.financials.BulkInvoiceUIHelper.updateInvoiceItem(helper, invoiceItem)
    }
    
    // 'onChange' attribute on PostOnChange at BulkInvoiceItemsLV.pcf: line 93, column 169
    function onChange_33 () : void {
      invoiceItem.updateRelatedInvoiceItemFields(); invoiceItem.NonEroding = false; helper.initializePaymentType(invoiceItem, PaymentType.TC_PARTIAL)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=InvoiceItemClaimSearchPicker) at BulkInvoiceItemsLV.pcf: line 58, column 171
    function onPick_18 (PickedValue :  Object) : void {
      invoiceItem.ClaimNumber = (PickedValue as ClaimSearchView).ClaimNumber; gw.api.financials.BulkInvoiceUIHelper.updateInvoiceItem(helper, invoiceItem)
    }
    
    // 'optionLabel' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function optionLabel_39 (VALUE :  entity.ReserveLineWrapper) : java.lang.String {
      return helper.getReserveLineDisplayName(VALUE)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=BulkInvoiceItemsLV_ClaimNumber_Cell) at BulkInvoiceItemsLV.pcf: line 51, column 24
    function requestValidationExpression_23 (VALUE :  java.lang.String) : java.lang.Object {
      return verifyClaimPermission(VALUE, invoiceItem)
    }
    
    // 'validationExpression' attribute on TextCell (id=BulkInvoiceItemsLV_ClaimNumber_Cell) at BulkInvoiceItemsLV.pcf: line 51, column 24
    function validationExpression_22 () : java.lang.Object {
      if(invoiceItem.ClaimNumber != null) {if(invoiceItem.Claim == null || invoiceItem.ClaimInfo == null) {return DisplayKey.get("Web.Financials.BulkPay.InvoiceItem.Alert.ClaimNotFound", invoiceItem.ClaimNumber)} else if( invoiceItem.ClaimInfo.ArchiveState != null ) {return DisplayKey.get("Web.Financials.BulkPay.InvoiceItem.Alert.ClaimIsArchived", invoiceItem.ClaimNumber)}  } return null
    }
    
    // 'validationExpression' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function validationExpression_35 () : java.lang.Object {
      return invoiceItem.ReserveLineWrapper == null and invoiceItem.Status != BulkInvoiceItemStatus.TC_REJECTED ? DisplayKey.get("Web.Financials.BulkPay.InvoiceItem.Validation.RequiredForNonRejected") : null
    }
    
    // 'validationExpression' attribute on CurrencyCell (id=BulkInvoiceItemsLV_Amount_Cell) at BulkInvoiceItemsLV.pcf: line 132, column 49
    function validationExpression_64 () : java.lang.Object {
      return invoiceItem.Amount.Amount >= 0 ? null : DisplayKey.get("Web.Financials.BulkPay.InvoiceItem.AmountNotNegative")
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function valueRange_40 () : java.lang.Object {
      return helper.getReserveLines(invoiceItem)
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function valueRange_50 () : java.lang.Object {
      return helper.getExposures(invoiceItem)
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_ClaimNumber_Cell) at BulkInvoiceItemsLV.pcf: line 51, column 24
    function valueRoot_26 () : java.lang.Object {
      return invoiceItem
    }
    
    // 'value' attribute on MenuItemIterator (id=InvoiceItemsRecentClaimsMenuList) at BulkInvoiceItemsLV.pcf: line 67, column 52
    function value_21 () : entity.ClaimRecentView[] {
      return gw.api.claim.ClaimUtil.getRecentlyViewedClaims()
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_ClaimNumber_Cell) at BulkInvoiceItemsLV.pcf: line 51, column 24
    function value_24 () : java.lang.String {
      return invoiceItem.ClaimNumber
    }
    
    // 'value' attribute on BooleanRadioCell (id=BulkInvoiceItemsLV_Archived_Cell) at BulkInvoiceItemsLV.pcf: line 80, column 54
    function value_29 () : java.lang.Boolean {
      return invoiceItem.ItemClaimArchived
    }
    
    // 'value' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function value_36 () : entity.ReserveLineWrapper {
      return invoiceItem.ReserveLineWrapper
    }
    
    // 'value' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function value_47 () : entity.Exposure {
      return invoiceItem.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_PaymentType_Cell) at BulkInvoiceItemsLV.pcf: line 117, column 43
    function value_56 () : typekey.PaymentType {
      return invoiceItem.PaymentType
    }
    
    // 'value' attribute on CurrencyCell (id=BulkInvoiceItemsLV_Amount_Cell) at BulkInvoiceItemsLV.pcf: line 132, column 49
    function value_65 () : gw.api.financials.IMoney {
      return invoiceItem.AmountComponent
    }
    
    // 'value' attribute on CurrencyCell (id=BulkInvoiceItemsLV_DeductionsAmount_Cell) at BulkInvoiceItemsLV.pcf: line 138, column 49
    function value_71 () : gw.api.financials.CurrencyAmount {
      return invoiceItem.DeductionsAmount
    }
    
    // 'value' attribute on DateCell (id=BulkInvoiceItemsLV_ServiceDate_Cell) at BulkInvoiceItemsLV.pcf: line 144, column 46
    function value_75 () : java.util.Date {
      return invoiceItem.DateOfService
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_Description_Cell) at BulkInvoiceItemsLV.pcf: line 150, column 44
    function value_81 () : java.lang.String {
      return invoiceItem.Description
    }
    
    // 'value' attribute on TextCell (id=BulkInvoiceItemsLV_Alerts_Cell) at BulkInvoiceItemsLV.pcf: line 154, column 44
    function value_86 () : java.lang.String {
      return invoiceItem.Explanation
    }
    
    // 'value' attribute on TypeKeyCell (id=BulkInvoiceItemsLV_Status_Cell) at BulkInvoiceItemsLV.pcf: line 159, column 54
    function value_89 () : typekey.BulkInvoiceItemStatus {
      return invoiceItem.Status
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function verifyValueRangeIsAllowedType_41 ($$arg :  entity.ReserveLineWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function verifyValueRangeIsAllowedType_41 ($$arg :  gw.api.database.IQueryBeanResult<entity.ReserveLineWrapper>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function verifyValueRangeIsAllowedType_51 ($$arg :  entity.Exposure[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function verifyValueRangeIsAllowedType_51 ($$arg :  gw.api.database.IQueryBeanResult<entity.Exposure>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_ReserveLine_Cell) at BulkInvoiceItemsLV.pcf: line 91, column 49
    function verifyValueRange_42 () : void {
      var __valueRangeArg = helper.getReserveLines(invoiceItem)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=BulkInvoiceItemsLV_Exposure_Cell) at BulkInvoiceItemsLV.pcf: line 104, column 39
    function verifyValueRange_52 () : void {
      var __valueRangeArg = helper.getExposures(invoiceItem)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    // 'visible' attribute on BooleanRadioCell (id=BulkInvoiceItemsLV_Archived_Cell) at BulkInvoiceItemsLV.pcf: line 80, column 54
    function visible_31 () : java.lang.Boolean {
      return bulkInvoice.hasArchivedClaims()
    }
    
    property get invoiceItem () : entity.BulkInvoiceItem {
      return getIteratedValue(1) as entity.BulkInvoiceItem
    }
    
    
  }
  
  
}