package com.guidewire.ab.external.entity;

/**
 * Capture info at time of each deployment
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeDatamodelInfo extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Application Major Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ApplicationMajorVers")
  public java.lang.Integer getApplicationMajorVers();

  /**
   * Application Major Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ApplicationMajorVers")
  public void setApplicationMajorVers(java.lang.Integer value);


  /**
   * Application Minor Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ApplicationMinorVers")
  public java.lang.Integer getApplicationMinorVers();

  /**
   * Application Minor Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ApplicationMinorVers")
  public void setApplicationMinorVers(java.lang.Integer value);


  /**
   * Extensions Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtensionsVers")
  public java.lang.Integer getExtensionsVers();

  /**
   * Extensions Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExtensionsVers")
  public void setExtensionsVers(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Platform Major Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformMajorVers")
  public java.lang.Integer getPlatformMajorVers();

  /**
   * Platform Major Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PlatformMajorVers")
  public void setPlatformMajorVers(java.lang.Integer value);


  /**
   * Platform Minor Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformMinorVers")
  public java.lang.Integer getPlatformMinorVers();

  /**
   * Platform Minor Schema Version at time of deployment NOTE: when inserting a UpgradeDatamodelInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PlatformMinorVers")
  public void setPlatformMinorVers(java.lang.Integer value);


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
   * Utility class for initializing an instance of UpgradeDatamodelInfo
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeDatamodelInfo.
     */
    public static UpgradeDatamodelInfo newInstance()
    {
      return (UpgradeDatamodelInfo) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeDatamodelInfo.class);
    }
  }

}
