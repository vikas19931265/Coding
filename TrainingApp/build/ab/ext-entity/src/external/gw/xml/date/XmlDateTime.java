package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlDateTime extends external.gw.xml.date.AbstractXmlDateType
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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Hour")
  public int getHour();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Hour")
  public void setHour(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Minute")
  public int getMinute();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Minute")
  public void setMinute(int value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Second")
  public java.math.BigDecimal getSecond();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Second")
  public void setSecond(java.math.BigDecimal value);


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
   * Utility class for initializing an instance of external.gw.xml.date.XmlDateTime
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XmlDateTime newInstance()
    {
      return (XmlDateTime) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDateTime.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param String

     */
    public static XmlDateTime newInstance(java.lang.String param)
    {
      return (XmlDateTime) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDateTime.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlDateTime newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlDateTime) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDateTime.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
