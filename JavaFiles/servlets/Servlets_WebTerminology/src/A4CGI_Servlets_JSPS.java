/*

CGI vs Servlets( multiple requests leads to multiple processes)
==============================================================================

CGI
++++++++++

    1. Here in this case server has to create process for each and every request.

    2. Here for every request a new process is going to get created due to which
       more system resources will be consumed. This will cause delay in response
       and performance of the system is going to be down. Also CGI is designed using 
       some scripting language which is error prone.



Servlets
++++++++++++++

    1. Servlets is thread based technology.

    2. For every request , a separate thread is created.

    3. For every request coming from the client separate thread will be created at the
       the server machine.

    4. As the servlets are using thread mechanism hence the response which will be generated will be quick

    5. Here in this case more then one thread is acting on a single servlet object.


Why to go for Servlets when we have CGI???
++++++++++++++++++++++++++++++++++++++++++++

1.CGI is the server side technology designed on the basis of C technology and Scripting. C
 technology is the process based technology, it will make CGI technology as process based technology 
 which will make our web application slower.


2. If we deploy any CGI application at server side then container will create a separate process for
   each and every request. If we increase number of requests automatically CGI container will
   generate number of processes at server.


3. Basically process is a heavy weight component, to handle single process system has to consume a  
   lot of system memory and execution time.

4. Due to the above reason to handle the multiple number of processes at a time server machine may
   get burden, due to this reason server may generate delayed responses to the client request, it will
   reduce the performance of server side application.

5. In the above context, to increase the performance of the server side application we have to use an
   alternative server side technology i.e. Servlets.


6. Servlet is the server side technology designed on the basis of java technology. Java technology is a
   Thread based technology, it will make servlets as Thread based technologies.

7. If we deploy any servlet application at server then for every client request servlet container will
   generate a separate thread on the respective servlet object.


8.In the above context, if we increase number of requests even container will create number of
  threads instead of processes.

9 When compared to process thread is light weight, to handle multiple number of requests i.e. thread
  server machine may not get burden, it may provide quick responses for the client request, it may
  increase the performance of server side application.


Difference Between Servlets and JSPs
++++++++++++++++++++++++++++++++++++++++++

1.Servlets are very good at time of getting request from client and JSPs are very good in 
  displaying data on the browser machine.

2. Servlets are used to take the request and to process the request.

3. When we want to generate some kind of response to the client then in that case JSPs will be used.

4. In web applications , we will use servlets mainly for processing the requests( executing the 
   business logic)

5. JSPs are mainly used for the presentation part.

6. In MVC based applications we have to use servlets as containers and set of JSP pages as view part.


Additonal
++++++++++++

1. If we want to design web applications by using Servlets we must require very good java knowledge.

2. To design web applications by using Jsp technology it is not required to have java knowledge, it is
   sufficient to have presentation skills.

NOTE: The main intention to introduce Jsp technology is to reduce java code as much as possible in
web applications.

3. In web applications, we will prefer to use Servlets to pick up the request and process the request.
   But we will prefer to use JSPs to generate dynamic response to the client with very good look and
   feel.


NOTE: In web applications, we will utilize Servlets to provide controller logic, integration logic,
validation logic, implementing business logic and so on. But we will prefer to use Jsp technology only
to provide presentation part.


*/