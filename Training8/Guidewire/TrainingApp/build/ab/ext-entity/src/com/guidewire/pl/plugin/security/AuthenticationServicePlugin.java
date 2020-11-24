package com.guidewire.pl.plugin.security;

/**
 * The authentication service plugin is used to authorize a user from <code>AuthenticationSource</code> data.
It is up to the implementation how to do this; however, the following contract must be observed.
<ul>
<li>The service must handle the <code>UserNamePasswordAuthenticationSource</code> class.  This class contains a username and password combination.
By obeying this rule, all external services will be able to authenticate using a username and password.</li>
<li>All modifications to the user record must be done using the AuthenticationServicePluginCallbackHandler object.  This callback allows
you to query for the user, modify the user, and modify relationships of the user (such as its role or group.).</li>
</ul>
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AuthenticationServicePlugin extends gw.plugin.IPlugin
{

  /**
   * Authenticates the source information and returns the user public ID for the user described in the source.  Implementations of this service
should use the callback handler provided in the <code>setCallback</code> method to query or modify the user object.
   *
   * @return The application user public ID for the user that is authenticated, or null.
   * @param source The authentication source.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "authenticate")
  public java.lang.String authenticate(gw.plugin.security.AuthenticationSource source) throws javax.security.auth.login.LoginException;



  /**
   * Sets the callback handler for this service.  The callback can be used to perform operations in the server through the plugin interface.
This method is called by the system to pass a callback handler to the plugin.  The plugin can then use this handler to call back into
the server.
<p/>
The typical implemenation of this method is to store the callback handler variable as a class variable in the plugin.  This callback
would then be used in the authentication method.
   *
   * @param callbackHandler 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setCallback")
  public void setCallback(gw.plugin.security.AuthenticationServicePluginCallbackHandler callbackHandler);

}
