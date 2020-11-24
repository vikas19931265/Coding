package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlDay extends external.gw.xml.date.AbstractXmlDateType
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Day")
  public int getDay();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Day")
  public void setDay(int value);


  /**
   * Utility class for initializing an instance of external.gw.xml.date.XmlDay
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XmlDay newInstance(java.lang.String param)
    {
      return (XmlDay) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDay.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlDay newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlDay) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDay.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
