package com.guidewire.pl.plugin.security;

/**
 * This plugin is responsible for creating an <code>AuthenticationSource</code>
from an HTTPRequest object. The authentication source must be usable by the
<code>AuthenticationServicePlugin</code> defined in the plugin config.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AuthenticationSourceCreatorPlugin extends gw.plugin.IPlugin
{

  /**
   * Creates an authentication source from a servlet request.
   *
   * @return An authentication source representing the data in the request.
   * @param request The source request.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createSourceFromHTTPRequest")
  public gw.plugin.security.AuthenticationSource createSourceFromHTTPRequest(javax.servlet.http.HttpServletRequest request) throws gw.plugin.security.InvalidAuthenticationSourceData;

}
