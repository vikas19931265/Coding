package com.guidewire.ab.external.entity;

/**
 * History of inbound calls: soap and startable plugins
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface InboundHistory extends com.guidewire.ab.external.entity.EventAware, external.gw.api.profiler.ProfilerDataSource, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * The date this call completed. NOTE: when inserting a InboundHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompleteDate")
  public java.util.Date getCompleteDate();

  /**
   * The date this call completed. NOTE: when inserting a InboundHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CompleteDate")
  public void setCompleteDate(java.util.Date value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Raw Profiler data NOTE: when inserting a InboundHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerData")
  public external.gw.lang.Blob getProfilerData();

  /**
   * Raw Profiler data NOTE: when inserting a InboundHistory this field must be non-null.
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
   * The date this call started. NOTE: when inserting a InboundHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartDate")
  public java.util.Date getStartDate();

  /**
   * The date this call started. NOTE: when inserting a InboundHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartDate")
  public void setStartDate(java.util.Date value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.InboundHistory getSubtype();


  /**
   * Utility class for initializing an instance of InboundHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity InboundHistory.
     */
    public static InboundHistory newInstance()
    {
      return (InboundHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(InboundHistory.class);
    }
  }

}
