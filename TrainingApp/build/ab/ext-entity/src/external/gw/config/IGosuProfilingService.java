package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuProfilingService extends external.gw.config.IService
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

}
