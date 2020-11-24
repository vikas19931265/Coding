package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlMonthDay extends external.gw.xml.date.AbstractXmlDateType
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
   * Utility class for initializing an instance of external.gw.xml.date.XmlMonthDay
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XmlMonthDay newInstance()
    {
      return (XmlMonthDay) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlMonthDay.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param String

     */
    public static XmlMonthDay newInstance(java.lang.String param)
    {
      return (XmlMonthDay) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlMonthDay.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlMonthDay newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlMonthDay) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlMonthDay.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
