package com.guidewire.ab.external.entity;

/**
 * Stores ordered column names for a database storage set.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeDBStorageSetColumn extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Java class of data. NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnClass")
  public java.lang.String getColumnClass();

  /**
   * Java class of data. NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnClass")
  public void setColumnClass(java.lang.String value);


  /**
   * Column name. NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnName")
  public java.lang.String getColumnName();

  /**
   * Column name. NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnName")
  public void setColumnName(java.lang.String value);


  /**
   * 0-based ordering of columnname. NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnOrder")
  public java.lang.Integer getColumnOrder();

  /**
   * 0-based ordering of columnname. NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnOrder")
  public void setColumnOrder(java.lang.Integer value);


  /**
   * True if column is compared side by side.  False will show differences in parentheses NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompareColumn")
  public java.lang.Boolean isCompareColumn();

  /**
   * True if column is compared side by side.  False will show differences in parentheses NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CompareColumn")
  public void setCompareColumn(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * True if used to match before and after object.  False if compare before and after NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeyColumn")
  public java.lang.Boolean isKeyColumn();

  /**
   * True if used to match before and after object.  False if compare before and after NOTE: when inserting a UpgradeDBStorageSetColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "KeyColumn")
  public void setKeyColumn(java.lang.Boolean value);


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
   * Utility class for initializing an instance of UpgradeDBStorageSetColumn
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeDBStorageSetColumn.
     */
    public static UpgradeDBStorageSetColumn newInstance()
    {
      return (UpgradeDBStorageSetColumn) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeDBStorageSetColumn.class);
    }
  }

}
