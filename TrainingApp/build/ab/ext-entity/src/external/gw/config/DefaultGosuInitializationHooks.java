package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DefaultGosuInitializationHooks extends external.gw.config.BaseService, external.gw.config.IGosuInitializationHooks
{

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterTypeLoaderCreation")
  public void afterTypeLoaderCreation();

  /**
   * null
   *
   * @param param Class
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "beforeTypeLoaderCreation")
  public void beforeTypeLoaderCreation(java.lang.Class param);


  /**
   * Utility class for initializing an instance of external.gw.config.DefaultGosuInitializationHooks
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DefaultGosuInitializationHooks newInstance()
    {
      return (DefaultGosuInitializationHooks) gw.pl.external.Invoker.getInstance().construct(external.gw.config.DefaultGosuInitializationHooks.class, new Class[]{ } , new Object[]{ });
    }

  }
}
