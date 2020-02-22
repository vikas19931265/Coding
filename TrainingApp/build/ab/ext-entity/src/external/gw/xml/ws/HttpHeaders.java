package external.gw.xml.ws;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface HttpHeaders
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HeaderNames")
  public java.util.List getHeaderNames();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getHeader")
  public java.lang.String getHeader(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setHeader")
  public void setHeader(java.lang.String param, java.lang.String param1);


  /**
   * Utility class for initializing an instance of external.gw.xml.ws.HttpHeaders
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static HttpHeaders newInstance()
    {
      return (HttpHeaders) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.ws.HttpHeaders.class, new Class[]{ } , new Object[]{ });
    }

  }
}
