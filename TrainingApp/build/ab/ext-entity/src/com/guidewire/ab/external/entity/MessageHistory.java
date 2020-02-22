package com.guidewire.ab.external.entity;

/**
 * Completed messages.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageHistory extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Associated ABContact, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();


  /**
   * Custom field that may be defined when acknowledging.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be defined when acknowledging.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AckCode")
  public java.lang.String getAckCode();

  /**
   * Custom field that may be defined when acknowledging.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be defined when acknowledging.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AckCode")
  public void setAckCode(java.lang.String value);


  /**
   * Number of acks received. NOTE: when inserting a MessageHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AckCount")
  public java.lang.Integer getAckCount();


  /**
   * Time of ack.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AckedTime")
  public java.util.Date getAckedTime();


  /**
   * Time of completion of afterSend method.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AfterSendTime")
  public java.util.Date getAfterSendTime();


  /**
   * Time of attempting to get lock before the call to beforeSend transformations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeforeSendLockTime")
  public java.util.Date getBeforeSendLockTime();


  /**
   * Time of after acquired lock before the call to beforeSend transformations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeforeSendLockedTime")
  public java.util.Date getBeforeSendLockedTime();


  /**
   * Time of completion of beforeSend transformations.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeforeSendTime")
  public java.util.Date getBeforeSendTime();


  /**
   * Time of creating the message. NOTE: when inserting a MessageHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreationTime")
  public java.util.Date getCreationTime();


  /**
   * Short description of the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Short description of the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Identifies the message destination to send this message to. NOTE: when inserting a MessageHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DestinationID")
  public java.lang.Integer getDestinationID();


  /**
   * Number of duplicate errors received.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DuplicateCount")
  public java.lang.Integer getDuplicateCount();


  /**
   * Type of error if the message is in error.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorCategory")
  public com.guidewire.ab.external.typelist.ErrorCategory getErrorCategory();


  /**
   * Detailed description of error condition (set in the message destination).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorDescription")
  public java.lang.String getErrorDescription();

  /**
   * Detailed description of error condition (set in the message destination).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ErrorDescription")
  public void setErrorDescription(java.lang.String value);


  /**
   * Name of the event. NOTE: when inserting a MessageHistory this field must be non-null.
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
   * Whether the payload contains late-bound fields.  This field is obsolete and no longer set/used.
   * @deprecated Whether the payload contains late-bound fields.  This field is obsolete and no longer set/used.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LateBound")
  public java.lang.Boolean isLateBound();

  /**
   * Whether the payload contains late-bound fields.  This field is obsolete and no longer set/used.
   * @deprecated Whether the payload contains late-bound fields.  This field is obsolete and no longer set/used.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LateBound")
  public void setLateBound(java.lang.Boolean value);


  /**
   * Custom field that may be defined during message creation.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be defined during message creation.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MessageCode")
  public java.lang.String getMessageCode();

  /**
   * Custom field that may be defined during message creation.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be defined during message creation.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MessageCode")
  public void setMessageCode(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MessageRoot")
  public gw.pl.external.entity.KeyableEntity getMessageRoot();


  /**
   * Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OptionalInt")
  public java.lang.Integer getOptionalInt();

  /**
   * Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OptionalInt")
  public void setOptionalInt(java.lang.Integer value);


  /**
   * Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OptionalMoney")
  public java.math.BigDecimal getOptionalMoney();

  /**
   * Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OptionalMoney")
  public void setOptionalMoney(java.math.BigDecimal value);


  /**
   * Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OptionalString")
  public java.lang.String getOptionalString();

  /**
   * Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   * @deprecated Custom field that may be set at message creation time.  This field is deprecated, please define a new custom extension field instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OptionalString")
  public void setOptionalString(java.lang.String value);


  /**
   * Identifies the id of the original message. NOTE: when inserting a MessageHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrigMsgId")
  public java.lang.Long getOrigMsgId();


  /**
   * Contents of the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Payload")
  public java.lang.String getPayload();

  /**
   * Contents of the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Payload")
  public void setPayload(java.lang.String value);


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
   * Time of of query selecting message to be processed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryTime")
  public java.util.Date getQueryTime();


  /**
   * Number of times message has been retried.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RetryCount")
  public java.lang.Integer getRetryCount();


  /**
   * Time in the future at which to retry the message in error, applicable only to retryable error messages.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RetryTime")
  public java.util.Date getRetryTime();


  /**
   * Time of attempting to lock before the sending the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SendLockTime")
  public java.util.Date getSendLockTime();


  /**
   * Time of after acquired lock lock before the sending the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SendLockedTime")
  public java.util.Date getSendLockedTime();


  /**
   * Order in which to send messages. NOTE: when inserting a MessageHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SendOrder")
  public java.lang.Integer getSendOrder();


  /**
   * Time of completion of sending the message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SendTime")
  public java.util.Date getSendTime();


  /**
   * Optional sender reference set at message send time.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SenderRefID")
  public java.lang.String getSenderRefID();

  /**
   * Optional sender reference set at message send time.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SenderRefID")
  public void setSenderRefID(java.lang.String value);


  /**
   * Message status: 10-Acked; 11-Error cleared; 12-Error retried; 13-Skipped NOTE: when inserting a MessageHistory this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public java.lang.Integer getStatus();


  /**
   * The user who created this message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "User")
  public com.guidewire.ab.external.entity.User getUser();

  /**
   * The user who created this message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "User")
  public void setUser(com.guidewire.ab.external.entity.User value);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reportDuplicate")
  public void reportDuplicate();


  /**
   * Utility class for initializing an instance of MessageHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity MessageHistory.
     */
    public static MessageHistory newInstance()
    {
      return (MessageHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(MessageHistory.class);
    }
  }

}
