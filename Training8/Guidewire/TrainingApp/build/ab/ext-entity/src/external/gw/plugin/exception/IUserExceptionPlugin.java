package external.gw.plugin.exception;

/**
 * Handles exceptions in users.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IUserExceptionPlugin extends gw.plugin.IPlugin
{

  /**
   * Checks for and handles exceptional users.
   *
   * @param user 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "process")
  public void process(com.guidewire.ab.external.entity.User user);

}
