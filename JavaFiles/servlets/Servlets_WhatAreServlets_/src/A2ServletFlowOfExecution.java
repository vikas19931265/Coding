
/*

Servlets Flow Of Execution
=================================================================================================================================================================


1. Main Server(Web Server) is responsible just to check if the coming request that is request made
   by the client is valid or not. If the request is not valid then error response is given to the client
   or else the request is forwarded to the Web Container.

2. Container is for execution of the server side components like servlets  and **web server is just like an admin.


        ----------- job of container when the web server(Tomcat) is started-------------


1. Recognize all web applications which are present in the WEB APPS folder.

2. Storing all the applications into the server space.

3. While deploying of applications in server for each and every web application separate object
   is created that is ***called as Servlet Context.

4. If 100 web applications  are present in the WEB APPS folder then for all the apps a separated ServletContext
   object will be created.

5. After deploying apps on server space, container will look for Web.xml file in each and every folder of 
   WEB-INF.

6. While deployment of application if web.xml is identified then container will load the web.xml 
   content into the memory.

7. Now the container will perform parsing of the web.xml meaning container will check if all the tags 
   are correctly present , syntax is right or not and will check for the missing tags. If any
   mistake is identified in web.xml then the **application will not get deployed to the server.

8. If no error is found then parsing will be a success.

9. Container will read the content from the web.xml. If any application level data is present inside 
   the web.xml file then its information will be stored in the ServletContext object created for each
   and every application.

            ****APPLICATION RELATED DATA IS STORED INSIDE THE ServletContext object.

10. ***If all this happens properly, then the application will be deployed properly to the server. 

11. When server is started , application is ready to execute on the server.

    http://localhost://app1:/ wel1

    this /wel will be mapped to the Servlet.

12. When we press enter , request goes to the protocol that is the HTTP protocol.

13. protocol will make the connection between client and server using Server IPAddress and 
    Server port.

14. When connection established, automatically request format will be created.

            -----------------
            |   Header      |---->contains metadata about the request
            |-------------- |
            |   Body        |
            -----------------

15. When the Request format is created, protocol will carry request format to the Server.

15. Request is now taken to main server.

16. Main Server(Web Server) will check if the request which is coming is proper or not. If request
    is not proper then error response will be given to the client.

17. If request format is fine then the request is taken forward and given to the container.

18. Container will indentify the resource named (/web -->alias name)----> ResourceName for a component
    available in classes folder.

19. In classes folder 100's of components are present. The request is coming for which component has
    to be identified using the URL patter or Resource name(/web) which is coming from the client.

20. Container has to identify that for which server side component this value is coming.

21. Container has to identify mapping between /wel and server side component. After that container
    has to execute that server side component.

                    /wel1 is URL patter/Alias name for a particular servlet.

22. Mapping details already provided by the developer in the web.xml.

23. Container will go to each and every servlet tag and check for which one /url pattern match exists.
    Comparison of Request URL pattern with web.xml URL pattern will be done.

24. Container will identify the Servlet name from the mapping.

25. Servlet mapping name will be there with URL match.

26. Servlet name is then matched with Servlet mapping . Both should match.

27. After identifying servlet name associated with the request which came, container will 
    immediately search for the .class file of Servlet in classes folder.

 if not found.

    container might think that the associated .class file might be provided by third party(jar files)
    and could be present inside the lib folder. Then container goes to lib folder to check if any such
   .class file is present inside the jar folder.

    if still not found then classNotFoundException will be raised.

28. If found then container will start the lifecycle over this servlet .class file

29. Now Lifecycle of the Servlets will be started if the server side component is servlet.

30. If the server side component is JSP , then the JSP lifecycle will be started.

31. Once .class file is identified by the container then container will load the .class file
    batch code to the memory ( also called as Servlet class loading){ this is method area memory
    which we have studied in the core java}

32. To load servlet class batch code to the memory . Container will internally use

    class. forName(servletClassname) //method

    class.forName("WelServl");

33. After Servlet loading completes container will perform servlet instantiation meaning
    creating object of the servlet class loaded.

            class.forName("Web1Serv);
            c.newInstance(); // to Create object for servlet, container will call this method internally


34.                                             -------servlet object--------
                                                |       init()              |
                                                |       Service(req,res)    |
                              ServletObject.    |getServletConfig(); |
                                                |       destroy             |
                                                |---------------------------


35. After Servlet instantiation container will perform servlet initializations.

36. container will access init() method in which ServletConfig is parameter.

            --servlet initialization-------------
            |                                   |            
            |   init(ServletConfig)             |. Servlet Object
            |                                   |
            |-----------------------------------    
            


37.****ServletConfig object must be prepared by the container. ServletConfig object contains
   servlet related information for each and every servlet present as the meta data inside the
   web.xml file.


38 Entire web App information is present inside the ServletContext and servlet information is present
   inside the ServletConfig.

39. By executing of the init() method , total initialization of the servlet is completed.

40. Now container has to execute the Service() method.

41. To execute the service() method, container will create a separate thread.

42. To execute the Service method 2 parameters must be passed.

                ServletRequest
                ServletResponse

43. So container will immediately create request and response objects.

                ----------------
                |               |
                |request object |   created by the container.
                ----------------


                 ----------------
                |               |
                |response object |
                ----------------



44.  Request object will be able to manage our request data which is coming from the client.

45. Response object will not be having any data in starting.

46. Once service method is executed some response will be generated and will be stored inside the
    response object.

47. When container generated thread completes execution of the service method, automatically the 
    thread will enter into the dead state.

48. When thread goes to dead state, container understands service() method execution is completed.

49. Now container will take the response object to main server(web server)

50. Web server transfers it to the protocol..

51. protocol prepares the response format in the form of header body( contains actual dynamic content)

52. Response object will be submitted to the client.

53. Now client will go the the header part and check metadata. From the metadata only client will prepare
    the body part to be displayed on the browser machine.

54. Once content is displayed at client browser, immediately protocol will terminate the connection
    between client and server. Once terminated container will understand that response has reached properly.

55. Container will destroy the request and response objects. once response is reached container will 
    destroy request and response objects.

56. Container goes to waiting state for further request. This waiting time depends on the web server
    implementation.

57. If no request is coming during idle time then container will destroy the ServletObject. But before that
    it destroys the servletConfig object.

57. After this container will perform servlet unloading.

58. Whenever container is  deleting servlet object it will internally call

        destroy() method

        Servlet object is destroyed.


59. Servlet will unload the byte code.

60. Still Servlet context present in memory.

61. Till the time our server is running mode servlet context object will exist.

62. If we shutdown server, automatically web application will be undeployed then servletContext object will 
    also be destroyed.

63. With this servlet lifecycle completes.

*/