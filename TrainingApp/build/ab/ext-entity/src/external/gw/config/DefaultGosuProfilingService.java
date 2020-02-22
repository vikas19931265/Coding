package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DefaultGosuProfilingService extends external.gw.config.BaseService, external.gw.config.IGosuProfilingService
{

  /**
   * null
   *
   * @param param long
   * @param param1 long
   * @param param2 String
   * @param param3 String
   * @param param4 int
   * @param param5 long
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "completed")
  public void completed(long param, long param1, java.lang.String param2, java.lang.String param3, int param4, long param5);


  /**
   * Utility class for initializing an instance of external.gw.config.DefaultGosuProfilingService
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DefaultGosuProfilingService newInstance()
    {
      return (DefaultGosuProfilingService) gw.pl.external.Invoker.getInstance().construct(external.gw.config.DefaultGosuProfilingService.class, new Class[]{ } , new Object[]{ });
    }

  }
}
