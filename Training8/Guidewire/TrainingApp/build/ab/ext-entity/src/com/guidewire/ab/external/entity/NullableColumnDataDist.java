package com.guidewire.ab.external.entity;

/**
 * Stores row count information for selected nullable columns.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface NullableColumnDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Nullable column name. NOTE: when inserting a NullableColumnDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NullableColName")
  public java.lang.String getNullableColName();

  /**
   * Nullable column name. NOTE: when inserting a NullableColumnDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NullableColName")
  public void setNullableColName(java.lang.String value);


  /**
   * Number of non-null values. NOTE: when inserting a NullableColumnDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonnullValues")
  public java.lang.Long getNumNonnullValues();

  /**
   * Number of non-null values. NOTE: when inserting a NullableColumnDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumNonnullValues")
  public void setNumNonnullValues(java.lang.Long value);


  /**
   * Total number of rows. We have this because column could be on a subtype NOTE: when inserting a NullableColumnDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumValues")
  public java.lang.Long getNumValues();

  /**
   * Total number of rows. We have this because column could be on a subtype NOTE: when inserting a NullableColumnDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumValues")
  public void setNumValues(java.lang.Long value);


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
   * TableDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableDataDist")
  public com.guidewire.ab.external.entity.TableDataDist getTableDataDist();

  /**
   * TableDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableDataDist")
  public void setTableDataDist(com.guidewire.ab.external.entity.TableDataDist value);


  /**
   * Utility class for initializing an instance of NullableColumnDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity NullableColumnDataDist.
     */
    public static NullableColumnDataDist newInstance()
    {
      return (NullableColumnDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(NullableColumnDataDist.class);
    }
  }

}
