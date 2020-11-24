package com.guidewire.ab.external.entity;

/**
 * Stores results of database storage set.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeDBStorageSetResult extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * 0-based ordering of column of result within DBSS results NOTE: when inserting a UpgradeDBStorageSetResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnOrder")
  public java.lang.Integer getColumnOrder();

  /**
   * 0-based ordering of column of result within DBSS results NOTE: when inserting a UpgradeDBStorageSetResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnOrder")
  public void setColumnOrder(java.lang.Integer value);


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
   * 0-based ordering of row of result within DBSS results NOTE: when inserting a UpgradeDBStorageSetResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowOrder")
  public java.lang.Integer getRowOrder();

  /**
   * 0-based ordering of row of result within DBSS results NOTE: when inserting a UpgradeDBStorageSetResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowOrder")
  public void setRowOrder(java.lang.Integer value);


  /**
   * Database storage set for this object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeDBStorageSet")
  public com.guidewire.ab.external.entity.UpgradeDBStorageSet getUpgradeDBStorageSet();

  /**
   * Database storage set for this object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeDBStorageSet")
  public void setUpgradeDBStorageSet(com.guidewire.ab.external.entity.UpgradeDBStorageSet value);


  /**
   * Result value. NOTE: when inserting a UpgradeDBStorageSetResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.String getValue();

  /**
   * Result value. NOTE: when inserting a UpgradeDBStorageSetResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(java.lang.String value);


  /**
   * Utility class for initializing an instance of UpgradeDBStorageSetResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeDBStorageSetResult.
     */
    public static UpgradeDBStorageSetResult newInstance()
    {
      return (UpgradeDBStorageSetResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeDBStorageSetResult.class);
    }
  }

}
