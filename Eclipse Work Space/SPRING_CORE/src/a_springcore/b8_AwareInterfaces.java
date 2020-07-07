package a_springcore;
/*
Aware interfaces part of Spring bean lifecycle
===================================================

If we want to know the BeanFactory information, ApplicationContext information and spring bean name configured in
xml file we have to use Aware interfaces.

There are lot of aware interfaces that are provided by the spring like BeanFactoryAware,
BeanNameAware, ApplicationContextAware, ServletConfigAware, ServletContextAware,

Aware interfaces methods like setting bean name are called after setting the setter property.

ApplicationEventPublisherAware etc.

ApplicationContextAware
=============================

ApplicationContextAware is an interface. It is used to get the ApplicationContext container information in 
spring bean.

It has one method i.e., setApplicationContext(ApplicationContext applicationContext).
This method is automatically called by the container.

refer program for more info.


BeanNameAware
========================

BeanNameAware is an interface. It is used to get the Bean name i.e "id" name in the configuration file.
It has one method i.e., setBeanName(String name).
This method is automatically called by the container.

Ex:
public class HelloBean implements BeanNameAware {
//properties setter getters
//implement interface method.
public void setBeanName(String name) {
this.name = name;
System.out.println("Bean Name: " + name);
}
}

*/