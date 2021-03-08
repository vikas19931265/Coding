package cmSSO

uses gw.plugin.security.AuthenticationServicePlugin
uses gw.plugin.security.AuthenticationServicePluginCallbackHandler
uses gw.plugin.security.AuthenticationSource
uses gw.plugin.security.UserNamePasswordAuthenticationSource
uses java.lang.IllegalArgumentException
uses javax.security.auth.login.FailedLoginException

class ContactManagerAuthenticationPlugin implements AuthenticationServicePlugin {

  var _handler: AuthenticationServicePluginCallbackHandler;
  override function authenticate(p0: AuthenticationSource): String {
    if (p0 typeis  UserNamePasswordAuthenticationSource == false) {
      throw new IllegalArgumentException("Authentication source type " + p0.getClass().getName() +
          "is not known to this plugin");
    }
    var uNameSource:UserNamePasswordAuthenticationSource =  p0 as UserNamePasswordAuthenticationSource;
    var username = uNameSource.Username;
    var userPublicId = _handler.findUser(username);
    if (userPublicId == null) {   throw new FailedLoginException("Bad user name " + username);}
    return userPublicId;
  }

  override property set Callback(callbackHandler : AuthenticationServicePluginCallbackHandler) {

  }
}