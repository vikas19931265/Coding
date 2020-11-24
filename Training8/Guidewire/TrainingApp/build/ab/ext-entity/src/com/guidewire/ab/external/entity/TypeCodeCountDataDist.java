package com.guidewire.ab.external.entity;

/**
 * Stores typekey type code data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypeCodeCountDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


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
   * Name of type code. NOTE: when inserting a TypeCodeCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeCode")
  public java.lang.String getTypeCode();

  /**
   * Name of type code. NOTE: when inserting a TypeCodeCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeCode")
  public void setTypeCode(java.lang.String value);


  /**
   * Count of type code for this table. NOTE: when inserting a TypeCodeCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeCodeCount")
  public java.lang.Long getTypeCodeCount();

  /**
   * Count of type code for this table. NOTE: when inserting a TypeCodeCountDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeCodeCount")
  public void setTypeCodeCount(java.lang.Long value);


  /**
   * TypeKeyDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeKeyDataDist")
  public com.guidewire.ab.external.entity.TypeKeyDataDist getTypeKeyDataDist();

  /**
   * TypeKeyDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeKeyDataDist")
  public void setTypeKeyDataDist(com.guidewire.ab.external.entity.TypeKeyDataDist value);


  /**
   * Utility class for initializing an instance of TypeCodeCountDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TypeCodeCountDataDist.
     */
    public static TypeCodeCountDataDist newInstance()
    {
      return (TypeCodeCountDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TypeCodeCountDataDist.class);
    }
  }

}
