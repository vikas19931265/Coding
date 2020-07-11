/* Types of Applications in JAVA.
 ==============================================================================

By using java programming language we can prepare two types of applications

1. Standalone applications.

2. Enterprise applications.

            


Standalone applications again divided into two types.

0. preparing a java program in single computer and running in single computer without using Client
   Server architecute is called Standalone applications.

1. CUI Applications(Charater user information- Type of application you created for PMF-WS file handling)

2. GUI Applications


Enterprise Applications(aka Distributed Application) can also be divided into two categories.

1. Web Applications also known as Web-Based Distributed Application

2. Distributed Applications also known as Remote-Based Application

                                        
                                                    

 CUI Applications( Character user information)
==========================================================

CUI application is java application designed in such way that it will take input from 
commmand prompt and give output there.

command prompt will be treated as a as interface here between user and java program.



It will support only character data

Lets take an example we are trying to run Add.java using cmd.

D:\ javac Add.java

D:\ java Add

First Value: 10 (input)

Second Value: 20(input)

Addition :  30 (output)


GUI Application
==========================================================

Here if we open command promt and give the command then another 
window will open. This will be the GUI in which we will give the input
and output will be presente inside it.


GUI application is java app designed in java in such a way to use 
take input from collection of GUI components and provide the output to GUI.

This will support only the graphic data.



-----------command prompt-----------------------------
|
|D:\apps>javac Add.java
|D:\apps> java add
|
|   ---------------------------|
|   |                   - *    |-----> New Frame(GUI)
    ---------------------------|
|   |
    |   first val  --10----
|   |   second val --20-- 
|   |   Result     --30--- 
|   |
|   |     Addbutton   
|
        

Web Applications
==================================

    
    -----------                       --------  
    |          |    ----------        |  
    |client    |    |network |        | -Server Side application-  
    |          |    ---------         | | 
    ------------                        | ---Server side components    
                                        | |  
                                        | |  


Client is fixed.

Browser makes request and reaches  server

Server identifies for which resource request is coming

server will execute the component

generates response given to network

network take response and carry it to the client

finally response is coming to the browser.

Example welcome is the response you want to get.

    client is fixed , client is browser and is fixed it is not
    any java program


Remote Based Distributed Application
========================================================

Client machine is  a java program

Browser is only present only till the web application

for the distributed application no browser

At client side and server machine side that is remote machine
java program is present.

Only one JVM needed in web application that is needed at the server side

in remote based distributed application JVM is required in both the machines
that is client and the server.

Why because at local machine java code is present and remote machine also the 
java code is present.

In case of distributed when we execute both side
client side java app reqeust goes to the server side proram
now the server side program will execute. The response will come to 
the network and network will take the response back to the client.

Difference

1. In case of web application the complete application logic is distributed
   overs server machine only.

2. in case of Distribute applications , the complete application logic is 
   distributed over both local machine as well as the remote machine.

3. To prepare web applicaiton we will use a set of technologies called as 
    web technlogies.

        Example CGI(common gateway interface)
                Servlets
                JSPs

4. to prepare distributed applications we will use a set of technologies calles
  as distribute technologies.

    Example

        Socket programming.
        RMI
        CORBA
        EJBs
        Web Services
        

5. In case of web applications the client if fixed that browser and it is not
    a java program however in the case of distributed application the client
    is not fixed.

    meaning client could be a normal java program or a gui application 
    or it may be a servlet progarm or a jsp applicaton or a framework 
    related application or spring module.

    the client is not fixed.

    BUT is should not be a browser

3. In case of web applications, client is fixed that is Browser. In case of 
    distributed applications client may be a java program with main method.
    a GUI based application with actionPerformed method , a servlet program
    a JSP application a strut application a JSF application , a spring web module..

4. In case of web application server side application server side application will provide
    services to only one type of client that is browser.

    but in case of Distributed application server side application may provide 
    services for any type of client.


5. The main purpose of web application is to generate dynamic response but in starting
   that was not the purpose but now the intention has changed and it is mainly for the generation 
   of dynamic pages


  in starting they were able to manage only static pages. But presently the purpose is not
    only the static response but also dynamic response is also generated.

  Lets take an example of durga software
    where a student is interacting with durga software site
    for some payment transaction and in return durga software
    is interacting with another bank lets say icici for payment gateay
    in this case both durga softwares and icici are interacting with one another
    
    here durga software will have its own set of server side programming
    and icici bank willl have its own set of programming
    
    Hence this interaction is distributed application.
    
    that is applications trying to interact with one another 
    where the client is not fixed an it is not browser

    
    durga softwares and iciic are remote machines. icii providing services
    and durga is consuming it.

    in the same application a student is also interacting with the durga software site.

    however when a stuent is interacting with the durga softwares site
    then client here is the browser which is fixed and the response is cmoing
    from the server . This is a we based distributed application.


----------------------------------web application-----     ---------------distributed application------    
    ---web client--------------             -----server machine                 -----remote machine ICICI
    |                                        |                                  |   javaApplication or 
    |sname                                   |---details come to server                   .NetApplication
    |                                        |but durgasoft need banking service                           |
    |scourse                                 |so it will interact with                           |    
    |                                        |icici remote machine                          |    
    |cno                                     |                          |
    |                                        |   
    |submitbutton--------request------------>--------------------------
                                                        ^
                                                        Database        



We can use EJB or SocketProgramming for communication between durga soft and ICICI remote machine.


Learned tier also here

this is a 2 tier app.

If only browser and server is there then it is 1 tier architecure





7. The main purpose of web applications is to generated dynamic response from teh 
   server machine

    and the main purpose of the distributed applicatons is to establish the communicaton
    between local machine and the remote machine in order to get the remote    
    services from the remote machine.

8. Server side applications are executed using the servers.

Two types of servers are there
===========================================
    
1 WEB and application servers

Web servers are able to execute only web appliactons

but application servers are able to execute both web applicatons 
as well as the distributed applicatons.

Web applications are executed only by the web servers but the distributed
applicatons are executed both by the web servers and the application servers.

9. Web application is a collection of web components like servlets JSP, which are executed by the  
   web containers like servlet container and jsp containers.


    Distributed application is the collection of distributed components like 
    EJB which are executed by the EJB containers.


10 Servlets and jSP will be used to prepare the web applications.
    
*/                                                                     



