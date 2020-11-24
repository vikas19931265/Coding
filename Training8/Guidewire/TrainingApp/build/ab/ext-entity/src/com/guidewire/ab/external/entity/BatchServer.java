package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BatchServer extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


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
   * Service id of the batch server
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerId")
  public java.lang.String getServerId();

  /**
   * Service id of the batch server
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerId")
  public void setServerId(java.lang.String value);


  /**
   * Startup time of the batch server
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartupTime")
  public java.util.Date getStartupTime();

  /**
   * Startup time of the batch server
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartupTime")
  public void setStartupTime(java.util.Date value);


  /**
   * UUID of the batch server
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UUID")
  public java.lang.String getUUID();

  /**
   * UUID of the batch server
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UUID")
  public void setUUID(java.lang.String value);


  /**
   * Utility class for initializing an instance of BatchServer
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BatchServer.
     */
    public static BatchServer newInstance()
    {
      return (BatchServer) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BatchServer.class);
    }
  }

}
