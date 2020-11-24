package external.gw.plugin.exception;

/**
 * Handles activities that need to be escalated.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IActivityEscalationPlugin extends gw.plugin.IPlugin
{

  /**
   * Invoked on an activity that needs to be escalated.
   *
   * @param activity 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "escalate")
  public void escalate(com.guidewire.ab.external.entity.Activity activity);

}
