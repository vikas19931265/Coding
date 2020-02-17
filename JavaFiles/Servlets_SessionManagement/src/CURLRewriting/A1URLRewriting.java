/*

URL Rewriting
============================

-> In URL rewriting, we append a token or identifier to the URL of the next Servlet or the next resource. 
   We can send parameter name/value pairs using the following format:

  url?name1=value1&name2=value2&??

-> A name and a value is separated using an equal = sign, a parameter name/value pair is
    separated from another parameter using the ampersand(&).

-> When the user clicks the hyperlink, the parameter name/value pairs will be passed to the server.
   From a Servlet, we can use getParameter() method to obtain a parameter value.



*/