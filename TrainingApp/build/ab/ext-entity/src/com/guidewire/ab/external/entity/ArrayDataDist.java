package com.guidewire.ab.external.entity;

/**
 * Stores array data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArrayDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Entity associated with array
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayEntityName")
  public java.lang.String getArrayEntityName();

  /**
   * Entity associated with array
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArrayEntityName")
  public void setArrayEntityName(java.lang.String value);


  /**
   * Table for array entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayEntityTableName")
  public java.lang.String getArrayEntityTableName();

  /**
   * Table for array entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArrayEntityTableName")
  public void setArrayEntityTableName(java.lang.String value);


  /**
   * Name of array. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayName")
  public java.lang.String getArrayName();

  /**
   * Name of array. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArrayName")
  public void setArrayName(java.lang.String value);


  /**
   * Collection of ArraySizeCntDDs linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArraySizeCntDDs")
  public com.guidewire.ab.external.entity.ArraySizeCntDD[] getArraySizeCntDDs();

  /**
   * Collection of ArraySizeCntDDs linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArraySizeCntDDs")
  public void setArraySizeCntDDs(com.guidewire.ab.external.entity.ArraySizeCntDD[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Maximum array size. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxSize")
  public java.lang.Long getMaxSize();

  /**
   * Maximum array size. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxSize")
  public void setMaxSize(java.lang.Long value);


  /**
   * Mean size of arrays. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MeanSize")
  public java.math.BigDecimal getMeanSize();

  /**
   * Mean size of arrays. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MeanSize")
  public void setMeanSize(java.math.BigDecimal value);


  /**
   * Median size of arrays. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MedianSize")
  public java.lang.Long getMedianSize();

  /**
   * Median size of arrays. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MedianSize")
  public void setMedianSize(java.lang.Long value);


  /**
   * Minimum array size. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinSize")
  public java.lang.Long getMinSize();

  /**
   * Minimum array size. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinSize")
  public void setMinSize(java.lang.Long value);


  /**
   * Count of # of non null values. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNull")
  public java.lang.Long getNumNonNull();

  /**
   * Count of # of non null values. NOTE: when inserting a ArrayDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumNonNull")
  public void setNumNonNull(java.lang.Long value);


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
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToArraySizeCntDDs")
  public void addToArraySizeCntDDs(com.guidewire.ab.external.entity.ArraySizeCntDD element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ArraySizeCntDD from the ArraySizeCntDDs array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromArraySizeCntDDs")
  public void removeFromArraySizeCntDDs(com.guidewire.ab.external.entity.ArraySizeCntDD element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ArraySizeCntDD having id elementID from the ArraySizeCntDDs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromArraySizeCntDDs")
  public void removeFromArraySizeCntDDs(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ArrayDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ArrayDataDist.
     */
    public static ArrayDataDist newInstance()
    {
      return (ArrayDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ArrayDataDist.class);
    }
  }

}
