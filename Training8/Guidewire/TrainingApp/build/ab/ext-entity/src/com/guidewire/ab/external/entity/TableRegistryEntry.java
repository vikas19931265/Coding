package com.guidewire.ab.external.entity;

/**
 * Stores metadata for each table in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TableRegistryEntry extends gw.pl.external.entity.Entity
{


  /**
   * Name of the unique id. NOTE: when inserting a TableRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IdName")
  public java.lang.String getIdName();

  /**
   * Name of the unique id. NOTE: when inserting a TableRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IdName")
  public void setIdName(java.lang.String value);


  /**
   * Name of the table. NOTE: when inserting a TableRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Name of the table. NOTE: when inserting a TableRegistryEntry this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Utility class for initializing an instance of TableRegistryEntry
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TableRegistryEntry.
     */
    public static TableRegistryEntry newInstance()
    {
      return (TableRegistryEntry) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TableRegistryEntry.class);
    }
  }

}
