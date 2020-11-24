package com.guidewire.ab.external.entity;

/**
 * Stores ordered column names for custom data distribution request.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CustomDDColumn extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Column name. NOTE: when inserting a CustomDDColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnName")
  public java.lang.String getColumnName();

  /**
   * Column name. NOTE: when inserting a CustomDDColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnName")
  public void setColumnName(java.lang.String value);


  /**
   * 1-based ordering of columnname with CDDR. NOTE: when inserting a CustomDDColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnOrder")
  public java.lang.Integer getColumnOrder();

  /**
   * 1-based ordering of columnname with CDDR. NOTE: when inserting a CustomDDColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnOrder")
  public void setColumnOrder(java.lang.Integer value);


  /**
   * CustomDataDistRequest for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CustomDataDistRequest")
  public com.guidewire.ab.external.entity.CustomDataDistRequest getCustomDataDistRequest();

  /**
   * CustomDataDistRequest for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CustomDataDistRequest")
  public void setCustomDataDistRequest(com.guidewire.ab.external.entity.CustomDataDistRequest value);


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
   * Return type class name. NOTE: when inserting a CustomDDColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnTypeClassName")
  public java.lang.String getReturnTypeClassName();

  /**
   * Return type class name. NOTE: when inserting a CustomDDColumn this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReturnTypeClassName")
  public void setReturnTypeClassName(java.lang.String value);


  /**
   * Utility class for initializing an instance of CustomDDColumn
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CustomDDColumn.
     */
    public static CustomDDColumn newInstance()
    {
      return (CustomDDColumn) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CustomDDColumn.class);
    }
  }

}
