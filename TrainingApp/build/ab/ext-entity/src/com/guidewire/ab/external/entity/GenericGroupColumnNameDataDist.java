package com.guidewire.ab.external.entity;

/**
 * Stores column names for the generic value-group data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GenericGroupColumnNameDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Name of column. NOTE: when inserting a GenericGroupColumnNameDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnName")
  public java.lang.String getColumnName();

  /**
   * Name of column. NOTE: when inserting a GenericGroupColumnNameDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnName")
  public void setColumnName(java.lang.String value);


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
   * Utility class for initializing an instance of GenericGroupColumnNameDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GenericGroupColumnNameDataDist.
     */
    public static GenericGroupColumnNameDataDist newInstance()
    {
      return (GenericGroupColumnNameDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GenericGroupColumnNameDataDist.class);
    }
  }

}
