/*



MVC arhitecture
------------------------


                                                            
        -----request------->                -----request--------
 client                              server                      database
       <------response-----                 <-----response-----
       
                                    / \  
                                   /   \ 

                                   zoom

                             - -----server--------------------------------------
                             |                                                  |                        
                             |  controller(servlets)     model(javabeans,       | 
                             |                                  Ejb,hibernate,  |
                             |  view(jsp pages)                jdbc)            |
                             |                                                  |
                             |                                                  |        
                             ---------------------------------------------------



1. Request comes from client and controller will take the request . Here servlets are 
   acting as the controller.


2. Controller is servlets which will interact with model part and then database response 
   is given to client via the JSP pages

    Examples

        Struts MVC based framework

                ActionServlet---->Controller
                Set of JSPs------>View part

        JSF MVC based Framework

                FacesServlet---->Controller
                Set of JSPs----->View Part

        Spring Based Web module
                
                DispatcherServlet---->Controller
                Set of JSP pasges---->View part


3. If we use only servlets in the web applications then we will not able to separate the business logic
   and the presentation logic.

4. If we use only JSPs in web applications then we wont be able to separate presentation and business logic.
   

5. Also for presentation logic we are able to use HTML tages , but for the business logic we wont be able
   to use the JSP tags.


6. If we make any changes in the servlet then we are required to perform recompilation and reloading into the server.


7. If we perform modification in the JSP then it is not required to recompile and reload the web app
   into server because JSPs are autoloaded and autocompiled, just refreshing the browser is enough.


*/