package com.guidewire.ab.external.entity;

/**
 * Profiler data for each destination
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface InstrumentedMessage extends external.gw.api.profiler.ProfilerDataSource, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Identifies the message destination. NOTE: when inserting a InstrumentedMessage this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DestinationID")
  public java.lang.Integer getDestinationID();


  /**
   * Timestamp when the instance was shutdown.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Raw Profiler data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerData")
  public external.gw.lang.Blob getProfilerData();

  /**
   * Raw Profiler data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProfilerData")
  public void setProfilerData(external.gw.lang.Blob value);


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
   * Timestamp when the instance was started. NOTE: when inserting a InstrumentedMessage this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();


  /**
   * Utility class for initializing an instance of InstrumentedMessage
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity InstrumentedMessage.
     */
    public static InstrumentedMessage newInstance()
    {
      return (InstrumentedMessage) gw.pl.external.entity.EntityFactory.getInstance().newEntity(InstrumentedMessage.class);
    }
  }

}
