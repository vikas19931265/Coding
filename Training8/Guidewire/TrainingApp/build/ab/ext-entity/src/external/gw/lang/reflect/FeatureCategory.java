package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FeatureCategory
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Important")
  public boolean isImportant();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Order")
  public int getOrder();


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.FeatureCategory
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String
     * @param param1 int
     * @param param2 boolean

     */
    public static FeatureCategory newInstance(java.lang.String param, int param1, boolean param2)
    {
      return (FeatureCategory) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.FeatureCategory.class, new Class[]{ java.lang.String.class, int.class, boolean.class} , new Object[]{ param, param1, param2});
    }

  }
}
