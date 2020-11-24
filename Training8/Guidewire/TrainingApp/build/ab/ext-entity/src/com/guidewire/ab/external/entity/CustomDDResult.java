package com.guidewire.ab.external.entity;

/**
 * Stores results of custom data distribution request.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CustomDDResult extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * 1-based ordering of column of result within CDDR results. NOTE: when inserting a CustomDDResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnOrder")
  public java.lang.Integer getColumnOrder();

  /**
   * 1-based ordering of column of result within CDDR results. NOTE: when inserting a CustomDDResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnOrder")
  public void setColumnOrder(java.lang.Integer value);


  /**
   * CustomDDRColumnName for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CustomDataDistRequest")
  public com.guidewire.ab.external.entity.CustomDataDistRequest getCustomDataDistRequest();

  /**
   * CustomDDRColumnName for this object.
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
   * Result value. NOTE: when inserting a CustomDDResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResultValue")
  public java.lang.String getResultValue();

  /**
   * Result value. NOTE: when inserting a CustomDDResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ResultValue")
  public void setResultValue(java.lang.String value);


  /**
   * 1-based ordering of row of result within CDDR results. NOTE: when inserting a CustomDDResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowOrder")
  public java.lang.Integer getRowOrder();

  /**
   * 1-based ordering of row of result within CDDR results. NOTE: when inserting a CustomDDResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowOrder")
  public void setRowOrder(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of CustomDDResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CustomDDResult.
     */
    public static CustomDDResult newInstance()
    {
      return (CustomDDResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CustomDDResult.class);
    }
  }

}
