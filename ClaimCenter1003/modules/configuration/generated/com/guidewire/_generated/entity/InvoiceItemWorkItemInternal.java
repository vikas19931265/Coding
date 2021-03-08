package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InvoiceItemWorkItem.eti;InvoiceItemWorkItem.eix;InvoiceItemWorkItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InvoiceItemWorkItemInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire._generated.entity.WorkItemInternal {
  /**
   * Gets the value of the BulkInvoiceItem field.
   * The bulk invoice item to be processed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BulkInvoiceItem getBulkInvoiceItem();
  
  
  public gw.pl.persistence.core.Key getBulkInvoiceItemID();
  
  
  /**
   * Gets the value of the JobType field.
   * The type of job for which this bulk invoice item is being processed.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BulkInvoiceJobType getJobType();
  
  
  /**
   * Sets the value of the BulkInvoiceItem field.
   */
  public void setBulkInvoiceItem(entity.BulkInvoiceItem value);
  
  
  public void setBulkInvoiceItemID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the JobType field.
   */
  public void setJobType(typekey.BulkInvoiceJobType value);
  
  
  
}