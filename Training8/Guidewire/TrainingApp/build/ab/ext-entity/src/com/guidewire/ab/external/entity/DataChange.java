package com.guidewire.ab.external.entity;

/**
 * The change to production data.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DataChange extends com.guidewire.ab.external.entity.EventAware, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Date the gosu was added.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateDate")
  public java.util.Date getCreateDate();

  /**
   * Date the gosu was added.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CreateDate")
  public void setCreateDate(java.util.Date value);


  /**
   * The user who created the gosu.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();

  /**
   * The user who created the gosu.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CreateUser")
  public void setCreateUser(com.guidewire.ab.external.entity.User value);


  /**
   * Description of the change requested.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the change requested.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * The time the gosu was executed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecuteDate")
  public java.util.Date getExecuteDate();

  /**
   * The time the gosu was executed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecuteDate")
  public void setExecuteDate(java.util.Date value);


  /**
   * The user who executed the gosu.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecuteUser")
  public com.guidewire.ab.external.entity.User getExecuteUser();

  /**
   * The user who executed the gosu.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecuteUser")
  public void setExecuteUser(com.guidewire.ab.external.entity.User value);


  /**
   * An external reference for tracking change requests.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalReference")
  public java.lang.String getExternalReference();

  /**
   * An external reference for tracking change requests.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalReference")
  public void setExternalReference(java.lang.String value);


  /**
   * The gosu to execute.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Gosu")
  public java.lang.String getGosu();

  /**
   * The gosu to execute.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Gosu")
  public void setGosu(java.lang.String value);


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
   * The result of executing the gosu.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Result")
  public java.lang.String getResult();

  /**
   * The result of executing the gosu.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Result")
  public void setResult(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.DataChangeStatus getStatus();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.DataChangeStatus value);

  /**
   * This will run a new transaction and discard this DataChange immediately.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "discardImmediate")
  public void discardImmediate();

  /**
   * This will spawn a new thread and execute the gosu.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute();


  /**
   * Utility class for initializing an instance of DataChange
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DataChange.
     */
    public static DataChange newInstance()
    {
      return (DataChange) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DataChange.class);
    }
  }

}
