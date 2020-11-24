package external.gw.util.perf.objectsize;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ObjectSize
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Incomplete")
  public boolean isIncomplete();

  /**
   * null
   *
   * @param param ObjectSize
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public void add(external.gw.util.perf.objectsize.ObjectSize param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "size")
  public long size();


  /**
   * Utility class for accessing static features for external.gw.util.perf.objectsize.ObjectSize
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
     * @param param double
     */
    public static java.lang.String toString(double param)
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.util.perf.objectsize.ObjectSize.class, "toString", new Class[]{ double.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.util.perf.objectsize.ObjectSize
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param long
     * @param param1 boolean

     */
    public static ObjectSize newInstance(long param, boolean param1)
    {
      return (ObjectSize) gw.pl.external.Invoker.getInstance().construct(external.gw.util.perf.objectsize.ObjectSize.class, new Class[]{ long.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
