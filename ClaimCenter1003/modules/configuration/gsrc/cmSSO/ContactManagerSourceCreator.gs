package cmSSO

uses gw.plugin.security.AuthenticationSourceCreatorPlugin
uses gw.plugin.security.AuthenticationSource
uses javax.servlet.http.HttpServletRequest
uses gw.plugin.security.UserNamePasswordAuthenticationSource

class ContactManagerSourceCreator implements AuthenticationSourceCreatorPlugin {
  override function createSourceFromHTTPRequest(p0: HttpServletRequest): AuthenticationSource {

    var source:AuthenticationSource;
    var userName:String =  p0.getParameter ("username");
    var password:String =  p0.getParameter("password");

    print("userName\t" + userName)
    print("password\t" + password)

    source = new UserNamePasswordAuthenticationSource(userName, password);

    return source;

  }
}