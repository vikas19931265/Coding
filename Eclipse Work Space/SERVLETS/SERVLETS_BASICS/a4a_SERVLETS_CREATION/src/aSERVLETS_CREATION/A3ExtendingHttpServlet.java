package aSERVLETS_CREATION;


/*

What are the differences between HTTP and GenericServlet
===============================================================================

1. GenericServlet is protocol independent but HttpServlet is Http protocol dependent.

2. GenericServelt is able to process any type of protocol request like tcp/ip, udp, ftp.

3. But HttpServlet is able to process only Http protocol requests. It is unable to process other 
   protocol requests. In web application environment, will use Http protocol 90 percent of the times.

4. GenericServlet is able to process all the types of requests in the the common manner, 
   it will not process the requests in specific manner even if we send GET, POST, HEAD request.

5. HttpServlet is able to process the requests in more specific manner.

		Get------doGet(---)
		POST-----doPost(--)
		HEAD---   doHead(---)
		OPTIONS-----doOptions(----)
		PUT---------doPut(------)
		TRACE-------doTrace(-----)
		DELETE----doDelete()

6. So in case of the HttpServlet requests will be processed in the more specific manner.

7. GenericServlet will execute only the service() method for all the types of requests like GET, POST, HEAD.

8. GenericServlet has not implemented any kind of protocol conventions at the server side, but the 
   HttpServlet has provided Http Protocol conventions at the server side.

9. GenericServlet will not give any option to the developers to specify different types of requests at
   client browser, but HttpServlet will provide flexibility to the developers to specify different types of
   requests at client browser.

Note:

	GenericServlet is rarely used class in the web applications but HttpServlet is the
    most frequently class in the web applications.

    GenericServlet is not compatible with the protocols but the HttpServlet is very well 
    compatible with the Http protocol.

The main difference between GenericServlet flow of execution and HttpServlet flow of execution is in
GenericServlet flow of execution container will execute only one service(_,_) method to process the
request, but in case of HttpServlet container will execute service(ServletRequest,
Servletresponse), service(HttpServletRequest, HttpServletresponse), doXxx(HttpServletRequest,
HttpServletresponse) on the basis of request type in order to process the request.


How is HttpServlet prepared
================================================================================

If we want to prepare HttpServlet then we have to declare a user defined class, it must be extended from
javax.servlet.http.HttpServlet abstract class.  */


public abstract class HttpServlet extends GenericServlet
       
{
    // service method is implemented inside this
      
 protected void service(ServletRequest request, ServletResponse response) throws ServletException, IOException
   
    {
       //   servlet request is converted to HtpServlet request and response to HttpServlet response

    HttpServletRequest hreq= (HttpServletRequest) req;
    HttpServletResponse hres=(HttpServletResponse) res;


                    /* javax.servlet 		GenericServlet  	ServletRequest	         ServletResponse
                                                   ^                        ^                       ^
                                        	    extends                  extends            	  extends
                                                   |                        |                       |
                    javax.servlet.http          HttpServlet		HttpServletRequest      HttpServletResponse */	


            service(hreq, hres); 
   }

  public  void service(HttpServletRequest hreq, HttpServletResponse hres) throws ServletException, IOException
        {

        // now give the code for the type of requests.
            
        String req_Type= hreq.getMethod();

            if(req_type.equals("GET"))
            {

                doGet(hreq, hres);
            }

            if(req_type.equsl("POST"))
            {

                doPost(hreq, hres);
            }

        }
  
        protected doGet(HttpServletRequest hrq, HttpServletResponse hres) throws ServletException, IOExcepion
        {

         //           ----some implementation
        }

        protected doPost(HttpServletRequest hrq, HttpServletResponse hres) th\hrows ServletException, IOExcepion
        {

        //                ----some implementation
        }


  //  we have to do the same thing for the remaining 7 methods as well.

 //   All these methods will not be called by us directly but instead will be called by the container 

}





//Writing our own user defined servlet
//============================================================================

public class MyServlets extends HttpServlet
{

        //	----override doGet(--) or doPost(---) methods on the basis of the request types

}

/* How is doGet() method called
============================================================================

1. Firstly MyServlets object will be created by the container and it will call the service() method.

2. Now the service() method is not overridden here, hence the parent class service() method will be 
   called.

3. Parent class of MyServlets is HttpServlet.

4. Now HttpServlet service() method will be called. service() method takes ServletRequest and ServletResponse
   as the parameters. These parameters are typecasted into HttpServletRequest and HttpServletResponse.

5. These typecasted objects are then passed to another service() method. This service method will check
   that for which method type this request is coming and then depending upon that the particular method will be
   called.

6. Now here doGet() and respective requests method will be overridden in our class hence not the parent class
   method but instead the child class method will be called.

7. At last doGet() method of our own class will be called.



Write the flow of call of the GET request..
===============================================================================

1. First we will have container inside which we will be having our applications.

2. Inside our application we will have WEB-INF folder.

3. Inside the WEB-INF folder we will have web.xml

4. Web.xml will have mapping between the url pattern and the class name.

5.Inside the classes folder in the WEB-INF folder we  will have our .class file of our java
   application.

6. Inside the .class be default we are going to provide doGet() method only..

7. Now we will be having a client and the protocol.

8. As the normal concept , when we start server job of the container is to recognize all applications
   in web-inf and prepare a separate object for each resouce.

8. This object is called ServletContext.

9. Container will perform loading and parsing of web.xml. If any application level data found
   then it will be stored in ServletContext.

10. Now the browser will provide the request

		https://localhost:1010/servletApp3/wel

11. When the request is coming the request will come to the protocol first and a connection will
    be established between client and server.

12. Request format is prepared by the protocol.  Request format is of GET type by default and will not
    have any body part.

13. The request is transferred to server. Main server will check if request is proper. If proper 
    then request is taken to container and container will look in web.xml and check for resource for which
    resource request is coming.

14. Once identified control goes to servlet. Then it goes to classes folder it will identify if servlet 
    is present or not. Once its identified then immediately servlet life cycle will be started.

15. So now first servlet class will be loaded to memory called as the servlet loading.

16. Once loading is done , container will create object for the servlet. This phase is called as the serlvet
    instantiation.

16. We have init method present inside the servlet class. After instantiation servlet 
   initialization has to be performed by calling the init() method. But init() method 
   is going to take servletConfig object as the parameter hence the servletConig object will be created.


				inti(SC SC)
					init()
	
				init()
					{
						}

17. ServletConfig object has to be created by container and inside init() method , servlet configuration 
   details wil be present inside servletconfig.

18. Now container will execute service method, where servlet request and service response 
   objecs are going to get generated. Request object will contain the client meta data. 

19. Now service http flow will occur to identify the type of the request. Container willl 
` execute user defined doGET method and some response will be generated. That response 
  will be held inside the res object only. 

20.Once service completes thread goes to dead state, container will get to know its done and 
  response is take to main server, main server takes it to protocol will prepare the response format containing
 the type of response to be shown inside th browser machine

21 Response is taken to the browser then client will take the response from body part and display in the browser.

22 Now connection will terminate. Container will destroy request and response object then goes to waiting state . 
 If no further request is coming then container will destroy the servlet object but before that 
 servlet config object has to be destroyed then servlet unloading will be done. That is 
 whatever byte code we loaded has to be removed.

23 Once server is shutdown servletContext object will also be removed from our memory



Q: Is it possible to override service(_,_) method in HttpServlet?
================================================================================

ANS:

In HttpServlet, it is possible to override any of the service(_,_) methods, doXxx(_,_) methods,
but always it is suggestible to override doXxx(_,_) methods on the basis of request types, it is not at all
suggestible to override service_,_) methods.

If we override service(_,_) method in HttpServlet then container will execute user provided
service(_,_) method, but container is unable to execute predefined service(_,_) method so that it is not
possible to reach doGet(_,_) method or doPost(_,_) method and so on.



Q Is it possible provide both constructor and init() method in a single servlet?
================================================================================

ANS:

1. Yes, it is possible provide both constructor and init() method in a single servlet.

2 If we provide a static block, a constructor, init(_) method, doXxx(_,_) method and destroy()method
 within a single servlet.

3.Then container will execute static block at the time of servlet loading,
constructor at the time of servlet instantiation, init() method at the time of performing servlet
initialization, doXxx(_,_) method at the time of request processing and destroy() method at the time of
servlet deinstantiation.

EX: 

public class MyServlet extends HttpServlet {

    static {
    System.out.println("Servlet Loading");
            }

   ----------------constructor should be zero arugment only------------
        public MyServlet() {
            System.out.println("Servlet Instantiation");
            }
            
    -----------------------------------------------------------------        
    
    public void init() {
        System.out.println("Servlet Initialization");
    }

 --------------------------------------------------------------------------

    public void doGet(HttpServletRequest hreq, HttpServletResponse hres)throws SE, IOE {
            System.out.println("Request Processing");
    }

-------------------------------------------------------------------------------
    public void destroy() {
        System.out.println("Servlet Deinstantiation");
       }

If we send a request to above servlet then are able to see the following output on Server prompt.

Servlet Loading
Servlet Instantiation
Servlet Initialization
Request Processing
Servlet Deinstantiation (when we close the server).

**If we want to provide any constructor in servlet class then that constructor should be public and zero
  argument because container will search and execute public and zero argument constructor as part of
  servlet instantiation to create servlet object.

If we provide parameterized constructor without zero-argument constructor then container will raise an
Exception like.

javax.servlet.ServletException : Error-Instantiating Servlet class MyServlet with the root case
java.lang.InstantiationException:MyServlet.


*/