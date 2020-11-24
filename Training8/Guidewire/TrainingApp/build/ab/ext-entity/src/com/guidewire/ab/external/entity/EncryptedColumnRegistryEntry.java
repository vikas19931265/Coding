package com.guidewire.ab.external.entity;

/**
 * Stores metadata for each encrypted column in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EncryptedColumnRegistryEntry extends gw.pl.external.entity.Entity
{


  /**
   * Name of the column NOTE: when inserting a EncryptedColumnRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnName")
  public java.lang.String getColumnName();

  /**
   * Name of the column NOTE: when inserting a EncryptedColumnRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnName")
  public void setColumnName(java.lang.String value);


  /**
   * Name of the table. NOTE: when inserting a EncryptedColumnRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Name of the table. NOTE: when inserting a EncryptedColumnRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Utility class for initializing an instance of EncryptedColumnRegistryEntry
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity EncryptedColumnRegistryEntry.
     */
    public static EncryptedColumnRegistryEntry newInstance()
    {
      return (EncryptedColumnRegistryEntry) gw.pl.external.entity.EntityFactory.getInstance().newEntity(EncryptedColumnRegistryEntry.class);
    }
  }

}
