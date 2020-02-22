package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerStackGroup
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AverageElapsed")
  public int getAverageElapsed();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElapsedTimes")
  public java.lang.Integer[] getElapsedTimes();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxElapsed")
  public int getMaxElapsed();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinElapsed")
  public int getMinElapsed();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalElapsed")
  public int getTotalElapsed();

  /**
   * null
   *
   * @param param ProfilerStack
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "processStack")
  public void processStack(external.gw.api.profiler.ProfilerStack param);


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.ProfilerStackGroup
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ProfilerStackGroup newInstance()
    {
      return (ProfilerStackGroup) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.ProfilerStackGroup.class, new Class[]{ } , new Object[]{ });
    }

  }
}
