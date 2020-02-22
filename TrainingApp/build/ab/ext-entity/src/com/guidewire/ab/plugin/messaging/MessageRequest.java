package com.guidewire.ab.plugin.messaging;

/**
 * Plugin used to provide pre-processing and post-processing opportunities
for message sending.  beforeSend() is called just before the message
is sent; afterSend is called just after.  Any changes made to the
message or other beans will be persisted once the afterSend() method
completes.  Transactions will cause the send to be aborted and
retried until the retry limit is reached.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageRequest extends com.guidewire.pl.plugin.messaging.MessagePlugin
{

  /**
   * Invoked after send() is called on the MessageTransport plugin.
Exceptions will cause the send to be retried until retries are exhausted.
If beforeSend() changes the message status, afterSend() will not be called.
   *
   * @param message the message that was sent.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterSend")
  public void afterSend(com.guidewire.ab.external.entity.Message message) throws java.lang.Exception;



  /**
   * Invoked before send() is called on the MessageTransport plugin.
Any changes made to the MessageObject will be persisted to
the database before MessageTransport.send() is called.
The String returned by beforeSend() will be passed to
MessageTransport.send() as the transformedPayload parameter.
This allows the request plugin to compute a transformed
payload and pass it to the Transport.send() method
without changing the Message.payload field.<p>

Exceptions will cause the message send operation to be
retried until retries are exhausted.
   *
   * @return A transformed payload to be passed to
MessageTransport.send()
   * @param message The message to send
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "beforeSend")
  public java.lang.String beforeSend(com.guidewire.ab.external.entity.Message message) throws java.lang.Exception;

}
