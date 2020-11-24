package external.gw.api.database.upgrade;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DropTableAfterUpgradeTrigger extends external.gw.api.database.upgrade.after.AfterUpgradeVersionTrigger, external.gw.api.datamodel.upgrade.IDatamodelChange<external.gw.api.database.upgrade.after.AfterUpgradeVersionTrigger>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchivedDocumentUpgradeVersionTrigger")
  public external.gw.api.archiving.upgrade.ArchivedDocumentUpgradeVersionTrigger getArchivedDocumentUpgradeVersionTrigger();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatabaseUpgradeVersionTrigger")
  public external.gw.api.database.upgrade.after.AfterUpgradeVersionTrigger getDatabaseUpgradeVersionTrigger();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute();


  /**
   * Utility class for initializing an instance of external.gw.api.database.upgrade.DropTableAfterUpgradeTrigger
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param int
     * @param param1 String

     */
    public static DropTableAfterUpgradeTrigger newInstance(int param, java.lang.String param1)
    {
      return (DropTableAfterUpgradeTrigger) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.upgrade.DropTableAfterUpgradeTrigger.class, new Class[]{ int.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }
}
