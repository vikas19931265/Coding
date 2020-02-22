package external.gw.api.archiving.upgrade;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArchivedDocumentUpgradeVersionTrigger extends external.gw.api.database.upgrade.VersionAction
{

  /**
   * Perform the transformation
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute();
}
