package com.guidewire.ab.external.entity;

/**
 * Stores foreign key data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ForKeyDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Name of foreign key entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForeignKeyEntityName")
  public java.lang.String getForeignKeyEntityName();

  /**
   * Name of foreign key entity
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ForeignKeyEntityName")
  public void setForeignKeyEntityName(java.lang.String value);


  /**
   * Name of foreign key. NOTE: when inserting a ForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForeignKeyName")
  public java.lang.String getForeignKeyName();

  /**
   * Name of foreign key. NOTE: when inserting a ForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ForeignKeyName")
  public void setForeignKeyName(java.lang.String value);


  /**
   * Name of table of foreign key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForeignKeyTableName")
  public java.lang.String getForeignKeyTableName();

  /**
   * Name of table of foreign key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ForeignKeyTableName")
  public void setForeignKeyTableName(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Count of # of non null values. NOTE: when inserting a ForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNull")
  public java.lang.Long getNumNonNull();

  /**
   * Count of # of non null values. NOTE: when inserting a ForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumNonNull")
  public void setNumNonNull(java.lang.Long value);


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
   * Ratio of non-null foreign key values to primary key values. NOTE: when inserting a ForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RatioFKtoPKValues")
  public java.math.BigDecimal getRatioFKtoPKValues();

  /**
   * Ratio of non-null foreign key values to primary key values. NOTE: when inserting a ForKeyDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RatioFKtoPKValues")
  public void setRatioFKtoPKValues(java.math.BigDecimal value);


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
   * Utility class for initializing an instance of ForKeyDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ForKeyDataDist.
     */
    public static ForKeyDataDist newInstance()
    {
      return (ForKeyDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ForKeyDataDist.class);
    }
  }

}
