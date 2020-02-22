package com.guidewire.ab.external.entity;

/**
 * Stores custom data distribution request.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CustomDataDistRequest extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Collection of CustomDDColumns linked to this CustomDataDistRequest.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CustomDDColumns")
  public com.guidewire.ab.external.entity.CustomDDColumn[] getCustomDDColumns();

  /**
   * Collection of CustomDDColumns linked to this CustomDataDistRequest.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CustomDDColumns")
  public void setCustomDDColumns(com.guidewire.ab.external.entity.CustomDDColumn[] value);


  /**
   * Collection of CustomDDResults linked to this CustomDataDistRequest.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CustomDDResults")
  public com.guidewire.ab.external.entity.CustomDDResult[] getCustomDDResults();

  /**
   * Collection of CustomDDResults linked to this CustomDataDistRequest.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CustomDDResults")
  public void setCustomDDResults(com.guidewire.ab.external.entity.CustomDDResult[] value);


  /**
   * Description. NOTE: when inserting a CustomDataDistRequest this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a CustomDataDistRequest this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Data distribution type NOTE: when inserting a CustomDataDistRequest this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DistType")
  public com.guidewire.ab.external.typelist.DataDistributionType getDistType();

  /**
   * Data distribution type NOTE: when inserting a CustomDataDistRequest this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DistType")
  public void setDistType(com.guidewire.ab.external.typelist.DataDistributionType value);


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
   * Query. NOTE: when inserting a CustomDataDistRequest this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Query")
  public java.lang.String getQuery();

  /**
   * Query. NOTE: when inserting a CustomDataDistRequest this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Query")
  public void setQuery(java.lang.String value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCustomDDColumns")
  public void addToCustomDDColumns(com.guidewire.ab.external.entity.CustomDDColumn element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCustomDDResults")
  public void addToCustomDDResults(com.guidewire.ab.external.entity.CustomDDResult element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CustomDDColumn from the CustomDDColumns array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCustomDDColumns")
  public void removeFromCustomDDColumns(com.guidewire.ab.external.entity.CustomDDColumn element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CustomDDColumn having id elementID from the CustomDDColumns array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCustomDDColumns")
  public void removeFromCustomDDColumns(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CustomDDResult from the CustomDDResults array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCustomDDResults")
  public void removeFromCustomDDResults(com.guidewire.ab.external.entity.CustomDDResult element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.CustomDDResult having id elementID from the CustomDDResults array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCustomDDResults")
  public void removeFromCustomDDResults(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of CustomDataDistRequest
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity CustomDataDistRequest.
     */
    public static CustomDataDistRequest newInstance()
    {
      return (CustomDataDistRequest) gw.pl.external.entity.EntityFactory.getInstance().newEntity(CustomDataDistRequest.class);
    }
  }

}
