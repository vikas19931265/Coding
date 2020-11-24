package com.guidewire.ab.external.entity;

/**
 * Stores assignable foreign key data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AssignableForKeyDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Name of assignable foreign key. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableForKeyName")
  public java.lang.String getAssignableForKeyName();

  /**
   * Name of assignable foreign key. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableForKeyName")
  public void setAssignableForKeyName(java.lang.String value);


  /**
   * Collection of AssignableForKeySizeCntDDs linked to this AssignableForKeyDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableForKeySizeCntDDs")
  public com.guidewire.ab.external.entity.AssignableForKeySizeCntDD[] getAssignableForKeySizeCntDDs();

  /**
   * Collection of AssignableForKeySizeCntDDs linked to this AssignableForKeyDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableForKeySizeCntDDs")
  public void setAssignableForKeySizeCntDDs(com.guidewire.ab.external.entity.AssignableForKeySizeCntDD[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Mean size of assignable foreign keys. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MeanSize")
  public java.math.BigDecimal getMeanSize();

  /**
   * Mean size of assignable foreign keys. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MeanSize")
  public void setMeanSize(java.math.BigDecimal value);


  /**
   * Median size of assignable foreign keys. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MedianSize")
  public java.lang.Long getMedianSize();

  /**
   * Median size of assignable foreign keys. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MedianSize")
  public void setMedianSize(java.lang.Long value);


  /**
   * Count of # of non null values. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNull")
  public java.lang.Long getNumNonNull();

  /**
   * Count of # of non null values. NOTE: when inserting a AssignableForKeyDataDist this field must be non-null.
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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToAssignableForKeySizeCntDDs")
  public void addToAssignableForKeySizeCntDDs(com.guidewire.ab.external.entity.AssignableForKeySizeCntDD element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AssignableForKeySizeCntDD from the AssignableForKeySizeCntDDs array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAssignableForKeySizeCntDDs")
  public void removeFromAssignableForKeySizeCntDDs(com.guidewire.ab.external.entity.AssignableForKeySizeCntDD element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.AssignableForKeySizeCntDD having id elementID from the AssignableForKeySizeCntDDs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromAssignableForKeySizeCntDDs")
  public void removeFromAssignableForKeySizeCntDDs(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of AssignableForKeyDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AssignableForKeyDataDist.
     */
    public static AssignableForKeyDataDist newInstance()
    {
      return (AssignableForKeyDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AssignableForKeyDataDist.class);
    }
  }

}
