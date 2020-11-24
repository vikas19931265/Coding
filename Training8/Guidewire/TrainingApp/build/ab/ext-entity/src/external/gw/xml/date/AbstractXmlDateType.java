package external.gw.xml.date;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AbstractXmlDateType
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TimeZone")
  public java.util.TimeZone getTimeZone();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TimeZone")
  public void setTimeZone(java.util.TimeZone value);

  /**
   * null
   *
   * @param param XmlDuration
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public void add(external.gw.xml.date.XmlDuration param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toCalendar")
  public java.util.Calendar toCalendar();

  /**
   * null
   *
   * @param param TimeZone
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toCalendar")
  public java.util.Calendar toCalendar(java.util.TimeZone param);
}
