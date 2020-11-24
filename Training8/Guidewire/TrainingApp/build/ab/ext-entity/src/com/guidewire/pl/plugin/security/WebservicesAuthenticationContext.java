package com.guidewire.pl.plugin.security;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WebservicesAuthenticationContext
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HttpHeaders")
  public external.gw.xml.ws.HttpHeaders getHttpHeaders();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HttpServletRequest")
  public javax.servlet.http.HttpServletRequest getHttpServletRequest();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequestSoapHeaders")
  public external.gw.xml.XmlElement getRequestSoapHeaders();


  /**
   * Utility class for initializing an instance of com.guidewire.pl.plugin.security.WebservicesAuthenticationContext
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param XmlElement
     * @param param1 HttpServletRequest
     * @param param2 HttpHeaders

     */
    public static WebservicesAuthenticationContext newInstance(external.gw.xml.XmlElement param, javax.servlet.http.HttpServletRequest param1, external.gw.xml.ws.HttpHeaders param2)
    {
      return (WebservicesAuthenticationContext) gw.pl.external.Invoker.getInstance().construct(com.guidewire.pl.plugin.security.WebservicesAuthenticationContext.class, new Class[]{ external.gw.xml.XmlElement.class, javax.servlet.http.HttpServletRequest.class, external.gw.xml.ws.HttpHeaders.class} , new Object[]{ param, param1, param2});
    }

  }
}
