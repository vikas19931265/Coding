package com.guidewire.ab.external.entity;

/**
 * Stores the distribution of value-group sizes for generic column data.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GenericGroupDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Description. NOTE: when inserting a GenericGroupDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a GenericGroupDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Extended description.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtendedDescription")
  public java.lang.String getExtendedDescription();

  /**
   * Extended description.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExtendedDescription")
  public void setExtendedDescription(java.lang.String value);


  /**
   * Collection of GenericGroupColumnNameDataDists linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericGroupColumnNameDataDists")
  public com.guidewire.ab.external.entity.GenericGroupColumnNameDataDist[] getGenericGroupColumnNameDataDists();

  /**
   * Collection of GenericGroupColumnNameDataDists linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GenericGroupColumnNameDataDists")
  public void setGenericGroupColumnNameDataDists(com.guidewire.ab.external.entity.GenericGroupColumnNameDataDist[] value);


  /**
   * Collection of GenericGroupCountDataDists linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GenericGroupCountDataDists")
  public com.guidewire.ab.external.entity.GenericGroupCountDataDist[] getGenericGroupCountDataDists();

  /**
   * Collection of GenericGroupCountDataDists linked to this ArrayDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GenericGroupCountDataDists")
  public void setGenericGroupCountDataDists(com.guidewire.ab.external.entity.GenericGroupCountDataDist[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Optional predicate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OptionalPredicate")
  public java.lang.String getOptionalPredicate();

  /**
   * Optional predicate.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OptionalPredicate")
  public void setOptionalPredicate(java.lang.String value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToGenericGroupColumnNameDataDists")
  public void addToGenericGroupColumnNameDataDists(com.guidewire.ab.external.entity.GenericGroupColumnNameDataDist element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToGenericGroupCountDataDists")
  public void addToGenericGroupCountDataDists(com.guidewire.ab.external.entity.GenericGroupCountDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GenericGroupColumnNameDataDist from the GenericGroupColumnNameDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGenericGroupColumnNameDataDists")
  public void removeFromGenericGroupColumnNameDataDists(com.guidewire.ab.external.entity.GenericGroupColumnNameDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GenericGroupColumnNameDataDist having id elementID from the GenericGroupColumnNameDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGenericGroupColumnNameDataDists")
  public void removeFromGenericGroupColumnNameDataDists(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GenericGroupCountDataDist from the GenericGroupCountDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGenericGroupCountDataDists")
  public void removeFromGenericGroupCountDataDists(com.guidewire.ab.external.entity.GenericGroupCountDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.GenericGroupCountDataDist having id elementID from the GenericGroupCountDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromGenericGroupCountDataDists")
  public void removeFromGenericGroupCountDataDists(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of GenericGroupDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GenericGroupDataDist.
     */
    public static GenericGroupDataDist newInstance()
    {
      return (GenericGroupDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GenericGroupDataDist.class);
    }
  }

}
