package external.gw.api.activity;

/**
 * Class description...
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BusCalType extends java.lang.Comparable
{


  /**
   * Utility class for accessing static features for external.gw.api.activity.BusCalType
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * Creates a List with all existing holiday tag codes and the given locations.
     *
     * @return a List with all existing holiday tag codes and the given locations.
     * @param locMap a Map containing location bean paths keyed by their descriptions
  (location description -> location bean path)
     */
    public static java.util.List createListWithLocations(java.util.Map locMap)
    {
      return (java.util.List) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.activity.BusCalType.class, "createListWithLocations", new Class[]{ java.util.Map.class} , new Object[]{ locMap});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.activity.BusCalType
   */
  public static class CONSTRUCT
  {

  }
}
