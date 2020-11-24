package com.guidewire.ab.external.entity;

/**
 * Stores data distribution info for each table in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TableDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * True if admin table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AdminTable")
  public java.lang.Boolean isAdminTable();

  /**
   * True if admin table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AdminTable")
  public void setAdminTable(java.lang.Boolean value);


  /**
   * Collection of ArrayDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayDataDists")
  public com.guidewire.ab.external.entity.ArrayDataDist[] getArrayDataDists();

  /**
   * Collection of ArrayDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArrayDataDists")
  public void setArrayDataDists(com.guidewire.ab.external.entity.ArrayDataDist[] value);


  /**
   * Collection of AssignableForKeyDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableForKeyDataDists")
  public com.guidewire.ab.external.entity.AssignableForKeyDataDist[] getAssignableForKeyDataDists();

  /**
   * Collection of AssignableForKeyDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableForKeyDataDists")
  public void setAssignableForKeyDataDists(com.guidewire.ab.external.entity.AssignableForKeyDataDist[] value);


  /**
   * Collection of BeanVersionDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersionDataDists")
  public com.guidewire.ab.external.entity.BeanVersionDataDist[] getBeanVersionDataDists();

  /**
   * Collection of BeanVersionDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BeanVersionDataDists")
  public void setBeanVersionDataDists(com.guidewire.ab.external.entity.BeanVersionDataDist[] value);


  /**
   * Collection of BlobColDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BlobColDataDists")
  public com.guidewire.ab.external.entity.BlobColDataDist[] getBlobColDataDists();

  /**
   * Collection of BlobColDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BlobColDataDists")
  public void setBlobColDataDists(com.guidewire.ab.external.entity.BlobColDataDist[] value);


  /**
   * Collection of BooleanColDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BooleanColDataDists")
  public com.guidewire.ab.external.entity.BooleanColDataDist[] getBooleanColDataDists();

  /**
   * Collection of BooleanColDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BooleanColDataDists")
  public void setBooleanColDataDists(com.guidewire.ab.external.entity.BooleanColDataDist[] value);


  /**
   * Collection of ClobColDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClobColDataDists")
  public com.guidewire.ab.external.entity.ClobColDataDist[] getClobColDataDists();

  /**
   * Collection of ClobColDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ClobColDataDists")
  public void setClobColDataDists(com.guidewire.ab.external.entity.ClobColDataDist[] value);


  /**
   * Collection of CustomDataDistRequests linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CustomDataDistRequests")
  public com.guidewire.ab.external.entity.CustomDataDistRequest[] getCustomDataDistRequests();

  /**
   * Collection of CustomDataDistRequests linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CustomDataDistRequests")
  public void setCustomDataDistRequests(com.guidewire.ab.external.entity.CustomDataDistRequest[] value);


  /**
   * DatabaseDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatabaseDataDist")
  public com.guidewire.ab.external.entity.DatabaseDataDist getDatabaseDataDist();

  /**
   * DatabaseDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DatabaseDataDist")
  public void setDatabaseDataDist(com.guidewire.ab.external.entity.DatabaseDataDist value);


  /**
   * Collection of DateAnalysisDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateAnalysisDataDists")
  public com.guidewire.ab.external.entity.DateAnalysisDataDist[] getDateAnalysisDataDists();

  /**
   * Collection of DateAnalysisDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateAnalysisDataDists")
  public void setDateAnalysisDataDists(com.guidewire.ab.external.entity.DateAnalysisDataDist[] value);


  /**
   * TreeMap of DateAnalysisDataDists by ColumnName
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateAnalysisDataDistsByColumnName")
  public java.util.TreeMap getDateAnalysisDataDistsByColumnName();


  /**
   * Collection of DateBinnedDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateBinnedDataDists")
  public com.guidewire.ab.external.entity.DateBinnedDataDist[] getDateBinnedDataDists();

  /**
   * Collection of DateBinnedDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateBinnedDataDists")
  public void setDateBinnedDataDists(com.guidewire.ab.external.entity.DateBinnedDataDist[] value);


  /**
   * Collection of min and max dates for all date columns in this table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateSpanDataDists")
  public com.guidewire.ab.external.entity.DateSpanDataDist[] getDateSpanDataDists();

  /**
   * Collection of min and max dates for all date columns in this table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateSpanDataDists")
  public void setDateSpanDataDists(com.guidewire.ab.external.entity.DateSpanDataDist[] value);


  /**
   * Name of entity.  Can be subtype entity. NOTE: when inserting a TableDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityName")
  public java.lang.String getEntityName();

  /**
   * Name of entity.  Can be subtype entity. NOTE: when inserting a TableDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityName")
  public void setEntityName(java.lang.String value);


  /**
   * Collection of ForKeyDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForKeyDataDists")
  public com.guidewire.ab.external.entity.ForKeyDataDist[] getForKeyDataDists();

  /**
   * Collection of ForKeyDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ForKeyDataDists")
  public void setForKeyDataDists(com.guidewire.ab.external.entity.ForKeyDataDist[] value);


  /**
   * Collection of GenericGroupDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericGroupDataDists")
  public com.guidewire.ab.external.entity.GenericGroupDataDist[] getGenericGroupDataDists();

  /**
   * Collection of GenericGroupDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GenericGroupDataDists")
  public void setGenericGroupDataDists(com.guidewire.ab.external.entity.GenericGroupDataDist[] value);


  /**
   * Collection of HourAnalysisDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HourAnalysisDataDists")
  public com.guidewire.ab.external.entity.HourAnalysisDataDist[] getHourAnalysisDataDists();

  /**
   * Collection of HourAnalysisDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HourAnalysisDataDists")
  public void setHourAnalysisDataDists(com.guidewire.ab.external.entity.HourAnalysisDataDist[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Collection of NullableColumnDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NullableColumnDataDists")
  public com.guidewire.ab.external.entity.NullableColumnDataDist[] getNullableColumnDataDists();

  /**
   * Collection of NullableColumnDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NullableColumnDataDists")
  public void setNullableColumnDataDists(com.guidewire.ab.external.entity.NullableColumnDataDist[] value);


  /**
   * Count of # of rows loaded through the staging tables. (null if non-loadable)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumLoadedThruStagingTables")
  public java.lang.Long getNumLoadedThruStagingTables();

  /**
   * Count of # of rows loaded through the staging tables. (null if non-loadable)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumLoadedThruStagingTables")
  public void setNumLoadedThruStagingTables(java.lang.Long value);


  /**
   * Count of # of retired rows. (null if non-retireable)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumRetiredRows")
  public java.lang.Long getNumRetiredRows();

  /**
   * Count of # of retired rows. (null if non-retireable)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumRetiredRows")
  public void setNumRetiredRows(java.lang.Long value);


  /**
   * Count of # of rows. NOTE: when inserting a TableDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumRows")
  public java.lang.Long getNumRows();

  /**
   * Count of # of rows. NOTE: when inserting a TableDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumRows")
  public void setNumRows(java.lang.Long value);


  /**
   * Count of # of updated rows.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumUpdatedRows")
  public java.lang.Long getNumUpdatedRows();

  /**
   * Count of # of updated rows.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumUpdatedRows")
  public void setNumUpdatedRows(java.lang.Long value);


  /**
   * Count of # of total updates.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumUpdates")
  public java.lang.Long getNumUpdates();

  /**
   * Count of # of total updates.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumUpdates")
  public void setNumUpdates(java.lang.Long value);


  /**
   * For subtype tables, points to the parent table's data distribution.  Otherwise, this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParentTableDataDist")
  public com.guidewire.ab.external.entity.TableDataDist getParentTableDataDist();

  /**
   * For subtype tables, points to the parent table's data distribution.  Otherwise, this is null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParentTableDataDist")
  public void setParentTableDataDist(com.guidewire.ab.external.entity.TableDataDist value);


  /**
   * True if platform table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformTable")
  public java.lang.Boolean isPlatformTable();

  /**
   * True if platform table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PlatformTable")
  public void setPlatformTable(java.lang.Boolean value);


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
   * True if staging table distribution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StagingTableDist")
  public java.lang.Boolean isStagingTableDist();

  /**
   * True if staging table distribution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StagingTableDist")
  public void setStagingTableDist(java.lang.Boolean value);


  /**
   * Name of table. NOTE: when inserting a TableDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Name of table. NOTE: when inserting a TableDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Collection of TypeKeyDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeKeyDataDists")
  public com.guidewire.ab.external.entity.TypeKeyDataDist[] getTypeKeyDataDists();

  /**
   * Collection of TypeKeyDataDists linked to this TableDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeKeyDataDists")
  public void setTypeKeyDataDists(com.guidewire.ab.external.entity.TypeKeyDataDist[] value);


  /**
   * True if type list table distribution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeListTableDist")
  public java.lang.Boolean isTypeListTableDist();

  /**
   * True if type list table distribution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeListTableDist")
  public void setTypeListTableDist(java.lang.Boolean value);

  /**
   * Appends all the TableDataDist for all subtypes in the tree under this TableDataDist
   *
   * @param allSubtypeDistributions 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAllSubTypeDistributions")
  public void addAllSubTypeDistributions(java.util.Collection allSubtypeDistributions);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToArrayDataDists")
  public void addToArrayDataDists(com.guidewire.ab.external.entity.ArrayDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToAssignableForKeyDataDists")
  public void addToAssignableForKeyDataDists(com.guidewire.ab.external.entity.AssignableForKeyDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBeanVersionDataDists")
  public void addToBeanVersionDataDists(com.guidewire.ab.external.entity.BeanVersionDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBlobColDataDists")
  public void addToBlobColDataDists(com.guidewire.ab.external.entity.BlobColDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBooleanColDataDists")
  public void addToBooleanColDataDists(com.guidewire.ab.external.entity.BooleanColDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToClobColDataDists")
  public void addToClobColDataDists(com.guidewire.ab.external.entity.ClobColDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCustomDataDistRequests")
  public void addToCustomDataDistRequests(com.guidewire.ab.external.entity.CustomDataDistRequest element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDateAnalysisDataDists")
  public void addToDateAnalysisDataDists(com.guidewire.ab.external.entity.DateAnalysisDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDateBinnedDataDists")
  public void addToDateBinnedDataDists(com.guidewire.ab.external.entity.DateBinnedDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDateSpanDataDists")
  public void addToDateSpanDataDists(com.guidewire.ab.external.entity.DateSpanDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToForKeyDataDists")
  public void addToForKeyDataDists(com.guidewire.ab.external.entity.ForKeyDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToGenericGroupDataDists")
  public void addToGenericGroupDataDists(com.guidewire.ab.external.entity.GenericGroupDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToHourAnalysisDataDists")
  public void addToHourAnalysisDataDists(com.guidewire.ab.external.entity.HourAnalysisDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToNullableColumnDataDists")
  public void addToNullableColumnDataDists(com.guidewire.ab.external.entity.NullableColumnDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTypeKeyDataDists")
  public void addToTypeKeyDataDists(com.guidewire.ab.external.entity.TypeKeyDataDist element);

  /**
   * 
   *
   * @return # of rows for the specified columnName in the specified year/month, derived from the daily data distribution
   * @param columnName 
   * @param yearMonthString 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNumRowsFromDateAnalysis")
  public java.lang.Long getNumRowsFromDateAnalysis(java.lang.String columnName, java.lang.String yearMonthString);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ArrayDataDist from the ArrayDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromArrayDataDists")
  public void removeFromArrayDataDists(com.guidewire.ab.external.entity.ArrayDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ArrayDataDist having id elementID from the ArrayDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromArrayDataDists")
  public void removeFromArrayDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AssignableForKeyDataDist from the AssignableForKeyDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAssignableForKeyDataDists")
  public void removeFromAssignableForKeyDataDists(com.guidewire.ab.external.entity.AssignableForKeyDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AssignableForKeyDataDist having id elementID from the AssignableForKeyDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAssignableForKeyDataDists")
  public void removeFromAssignableForKeyDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BeanVersionDataDist from the BeanVersionDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBeanVersionDataDists")
  public void removeFromBeanVersionDataDists(com.guidewire.ab.external.entity.BeanVersionDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BeanVersionDataDist having id elementID from the BeanVersionDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBeanVersionDataDists")
  public void removeFromBeanVersionDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BlobColDataDist from the BlobColDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBlobColDataDists")
  public void removeFromBlobColDataDists(com.guidewire.ab.external.entity.BlobColDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BlobColDataDist having id elementID from the BlobColDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBlobColDataDists")
  public void removeFromBlobColDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BooleanColDataDist from the BooleanColDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBooleanColDataDists")
  public void removeFromBooleanColDataDists(com.guidewire.ab.external.entity.BooleanColDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BooleanColDataDist having id elementID from the BooleanColDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBooleanColDataDists")
  public void removeFromBooleanColDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ClobColDataDist from the ClobColDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromClobColDataDists")
  public void removeFromClobColDataDists(com.guidewire.ab.external.entity.ClobColDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ClobColDataDist having id elementID from the ClobColDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromClobColDataDists")
  public void removeFromClobColDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CustomDataDistRequest from the CustomDataDistRequests array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCustomDataDistRequests")
  public void removeFromCustomDataDistRequests(com.guidewire.ab.external.entity.CustomDataDistRequest element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CustomDataDistRequest having id elementID from the CustomDataDistRequests array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCustomDataDistRequests")
  public void removeFromCustomDataDistRequests(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateAnalysisDataDist from the DateAnalysisDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateAnalysisDataDists")
  public void removeFromDateAnalysisDataDists(com.guidewire.ab.external.entity.DateAnalysisDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateAnalysisDataDist having id elementID from the DateAnalysisDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateAnalysisDataDists")
  public void removeFromDateAnalysisDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateBinnedDataDist from the DateBinnedDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateBinnedDataDists")
  public void removeFromDateBinnedDataDists(com.guidewire.ab.external.entity.DateBinnedDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateBinnedDataDist having id elementID from the DateBinnedDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateBinnedDataDists")
  public void removeFromDateBinnedDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateSpanDataDist from the DateSpanDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateSpanDataDists")
  public void removeFromDateSpanDataDists(com.guidewire.ab.external.entity.DateSpanDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateSpanDataDist having id elementID from the DateSpanDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateSpanDataDists")
  public void removeFromDateSpanDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ForKeyDataDist from the ForKeyDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromForKeyDataDists")
  public void removeFromForKeyDataDists(com.guidewire.ab.external.entity.ForKeyDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ForKeyDataDist having id elementID from the ForKeyDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromForKeyDataDists")
  public void removeFromForKeyDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GenericGroupDataDist from the GenericGroupDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGenericGroupDataDists")
  public void removeFromGenericGroupDataDists(com.guidewire.ab.external.entity.GenericGroupDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GenericGroupDataDist having id elementID from the GenericGroupDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGenericGroupDataDists")
  public void removeFromGenericGroupDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HourAnalysisDataDist from the HourAnalysisDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHourAnalysisDataDists")
  public void removeFromHourAnalysisDataDists(com.guidewire.ab.external.entity.HourAnalysisDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HourAnalysisDataDist having id elementID from the HourAnalysisDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHourAnalysisDataDists")
  public void removeFromHourAnalysisDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.NullableColumnDataDist from the NullableColumnDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromNullableColumnDataDists")
  public void removeFromNullableColumnDataDists(com.guidewire.ab.external.entity.NullableColumnDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.NullableColumnDataDist having id elementID from the NullableColumnDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromNullableColumnDataDists")
  public void removeFromNullableColumnDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TypeKeyDataDist from the TypeKeyDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTypeKeyDataDists")
  public void removeFromTypeKeyDataDists(com.guidewire.ab.external.entity.TypeKeyDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TypeKeyDataDist having id elementID from the TypeKeyDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTypeKeyDataDists")
  public void removeFromTypeKeyDataDists(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of TableDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TableDataDist.
     */
    public static TableDataDist newInstance()
    {
      return (TableDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TableDataDist.class);
    }
  }

}
