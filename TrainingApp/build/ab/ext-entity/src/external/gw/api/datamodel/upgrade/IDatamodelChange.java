package external.gw.api.datamodel.upgrade;

/**
 * A class containing the work for applying a datamodel change. This is composed of two parts:
1. Database upgrade version trigger,
2. XML upgrade version trigger.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDatamodelChange <D extends external.gw.api.database.upgrade.VersionAction>
{
  /**
   * The archived document version trigger to execute. Null if nothing to do for the archived document upgrade.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchivedDocumentUpgradeVersionTrigger")
  public external.gw.api.archiving.upgrade.ArchivedDocumentUpgradeVersionTrigger getArchivedDocumentUpgradeVersionTrigger();

  /**
   * The database version trigger to execute. Null if nothing to do for database upgrade.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatabaseUpgradeVersionTrigger")
  public D getDatabaseUpgradeVersionTrigger();
}
