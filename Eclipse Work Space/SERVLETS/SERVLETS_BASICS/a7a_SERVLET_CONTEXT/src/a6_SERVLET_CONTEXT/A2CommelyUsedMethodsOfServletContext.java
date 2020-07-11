/*

Commonly used methods of ServletContext interface
=========================================================================================================

There is given some commonly used methods of ServletContext interface.

public String getInitParameter(String name):

            Returns the parameter value for the specified parameter name.

public Enumeration getInitParameterNames():

            Returns the names of the context's initialization parameters.

public void setAttribute(String name,Object object):

            sets the given object in the application scope.

public Object getAttribute(String name):

            Returns the attribute for the specified name.

public Enumeration getInitParameterNames():

            Returns the names of the context's initialization parameters as an Enumeration of String objects.

public void removeAttribute(String name):

            Removes the attribute with the given name from the servlet context.


*/