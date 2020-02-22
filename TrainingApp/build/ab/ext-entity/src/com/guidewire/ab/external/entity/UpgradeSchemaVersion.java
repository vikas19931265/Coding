package com.guidewire.ab.external.entity;

/**
 * Stores version number of upgrade instrumentation schema to control upgrading these tables.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeSchemaVersion extends gw.pl.external.entity.Entity
{


  /**
   * Column for unique index NOTE: when inserting a UpgradeSchemaVersion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Column for unique index NOTE: when inserting a UpgradeSchemaVersion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * Upgrade instrumentation schema version. NOTE: when inserting a UpgradeSchemaVersion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeSchemaVersion")
  public java.lang.Integer getUpgradeSchemaVersion();

  /**
   * Upgrade instrumentation schema version. NOTE: when inserting a UpgradeSchemaVersion this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeSchemaVersion")
  public void setUpgradeSchemaVersion(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of UpgradeSchemaVersion
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeSchemaVersion.
     */
    public static UpgradeSchemaVersion newInstance()
    {
      return (UpgradeSchemaVersion) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeSchemaVersion.class);
    }
  }

}
