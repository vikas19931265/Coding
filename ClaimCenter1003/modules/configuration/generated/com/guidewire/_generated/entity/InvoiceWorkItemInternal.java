package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InvoiceWorkItem.eti;InvoiceWorkItem.eix;InvoiceWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InvoiceWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the BulkInvoice field.
   * The Bulk Invoice to be processed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BulkInvoice getBulkInvoice();
  
  
  public gw.pl.persistence.core.Key getBulkInvoiceID();
  
  
  /**
   * Sets the value of the BulkInvoice field.
   */
  public void setBulkInvoice(entity.BulkInvoice value);
  
  
  public void setBulkInvoiceID(gw.pl.persistence.core.Key value);
  
  
  
}