package external.gw.api.profiler;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerDataSource
{
  /**
   * Returns an array of {@link GloballyAggregatedQuerySummary} objects,
one for each distinct query string found in any frame of this
profiler's stacks.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AggregatedQuerySummaries")
  public external.gw.api.profiler.GloballyAggregatedQuerySummary[] getAggregatedQuerySummaries();

  /**
   * User-friendly name
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * For all stacks in this source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerFrameGroupSource")
  public external.gw.api.profiler.ProfilerFrameGroupSource getProfilerFrameGroupSource();

  /**
   * The stacks
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerStacks")
  public external.gw.api.profiler.ProfilerStack[] getProfilerStacks();

  /**
   * Returns an array of {@link StackQuerySummary} objects, one for
each stack containing a query in any frame of this profiler's stacks.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackQuerySummaries")
  public external.gw.api.profiler.StackQuerySummary[] getStackQuerySummaries();

  /**
   * stacks grouped by name
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StacksGroupedByName")
  public external.gw.api.profiler.ProfilerStackGroup[] getStacksGroupedByName();


  /**
   * For the given stack
   *
   * @param stack 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProfilerFrameGroupSource")
  public external.gw.api.profiler.ProfilerFrameGroupSource getProfilerFrameGroupSource(external.gw.api.profiler.ProfilerStack stack);



  /**
   * 
   *
   * @return The {@link GloballyAggregatedQuerySummary} objects with a score
   * @param sql 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getStackQuerySummariesNear")
  public external.gw.api.profiler.GloballyAggregatedQuerySummary[] getStackQuerySummariesNear(java.lang.String sql);

}
