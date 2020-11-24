package com.guidewire.pl.plugin.security;

/**
 * This plugin is responsible for authenticating WSI webservice requests.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface WebservicesAuthenticationPlugin extends gw.plugin.IPlugin
{

  /**
   * Authenticates a user. This method returns null if no authentication attempt has been made.
This allows invocation of web services that do not require a login.
   *
   * @return The authenticated user, or null if the caller has not attempted authentication
   * @param context The authentication context
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "authenticate")
  public com.guidewire.ab.external.entity.User authenticate(com.guidewire.pl.plugin.security.WebservicesAuthenticationContext context) throws gw.xml.ws.WsiAuthenticationException;

}
