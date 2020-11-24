package external.gw.api.database.upgrade;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DropColumnIfSafeVersionCheck extends external.gw.api.database.upgrade.before.BeforeUpgradeVersionCheck
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailureMessage")
  public java.lang.String getFailureMessage();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "canDrop")
  public boolean canDrop();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "verifyUpgradability")
  public void verifyUpgradability();


  /**
   * Utility class for initializing an instance of external.gw.api.database.upgrade.DropColumnIfSafeVersionCheck
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param int
     * @param param1 String
     * @param param2 String
     * @param param3 Object

     */
    public static DropColumnIfSafeVersionCheck newInstance(int param, java.lang.String param1, java.lang.String param2, java.lang.Object param3)
    {
      return (DropColumnIfSafeVersionCheck) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.upgrade.DropColumnIfSafeVersionCheck.class, new Class[]{ int.class, java.lang.String.class, java.lang.String.class, java.lang.Object.class} , new Object[]{ param, param1, param2, param3});
    }

  }
}
