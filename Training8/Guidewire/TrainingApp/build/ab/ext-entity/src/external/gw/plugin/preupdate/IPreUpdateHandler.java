package external.gw.plugin.preupdate;

/**
 * If this plugin is implemented and enabled, the given implementation will be delegated to to handle
pre-update rules, prior to the default validation-graph based approach.

If the server parameter "UseOldStylePreUpdate" is set to true, the plugin will be run first and
       the default validation-graph based approach will run after the plugin call completes.
If the server parameter "UseOldStylePreUpdate" is set to false, only the plugin will be used and
       the default validation-graph based approach will not be run.

This can be used on its to provide more performant pre-update logic or to provide global
  business logic before entity-type-specific pre-update rules.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPreUpdateHandler extends gw.plugin.IPlugin
{

  /**
   * This method will be called rather than the usual preupdate rules.
   *
   * @param context 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "executePreUpdate")
  public void executePreUpdate(external.gw.api.preupdate.PreUpdateContext context);

}
