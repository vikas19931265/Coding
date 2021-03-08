package cmSSO

uses com.guidewire.pl.system.dependency.PLDependencies
uses com.guidewire.pl.system.service.context.ServiceToken
uses com.guidewire.pl.system.server.Version
uses com.guidewire.pl.web.controller.WebServlet
uses javax.servlet.http.HttpServletResponse
uses javax.servlet.http.HttpServletRequest
uses javax.servlet.http.HttpServlet
uses gw.servlet.ServletUtils
uses javax.security.auth.login.LoginException
uses gw.servlet.Servlet
uses gw.plugin.Plugins
uses gw.plugin.baseurlbuilder.IBaseURLBuilder

@Servlet( \ path : String ->path.matches( "/ssosaml" ) )
class ContactManagerAuthenticationServlet extends HttpServlet {
  override function doPost(req: HttpServletRequest, resp: HttpServletResponse) {
    var user:User = ServletUtils.getAuthenticatedUser(req, true);
    if (user != null) {
      redirectToIndex(req, resp);
      return;
    }

    // try to login
    try {
      PLDependencies.LoginManager.login(req);
    } catch (e : LoginException) {
      respondUnauthorized(req,resp);
      return;
    }

    var serviceToken:ServiceToken = PLDependencies.CommonDependencies.ServiceToken;
    if (serviceToken == null || !serviceToken.AuthenticatedUser) {
      respondUnauthorized(req,resp);
    } else {
      // store token
      req.getSession(false).setAttribute(WebServlet.SERVICE_TOKEN_SESSION_ATTR, serviceToken);
      redirectToIndex(req, resp);
    }

    return;
  }

  private function respondUnauthorized(req:HttpServletRequest, resp:HttpServletResponse) {
    print("User is unauthorized")
    redirectToError(req, resp);
  }

  private function redirectToIndex(req:HttpServletRequest, resp:HttpServletResponse) {
    print("User is authorized. Send to index page.")
    var plugin: IBaseURLBuilder =  Plugins.get("BaseURLBuilderPlugin") as IBaseURLBuilder;
    var ccStartupPageEP = "ContactManagerStartupPage"
    resp.sendRedirect(plugin.getApplicationBaseURL(req) + "/" + ccStartupPageEP + ".do");
  }

  private function redirectToError(req:HttpServletRequest, resp:HttpServletResponse) {
    print("User is unauthorized. Send to Default Failure page.")
    var plugin:IBaseURLBuilder = Plugins.get("BaseURLBuilderPlugin") as IBaseURLBuilder;
    var defaultFailureEP = "DefaultFailureEP"
    resp.sendRedirect(plugin.getApplicationBaseURL(req) + "/" + defaultFailureEP + ".do");
  }
}