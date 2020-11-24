package com.guidewire.ab.external.entity;

/**
 * Stores bean version data distributions.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BlobColDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Average length of blob values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageLength")
  public java.math.BigDecimal getAverageLength();

  /**
   * Average length of blob values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AverageLength")
  public void setAverageLength(java.math.BigDecimal value);


  /**
   * Blob column name. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BlobColName")
  public java.lang.String getBlobColName();

  /**
   * Blob column name. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BlobColName")
  public void setBlobColName(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Maximum length of blob values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaximumLength")
  public java.lang.Long getMaximumLength();

  /**
   * Maximum length of blob values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaximumLength")
  public void setMaximumLength(java.lang.Long value);


  /**
   * Minimum length of blob values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinimumLength")
  public java.lang.Long getMinimumLength();

  /**
   * Minimum length of blob values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinimumLength")
  public void setMinimumLength(java.lang.Long value);


  /**
   * Count of # of non null values. NOTE: when inserting a BlobColDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumNonNull")
  public java.lang.Long getNumNonNull();

  /**
   * Count of # of non null values. NOTE: when inserting a BlobColDataDist this field must be non-null.
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
   * Utility class for initializing an instance of BlobColDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BlobColDataDist.
     */
    public static BlobColDataDist newInstance()
    {
      return (BlobColDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BlobColDataDist.class);
    }
  }

}
