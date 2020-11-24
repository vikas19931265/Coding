package external.gw.api.profiler;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerStack
{
  /**
   * The entry point frame.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntryPointFrame")
  public external.gw.api.profiler.ProfilerFrame getEntryPointFrame();

  /**
   * The entry point name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntryPointName")
  public java.lang.String getEntryPointName();

  /**
   * Returns the number of frames in this stack
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FrameCount")
  public int getFrameCount();

  /**
   * Returns a list of ProfilerStacks for each of the threads spawned by the thread associated with this stack.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpawnedStacks")
  public java.util.Set getSpawnedStacks();

  /**
   * Returns PCF location information in the form "from -> to"
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StackName")
  public java.lang.String getStackName();

  /**
   * Returns the time when the stack started
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public long getStartTime();

  /**
   * Returns the difference between the time when the top frame was pushed and when it was popped.  If the top frame
hasn't been popped, or if the stack is empty, returns -1.
This is the same as the elapsed time of the entry point frame.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalElapsedTime")
  public int getTotalElapsedTime();


  /**
   * Returns PCF location information in the form "from -> to"
   *
   * @param profilerDataSource 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDbmsReport")
  public external.gw.api.profiler.DbmsReportZipProvider getDbmsReport(external.gw.api.profiler.ProfilerDataSource profilerDataSource);

}
