package com.guidewire.ab.external.entity;

/**
 * Stores array data distribution size count pairs.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArraySizeCntDD extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * ArrayDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayDataDist")
  public com.guidewire.ab.external.entity.ArrayDataDist getArrayDataDist();

  /**
   * ArrayDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArrayDataDist")
  public void setArrayDataDist(com.guidewire.ab.external.entity.ArrayDataDist value);


  /**
   * Count of arrays  of that size. NOTE: when inserting a ArraySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DistCount")
  public java.lang.Long getDistCount();

  /**
   * Count of arrays  of that size. NOTE: when inserting a ArraySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DistCount")
  public void setDistCount(java.lang.Long value);


  /**
   * Size of array. NOTE: when inserting a ArraySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DistSize")
  public java.lang.Long getDistSize();

  /**
   * Size of array. NOTE: when inserting a ArraySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DistSize")
  public void setDistSize(java.lang.Long value);


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
   * Utility class for initializing an instance of ArraySizeCntDD
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ArraySizeCntDD.
     */
    public static ArraySizeCntDD newInstance()
    {
      return (ArraySizeCntDD) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ArraySizeCntDD.class);
    }
  }

}
