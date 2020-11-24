package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StackQuerySummary
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AggregatedQuerySummaries")
  public external.gw.api.profiler.AggregatedQuerySummary[] getAggregatedQuerySummaries();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageQueryTime")
  public double getAverageQueryTime();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxQueryTime")
  public int getMaxQueryTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueriesPerStack")
  public int getQueriesPerStack();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryCount")
  public int getQueryCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackCount")
  public int getStackCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackName")
  public java.lang.String getStackName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalQueryTime")
  public int getTotalQueryTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalRowCount")
  public int getTotalRowCount();

  /**
   * null
   *
   * @param param AggregatedQuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeSummary")
  public void mergeSummary(external.gw.api.profiler.AggregatedQuerySummary param);

  /**
   * null
   *
   * @param param StackQuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeSummary")
  public void mergeSummary(external.gw.api.profiler.StackQuerySummary param);

  /**
   * null
   *
   * @param param ProfilerFrame
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "processFrame")
  public void processFrame(external.gw.api.profiler.ProfilerFrame param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.StackQuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static StackQuerySummary newInstance(java.lang.String param)
    {
      return (StackQuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.StackQuerySummary.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
