/*

Steps to prepare Web Applications.
==================================

1. Install the server software.
	
2. Prepare Web application directory structure. If we are using IDE then we dont have 
   to create it or else we have to create the directory structure by ourself.

3. Prepare the deployment descriptor file that is the web.xml file.

4. Prepare the web resources like your Servlets and JSPs.

5. Start the server and then deploy the web application

6. Access the web applications


If we use the IDE part then most of the steps will be removed from here.
No need to prepare the directory structure, preparation of deployment descriptor 
file is automatic we just need to edit  it. We have to do all this but the process Is going to be very simple.



STEP 1: WEB APPLICATION DIRECTORY STRUCTURE:
===================================================

If we want to design any web application then we have to prepare the following directory structure
at server machine.


            -----------------------tomcat 7.0---------------

            ----------------------webapps---------------------

            ---------------------applicationfolder(context root)------

         themes folder                         -----WEB-INF folder------
                                              |
         src folder                           |       web.xml file    
                                              |    
         img folder                           |




2.  When we install tomcat server in our system, then automatically a folder will be created like Tomcat8.0.  
    Inside tomcat8.0 number of folders will be present like bin folder , lib folder,  
    logs folder, work folder  and very important one that is webapps folder will be existed in that.
    Like this important folder name conf folder will be present as well.


    Bin folder container batch files, exe files managing server start and shutdown.
    Lib folder contains the jar files required for server to run.
    Logs files for sake of maintaining logs about our server.
    Cong folder contains .xml file having total server configuration details like port number of server and host name of the server.
    Work contains contains duplicate of our applications.                     



3. To represent our own web applications in server we have to prepare a separate folder under webapps
   folder i.e. application folder or context root. Inside the application folder,


    a.  Themes: To store .css files(cascade style sheet) to generate reports.

    b.  Images: To store logos of the organizations, background sceneries and so on in the form of .jpg,
        .jpeg, .gif files.

    c. Literature: To store documentations in the form of .doc, .docex and so on.

    d. src(Source code): It can be used to store all the source files like Java files.

    e. Along with all these folders it is possible to provide some static resources directly like .html files
       and dynamic resources like .jsp files.

        WEB-INF folder will include

    1. web.xml: This xml file can be used to store the metadata about the web application
       the container to perform a particular action.

    2. lib: It is able to manage jar files which are required by the server side components.

    3.classes: It will include .class files of servlets, filters, listeners and so on.



1. PRIVATE AREA:
===========================

In web application directory structure, WEB-INF folder and its internal is treated as private area. If we
deploy any resource under private area then client is unable to access that resource by using its name
directly.

NOTE: In general we will keep servlet .class files under classes folder i.e. private area so that we are
unable to access that servlet by using its name directly from client.

To access any servlet we have to define an URL pattern in web.xml file w.r.t this servlet, with the
defined URL pattern only client is able to access the respective servlets.

Example
-------------

https://localhost:1010/loginapp/login
Here login is not the servlet name but logical name which is actually mapped to the servlet


2. PUBLIC AREA:
==============================

The area which is in outside of WEB-INF folder and inside the application folder is treated as public
area. If we deploy any resource under public area then client is able to access that resource by using its
name directly.

NOTE: In general in web applications, we are able to keep html files under application folder i.e.
public area so that we are able to access that resources by using its name directly from client .


Example: https://localhost:1010/loginappp/loginform.html



*/