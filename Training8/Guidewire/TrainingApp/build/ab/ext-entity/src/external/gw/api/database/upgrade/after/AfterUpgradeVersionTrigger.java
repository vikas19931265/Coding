package external.gw.api.database.upgrade.after;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AfterUpgradeVersionTrigger extends external.gw.api.database.upgrade.VersionAction
{

  /**
   * Executes the necessary transformations
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute();
}
