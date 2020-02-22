package external.gw.api.database.upgrade.before;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BeforeUpgradeVersionTrigger extends external.gw.api.database.upgrade.before.BeforeUpgradeVersionAction
{

  /**
   * Only called if hasVersionCheck() returns true. In this case, it must return the associated version check.
   *
   * @return The associated version check if hasVersionCheck() returns true.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createVersionCheck")
  public external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck createVersionCheck();

  /**
   * Executes the necessary transformations
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute();

  /**
   * 
   *
   * @return true if this version trigger has an associated version check. Please override createVersionCheck().
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasVersionCheck")
  public boolean hasVersionCheck();
}
