package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/bulkpay/EditBulkInvoiceDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditBulkInvoiceDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (bulkInvoice :  BulkInvoice) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditBulkInvoiceDetail, {bulkInvoice}, 0)
  }
  
  static function drilldown (bulkInvoice :  BulkInvoice) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditBulkInvoiceDetail, {bulkInvoice}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (bulkInvoice :  BulkInvoice) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditBulkInvoiceDetail, {bulkInvoice}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (bulkInvoice :  BulkInvoice) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditBulkInvoiceDetail, {bulkInvoice}, 0).goInMain()
  }
  
  static function printPage (bulkInvoice :  BulkInvoice) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditBulkInvoiceDetail, {bulkInvoice}, 0).printPage()
  }
  
  static function push (bulkInvoice :  BulkInvoice) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditBulkInvoiceDetail, {bulkInvoice}, 0).push()
  }
  
  
}