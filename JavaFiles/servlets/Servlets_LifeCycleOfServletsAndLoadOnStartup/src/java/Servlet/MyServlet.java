/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyServlet extends HttpServlet
{
    
    static
    {
        System.out.println("Servlet is loaded in memory");
        
    }
    

    public MyServlet()
    {
        
        System.out.println("Servlet Instantiation is completed.");
        
    }

    
    public void init(ServletConfig config)
    {
        
        System.out.println("Servlet initialisation is completed.");
        
    } 
    
    
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
    {
        
        res.setContentType("text/html");
        
        PrintWriter out= res.getWriter();
        
        out.println("<html> <head> <title> Sample </title> <body bgcolor='red'> <h2> MyFirstProgram</h2></body></html>");
        
        System.out.println("doGet() method is called");
        
    }
    

   @Override
    public void destroy()
    {
        System.out.println("Servlet is unloaded");
    }

}  


/*

Jul 24, 2018 11:53:02 PM org.apache.tomcat.util.digester.SetPropertiesRule begin
WARNING: [SetPropertiesRule]{Server/Service/Engine/Host/Context} Setting property 'source' to 'org.eclipse.jst.jee.server:Servlets_ServletLifeCycleAndLoadOnStartUpDemo' did not find a matching property.
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Server version:        Apache Tomcat/8.5.30
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Server built:          Apr 3 2018 20:04:09 UTC
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Server number:         8.5.30.0
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: OS Name:               Linux
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: OS Version:            4.13.0-45-generic
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Architecture:          amd64
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Java Home:             /usr/lib/jvm/java-8-openjdk-amd64/jre
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: JVM Version:           1.8.0_171-8u171-b11-0ubuntu0.16.04.1-b11
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: JVM Vendor:            Oracle Corporation
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: CATALINA_BASE:         /home/vikas/eclipse-workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: CATALINA_HOME:         /home/vikas/Downloads/apache-tomcat-8.5.30
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Command line argument: -Dcatalina.base=/home/vikas/eclipse-workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Command line argument: -Dcatalina.home=/home/vikas/Downloads/apache-tomcat-8.5.30
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Command line argument: -Dwtp.deploy=/home/vikas/eclipse-workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Command line argument: -Djava.endorsed.dirs=/home/vikas/Downloads/apache-tomcat-8.5.30/endorsed
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.VersionLoggerListener log
INFO: Command line argument: -Dfile.encoding=UTF-8
Jul 24, 2018 11:53:02 PM org.apache.catalina.core.AprLifecycleListener lifecycleEvent
INFO: The APR based Apache Tomcat Native library which allows optimal performance in production environments was not found on the java.library.path: [/usr/java/packages/lib/amd64:/usr/lib/x86_64-linux-gnu/jni:/lib/x86_64-linux-gnu:/usr/lib/x86_64-linux-gnu:/usr/lib/jni:/lib:/usr/lib]
Jul 24, 2018 11:53:02 PM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["http-nio-8082"]
Jul 24, 2018 11:53:02 PM org.apache.tomcat.util.net.NioSelectorPool getSharedSelector
INFO: Using a shared selector for servlet write/read
Jul 24, 2018 11:53:02 PM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["ajp-nio-8009"]
Jul 24, 2018 11:53:02 PM org.apache.tomcat.util.net.NioSelectorPool getSharedSelector
INFO: Using a shared selector for servlet write/read
Jul 24, 2018 11:53:02 PM org.apache.catalina.startup.Catalina load
INFO: Initialization processed in 996 ms
Jul 24, 2018 11:53:02 PM org.apache.catalina.core.StandardService startInternal
INFO: Starting service [Catalina]
Jul 24, 2018 11:53:02 PM org.apache.catalina.core.StandardEngine startInternal
INFO: Starting Servlet Engine: Apache Tomcat/8.5.30
Jul 24, 2018 11:53:04 PM org.apache.jasper.servlet.TldScanner scanJars
INFO: At least one JAR was scanned for TLDs yet contained no TLDs. Enable debug logging for this logger for a complete list of JARs that were scanned but no TLDs were found in them. Skipping unneeded JARs during scanning can improve startup time and JSP compilation time.
Jul 24, 2018 11:53:06 PM org.apache.jasper.servlet.TldScanner scanJars
INFO: At least one JAR was scanned for TLDs yet contained no TLDs. Enable debug logging for this logger for a complete list of JARs that were scanned but no TLDs were found in them. Skipping unneeded JARs during scanning can improve startup time and JSP compilation time.

Servlet is loaded in memory
Servlet Instantiation is completed.
Servlet initialisation is completed.

Jul 24, 2018 11:53:06 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-nio-8082"]
Jul 24, 2018 11:53:06 PM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["ajp-nio-8009"]
Jul 24, 2018 11:53:06 PM org.apache.catalina.startup.Catalina start
INFO: Server startup in 3898 ms


doGet() method is called2

*/