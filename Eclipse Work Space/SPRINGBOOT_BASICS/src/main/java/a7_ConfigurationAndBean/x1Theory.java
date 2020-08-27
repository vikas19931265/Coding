package a7_ConfigurationAndBean;
/*


@Configuration(also a bean class)
=============================

This is a class level annotation used by the spring container to see the bean definations. In configuration only
we define all the bean method which will be registered with spring container.

example:

	@Configuration  
public class Vehicle  
{  
@BeanVehicle engine()  
{  
return new Vehicle();  
}  
}  



Configuration vs Component
====================================


@Configuration 

Indicates that a class declares one or more @Bean methods and may be 
processed by the Spring container to generate bean definitions and service requests for
those beans at runtime


@Component Indicates that an annotated class is a "component". Such classes are considered 
as candidates for auto-detection when using annotation-based configuration and classpath 
scanning.


@Bean
==========================

It is a method-level annotation. It is an alternative of XML <bean> tag. It tells the method to
produce a bean to be managed by Spring Container.

Example

@Bean  
public BeanExample beanExample()   
{  
return new BeanExample ();  
}  




*/