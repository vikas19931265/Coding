package com.guidewire.ab.external.entity;

/**
 * Stores assignable foreign key data distribution size count pairs.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AssignableForKeySizeCntDD extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * AssignableForKeyDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableForKeyDataDist")
  public com.guidewire.ab.external.entity.AssignableForKeyDataDist getAssignableForKeyDataDist();

  /**
   * AssignableForKeyDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableForKeyDataDist")
  public void setAssignableForKeyDataDist(com.guidewire.ab.external.entity.AssignableForKeyDataDist value);


  /**
   * Count of sets of that size. NOTE: when inserting a AssignableForKeySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DistCount")
  public java.lang.Long getDistCount();

  /**
   * Count of sets of that size. NOTE: when inserting a AssignableForKeySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DistCount")
  public void setDistCount(java.lang.Long value);


  /**
   * Number of foreign keys for one value. NOTE: when inserting a AssignableForKeySizeCntDD this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DistSize")
  public java.lang.Long getDistSize();

  /**
   * Number of foreign keys for one value. NOTE: when inserting a AssignableForKeySizeCntDD this field must be non-null.
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
   * Utility class for initializing an instance of AssignableForKeySizeCntDD
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AssignableForKeySizeCntDD.
     */
    public static AssignableForKeySizeCntDD newInstance()
    {
      return (AssignableForKeySizeCntDD) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AssignableForKeySizeCntDD.class);
    }
  }

}
