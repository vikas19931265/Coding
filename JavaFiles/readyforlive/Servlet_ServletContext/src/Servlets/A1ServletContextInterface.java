/*

ServletContext Interface
==========================================

An object of ServletContext is created by the web container at time of deploying the project. 
This object can be used to get configuration information from web.xml file. There is only one 
ServletContext object per web application.

If any information is shared to many servlet, it is better to provide it from the web.xml file 
using the **<context-param> element.


Advantage of ServletContext
============================================

Easy to maintain if any information is shared to all the servlet, it is better to make it available for all the servlet. 
We provide this information from the web.xml file, so if the information is changed, we don't need to modify the servlet. 
Thus it removes maintenance problem.


Usage of ServletContext Interface
=============================================

There can be a lot of usage of ServletContext object. Some of them are as follows:

-> The object of ServletContext provides an interface between the container and servlet.
-> The ServletContext object can be used to get configuration information from the web.xml file.
-> The ServletContext object can be used to set, get or remove attribute from the web.xml file.
-> The ServletContext object can be used to provide inter-application communication.




        WEB APPLICATION----------1) deploy ----------> Container(WEB SERVER)----->Created object of servlet context----->Servlet Context object.


*/