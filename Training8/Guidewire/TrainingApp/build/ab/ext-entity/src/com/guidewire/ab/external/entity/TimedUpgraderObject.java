package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TimedUpgraderObject extends gw.pl.external.entity.Entity
{


  /**
   * Timestamp when the timing completed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * Timestamp when the timing completed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Execution duration in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecDuration")
  public java.lang.Integer getExecDuration();

  /**
   * Execution duration in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecDuration")
  public void setExecDuration(java.lang.Integer value);


  /**
   * Timestamp when the timing began NOTE: when inserting a TimedUpgraderObject this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the timing began NOTE: when inserting a TimedUpgraderObject this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Utility class for initializing an instance of TimedUpgraderObject
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TimedUpgraderObject.
     */
    public static TimedUpgraderObject newInstance()
    {
      return (TimedUpgraderObject) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TimedUpgraderObject.class);
    }
  }

}
