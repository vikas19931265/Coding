package com.guidewire.ab.plugin.messaging;

/**
 * Plugin interface implemented to dispatch an integration message to
an external system.  Used in conjunction with MessageRequest (for
message pre- and post-processing) and MessageReply (for asynchronous
message lookup and ack).
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageTransport extends com.guidewire.pl.plugin.messaging.MessagePlugin
{

  /**
   * Send the message.  The plugin may optionally ack the message
and update any fields; changes to the message and any other
modified beans will be persisted
after the send method completes (and after the MessageRequest
plugin has completed work in its afterSend() method).
The transformedPayload parameter is set to the String
returned from the Request plugin's beforeSend() method.
By default, if no Request plugin is defined for the destination,
the transformedPayload is set to be equal to the
original Message payload.  If the beforeSend() in the MessageRequest plugin
changes the message status, the send() method will not be called.<p> 

Exceptions will cause the send operation (including
another call to Request.beforeSend()) to be retried
until retries are exhausted.
   *
   * @param message The message to send
   * @param transformedPayload 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "send")
  public void send(com.guidewire.ab.external.entity.Message message, java.lang.String transformedPayload) throws java.lang.Exception;

}
