package com.guidewire.pl.plugin.messaging;

/**
 * Base interface for all messaging plugins (MessageRequest,
MessageTransport, and MessageReply).  Carries lifecycle
methods used to notify the plugins when they are to be
suspended, resumed, and shutdown.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MessagePlugin extends gw.plugin.IPlugin
{

  /**
   * Called when message sending is about to be resumed AND also when
a destination is started in non-suspended state.  A call to resume()
is guaranteed to precede any message handling calls to the plugin
(e.g. MessageTransport.send()).  The plugin should do any setup
required before handling messages.  If an InitializationException is
thrown from the method, the destination will be suspended (or left
suspended, if previously suspended).  Any other exception will cause
the call to fail and the exception to propagate back to the caller.
If this happens during server startup, the startup will fail.  This
means that an anticipated failure (such as a failure to connect to
a message queue) should be caught and rethrown as an InitializationException.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resume")
  public void resume() throws gw.plugin.messaging.InitializationException;



  /**
   * Called when the plugin is instantiated (before {@link #resume}) to
supply the destination ID. Since a given plugin class may be used by
multiple destinations, this allows each instance to know what
destination it is associated with.  Implementors of this interface will
typically store the destinationID in a member variable of the
implementing class for later use in logging, etc.
   *
   * @param destinationID An int identifying the destination (from destination
configuration specified in config.xml).
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDestinationID")
  public void setDestinationID(int destinationID);



  /**
   * Messaging shut down occurs during server shutdown or if the configuration
is about to be re-read. When message sending is resumed again, the same
instance of the plugin will reused. The existing messaging plugin instance
is *not* destroyed and re-created as part of shutdown.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shutdown")
  public void shutdown();



  /**
   * Called when message sending is about to be suspended.  This occurs
when the user explicitly suspends a destination AND when
an error occurs during {@link #resume}
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "suspend")
  public void suspend();

}
