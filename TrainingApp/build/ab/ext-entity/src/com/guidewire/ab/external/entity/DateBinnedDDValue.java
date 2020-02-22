package com.guidewire.ab.external.entity;

/**
 * Stores value bins and date bin array for date binned distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DateBinnedDDValue extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Additional column value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddlValue")
  public java.lang.String getAddlValue();

  /**
   * Additional column value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddlValue")
  public void setAddlValue(java.lang.String value);


  /**
   * TypeKeyDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateBinnedDataDist")
  public com.guidewire.ab.external.entity.DateBinnedDataDist getDateBinnedDataDist();

  /**
   * TypeKeyDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateBinnedDataDist")
  public void setDateBinnedDataDist(com.guidewire.ab.external.entity.DateBinnedDataDist value);


  /**
   * Date bins for this value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateBins")
  public com.guidewire.ab.external.entity.DateBinnedDDDateBin[] getDateBins();

  /**
   * Date bins for this value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateBins")
  public void setDateBins(com.guidewire.ab.external.entity.DateBinnedDDDateBin[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Maximum date and time for this date column and value bin
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaximumDate")
  public java.util.Date getMaximumDate();

  /**
   * Maximum date and time for this date column and value bin
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaximumDate")
  public void setMaximumDate(java.util.Date value);


  /**
   * Minimum date and time for this date column and value bin
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinimumDate")
  public java.util.Date getMinimumDate();

  /**
   * Minimum date and time for this date column and value bin
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinimumDate")
  public void setMinimumDate(java.util.Date value);


  /**
   * Count of items in this value bin with null date NOTE: when inserting a DateBinnedDDValue this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NullValues")
  public java.lang.Long getNullValues();

  /**
   * Count of items in this value bin with null date NOTE: when inserting a DateBinnedDDValue this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NullValues")
  public void setNullValues(java.lang.Long value);


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
   * Main column value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.String getValue();

  /**
   * Main column value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDateBins")
  public void addToDateBins(com.guidewire.ab.external.entity.DateBinnedDDDateBin element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateBinnedDDDateBin from the DateBins array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateBins")
  public void removeFromDateBins(com.guidewire.ab.external.entity.DateBinnedDDDateBin element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateBinnedDDDateBin having id elementID from the DateBins array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDateBins")
  public void removeFromDateBins(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DateBinnedDDValue
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DateBinnedDDValue.
     */
    public static DateBinnedDDValue newInstance()
    {
      return (DateBinnedDDValue) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DateBinnedDDValue.class);
    }
  }

}
