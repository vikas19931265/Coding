package external.gw.api.startable;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StartablePluginCallbackHandler
{
  /**
   * get the plugin's persisted state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public external.gw.api.startable.StartablePluginState getState();


  /**
   * Execute a block of code as the super user (su). Any beans created or modified
within the block of code will be committed when the transaction completes.
   *
   * @param block Block of code to execute
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute(gw.pl.util.GWRunnable block) throws gw.pl.external.GenericCheckedException;



  /**
   * Execute a block of code as the given user. Any beans created or modified
within the block of code will be committed when the transaction completes.
   *
   * @param block Block of code to execute
   * @param user The user as whom we want to execute the block
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute(gw.pl.util.GWRunnable block, com.guidewire.ab.external.entity.User user) throws gw.pl.external.GenericCheckedException;



  /**
   * Execute a block of code as the user identified by the given username. Any beans created or modified
within the block of code will be committed when the transaction completes.
   *
   * @param block Block of code to execute
   * @param username The username of the user as whom we want to execute the block
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute(gw.pl.util.GWRunnable block, java.lang.String username) throws gw.pl.external.GenericCheckedException;



  /**
   * get the plugin's persisted state
   *
   * @return persisted state or the default state
   * @param defaultState the state to return if not persisted
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getState")
  public external.gw.api.startable.StartablePluginState getState(external.gw.api.startable.StartablePluginState defaultState);



  /**
   * Writes a message to the logs under the category PLUGIN at the INFO level
   *
   * @param message The message to log
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "log")
  public void log(java.lang.String message);



  /**
   * Logs the start of the plugin under the category PLUGIN at the INFO level
   *
   * @param name The name of the plugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "logStart")
  public void logStart(java.lang.String name);



  /**
   * Logs the stop of the plugin under the category PLUGIN at the INFO level
   *
   * @param name The name of the plugin
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "logStop")
  public void logStop(java.lang.String name);



  /**
   * set the persisted state for this plugin
   *
   * @param bundle this is a database update so a bundle is required
   * @param state the new persisted state
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setState")
  public void setState(external.gw.pl.persistence.core.Bundle bundle, external.gw.api.startable.StartablePluginState state);

}
