package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StackAggregatedQuerySummary extends external.gw.api.profiler.AggregatedQuerySummary
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArgsStackAggregatedQuerySummaries")
  public external.gw.api.profiler.ArgsStackAggregatedQuerySummary[] getArgsStackAggregatedQuerySummaries();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FilteredStackTrace")
  public java.lang.String getFilteredStackTrace();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullStackTrace")
  public java.lang.String getFullStackTrace();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumDistinctArgLists")
  public int getNumDistinctArgLists();

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDomainStackTrace")
  public java.lang.String getDomainStackTrace(int param);

  /**
   * null
   *
   * @param param QuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeSummary")
  public void mergeSummary(external.gw.api.profiler.QuerySummary param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.StackAggregatedQuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param QuerySummary

     */
    public static StackAggregatedQuerySummary newInstance(external.gw.api.profiler.QuerySummary param)
    {
      return (StackAggregatedQuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.StackAggregatedQuerySummary.class, new Class[]{ external.gw.api.profiler.QuerySummary.class} , new Object[]{ param});
    }

  }
}
