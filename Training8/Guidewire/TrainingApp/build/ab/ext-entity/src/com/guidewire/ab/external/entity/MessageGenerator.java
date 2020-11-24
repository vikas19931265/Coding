package com.guidewire.ab.external.entity;

/**
 * Event-aware entity for generating basic messagrd
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageGenerator extends com.guidewire.ab.external.entity.EventAware, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Should the message generated from this instance be synchronously acknowledged?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AutoAckMessage")
  public java.lang.Boolean isAutoAckMessage();

  /**
   * Should the message generated from this instance be synchronously acknowledged?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AutoAckMessage")
  public void setAutoAckMessage(java.lang.Boolean value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Name of instance that is triggering a message NOTE: when inserting a MessageGenerator this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Name of instance that is triggering a message NOTE: when inserting a MessageGenerator this field must be non-null.
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
   * Should an exception be thrown when processing the message reply?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThrowExceptionInReply")
  public java.lang.Boolean isThrowExceptionInReply();

  /**
   * Should an exception be thrown when processing the message reply?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThrowExceptionInReply")
  public void setThrowExceptionInReply(java.lang.Boolean value);


  /**
   * Should an exception be thrown during the Request plugin's beforeSend() method?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThrowExceptionInRequest")
  public java.lang.Boolean isThrowExceptionInRequest();

  /**
   * Should an exception be thrown during the Request plugin's beforeSend() method?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThrowExceptionInRequest")
  public void setThrowExceptionInRequest(java.lang.Boolean value);


  /**
   * Should an exception be thrown during the Transport plugin's send() method?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThrowExceptionInTransport")
  public java.lang.Boolean isThrowExceptionInTransport();

  /**
   * Should an exception be thrown during the Transport plugin's send() method?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThrowExceptionInTransport")
  public void setThrowExceptionInTransport(java.lang.Boolean value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Utility class for initializing an instance of MessageGenerator
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity MessageGenerator.
     */
    public static MessageGenerator newInstance()
    {
      return (MessageGenerator) gw.pl.external.entity.EntityFactory.getInstance().newEntity(MessageGenerator.class);
    }
  }

}
