package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlDuration
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Days")
  public java.math.BigInteger getDays();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Days")
  public void setDays(java.math.BigInteger value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Hours")
  public java.math.BigInteger getHours();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Hours")
  public void setHours(java.math.BigInteger value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Minutes")
  public java.math.BigInteger getMinutes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Minutes")
  public void setMinutes(java.math.BigInteger value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Months")
  public java.math.BigInteger getMonths();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Months")
  public void setMonths(java.math.BigInteger value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Negative")
  public boolean isNegative();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Negative")
  public void setNegative(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Seconds")
  public java.math.BigDecimal getSeconds();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Seconds")
  public void setSeconds(java.math.BigDecimal value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Years")
  public java.math.BigInteger getYears();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Years")
  public void setYears(java.math.BigInteger value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Zero")
  public boolean isZero();


  /**
   * Utility class for accessing static features for external.gw.xml.date.XmlDuration
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static external.gw.xml.date.XmlDuration getZERO()
    {
      return (external.gw.xml.date.XmlDuration) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.date.XmlDuration.class, "ZERO");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.xml.date.XmlDuration
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XmlDuration newInstance()
    {
      return (XmlDuration) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDuration.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param String

     */
    public static XmlDuration newInstance(java.lang.String param)
    {
      return (XmlDuration) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.date.XmlDuration.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
