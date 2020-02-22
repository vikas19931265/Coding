package com.guidewire.ab.external.entity;

/**
 * Row counts for load history.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadRowCount extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommand")
  public com.guidewire.ab.external.entity.LoadCommand getLoadCommand();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCommand")
  public void setLoadCommand(com.guidewire.ab.external.entity.LoadCommand value);


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
   * Number of blocks in source table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceBlockCount")
  public java.lang.Integer getSourceBlockCount();

  /**
   * Number of blocks in source table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceBlockCount")
  public void setSourceBlockCount(java.lang.Integer value);


  /**
   * Number of rows in source table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceRowCount")
  public java.lang.Long getSourceRowCount();

  /**
   * Number of rows in source table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceRowCount")
  public void setSourceRowCount(java.lang.Long value);


  /**
   * Name of source table. NOTE: when inserting a LoadRowCount this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceTableName")
  public java.lang.String getSourceTableName();

  /**
   * Name of source table. NOTE: when inserting a LoadRowCount this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceTableName")
  public void setSourceTableName(java.lang.String value);


  /**
   * Number of blocks in staging table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StagingBlockCount")
  public java.lang.Integer getStagingBlockCount();

  /**
   * Number of blocks in staging table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StagingBlockCount")
  public void setStagingBlockCount(java.lang.Integer value);


  /**
   * Number of rows in staging table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StagingRowCount")
  public java.lang.Long getStagingRowCount();

  /**
   * Number of rows in staging table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StagingRowCount")
  public void setStagingRowCount(java.lang.Long value);


  /**
   * Name of staging table. NOTE: when inserting a LoadRowCount this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StagingTableName")
  public java.lang.String getStagingTableName();

  /**
   * Name of staging table. NOTE: when inserting a LoadRowCount this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StagingTableName")
  public void setStagingTableName(java.lang.String value);


  /**
   * Utility class for initializing an instance of LoadRowCount
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadRowCount.
     */
    public static LoadRowCount newInstance()
    {
      return (LoadRowCount) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadRowCount.class);
    }
  }

}
