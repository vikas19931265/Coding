package external.gw.lang.parser.resources;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ResourceKey
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Key")
  public java.lang.String getKey();


  /**
   * Utility class for initializing an instance of external.gw.lang.parser.resources.ResourceKey
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static ResourceKey newInstance(java.lang.String param)
    {
      return (ResourceKey) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.resources.ResourceKey.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
