package external.gw.util;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Pair <F, S>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "First")
  public F getFirst();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Second")
  public S getSecond();


  /**
   * Utility class for accessing static features for external.gw.util.Pair
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
     * @param param T
     * @param param1 V
     */
    public static <T, V> external.gw.util.Pair make(T param, V param1)
    {
      return (external.gw.util.Pair) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.util.Pair.class, "make", new Class[]{ java.lang.Object.class, java.lang.Object.class} , new Object[]{ param, param1});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.util.Pair
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param F
     * @param param1 S

     */
    public static <F, S> Pair<F, S> newInstance(F param, S param1)
    {
      return (Pair) gw.pl.external.Invoker.getInstance().construct(external.gw.util.Pair.class, new Class[]{ java.lang.Object.class, java.lang.Object.class} , new Object[]{ param, param1});
    }

  }
}
