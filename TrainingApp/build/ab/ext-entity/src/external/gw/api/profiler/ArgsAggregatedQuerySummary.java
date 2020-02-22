package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArgsAggregatedQuerySummary extends external.gw.api.profiler.AggregatedQuerySummary
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
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getShortArgs")
  public java.lang.String getShortArgs(int param);

  /**
   * null
   *
   * @param param QuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeSummary")
  public void mergeSummary(external.gw.api.profiler.QuerySummary param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.ArgsAggregatedQuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param QuerySummary

     */
    public static ArgsAggregatedQuerySummary newInstance(external.gw.api.profiler.QuerySummary param)
    {
      return (ArgsAggregatedQuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.ArgsAggregatedQuerySummary.class, new Class[]{ external.gw.api.profiler.QuerySummary.class} , new Object[]{ param});
    }

  }
}
