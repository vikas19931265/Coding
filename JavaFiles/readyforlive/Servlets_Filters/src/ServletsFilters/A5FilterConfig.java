/*

FilterConfig
=====================================


-> An object of FilterConfig is created by the web container. 
   This object can be used to get the configuration information from the web.xml file.

Methods of FilterConfig interface
=====================================

There are following 4 methods in the FilterConfig interface.

public void init(FilterConfig config): 

        init() method is invoked only once it is used to initialize the filter.

public String getInitParameter(String parameterName): 

        Returns the parameter value for the specified parameter name.

public java.util.Enumeration getInitParameterNames(): 

        Returns an enumeration containing all the parameter names.

public ServletContext getServletContext(): 

        Returns the ServletContext object.


*/


