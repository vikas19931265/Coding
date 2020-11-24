package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerFrameGroup
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FrameCount")
  public int getFrameCount();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MeanElapsedTime")
  public double getMeanElapsedTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MeanFrameTime")
  public double getMeanFrameTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerTag")
  public external.gw.api.profiler.ProfilerTag getProfilerTag();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertiesAndCounters")
  public java.util.Map getPropertiesAndCounters();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StandardDeviationOfElapsedTime")
  public double getStandardDeviationOfElapsedTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StandardDeviationOfFrameTime")
  public double getStandardDeviationOfFrameTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalElapsedTime")
  public int getTotalElapsedTime();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalFrameTime")
  public int getTotalFrameTime();

  /**
   * null
   *
   * @param param ProfilerFrame
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addFrame")
  public void addFrame(external.gw.api.profiler.ProfilerFrame param);

  /**
   * null
   *
   * @param param ProfilerFrame
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addFrame")
  public void addFrame(external.gw.api.profiler.ProfilerFrame param, boolean param1);

  /**
   * null
   *
   * @param param ProfilerFrameGroup
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addFrameGroup")
  public void addFrameGroup(external.gw.api.profiler.ProfilerFrameGroup param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getElapsedTimePercentage")
  public double getElapsedTimePercentage(int param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPropertyValue")
  public java.lang.String getPropertyValue(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasProperty")
  public boolean hasProperty(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeProperty")
  public void removeProperty(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setProperty")
  public void setProperty(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setProperty")
  public void setProperty(java.lang.String param, java.lang.Object param1);

  /**
   * null
   *
   * @param param String
   * @param param1 CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setPropertyValue")
  public void setPropertyValue(java.lang.String param, java.lang.CharSequence param1);

  /**
   * null
   *
   * @param param PrintWriter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "write")
  public void write(java.io.PrintWriter param);


  /**
   * Utility class for accessing static features for external.gw.api.profiler.ProfilerFrameGroup
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * null
     *
     * @param param BufferedReader
     */
    public static java.util.List read(java.io.BufferedReader param) throws gw.pl.external.GenericCheckedException
    {
      return (java.util.List) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.profiler.ProfilerFrameGroup.class, "read", new Class[]{ java.io.BufferedReader.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param BufferedReader
     */
    public static external.gw.api.profiler.ProfilerFrameGroup readOnePFG(java.io.BufferedReader param) throws gw.pl.external.GenericCheckedException
    {
      return (external.gw.api.profiler.ProfilerFrameGroup) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.profiler.ProfilerFrameGroup.class, "readOnePFG", new Class[]{ java.io.BufferedReader.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.profiler.ProfilerFrameGroup
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param ProfilerTag

     */
    public static ProfilerFrameGroup newInstance(external.gw.api.profiler.ProfilerTag param)
    {
      return (ProfilerFrameGroup) gw.pl.external.Invoker.getInstance().construct(external.gw.api.profiler.ProfilerFrameGroup.class, new Class[]{ external.gw.api.profiler.ProfilerTag.class} , new Object[]{ param});
    }

  }
}
