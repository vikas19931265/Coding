/*

REQUEST REDIRECTION BY USING SEND REDIRECT MECHANISM:
===========================================================================================

To perform Request Redirection, If we use Send Redirect Mechanism no need to use Hyper links, not
required to set status code and Response Header values to the Response Format, but We need to use
the following method.


public void sendRedirect(String url)


The sendRedirect() method of HttpServletResponse interface can be used to redirect 
response to another resource, it may be servlet, jsp or html file.

It accepts relative as well as absolute URL.

It works at client side because it uses the url bar of the browser to make another request.
So, it can work inside and outside the server.


Notice
=============

that sendRedirect method works at client side, that is why we can our request to anywhere. 
We can send our request within and outside the server.


*/