package external.gw.api.database.upgrade;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CompoundVersionCheck extends external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck
{


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyUpgradability")
  public void verifyUpgradability();


  /**
   * Utility class for initializing an instance of external.gw.api.database.upgrade.CompoundVersionCheck
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param int
     * @param param1 BeforeUpgradeVersionCheck[]

     */
    public static CompoundVersionCheck newInstance(int param, external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck[] param1)
    {
      return (CompoundVersionCheck) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.upgrade.CompoundVersionCheck.class, new Class[]{ int.class, external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck[].class} , new Object[]{ param, param1});
    }

    /**
     * null
     *
     * @param param int
     * @param param1 String
     * @param param2 BeforeUpgradeVersionCheck[]

     */
    public static CompoundVersionCheck newInstance(int param, java.lang.String param1, external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck[] param2)
    {
      return (CompoundVersionCheck) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.upgrade.CompoundVersionCheck.class, new Class[]{ int.class, java.lang.String.class, external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck[].class} , new Object[]{ param, param1, param2});
    }

  }
}
