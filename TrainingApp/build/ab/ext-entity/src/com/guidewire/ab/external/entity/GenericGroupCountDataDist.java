package com.guidewire.ab.external.entity;

/**
 * Stores value=group size and the number of groups of that size for the generic group data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GenericGroupCountDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * GenericGroupDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericGroupDataDist")
  public com.guidewire.ab.external.entity.GenericGroupDataDist getGenericGroupDataDist();

  /**
   * GenericGroupDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GenericGroupDataDist")
  public void setGenericGroupDataDist(com.guidewire.ab.external.entity.GenericGroupDataDist value);


  /**
   * Size of the group of duplicate values on this this column group and table. NOTE: when inserting a GenericGroupCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupSize")
  public java.lang.Long getGroupSize();

  /**
   * Size of the group of duplicate values on this this column group and table. NOTE: when inserting a GenericGroupCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupSize")
  public void setGroupSize(java.lang.Long value);


  /**
   * Number of groups for this size for this table. NOTE: when inserting a GenericGroupCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GroupSizeCount")
  public java.lang.Long getGroupSizeCount();

  /**
   * Number of groups for this size for this table. NOTE: when inserting a GenericGroupCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GroupSizeCount")
  public void setGroupSizeCount(java.lang.Long value);


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
   * Utility class for initializing an instance of GenericGroupCountDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GenericGroupCountDataDist.
     */
    public static GenericGroupCountDataDist newInstance()
    {
      return (GenericGroupCountDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GenericGroupCountDataDist.class);
    }
  }

}
