/*

How to get the object of ServletContext interface
===============================================================================================

getServletContext() method of ServletConfig interface returns the object of ServletContext.
getServletContext() method of GenericServlet class returns the object of ServletContext.


Syntax of getServletContext() method
==============================================================================================

public ServletContext getServletContext()  

Example of getServletContext() method
============================================================

//We can get the ServletContext object from ServletConfig object  

        ServletContext application=getServletConfig().getServletContext();  
  
//Another convenient way to get the ServletContext object  

        ServletContext application=getServletContext();  




*/