package external.gw.api.database.upgrade;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DropTableIfEmptyVersionTrigger extends external.gw.api.database.upgrade.before.BeforeUpgradeVersionTrigger, external.gw.api.datamodel.upgrade.IDatamodelChange<external.gw.api.database.upgrade.before.BeforeUpgradeVersionTrigger>
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
  public external.gw.api.database.upgrade.before.BeforeUpgradeVersionTrigger getDatabaseUpgradeVersionTrigger();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createVersionCheck")
  public external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck createVersionCheck();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public void execute();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasVersionCheck")
  public boolean hasVersionCheck();


  /**
   * Utility class for initializing an instance of external.gw.api.database.upgrade.DropTableIfEmptyVersionTrigger
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param int
     * @param param1 String

     */
    public static DropTableIfEmptyVersionTrigger newInstance(int param, java.lang.String param1)
    {
      return (DropTableIfEmptyVersionTrigger) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.upgrade.DropTableIfEmptyVersionTrigger.class, new Class[]{ int.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }
}
