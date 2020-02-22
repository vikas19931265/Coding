package com.guidewire.ab.external.entity;

/**
 * Provides convenience methods for creating integration messages.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageContext extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Gets the current user.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentUser")
  public com.guidewire.ab.external.entity.User getCurrentUser();


  /**
   * Returns the ID of the destination to which any messages created
will be sent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DestID")
  public int getDestID();


  /**
   * Gets the event name of this event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EventName")
  public java.lang.String getEventName();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Gets the array of pending messages.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PendingMessages")
  public com.guidewire.ab.external.entity.Message[] getPendingMessages();


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
   * Gets the root object of this event, namely, the object that generated
the event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Root")
  public java.lang.Object getRoot();

  /**
   * null
   *
   * @param param Message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createMessage")
  public com.guidewire.ab.external.entity.Message createMessage(com.guidewire.ab.external.entity.Message param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createMessage")
  public com.guidewire.ab.external.entity.Message createMessage(java.lang.String param);


  /**
   * Utility class for initializing an instance of MessageContext
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity MessageContext.
     */
    public static MessageContext newInstance()
    {
      return (MessageContext) gw.pl.external.entity.EntityFactory.getInstance().newEntity(MessageContext.class);
    }
  }

}
