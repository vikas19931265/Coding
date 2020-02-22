package com.guidewire.ab.external.entity;

/**
 * Before and after row counts within an upgrade.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeRowCount extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
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
   * Row count after upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowCountAfterUpgrade")
  public java.lang.Integer getRowCountAfterUpgrade();

  /**
   * Row count after upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowCountAfterUpgrade")
  public void setRowCountAfterUpgrade(java.lang.Integer value);


  /**
   * Row count before upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowCountBeforeUpgrade")
  public java.lang.Integer getRowCountBeforeUpgrade();

  /**
   * Row count before upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowCountBeforeUpgrade")
  public void setRowCountBeforeUpgrade(java.lang.Integer value);


  /**
   * Row count change after upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowCountChange")
  public java.lang.Integer getRowCountChange();

  /**
   * Row count change after upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowCountChange")
  public void setRowCountChange(java.lang.Integer value);


  /**
   * Table name NOTE: when inserting a UpgradeRowCount this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Table name NOTE: when inserting a UpgradeRowCount this field must be non-null.
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
   * Utility class for initializing an instance of UpgradeRowCount
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeRowCount.
     */
    public static UpgradeRowCount newInstance()
    {
      return (UpgradeRowCount) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeRowCount.class);
    }
  }

}
