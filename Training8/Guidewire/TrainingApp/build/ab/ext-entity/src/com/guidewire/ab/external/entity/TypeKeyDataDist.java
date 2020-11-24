package com.guidewire.ab.external.entity;

/**
 * Stores type key data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypeKeyDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Count of # of non null values. NOTE: when inserting a TypeKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNull")
  public java.lang.Long getNumNonNull();

  /**
   * Count of # of non null values. NOTE: when inserting a TypeKeyDataDist this field must be non-null.
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
   * Collection of TypeCodeCountDataDists linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeCodeCountDataDists")
  public com.guidewire.ab.external.entity.TypeCodeCountDataDist[] getTypeCodeCountDataDists();

  /**
   * Collection of TypeCodeCountDataDists linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeCodeCountDataDists")
  public void setTypeCodeCountDataDists(com.guidewire.ab.external.entity.TypeCodeCountDataDist[] value);


  /**
   * Name of type key. NOTE: when inserting a TypeKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeKeyName")
  public java.lang.String getTypeKeyName();

  /**
   * Name of type key. NOTE: when inserting a TypeKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeKeyName")
  public void setTypeKeyName(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTypeCodeCountDataDists")
  public void addToTypeCodeCountDataDists(com.guidewire.ab.external.entity.TypeCodeCountDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TypeCodeCountDataDist from the TypeCodeCountDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTypeCodeCountDataDists")
  public void removeFromTypeCodeCountDataDists(com.guidewire.ab.external.entity.TypeCodeCountDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TypeCodeCountDataDist having id elementID from the TypeCodeCountDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTypeCodeCountDataDists")
  public void removeFromTypeCodeCountDataDists(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of TypeKeyDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TypeKeyDataDist.
     */
    public static TypeKeyDataDist newInstance()
    {
      return (TypeKeyDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TypeKeyDataDist.class);
    }
  }

}
