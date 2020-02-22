package com.guidewire.ab.external.entity;

/**
 * Stores boolean (true/false) data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BooleanColDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Name of boolean column. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BooleanColumnName")
  public java.lang.String getBooleanColumnName();

  /**
   * Name of boolean column. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BooleanColumnName")
  public void setBooleanColumnName(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Count of # of false values. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumFalse")
  public java.lang.Long getNumFalse();

  /**
   * Count of # of false values. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumFalse")
  public void setNumFalse(java.lang.Long value);


  /**
   * Count of # of non null values. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNull")
  public java.lang.Long getNumNonNull();

  /**
   * Count of # of non null values. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumNonNull")
  public void setNumNonNull(java.lang.Long value);


  /**
   * Count of # of true values. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumTrue")
  public java.lang.Long getNumTrue();

  /**
   * Count of # of true values. NOTE: when inserting a BooleanColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumTrue")
  public void setNumTrue(java.lang.Long value);


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
   * Utility class for initializing an instance of BooleanColDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BooleanColDataDist.
     */
    public static BooleanColDataDist newInstance()
    {
      return (BooleanColDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BooleanColDataDist.class);
    }
  }

}
