package com.guidewire.ab.external.entity;

/**
 * Stores the distribution of items by date bins sizes for a given value column, date column pair.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DateBinnedDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Additional value column name (optional)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddlColumnName")
  public java.lang.String getAddlColumnName();

  /**
   * Additional value column name (optional)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddlColumnName")
  public void setAddlColumnName(java.lang.String value);


  /**
   * Data type of primary column in value bins.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DataType")
  public com.guidewire.ab.external.typelist.DateBinDataType getDataType();

  /**
   * Data type of primary column in value bins.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DataType")
  public void setDataType(com.guidewire.ab.external.typelist.DateBinDataType value);


  /**
   * Date column name. NOTE: when inserting a DateBinnedDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateColumnName")
  public java.lang.String getDateColumnName();

  /**
   * Date column name. NOTE: when inserting a DateBinnedDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateColumnName")
  public void setDateColumnName(java.lang.String value);


  /**
   * Description. NOTE: when inserting a DateBinnedDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a DateBinnedDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


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
   * Value of MainColumn and Addlcolumn (these must be bounded)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValueBins")
  public com.guidewire.ab.external.entity.DateBinnedDDValue[] getValueBins();

  /**
   * Value of MainColumn and Addlcolumn (these must be bounded)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValueBins")
  public void setValueBins(com.guidewire.ab.external.entity.DateBinnedDDValue[] value);


  /**
   * Main value column name. NOTE: when inserting a DateBinnedDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValueColumnName")
  public java.lang.String getValueColumnName();

  /**
   * Main value column name. NOTE: when inserting a DateBinnedDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValueColumnName")
  public void setValueColumnName(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToValueBins")
  public void addToValueBins(com.guidewire.ab.external.entity.DateBinnedDDValue element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateBinnedDDValue from the ValueBins array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromValueBins")
  public void removeFromValueBins(com.guidewire.ab.external.entity.DateBinnedDDValue element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DateBinnedDDValue having id elementID from the ValueBins array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromValueBins")
  public void removeFromValueBins(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DateBinnedDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DateBinnedDataDist.
     */
    public static DateBinnedDataDist newInstance()
    {
      return (DateBinnedDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DateBinnedDataDist.class);
    }
  }

}
