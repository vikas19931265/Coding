package com.guidewire.ab.external.entity;

/**
 * Stores metadata for database generation info.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DataGenInfo extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * the action type this data-gen performed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Action")
  public com.guidewire.ab.external.typelist.DataGenActionType getAction();

  /**
   * the action type this data-gen performed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Action")
  public void setAction(com.guidewire.ab.external.typelist.DataGenActionType value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BuildVersion")
  public java.lang.String getBuildVersion();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BuildVersion")
  public void setBuildVersion(java.lang.String value);


  /**
   * Info logged by the generation process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Info logged by the generation process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Detailed description.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Details")
  public com.guidewire.ab.external.entity.DataGenInfoDetail[] getDetails();

  /**
   * Detailed description.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Details")
  public void setDetails(com.guidewire.ab.external.entity.DataGenInfoDetail[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Time this generation happened. NOTE: when inserting a DataGenInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PerformDate")
  public java.util.Date getPerformDate();

  /**
   * Time this generation happened. NOTE: when inserting a DataGenInfo this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PerformDate")
  public void setPerformDate(java.util.Date value);


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.DataGenStatusType getStatus();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.DataGenStatusType value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDetails")
  public void addToDetails(com.guidewire.ab.external.entity.DataGenInfoDetail element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DataGenInfoDetail from the Details array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDetails")
  public void removeFromDetails(com.guidewire.ab.external.entity.DataGenInfoDetail element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DataGenInfoDetail having id elementID from the Details array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDetails")
  public void removeFromDetails(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DataGenInfo
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DataGenInfo.
     */
    public static DataGenInfo newInstance()
    {
      return (DataGenInfo) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DataGenInfo.class);
    }
  }

}
