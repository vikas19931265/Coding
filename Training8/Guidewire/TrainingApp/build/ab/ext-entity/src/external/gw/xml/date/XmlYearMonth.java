package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlYearMonth extends external.gw.xml.date.AbstractXmlDateType
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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Year")
  public int getYear();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Year")
  public void setYear(int value);


  /**
   * Utility class for initializing an instance of external.gw.xml.date.XmlYearMonth
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XmlYearMonth newInstance(java.lang.String param)
    {
      return (XmlYearMonth) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlYearMonth.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlYearMonth newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlYearMonth) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlYearMonth.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
