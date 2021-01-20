/*
STEP 2: DEPLOYMENT DESCRIPTOR OR WEB.XML FILE:
====================================================


1. Deployment descriptor is web.xml file  , it will provide description about our web application 
   which is required by the container in order to execute the server side resources.


2. Deployment Descriptor is web.xml file, it can be used to provide the metadata about the present web
   application required by the container in order to perform a particular server side action.
    In web applications, web.xml file include the following configuration details w.r.t the web application

1. Welcome Files Configuration
2. Display Name Configuration
3. Servlets Configuration
4. Filters Configuration
5. Listeners Configuration
6. Context Parameters Configuration
7. Initialization Parameters Configuration
8. Session Time Out Configuration
9. Load On Startup Configuration
10.Error Page Configuration
11.Tag Library Configuration
12.Security Configuration


3. In general in web applications, we will deploy the servlets .class files under classes folder of the web
   application directory structure i.e. private area.

4. If we deploy any resource under private area then client is unable to access that resource through its
  name, client is able to access that resource through alias names or locators. In case of servlets, client is
  able to access servlet classes through the locators called as URL Patterns.


5. If we provide multiple number of servlets under classes folder and we provide a particular request to a
   particular servlet available under classes folder with an URL pattern then container should require
   mapping details between URL patterns and servlets class names as metadata in order to identify w.r.t
   servlet.


In the above context, to provide the required metadata to the container we have to provide servlet
configuration in web.xml file. To provide servlet configuration in web.xml file we have to use the
following xml tags.

<web-app>

    <servlet>
        <servlet-name>logical_name</servlet-name>
        <servlet-class>fully qualified name of servlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>logical_name</servlet-name>
        <url-pattern>urlpattern_name</url-pattern>
    </servlet-mapping>
--------
</web-app>


NOTE: In the above servlets configuration, <servlet-name> tag value under <servlet> tag and
<servlet-mapping> tag must be same.

EX: 
<web-app>
    <servlet>
        <servlet-name>loginservlet</servlet-name>
        <servlet-class>com.dss.login.LoginServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>loginservlet</servlet-name>
        <url-pattern>/login</url-pattern>
    </servlet-mapping>
</web-app>

If we want to access the above servlet then we have to provide the following URL at client browser.
        
                http://localhost:8080/loginapp/login




*/