package ServletsCreation;

/*

Difference Between init(ServletConfig config) and init().....
===================================================================================


Before start we have to understand the servlet flow.

For example you have servlet LoginServlet which extends HttpServlet   */


public class LoginServlet extends HttpServlet

    {



    }
    
//And your HttpServlet internally extends GenericServlet.

public abstract class GenericServlet implements Servlet, ServletConfig, Serializable
{

    private transient ServletConfig config;
    
    public GenericServlet()
    {

    }


public void init() throws ServletException
    
    {
    
    }   


    public ServletConfig getServletConfig()

    {
        return config;

    }

    public void init(ServletConfig config) throws ServletException
        {
            this.config = config;
            init();
        }


public abstract void service(ServletRequest servletrequest, ServletResponse servletresponse) throws ServletException, IOException
{

}


/*

Now servlet container flow

Step 1. Loads the servlet class and create instance of the servlet class (LoginServlet).
        LoginServlet login = new LoginServlet();

Step 2. Then servlet container create ServletConfig object for that servlet and
    
        Call login.init(ServletConfig);

   Case 1 :
        If you have overridden init(ServletConfig) method in your servlet then call goes to your
        init(ServletConfig) method .

        public void init(ServletConfig config) throws ServletException {
        System.out.println("\n**** Initializing LoginServlet Init Servlet ********** \n");    super.init(config);
        }

It will print ?Initializing LoginServlet Init Servlet? and call goes to super class GenericServlet 
init(ServletConfig) method.

In the GenericServlet init(ServletConfig) method there is code
this.config= config // initialize the Servlet config object and it is available to you.



Case 2 :
   
    If you overridden init() method and not overridden init(ServletConfig) method.
    Servlet container call login.init(ServletConfig);
    There is no method like init(ServletConfig) in your servlet so call directly goes to 
    super class GenericServlet init(ServletConfig) method.

    this.config= config // initialize the Servlet config object and it is available to you.
    You can get the Servlet config object using getServletConfig() method.


Conclusion: It is BETTER to use init(). If you use init() you have no such worries as calling super.init().
If you use init(servletconfig) and forgot to call super.init(config) then servletconfig object will not 
set and you will not get the servletconfig object. 


*/