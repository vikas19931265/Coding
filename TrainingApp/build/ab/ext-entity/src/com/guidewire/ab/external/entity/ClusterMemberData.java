package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterMemberData extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Time connection started NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConnectionStarted")
  public java.util.Date getConnectionStarted();

  /**
   * Time connection started NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ConnectionStarted")
  public void setConnectionStarted(java.util.Date value);


  /**
   * Time connection stopped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConnectionStopped")
  public java.util.Date getConnectionStopped();

  /**
   * Time connection stopped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ConnectionStopped")
  public void setConnectionStopped(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DataAsMap")
  public java.util.Map getDataAsMap();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DataAsMap")
  public void setDataAsMap(java.util.Map value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Last update NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastUpdate")
  public java.math.BigDecimal getLastUpdate();

  /**
   * Last update NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastUpdate")
  public void setLastUpdate(java.math.BigDecimal value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastUpdateAsDate")
  public java.util.Date getLastUpdateAsDate();


  /**
   * Node logical name NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LogicalName")
  public java.lang.String getLogicalName();

  /**
   * Node logical name NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LogicalName")
  public void setLogicalName(java.lang.String value);


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
   * Run level NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RunLevel")
  public java.lang.String getRunLevel();

  /**
   * Run level NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RunLevel")
  public void setRunLevel(java.lang.String value);


  /**
   * Server ID NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerId")
  public java.lang.String getServerId();

  /**
   * Server ID NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerId")
  public void setServerId(java.lang.String value);


  /**
   * Time server started NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServerStarted")
  public java.util.Date getServerStarted();

  /**
   * Time server started NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServerStarted")
  public void setServerStarted(java.util.Date value);


  /**
   * UUID NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Uuid")
  public java.lang.String getUuid();

  /**
   * UUID NOTE: when inserting a ClusterMemberData this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Uuid")
  public void setUuid(java.lang.String value);

  /**
   * null
   *
   * @param param long
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "calcServerStopped")
  public java.util.Date calcServerStopped(long param);

  /**
   * null
   *
   * @param param Map<String, Serializable>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDataAsMap")
  public void setDataAsMap_Method(java.util.Map param);


  /**
   * Utility class for initializing an instance of ClusterMemberData
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ClusterMemberData.
     */
    public static ClusterMemberData newInstance()
    {
      return (ClusterMemberData) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ClusterMemberData.class);
    }
  }

}
