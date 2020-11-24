package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlYear extends external.gw.xml.date.AbstractXmlDateType
{


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
   * Utility class for initializing an instance of external.gw.xml.date.XmlYear
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XmlYear newInstance(java.lang.String param)
    {
      return (XmlYear) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlYear.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Calendar
     * @param param1 boolean

     */
    public static XmlYear newInstance(java.util.Calendar param, boolean param1)
    {
      return (XmlYear) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlYear.class, new Class[]{ java.util.Calendar.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
