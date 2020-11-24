package com.guidewire.ab.plugin.messaging;

/**
 * Reply interface for messaging, used to supply a MessageFinder instance
so that integration code can look up and acknowledge a message.

The PluginCallbackHandler implementation supplied in initTools() is used
to execute a block of code in a Guidewire-initiated transaction.
Typically this will be used in conjunction with the MessageFinder
instance to look up a message and call reportAck() on it.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessageReply extends com.guidewire.pl.plugin.messaging.MessagePlugin
{

  /**
   * Supplies an instance of PluginCallbackHandler and MessageFinder to the plugin.
   *
   * @param handler 
   * @param msgFinder 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "initTools")
  public void initTools(gw.plugin.PluginCallbackHandler handler, com.guidewire.ab.plugin.messaging.MessageFinder msgFinder);

}
