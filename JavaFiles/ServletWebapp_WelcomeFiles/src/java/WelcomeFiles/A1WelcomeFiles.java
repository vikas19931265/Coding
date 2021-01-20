package WelcomeFiles;

/*

WELCOME FILES:
=====================

-> In general, in all the web applications some pages like login pages, index pages, home pages and so on
   are the first pages.

-> In the above context, to access the first pages we have to specify the respective html page name or jsp
   page name as resource name in URL even though they are common for each and every user.

-> To overcome the problem, we have to declare the respective html or jsp page as welcome file.

-> Welcome file is the first page of the web application, it must be executed by the container
   automatically when we access the respective application without specifying resource name in URL.

-> To declare welcome file in web.xml file, we have to use the following xml tags.

EX: <web-app>
 <welcome-file-list>
         <welcome-file>file1</welcome-file>
         <welcome-file>file1</welcome-file>
 </welcome-file-list>
 </web-app>

-> From the above tags representation, it is possible to provide more than one welcome file with in a
   single web application but w.r.t. multiple no. of modules.

-> If we provide more than one welcome file with in a single web application w.r.t. modules the container
   will search for the respective welcome file as per the order in which we configured web.xml file.

-> The welcome-file-list element of web-app, is used to define a list of welcome files.
   Its sub element is welcome-file that is used to define the welcome file.

-> A welcome file is the file that is invoked automatically by the server, if you don't specify any file name.

-> By default server looks for the welcome file in following order:

welcome-file-list in web.xml
index.html
index.htm
index.jsp

-> If you have specified welcome-file in web.xml, and all the files index.html, index.htm and index.jsp exists, priority goes to welcome-file.

-> If welcome-file-list entry doesn't exist in web.xml file, priority goes to index.html file then index.htm and at last index.jsp file.

-> If you have the welcome file, you can directory invoke the project as given below:

    http://localhost:8888/myproject  

As you can see, we have not specified any file name after the project.

*/


