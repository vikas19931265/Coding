package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface StatisticsAttributeInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public java.lang.Class getType();


  /**
   * Utility class for initializing an instance of external.gw.plugin.cluster.StatisticsAttributeInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String
     * @param param1 String
     * @param param2 Class<Object>

     */
    public static StatisticsAttributeInfo newInstance(java.lang.String param, java.lang.String param1, java.lang.Class param2)
    {
      return (StatisticsAttributeInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.plugin.cluster.StatisticsAttributeInfo.class, new Class[]{ java.lang.String.class, java.lang.String.class, java.lang.Class.class} , new Object[]{ param, param1, param2});
    }

  }
}
