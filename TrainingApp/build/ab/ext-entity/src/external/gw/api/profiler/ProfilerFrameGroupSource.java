package external.gw.api.profiler;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerFrameGroupSource
{
  /**
   * Number of frames grouped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FrameCount")
  public int getFrameCount();

  /**
   * ProfilerFrameGroups
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FrameGroups")
  public external.gw.api.profiler.ProfilerFrameGroup[] getFrameGroups();

  /**
   * Number of stacks counted in this source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackCount")
  public int getStackCount();

  /**
   * Total elapsed time
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalElapsedTime")
  public int getTotalElapsedTime();


  /**
   * 
   *
   * @return Whether to show in the properties and counters in the UI
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shouldShowPropertiesAndCounters")
  public boolean shouldShowPropertiesAndCounters();

}
