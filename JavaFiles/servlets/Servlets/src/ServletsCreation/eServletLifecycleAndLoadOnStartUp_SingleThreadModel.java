
package ServletsCreation;

/*

Servlets Flow when a request is sent.
===============================================================================

1. When we send a request for particular servlet then below are the steps will be 
   performed.


2. When we sent a request first checking will be done if the servlet is loaded or not. 
   There are two chances of that servlet may be loaded or not.

3. If the servlet is not loaded then in the case container will perform the servlet loading phase.

4. After th completion of the servlet loading the next task will be as below.

5. Now the container will check if the servlet is instantiated or not. Here also 
   there are two cases one is yes and the other one is no.

6. If the servlet is not instantiated then the container will perform the servlet instantiation phase.

7. Now the container will check if the servlet is initialized or not , the answer can be yes or no.

8. If the servlet is not initialized then servlet initialization will be performed

9. After this the task next task will be servlet request processing  and then at last servlet desinstaniation.

10. Now for each request same strategy will be followed by the container.

11. Now lets say I send a first request then  servlet loading will be  done , then servlet 
    instantiation,  then initialization is done and then request processing and then servlet desinstaniation.

12. When we send second request then servlet is already  loaded, instantiation and initialization 
    as done in the first request. So all this steps will be skipped 

13. Hence container will straight away execute request processing and servlet desinstaniation.

14. Here more then one request is processed by the container but for each request all the 
    lifecycle servlet methods are not  executed.


Servlets And JSPs are not Thread safe by Default"
================================================================================

By default Servlet and JSPs are not thread safe.

If we want to make container to allow only one thread at a time and not allow more 
then one thread to execute at a time then in that case we have to implement another interface called as 

	javax.servlet.SingleThreadModel------> a marker interface


public class Myservlet extends HttpServlet implements SingleThreadModel

{

}


To make our servlet thread safe that is to make our service method accessible by only
one thread at a time we can implement a marker interface called as SingleThreadModel


public class MyServlet extends HttpServlet implements SingleThreadModel
{

}


javax.servlet.SingleThreadModel is marker interface and it is deprecated and it is not supported
by the latest versions of the servers.

Instead of doing this if want to achieve thread safety then we can go for the synchronization keyword.

public class Myservlet extends HttpServlet
{

    public void doGet(HttpServletRequest hreq, HttpServletRepsonse res) throws ServletException, IOException

		synchronized(this)
	{
		----write our code in this
	}

}

With the help of this we can force only one thread to access doGet() method
we will not allow multiple threads to access the object.

So to achieve the thread safety we have two options SingleThreadModel and synchronization.

SingleThreadModel does not work in all the servers.

Note
	In web applications, it is suggestible to avoid the utilization of the singleThreadModel and
	synchronization because they will reduce the application performance as the waiting of threads
	could be increased and threads can also go in the deadlock state.




Load-on-startup:
================================================================================

1. In web applications after starting the server and after getting the request then 
   only the container will perform servlet loading, servlet instantiation and servlet 
   initialization.

2. As per the requirement if we want to make the container to perform servlet loading,
    servlet instantiation and servlet initialization at the time of servlet start up 
   but not after it then we have to use the concept of  ,<load-on-startup> 
   configuration in the web.xml file only for the particular servlet.

3. For some servlets we have to provide such configuration  sot that container perform 
   loading, initialization , instantiation then we have to go for the load on startup only.


How we are going to provide it??

<web-app>
	<servlet>
		<load-on-startup> int_value</load-on-startup>
	</servlet>
………………..
</web app>




4. So servlet loading- servlet ,  instantiation and servlet initialization will be performed during the
   server startup.

5. So if we want to load the servlet at the time of the server startup only then we can cofigure it in the we
   web.xml using load-on-startup.


6. So we want servlet loading, servlet instantiation and servlet initialization to be performed
   as the part of servlet start up only.


7. If we pass negative value as argument then wont cause any affect.

8. But now if we pass 0 , then at the time of the server startup only servlet
   loading , servlet instantiation and initialization will be performed.
   Request processing will be performed at the end only. So 0 is allowed

9. Now if we provide 100 then then also we get the same answer as when we passed 0 input.

10. int_val must not be negative value, it must be 0 or any +ve value can be passed.

11. If more then one servlet is having load on startup configuration then which servlet will be loaded
    first and which servlet is going to get at the last.

    Answer:
	
	Here in this case the servlet which is having the less load on startup value will be loaded first
        and the servlet having more will be loaded later.

So this is like ranking system. The one having less number will have more priority and 
high number will have the less priority.



Another case:
===============================================================================

Here  in this case we can provide two servlet configured for the load on startup.


class MyServlet extends HttpServlt
{

Static {

	System.out.println(“TestServlet2 Loading”);
}

public TestServlet2{
	
	System.out.println(“TestServlet2 instantiation”);

}

public void init(ServletConfig config)
{

	System.out.println(“TestServlt2 Initialization”);
}


}

protected void doGet(HttpServletRequest request, HttpServletResponse response) 
throws ServletException
{

}

Create a similar class configuration for another servlet.

If we provide the same load on startup number for two servlets then it will internally 
follow the order of the container implementation.


Where are we going to utilize this??
================================================================================


In Mvc based applications, will use servlet as controller. Controller has to load 
all the configuration files , it has to load all the modules as part of the initialization.


If the controller servlet performs its initialization after the server startup or after getting the 
first request then in that case performance of the application will be reduced.

But If controller servlet performs its initialization at the time of Server start up then in that case 
the performance of the application will be improved.

To achieve this requirement that is to perform controller servlet initialization at the time of server 
start up we have to use the load on start up configuration.

In MVC in controller servlet it is mandatory to use load on startup.

*/