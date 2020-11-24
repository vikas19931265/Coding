package com.guidewire.ab.external.entity;

/**
 * Instrumentation information for a work queue executor instance.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface InstrumentedWorkExecutor extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * The app server name. NOTE: when inserting a InstrumentedWorkExecutor this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppServerName")
  public java.lang.String getAppServerName();

  /**
   * The app server name. NOTE: when inserting a InstrumentedWorkExecutor this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppServerName")
  public void setAppServerName(java.lang.String value);


  /**
   * Timestamp when the executor was shutdown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * Timestamp when the executor was shutdown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Maximum number of parallel workers. NOTE: when inserting a InstrumentedWorkExecutor this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxNumberOfWorkers")
  public java.lang.Integer getMaxNumberOfWorkers();

  /**
   * Maximum number of parallel workers. NOTE: when inserting a InstrumentedWorkExecutor this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxNumberOfWorkers")
  public void setMaxNumberOfWorkers(java.lang.Integer value);


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
   * Timestamp when the executor was started.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the executor was started.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * The related writer batch process, identifying this queue. NOTE: when inserting a InstrumentedWorkExecutor this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkQueueID")
  public com.guidewire.ab.external.typelist.BatchProcessType getWorkQueueID();

  /**
   * The related writer batch process, identifying this queue. NOTE: when inserting a InstrumentedWorkExecutor this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WorkQueueID")
  public void setWorkQueueID(com.guidewire.ab.external.typelist.BatchProcessType value);


  /**
   * Utility class for initializing an instance of InstrumentedWorkExecutor
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity InstrumentedWorkExecutor.
     */
    public static InstrumentedWorkExecutor newInstance()
    {
      return (InstrumentedWorkExecutor) gw.pl.external.entity.EntityFactory.getInstance().newEntity(InstrumentedWorkExecutor.class);
    }
  }

}
