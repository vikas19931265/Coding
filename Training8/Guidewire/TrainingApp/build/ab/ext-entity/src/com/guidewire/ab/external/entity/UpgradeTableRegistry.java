package com.guidewire.ab.external.entity;

/**
 * Before and after table registry entries within an upgrade.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeTableRegistry extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Table registry entry after upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IDNameAfterUpgrade")
  public java.lang.String getIDNameAfterUpgrade();

  /**
   * Table registry entry after upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IDNameAfterUpgrade")
  public void setIDNameAfterUpgrade(java.lang.String value);


  /**
   * Table registry entry before upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IDNameBeforeUpgrade")
  public java.lang.String getIDNameBeforeUpgrade();

  /**
   * Table registry entry before upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IDNameBeforeUpgrade")
  public void setIDNameBeforeUpgrade(java.lang.String value);


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
   * Table name NOTE: when inserting a UpgradeTableRegistry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Table name NOTE: when inserting a UpgradeTableRegistry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Parent
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeInstance")
  public com.guidewire.ab.external.entity.UpgradeInstance getUpgradeInstance();

  /**
   * Parent
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeInstance")
  public void setUpgradeInstance(com.guidewire.ab.external.entity.UpgradeInstance value);


  /**
   * Utility class for initializing an instance of UpgradeTableRegistry
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeTableRegistry.
     */
    public static UpgradeTableRegistry newInstance()
    {
      return (UpgradeTableRegistry) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeTableRegistry.class);
    }
  }

}
