package external.gw.api.profiler;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProfilerTagBase extends java.lang.Comparable<external.gw.api.profiler.ProfilerTagBase>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * null
   *
   * @param param ProfilerTagBase
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "compareTo")
  public int compareTo(external.gw.api.profiler.ProfilerTagBase param);


  /**
   * Utility class for accessing static features for external.gw.api.profiler.ProfilerTagBase
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static int getNAME_MAX_LENGTH()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.profiler.ProfilerTagBase.class, "NAME_MAX_LENGTH");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param ProfilerTag
     */
    public static external.gw.api.profiler.ProfilerCategory getProfilerCategory(external.gw.api.profiler.ProfilerTag param)
    {
      return (external.gw.api.profiler.ProfilerCategory) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.profiler.ProfilerTagBase.class, "getProfilerCategory", new Class[]{ external.gw.api.profiler.ProfilerTag.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param String
     */
    public static external.gw.api.profiler.ProfilerTag getProfilerTagFromTagName(java.lang.String param)
    {
      return (external.gw.api.profiler.ProfilerTag) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.profiler.ProfilerTagBase.class, "getProfilerTagFromTagName", new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
