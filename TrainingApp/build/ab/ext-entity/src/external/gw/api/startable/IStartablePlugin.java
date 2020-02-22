package external.gw.api.startable;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IStartablePlugin extends gw.plugin.IPlugin
{
  /**
   * the State of this plugin
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public external.gw.api.startable.StartablePluginState getState();


  /**
   * Called during server startup and from the UI. All callback operations should be wrapped by the execute() method
of the given StartablePluginCallbackHandler.
   *
   * @param pluginCallbackHandler Implementation of StartablePluginCallbackHandler that executes as the system user.
   * @param serverStarting true if the request comes from the fact that the server is starting; false if it comes from the UI
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "start")
  public void start(external.gw.api.startable.StartablePluginCallbackHandler pluginCallbackHandler, boolean serverStarting) throws java.lang.Exception;



  /**
   * Called during server shutdown and from the UI
   *
   * @param serverShuttingDown true if the request comes from the fact that the server is shutting down; false if it comes from the UI
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "stop")
  public void stop(boolean serverShuttingDown);

}
