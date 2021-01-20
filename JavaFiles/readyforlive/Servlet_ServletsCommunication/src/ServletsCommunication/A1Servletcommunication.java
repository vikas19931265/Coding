/*

SERVLET COMMUNICATION:
==================================================
 
-> In general in web application deployment is not at all suggestible to provide the complete application
  logic with in a single web resource, it is suggestible to distribute the complete application logic over
  multiple web resources.

-> In the above context, to execute the application we must require communication between all the web
   resources, for this we have to use Servlet Communication.

-> In web application, we are able to provide servlet communication in the following 3 ways.

                                        
                                                    Servlet Communication

         -------------------------------------------- |------------------------------------------------------------------------------
         |                                                                                       |                                   |   
Browser-servlet                                                                     web component mechanism(or)             applet servlet communication
Communication                                                                         request dispatching
    |                                                                                            |
    -----------------------------------                                             -----------------------------
Request         Sending error       request                                         |                            |       
Response        messages            redirection                                include                        forward  
                                        |
                                        |        
    -----------------------------------------------------------------
    |                               |                               |
request redirection         request redirection by      request redirection by using
by using hyperlink          setting response headers      redirect mechanism


*/