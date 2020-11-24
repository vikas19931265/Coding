package com.guidewire.ab.external.entity;

/**
 * Details for data gen.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DataGenInfoDetail extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DataGenInfo")
  public com.guidewire.ab.external.entity.DataGenInfo getDataGenInfo();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DataGenInfo")
  public void setDataGenInfo(com.guidewire.ab.external.entity.DataGenInfo value);


  /**
   * Line for detailed description.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Line for detailed description.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * display order within parent NOTE: when inserting a DataGenInfoDetail this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayOrder")
  public java.lang.Integer getDisplayOrder();

  /**
   * display order within parent NOTE: when inserting a DataGenInfoDetail this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DisplayOrder")
  public void setDisplayOrder(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * # of tabs for readability NOTE: when inserting a DataGenInfoDetail this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumIndents")
  public java.lang.Integer getNumIndents();

  /**
   * # of tabs for readability NOTE: when inserting a DataGenInfoDetail this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumIndents")
  public void setNumIndents(java.lang.Integer value);


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
   * Utility class for initializing an instance of DataGenInfoDetail
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DataGenInfoDetail.
     */
    public static DataGenInfoDetail newInstance()
    {
      return (DataGenInfoDetail) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DataGenInfoDetail.class);
    }
  }

}
