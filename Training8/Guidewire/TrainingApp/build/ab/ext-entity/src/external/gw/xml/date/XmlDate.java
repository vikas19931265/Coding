package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlDate extends external.gw.xml.date.AbstractXmlDateType
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
   * Utility class for initializing an instance of external.gw.xml.date.XmlDate
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XmlDate newInstance()
    {
      return (XmlDate) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDate.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param String

     */
    public static XmlDate newInstance(java.lang.String param)
    {
      return (XmlDate) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDate.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlDate newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlDate) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDate.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
