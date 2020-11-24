package com.guidewire.ab.plugin.messaging;

/**
 * Finder instance supplied to messaging integration code via MessageReply plugin.
Used to look up messages for ack.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageFinder
{

  /**
   * Finds and returns a message from the local database given its ID. Returns
null if no results are found.
   *
   * @return Message with the given ID, or null if none is found.
   * @param messageID 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findById")
  public com.guidewire.ab.external.entity.Message findById(long messageID);



  /**
   * Finds and returns a message from the local database whose
<code>SenderRefID</code> field contains <code>senderRefID</code>. If
multiple matching messages are found, the one with the highest send order
will be returned. Returns null if no results are found.
   *
   * @return Message with the highest send order whose <code>SenderRefID</code> field
contains <code>senderRefID</code>, or null if none is found.
   * @param senderRefID 
   * @deprecated Please use {@link #findBySenderRefID(String, int)} instead as there
can be the same senderRefID for different destinations.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findBySenderRefID")
  public com.guidewire.ab.external.entity.Message findBySenderRefID(java.lang.String senderRefID);



  /**
   * Finds and returns a message from the local database whose
<code>SenderRefID</code> field contains <code>senderRefID</code> and whose
<code>destinationID</code> field contains <code>destinationID</code>. If
multiple matching messages are found, an exception is thrown.
Returns null if no results are found.
   *
   * @return Message whose <code>SenderRefID</code> field
contains <code>senderRefID</code> and whose <code>destinationID</code> field
contains <code>destinationID</code>, or null if none is found.
   * @param senderRefID 
   * @param destinationID Destination of the message.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findBySenderRefID")
  public com.guidewire.ab.external.entity.Message findBySenderRefID(java.lang.String senderRefID, int destinationID) throws java.lang.RuntimeException;



  /**
   * Finds and returns a message from the local database given its ID. Returns
null if no results are found.
   *
   * @return Message History corresponding to the original message id.
   * @param originalMessageId id of the original message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findHistoryByOriginalMessageId")
  public com.guidewire.ab.external.entity.MessageHistory findHistoryByOriginalMessageId(long originalMessageId);



  /**
   * Finds and returns a message history from the local database whose
<code>SenderRefID</code> field contains <code>senderRefID</code>. If
multiple matches are found, the one with the highest send order
will be returned. Returns null if no results are found.
   *
   * @return Message History with the highest send order whose <code>SenderRefID</code> field
contains <code>senderRefID</code>, or null if none is found.
   * @param senderRefID 
   * @param destinationID Destination of the message.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findHistoryBySenderRefID")
  public com.guidewire.ab.external.entity.MessageHistory findHistoryBySenderRefID(java.lang.String senderRefID, int destinationID);

}
