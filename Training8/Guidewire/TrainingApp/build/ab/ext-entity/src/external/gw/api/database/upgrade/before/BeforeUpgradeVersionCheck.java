package external.gw.api.database.upgrade.before;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BeforeUpgradeVersionCheck extends external.gw.api.database.upgrade.before.BeforeUpgradeVersionAction
{

  /**
   * Verify that it is safe to proceed with the upgrade.
For example, if we are converting text to varchar during the upgrade, then we want to verify
that no values are too long before we do any of the upgrade steps.
<p/>
Implementor will add an error message for each problem detected to the UpgraderContext via a call to
addVersionCheckProblem(String)
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyUpgradability")
  public void verifyUpgradability();
}
