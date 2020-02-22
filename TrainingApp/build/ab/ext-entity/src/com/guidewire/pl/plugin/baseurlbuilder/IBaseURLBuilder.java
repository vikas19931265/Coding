package com.guidewire.pl.plugin.baseurlbuilder;

/**
 * Build a base URL to use for a Guidewire UI page, given the HttpServletRequest. The base URL
is used as the prefix for all relative URLs on the page. Base URLs usually start with a
concatenation of:
<ul>
<li>request.getScheme()
<li>request.getServerName()
<li>request.getServerPort()
</ul>
where the scheme is usually http/https, server name is the name/IP address of the server and the
port is the server port (can be omitted if scheme is http and port is 80, or if scheme is https
and port is 443).
<p>
The final part of the base URL may be the path just to the web application, as returned by
{@link #getApplicationBaseURL}, or the path to the current page as returned by
{@link #getPageBaseURL}.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IBaseURLBuilder extends gw.plugin.IPlugin
{

  /**
   * Return the base URL of the web application for the given request. This URL starts with the
standard scheme, server and port information and is followed by the path to the web application
(as returned by request.getContextPath()). Example: http://servername:8080/webapp
   *
   * @param request 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getApplicationBaseURL")
  public java.lang.String getApplicationBaseURL(javax.servlet.http.HttpServletRequest request);



  /**
   * Return the base URL of the page for the given request. This URL starts with the standard scheme,
server and port information and is followed by the path to the current page (as returned by
request.getRequestURI()). Example: http://servername:8080/webapp/path/SomePage.jsp
   *
   * @param request 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPageBaseURL")
  public java.lang.String getPageBaseURL(javax.servlet.http.HttpServletRequest request);

}
