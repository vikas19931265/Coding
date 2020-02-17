/*

How to get the object of ServletConfig
======================================================================

getServletConfig() method of Servlet interface returns the object of ServletConfig.

Syntax of getServletConfig() method
========================================

        public ServletConfig getServletConfig();  


Example of getServletConfig() method
========================================

ServletConfig config=getServletConfig();  

Now we can call the methods of ServletConfig interface  

Syntax to provide the initialization parameter for a servlet
=======================================================================

The init-param sub-element of servlet is used to specify the initialization parameter for a servlet.

<web-app>  
  <servlet>  
    ......  
      
    <init-param>  
      <param-name>parametername</param-name>  
      <param-value>parametervalue</param-value>  
    </init-param>  
    ......  
  </servlet>  
</web-app>  


*/