package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GloballyAggregatedQuerySummary extends external.gw.api.profiler.AggregatedQuerySummary
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score")
  public double getScore();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score")
  public void setScore(double value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackQuerySummaries")
  public external.gw.api.profiler.StackQuerySummary[] getStackQuerySummaries();

  /**
   * null
   *
   * @param param StackQuerySummary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToStackQuerySummaries")
  public void addToStackQuerySummaries(external.gw.api.profiler.StackQuerySummary param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.GloballyAggregatedQuerySummary
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param AggregatedQuerySummary

     */
    public static GloballyAggregatedQuerySummary newInstance(external.gw.api.profiler.AggregatedQuerySummary param)
    {
      return (GloballyAggregatedQuerySummary) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.GloballyAggregatedQuerySummary.class, new Class[]{ external.gw.api.profiler.AggregatedQuerySummary.class} , new Object[]{ param});
    }

  }
}
