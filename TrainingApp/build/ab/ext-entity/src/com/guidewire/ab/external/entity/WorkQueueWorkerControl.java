package com.guidewire.ab.external.entity;

/**
 * Input/Extract pointers to work-items.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WorkQueueWorkerControl extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   *  NOTE: when inserting a WorkQueueWorkerControl this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastExecutionTime")
  public java.util.Date getLastExecutionTime();

  /**
   *  NOTE: when inserting a WorkQueueWorkerControl this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastExecutionTime")
  public void setLastExecutionTime(java.util.Date value);


  /**
   *  NOTE: when inserting a WorkQueueWorkerControl this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LockName")
  public java.lang.String getLockName();

  /**
   *  NOTE: when inserting a WorkQueueWorkerControl this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LockName")
  public void setLockName(java.lang.String value);


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
   * Utility class for initializing an instance of WorkQueueWorkerControl
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity WorkQueueWorkerControl.
     */
    public static WorkQueueWorkerControl newInstance()
    {
      return (WorkQueueWorkerControl) gw.pl.external.entity.EntityFactory.getInstance().newEntity(WorkQueueWorkerControl.class);
    }
  }

}
