package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArgsStackAggregatedQuerySummary extends external.gw.api.profiler.StackAggregatedQuerySummary
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Args")
  public java.lang.String getArgs();

  /**
   * null
   *
   * @param param QuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeSummary")
  public void mergeSummary(external.gw.api.profiler.QuerySummary param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.ArgsStackAggregatedQuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param QuerySummary

     */
    public static ArgsStackAggregatedQuerySummary newInstance(external.gw.api.profiler.QuerySummary param)
    {
      return (ArgsStackAggregatedQuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.ArgsStackAggregatedQuerySummary.class, new Class[]{ external.gw.api.profiler.QuerySummary.class} , new Object[]{ param});
    }

  }
}
