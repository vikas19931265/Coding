package external.gw.plugin.exception;

/**
 * Handles exceptions in groups.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGroupExceptionPlugin extends gw.plugin.IPlugin
{

  /**
   * Checks for and handles exceptional groups.
   *
   * @param group 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "process")
  public void process(com.guidewire.ab.external.entity.Group group);

}
