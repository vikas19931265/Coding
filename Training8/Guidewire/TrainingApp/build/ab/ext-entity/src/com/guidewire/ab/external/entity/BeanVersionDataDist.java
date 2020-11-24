package com.guidewire.ab.external.entity;

/**
 * Stores bean version data distributions.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BeanVersionDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Count of # of rows with this bean version. NOTE: when inserting a BeanVersionDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanCount")
  public java.lang.Long getBeanCount();

  /**
   * Count of # of rows with this bean version. NOTE: when inserting a BeanVersionDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BeanCount")
  public void setBeanCount(java.lang.Long value);


  /**
   * Bean version.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();

  /**
   * Bean version.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BeanVersion")
  public void setBeanVersion(java.lang.Integer value);


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
   * Utility class for initializing an instance of BeanVersionDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BeanVersionDataDist.
     */
    public static BeanVersionDataDist newInstance()
    {
      return (BeanVersionDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BeanVersionDataDist.class);
    }
  }

}
