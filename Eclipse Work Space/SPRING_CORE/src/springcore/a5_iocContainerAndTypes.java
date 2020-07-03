package springcore;
/*
IOC Containers
==================

The IoC container is responsible to instantiate, configure and assemble the objects. 
The IoC container gets informations from the XML file and works accordingly.

The main tasks performed by IoC container are:

	to instantiate the application class
	to configure the object
	to assemble the dependencies between the objects
	
	There are two types of IoC containers. They are:

BeanFactory
ApplicationContext


The central component of a spring application is the containers.

Spring container creates the spring bean objects and it manages the bean life cycle.

The spring container responsibility is for providing the dependency injection.

It acts as repository for all the configured bean

											BeanFactory Container
											===========================																																					

It is an interface defined in org.springframework.beans.factory package.

It is basic container of the spring.

BeanFactory container creates the beans and provides dependency injection.

XmlBeanFactory implements BeanFactory interface.

      BeanFactory
           |
	   |
     XmlBeanFactory      

XmlBeanFactory is a class defined in org.springframework.beans.factory.xml package.

It reads the bean definitions from an xml file and instantiates beans.

XmlBeanFactory loads the configuration file using different classes that implements 
org.springframework.core.io.Resource interface.

Resource interface is the base interface for all the classes that provide to access the
spring configuration file.

The following classes are that implements Resource interface.

org.springframework.core.io.FileSystemResource
org.springframework.core.io.ClassPathResource etc.

Bean factory with FileSystemResource
==========================================

loads the Spring configuration file from the specified path.

Using XmlBeanFactory with FileSystemResource ---------------------------------------
BeanFactory factory = new XmlBeanFactory(new FileSystemResource("D:/work/spring/Spring Core/src/hello.xml"));

HelloBean bean = factory.getBean("helloBean", HelloBean.class);

In the above example FileSystemResource is taking complete system path(abso1ute path). So in the 
future if we change location of the project then again we need to change the location of spring 
configuration file in the program. That's why it is not recommended to use FileSystemResource.

Bean factory with ClassPathResource
==============================================

BeanFactory factory = new XmlBeanFactory(new ClassPathResource("hello.xml"));

HelloBean bean = factory.getBean("helloBean", HelloBean.class);

In the above example container reading the configuration file from class path, but we are not specifying the complete path. 

So it is recommended to use ClassPathResource instead of FileSystemResource.

BeanFactory is a lazy container, which means BeanFactory instantiates the beans when the getBean() method is called.

***If the configuration file contains ten beans, each bean object is created only when the user calls
the getBean(-) method by specifying the id of the bean.

The BeanFactory container is usually used in very simple applications(stand alone applications).

NOTE:
It is not recommended to use BeanFactory in the real world applications.

												ApplicationContext
												===================
												
**It is an interface defined in org.springframework.context package.

It is child interface of BeanFactory interface.

ApplicationContext having all the features of BeanFactory container.

ApplicationContext is not a lazy container(by default), means it is an active container.

It instantiates all the configured beans when the application is launched and before calling getBean(-). 
means when ApplicationContext is created it creates all the configured beans and when we call getBean(-) 
by specifying the bean id just returns the object.

The advantages of active creation of beans by ApplicationContext is the handling of exception.
If an exception is thrown while creating a bean, it can be handled during the start up of the application.

following classes are implements ApplicationContext interface

org.springframework.context.support.FileSystemXmlApplicationContext
org.springframework.context.support.ClassPathXmlApplicationContext
org.springframework.web.context.support.XmlWebApplicationContext etc.

Activation of ApplicationContext is nothing but creation of ApplicationContext implementation classes objects.

Ex:
ApplicationContext context = new
ClassPathXmlApplicationContext("hello.xml");

FileSystemXmlApplicationContext
-------------------------------
Ex:

--
--

ApplicationContext context = new
FileSystemXmlApplicationContext("D:/work/spring/Spring Core/src/hello.xml");

HelloBean bean = context.getBean("helloBean", HelloBean.class);

In the above example FileSystemXmlApplicationContext is taking complete system path(absolute path). 
So in the  future if we change location of the project then again we need to change the location of 
spring configuration file in the program. That's why it is not recommended to use FileSystemXmlApplicationContext.

ClassPathXmlApplicationContext
------------------------------
Ex:
--
--
ApplicationContext context = new
ClassPathXmlApplicationContext("hello.xml");
HelloBean bean = context.getBean("helloBean", HelloBean.class);

In the above example container reading the configuration file from class path, but we are not 
specifying the complete path. So it is recommended to use ClassPathXmlApplicationContext instead 
of FileSystemXmlApplicationContext.

XmlWebApplicationContext
-------------------------
This is used in spring webmvc module. This container object created by web container internally. so no need to
create object by the developer.

ApplicationContext based container provides all the features of BeanFactory. In addition to them it provides 
the following features also. 

1) Event-handling support 
2) Internationalization support
3) Remoting 
4) EJB Integration
5) Scheduling
6) JNDI lookup ... etc.

NOTE: RealWorld applications uses Applicationcontext container.

To work with ApplicationContext we have to use following extra jars in the class path.

org.springframework.context-3.0.5.RELEASE.jar
org.springframework.asm-3.0.5.RELEASE.jar
org.springframework.expression-3.0.5.RELEASE.jar

Difference between BeanFactory and Application context
========================================================

1. Bean factory is lazy container meaning the bean class object is not provided immediately when we load the resource 
 and activate the container( i.e creating container class implementation object). The object is provided only when we 
 are trying to call the getBean() method on the container object. And Only that object is provided whose id and object class
 is mentioned in arguments.
 
2. However  Application context is active container meaning during the load of the resources and creation of container object
implementation object itself all the bean objects are provided. 

3. Application context extends from BeanFactory and provides additional fetures.
*/