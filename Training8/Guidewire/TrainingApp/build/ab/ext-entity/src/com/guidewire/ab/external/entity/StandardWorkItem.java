package com.guidewire.ab.external.entity;

/**
 * Standard WorkItem implementation. This should work for most work queues.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StandardWorkItem extends com.guidewire.ab.external.entity.WorkItem, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


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
   *  NOTE: when inserting a StandardWorkItem this field must be non-null.
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
   * The queue. NOTE: when inserting a StandardWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueueType")
  public com.guidewire.ab.external.typelist.BatchProcessType getQueueType();

  /**
   * The queue. NOTE: when inserting a StandardWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "QueueType")
  public void setQueueType(com.guidewire.ab.external.typelist.BatchProcessType value);


  /**
   * Status of this workitem.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.WorkItemStatusType getStatus();


  /**
   * A handle, generally the ID, to the target. NOTE: when inserting a StandardWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Target")
  public java.lang.Long getTarget();

  /**
   * A handle, generally the ID, to the target. NOTE: when inserting a StandardWorkItem this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Target")
  public void setTarget(java.lang.Long value);


  /**
   * Utility class for initializing an instance of StandardWorkItem
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity StandardWorkItem.
     */
    public static StandardWorkItem newInstance()
    {
      return (StandardWorkItem) gw.pl.external.entity.EntityFactory.getInstance().newEntity(StandardWorkItem.class);
    }
  }

}
