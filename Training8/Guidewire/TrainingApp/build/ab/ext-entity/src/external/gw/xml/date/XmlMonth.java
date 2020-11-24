package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlMonth extends external.gw.xml.date.AbstractXmlDateType
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Month")
  public int getMonth();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Month")
  public void setMonth(int value);


  /**
   * Utility class for initializing an instance of external.gw.xml.date.XmlMonth
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XmlMonth newInstance(java.lang.String param)
    {
      return (XmlMonth) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlMonth.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlMonth newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlMonth) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlMonth.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
