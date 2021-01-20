/*

What is written inside the public service method?
==================================================

The public service method converts the ServletRequest object into the HttpServletRequest type
and ServletResponse object into the HttpServletResponse type. Then, calls the service method passing these objects. 
Please note that here in this case there are two service methods one is public service method taking ServletRequest
and ServletResponse as parameters  and other one is protected service method taking HttpServletRequest and
HttpServletResponse as the parameters.

Service mthod is overloaded method here.

Let's see the internal code

*/


public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException
{
    
    HttpServletRequest request; // here we have created HttpServletRequest referece
    HttpServletResponse response;
    
    try
    {
        request = (HttpServletRequest) req; // HttpServletRequest is the child of the ServletRequest, and here we are doing typecasting.
        response=(HttpServletResponse) res;
    }
    
    
    catch(ClassCastException e)
    {
        throw new ServletException("non-Http request or response");
    }

    
    service(request , response); // calling the protected service (HttpServletRequest request, HttpServletResponse response) method.
    
    
}


/*
  What is written inside the protected service method
 =========================================================
 
 The protected service method checks the type of request, if request type is get, it calls doGet
 method, if request type is post, it calls doPost method, so on. Let's see the internal code:

*/


protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException
{
    String method = req.getMethod();
    
    if(method.equlas("GET")
    {
        // calling doGet() method...doGet(req, resp);
    }

    else if(method.equals("POST"))
    {
         // calling doPost() method
    }
    
    
}


