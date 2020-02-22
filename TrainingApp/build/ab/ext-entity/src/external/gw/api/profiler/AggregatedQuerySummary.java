package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AggregatedQuerySummary
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArgsAggregatedQuerySummaries")
  public external.gw.api.profiler.ArgsAggregatedQuerySummary[] getArgsAggregatedQuerySummaries();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageRowCount")
  public double getAverageRowCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageTime")
  public double getAverageTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionCount")
  public int getExecutionCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxQueryTime")
  public int getMaxQueryTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumDistinctArgLists")
  public int getNumDistinctArgLists();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PrettyPrintedSQL")
  public java.lang.String getPrettyPrintedSQL();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryFP")
  public external.gw.util.fingerprint.FP64 getQueryFP();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryString")
  public java.lang.String getQueryString();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QuerySummaries")
  public external.gw.api.profiler.QuerySummary[] getQuerySummaries();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackAggregatedQuerySummaries")
  public external.gw.api.profiler.StackAggregatedQuerySummary[] getStackAggregatedQuerySummaries();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalRowCount")
  public int getTotalRowCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalTime")
  public int getTotalTime();

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getShortQueryString")
  public java.lang.String getShortQueryString(int param);

  /**
   * null
   *
   * @param param AggregatedQuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeSummary")
  public void mergeSummary(external.gw.api.profiler.AggregatedQuerySummary param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.AggregatedQuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param ProfilerFrame

     */
    public static AggregatedQuerySummary newInstance(external.gw.api.profiler.ProfilerFrame param)
    {
      return (AggregatedQuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.AggregatedQuerySummary.class, new Class[]{ external.gw.api.profiler.ProfilerFrame.class} , new Object[]{ param});
    }

  }
}
