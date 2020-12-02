package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/bulkpay/EditBulkInvoiceDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditBulkInvoiceDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/EditBulkInvoiceDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditBulkInvoiceDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bulkInvoice :  BulkInvoice) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RetryButton) at EditBulkInvoiceDetail.pcf: line 64, column 58
    function action_10 () : void {
      gw.api.financials.BulkInvoiceUIHelper.retryProcessing(bulkInvoice)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimFilterClaimSearchPicker) at EditBulkInvoiceDetail.pcf: line 93, column 90
    function action_16 () : void {
      ClaimSearchPopup.push()
    }
    
    // 'action' attribute on MenuItem (id=ClearClaimFilter) at EditBulkInvoiceDetail.pcf: line 112, column 50
    function action_23 () : void {
      claimNumberFilter = null
    }
    
    // 'action' attribute on ToolbarButton (id=SubmitButton) at EditBulkInvoiceDetail.pcf: line 53, column 85
    function action_7 () : void {
      gw.api.financials.BulkInvoiceUIHelper.validateAndSubmit(bulkPayHelper, bulkInvoice)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshButton) at EditBulkInvoiceDetail.pcf: line 59, column 86
    function action_8 () : void {
      
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimFilterClaimSearchPicker) at EditBulkInvoiceDetail.pcf: line 93, column 90
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimSearchPopup.createDestination()
    }
    
    // 'afterCancel' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    function afterCancel_32 () : void {
      bulkPayHelper.flushCache()
    }
    
    // 'afterCommit' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    function afterCommit_33 (TopLocation :  pcf.api.Location) : void {
      bulkPayHelper.flushCache()
    }
    
    // 'available' attribute on PickerMenuItem (id=ClaimFilterClaimSearchPicker) at EditBulkInvoiceDetail.pcf: line 93, column 90
    function available_15 () : java.lang.Boolean {
      return perm.Claim.genericviewclaim and perm.System.viewsearch
    }
    
    // 'available' attribute on ToolbarButton (id=SubmitButton) at EditBulkInvoiceDetail.pcf: line 53, column 85
    function available_6 () : java.lang.Boolean {
      return (bulkInvoice.Validateable or bulkInvoice.Submittable) and perm.BulkInvoice.edit
    }
    
    // 'beforeCommit' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    function beforeCommit_34 (pickedValue :  java.lang.Object) : void {
      bulkInvoice.verifyChangesAllowed()
    }
    
    // 'beforeValidate' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    function beforeValidate_35 (pickedValue :  java.lang.Object) : void {
      bulkPayHelper.prepBulkInvoiceForSave(bulkInvoice, CostType.TC_UNSPECIFIED, CostCategory.TC_UNSPECIFIED); paymentMethodHelper.cleanUpBeforeCommit()
    }
    
    // 'canEdit' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    function canEdit_36 () : java.lang.Boolean {
      return perm.BulkInvoice.edit
    }
    
    // 'canVisit' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    static function canVisit_37 (bulkInvoice :  BulkInvoice) : java.lang.Boolean {
      return perm.BulkInvoice.view
    }
    
    // 'def' attribute on PanelRef at EditBulkInvoiceDetail.pcf: line 71, column 106
    function def_onEnter_13 (def :  pcf.BulkInvoiceDetailDV) : void {
      def.onEnter(bulkInvoice, payeeLinkStatus, paymentMethodHelper, showAddressFields)
    }
    
    // 'def' attribute on PanelRef at EditBulkInvoiceDetail.pcf: line 73, column 81
    function def_onEnter_30 (def :  pcf.BulkInvoiceItemsLV) : void {
      def.onEnter(bulkInvoice, bulkPayHelper, claimNumberFilter)
    }
    
    // 'def' attribute on PanelRef at EditBulkInvoiceDetail.pcf: line 71, column 106
    function def_refreshVariables_14 (def :  pcf.BulkInvoiceDetailDV) : void {
      def.refreshVariables(bulkInvoice, payeeLinkStatus, paymentMethodHelper, showAddressFields)
    }
    
    // 'def' attribute on PanelRef at EditBulkInvoiceDetail.pcf: line 73, column 81
    function def_refreshVariables_31 (def :  pcf.BulkInvoiceItemsLV) : void {
      def.refreshVariables(bulkInvoice, bulkPayHelper, claimNumberFilter)
    }
    
    // 'value' attribute on TextValue (id=ClaimFilter) at EditBulkInvoiceDetail.pcf: line 87, column 28
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      claimNumberFilter = (__VALUE_TO_SET as String)
    }
    
    // 'editable' attribute on TextValue (id=ClaimFilter) at EditBulkInvoiceDetail.pcf: line 87, column 28
    function editable_24 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at EditBulkInvoiceDetail.pcf: line 22, column 47
    function initialValue_0 () : gw.api.financials.BulkPayHelper {
      return new gw.api.financials.BulkPayHelper()
    }
    
    // 'initialValue' attribute on Variable at EditBulkInvoiceDetail.pcf: line 30, column 54
    function initialValue_1 () : gw.api.contact.ContactSystemLinkStatus {
      return bulkInvoice.Payee!=null ? gw.api.contact.ContactSystemUtil.INSTANCE.generateLinkStatus(bulkInvoice.Payee) : null
    }
    
    // 'initialValue' attribute on Variable at EditBulkInvoiceDetail.pcf: line 34, column 53
    function initialValue_2 () : gw.api.financials.PaymentMethodHelper {
      return new gw.api.financials.PaymentMethodHelper(bulkInvoice)
    }
    
    // 'initialValue' attribute on Variable at EditBulkInvoiceDetail.pcf: line 41, column 63
    function initialValue_3 () : org.apache.commons.lang3.mutable.MutableBoolean {
      return new org.apache.commons.lang3.mutable.MutableBoolean(bulkInvoice.MailingAddress == null and bulkInvoice.Payee.PrimaryAddress == null) 
    }
    
    // 'label' attribute on AlertBar (id=errorDuringProcessingAlertBar) at EditBulkInvoiceDetail.pcf: line 69, column 56
    function label_12 () : java.lang.Object {
      return bulkInvoice.FailedOperationMessage
    }
    
    // EditButtons at EditBulkInvoiceDetail.pcf: line 47, column 73
    function label_5 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onPick' attribute on PickerMenuItem (id=ClaimFilterClaimSearchPicker) at EditBulkInvoiceDetail.pcf: line 93, column 90
    function onPick_18 (PickedValue :  Object) : void {
      claimNumberFilter = (PickedValue as ClaimSearchView).ClaimNumber
    }
    
    // 'parent' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    static function parent_38 (bulkInvoice :  BulkInvoice) : pcf.api.Destination {
      return pcf.BulkPay.createDestination()
    }
    
    // 'requestValidationExpression' attribute on TextValue (id=ClaimFilter) at EditBulkInvoiceDetail.pcf: line 87, column 28
    function requestValidationExpression_25 (VALUE :  String) : java.lang.Object {
      return gw.api.claim.ClaimNumberSearchUtil.search(VALUE) != null ? null : DisplayKey.get("Java.ClaimNumberSearchMenuItem.Error")
    }
    
    // 'startEditing' attribute on Page (id=EditBulkInvoiceDetail) at EditBulkInvoiceDetail.pcf: line 16, column 90
    function startEditing_39 () : void {
      showAddressFields.Value = paymentMethodHelper.setupMailingAddress() 
    }
    
    // 'value' attribute on MenuItemIterator (id=RecentClaimIterator) at EditBulkInvoiceDetail.pcf: line 101, column 54
    function value_21 () : entity.ClaimRecentView[] {
      return gw.api.claim.ClaimUtil.getRecentlyViewedClaims()
    }
    
    // 'value' attribute on TextValue (id=ClaimFilter) at EditBulkInvoiceDetail.pcf: line 87, column 28
    function value_26 () : String {
      return claimNumberFilter
    }
    
    // 'visible' attribute on MenuItem (id=ClearClaimFilter) at EditBulkInvoiceDetail.pcf: line 112, column 50
    function visible_22 () : java.lang.Boolean {
      return gw.util.GosuStringUtil.isNotBlank(claimNumberFilter)
    }
    
    // 'editVisible' attribute on EditButtons at EditBulkInvoiceDetail.pcf: line 47, column 73
    function visible_4 () : java.lang.Boolean {
      return bulkInvoice.Editable and perm.BulkInvoice.edit
    }
    
    // 'visible' attribute on ToolbarButton (id=RetryButton) at EditBulkInvoiceDetail.pcf: line 64, column 58
    function visible_9 () : java.lang.Boolean {
      return bulkInvoice.FailedOperation != null
    }
    
    override property get CurrentLocation () : pcf.EditBulkInvoiceDetail {
      return super.CurrentLocation as pcf.EditBulkInvoiceDetail
    }
    
    property get bulkInvoice () : BulkInvoice {
      return getVariableValue("bulkInvoice", 0) as BulkInvoice
    }
    
    property set bulkInvoice ($arg :  BulkInvoice) {
      setVariableValue("bulkInvoice", 0, $arg)
    }
    
    property get bulkPayHelper () : gw.api.financials.BulkPayHelper {
      return getVariableValue("bulkPayHelper", 0) as gw.api.financials.BulkPayHelper
    }
    
    property set bulkPayHelper ($arg :  gw.api.financials.BulkPayHelper) {
      setVariableValue("bulkPayHelper", 0, $arg)
    }
    
    property get claimNumberFilter () : String {
      return getVariableValue("claimNumberFilter", 0) as String
    }
    
    property set claimNumberFilter ($arg :  String) {
      setVariableValue("claimNumberFilter", 0, $arg)
    }
    
    property get payeeLinkStatus () : gw.api.contact.ContactSystemLinkStatus {
      return getVariableValue("payeeLinkStatus", 0) as gw.api.contact.ContactSystemLinkStatus
    }
    
    property set payeeLinkStatus ($arg :  gw.api.contact.ContactSystemLinkStatus) {
      setVariableValue("payeeLinkStatus", 0, $arg)
    }
    
    property get paymentMethodHelper () : gw.api.financials.PaymentMethodHelper {
      return getVariableValue("paymentMethodHelper", 0) as gw.api.financials.PaymentMethodHelper
    }
    
    property set paymentMethodHelper ($arg :  gw.api.financials.PaymentMethodHelper) {
      setVariableValue("paymentMethodHelper", 0, $arg)
    }
    
    property get showAddressFields () : org.apache.commons.lang3.mutable.MutableBoolean {
      return getVariableValue("showAddressFields", 0) as org.apache.commons.lang3.mutable.MutableBoolean
    }
    
    property set showAddressFields ($arg :  org.apache.commons.lang3.mutable.MutableBoolean) {
      setVariableValue("showAddressFields", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/bulkpay/EditBulkInvoiceDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditBulkInvoiceDetailExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RecentClaimNumber) at EditBulkInvoiceDetail.pcf: line 105, column 52
    function action_19 () : void {
      claimNumberFilter = recentClaim.Claim.ClaimNumber
    }
    
    // 'label' attribute on MenuItem (id=RecentClaimNumber) at EditBulkInvoiceDetail.pcf: line 105, column 52
    function label_20 () : java.lang.Object {
      return recentClaim.DisplayName
    }
    
    property get recentClaim () : entity.ClaimRecentView {
      return getIteratedValue(1) as entity.ClaimRecentView
    }
    
    
  }
  
  
}