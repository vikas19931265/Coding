package com.guidewire.ab.external.entity;

/**
 * Stores a database storage set snapshot.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeDBStorageSet extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * True is set created after the process, false if before
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AfterUpgrade")
  public java.lang.Boolean isAfterUpgrade();

  /**
   * True is set created after the process, false if before
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AfterUpgrade")
  public void setAfterUpgrade(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Name of storage set. NOTE: when inserting a UpgradeDBStorageSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Name of storage set. NOTE: when inserting a UpgradeDBStorageSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * Time storage set taken. NOTE: when inserting a UpgradeDBStorageSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TimeTaken")
  public java.util.Date getTimeTaken();

  /**
   * Time storage set taken. NOTE: when inserting a UpgradeDBStorageSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TimeTaken")
  public void setTimeTaken(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeDBStorageSetColumns")
  public com.guidewire.ab.external.entity.UpgradeDBStorageSetColumn[] getUpgradeDBStorageSetColumns();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeDBStorageSetColumns")
  public void setUpgradeDBStorageSetColumns(com.guidewire.ab.external.entity.UpgradeDBStorageSetColumn[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeDBStorageSetResults")
  public com.guidewire.ab.external.entity.UpgradeDBStorageSetResult[] getUpgradeDBStorageSetResults();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeDBStorageSetResults")
  public void setUpgradeDBStorageSetResults(com.guidewire.ab.external.entity.UpgradeDBStorageSetResult[] value);


  /**
   * Database storage set type NOTE: when inserting a UpgradeDBStorageSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeDBStorageSetType")
  public com.guidewire.ab.external.typelist.UpgradeDBStorageSetType getUpgradeDBStorageSetType();

  /**
   * Database storage set type NOTE: when inserting a UpgradeDBStorageSet this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeDBStorageSetType")
  public void setUpgradeDBStorageSetType(com.guidewire.ab.external.typelist.UpgradeDBStorageSetType value);


  /**
   * Upgrade instance for this object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeInstance")
  public com.guidewire.ab.external.entity.UpgradeInstance getUpgradeInstance();

  /**
   * Upgrade instance for this object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeInstance")
  public void setUpgradeInstance(com.guidewire.ab.external.entity.UpgradeInstance value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpgradeDBStorageSetColumns")
  public void addToUpgradeDBStorageSetColumns(com.guidewire.ab.external.entity.UpgradeDBStorageSetColumn element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpgradeDBStorageSetResults")
  public void addToUpgradeDBStorageSetResults(com.guidewire.ab.external.entity.UpgradeDBStorageSetResult element);

  /**
   * Delete all children of this.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "deleteAllChildren")
  public void deleteAllChildren();

  /**
   * Returns all UpgradeDBStorageSetColumn beans for this UpgradeDBStorageSet
   *
   * @return QueryProcessor of type UpgradeDBStorageSetColumn
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findUpgradeDBStorageSetColumns")
  public external.gw.api.database.IQueryBeanResult findUpgradeDBStorageSetColumns();

  /**
   * Returns all UpgradeDBStorageSetResult beans for this UpgradeDBStorageSet
   *
   * @return QueryProcessor of type UpgradeDBStorageSetResult
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findUpgradeDBStorageSetResults")
  public external.gw.api.database.IQueryBeanResult findUpgradeDBStorageSetResults();

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeDBStorageSetColumn from the UpgradeDBStorageSetColumns array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeDBStorageSetColumns")
  public void removeFromUpgradeDBStorageSetColumns(com.guidewire.ab.external.entity.UpgradeDBStorageSetColumn element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeDBStorageSetColumn having id elementID from the UpgradeDBStorageSetColumns array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeDBStorageSetColumns")
  public void removeFromUpgradeDBStorageSetColumns(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeDBStorageSetResult from the UpgradeDBStorageSetResults array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeDBStorageSetResults")
  public void removeFromUpgradeDBStorageSetResults(com.guidewire.ab.external.entity.UpgradeDBStorageSetResult element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeDBStorageSetResult having id elementID from the UpgradeDBStorageSetResults array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeDBStorageSetResults")
  public void removeFromUpgradeDBStorageSetResults(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of UpgradeDBStorageSet
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeDBStorageSet.
     */
    public static UpgradeDBStorageSet newInstance()
    {
      return (UpgradeDBStorageSet) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeDBStorageSet.class);
    }
  }

}
