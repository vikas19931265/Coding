package com.guidewire.ab.external.entity;

/**
 * Queue of ABContacts to be checked for duplication. This is a system-internal entity.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DuplicateContactWorkItem extends com.guidewire.ab.external.entity.WorkItem, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * ABContact to be evaluated. NOTE: when inserting a DuplicateContactWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * ABContact to be evaluated. NOTE: when inserting a DuplicateContactWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContact")
  public void setABContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attempts")
  public java.lang.Integer getAttempts();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Attempts")
  public void setAttempts(java.lang.Integer value);


  /**
   * The time after which the work item can be tried. Must be null on failed work items
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AvailableSince")
  public java.util.Date getAvailableSince();

  /**
   * The time after which the work item can be tried. Must be null on failed work items
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AvailableSince")
  public void setAvailableSince(java.util.Date value);


  /**
   * The corresponding DuplicateContactBatchRun where this contact has been found. NOTE: when inserting a DuplicateContactWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BatchRun")
  public com.guidewire.ab.external.entity.DuplicateContactBatchRun getBatchRun();

  /**
   * The corresponding DuplicateContactBatchRun where this contact has been found. NOTE: when inserting a DuplicateContactWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BatchRun")
  public void setBatchRun(com.guidewire.ab.external.entity.DuplicateContactBatchRun value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CheckedOutBy")
  public java.lang.String getCheckedOutBy();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CheckedOutBy")
  public void setCheckedOutBy(java.lang.String value);


  /**
   *  NOTE: when inserting a DuplicateContactWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreationTime")
  public java.util.Date getCreationTime();


  /**
   * Stack trace of the exception
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exception")
  public java.lang.String getException();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastUpdateTime")
  public java.util.Date getLastUpdateTime();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastUpdateTime")
  public void setLastUpdateTime(java.util.Date value);


  /**
   * The number of duplicates found.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumberOfResults")
  public java.lang.Integer getNumberOfResults();

  /**
   * The number of duplicates found.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumberOfResults")
  public void setNumberOfResults(java.lang.Integer value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public java.lang.Integer getPriority();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(java.lang.Integer value);


  /**
   * The writer batch job that created this workitem (ProcessHistory).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProcessHistoryID")
  public java.lang.Long getProcessHistoryID();

  /**
   * The writer batch job that created this workitem (ProcessHistory).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProcessHistoryID")
  public void setProcessHistoryID(java.lang.Long value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Status of this workitem.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.WorkItemStatusType getStatus();


  /**
   * Utility class for initializing an instance of DuplicateContactWorkItem
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DuplicateContactWorkItem.
     */
    public static DuplicateContactWorkItem newInstance()
    {
      return (DuplicateContactWorkItem) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DuplicateContactWorkItem.class);
    }
  }

}
