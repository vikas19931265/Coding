package springCore;
/*
Spring Resources
====================

To develop spring core application we have to develop following resources.

1.Simple java bean class or Spring bean class or POJO.
2.Spring Configuration file.
3.Spring client application.( in normal core java client is main method . In real world client  could be some of framework)

1.Simple java bean class or Spring bean class.
---------------------------------------------
Here simple java bean class acts as spring bean class.

This class may implements business methods also when it implements an interface.

It contains the code to support dependency injection(Setter injection or constructor injection)

Contains spring bean life cycle methods.

It contains other utility and helper methods.

Spring bean class also called as POJO class.

Spring Bean or POJO (Plain old java object)
-----------------------------------
While developing any java class, that class does not extends or implements third party API is called POJO.

Rules for Spring Bean class
----------------------------
1.It should be public and non abstract class.

2.class implements java.io.Serializable.(optional)

3.provide default constructor to support setter injection or parameterized constructor to support constructor injection. 

4.declare private properties.

5.generate setters and getters for each property to support setter injection.

example
===========

Ex:
package com.rameshit.spring;

public class HelloBean {

  private String message;

  public HelloBean() 
    {
    System.out.println("default constructor.");
    }

    public void setMessage(String message) {
    this.message = message;
    }
   public String getMessage() {
   return message;
  }
}

2. Spring Configuration file
================================

Spring configuration file is a xml file. so any name.xml acts as spring configuration file.

it contains configuration of spring beans.

Spring client application loads the spring configuration file.

Ex:
hello.xml
---------
<!-- DTD -->
<beans>
<bean id="helloBean" 
 class="com.rameshit.spring.HelloBean">
 <property name="message">
 <value>Hello World.</value>
 </property>
</bean>
</beans>

<property> tag is used to configure the property name. so here "message" is property in HelloBean class.

<value> tag is used to configure the value.

NOTE: if the property type is either String or primitive data type(int, float, double .....) or wrapper classes 
(Integer Float, Long, Double ....), to configure this property value we will 
go for either <value> tag or "value" attribute of <property> tag.

3.Spring Client application.
==================================

-Any java, j2ee, framework based applications acts as spring client application.

-Activate the spring container by loading spring configuration file.

-Get the spring bean class object from the spring container.

-Calls the methods defined in spring bean class.

Ex:
package com.rameshit.spring;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.FileSystemResource;

public class SpringClient {
 public static void main(String[] args) {

FileSystemResource resource = new FileSystemResource("/hello.xml")

BeanFactory factory =  new XmlBeanFactory(resource)

Object object = factory.getBean("helloBean");

HelloBean bean = (HelloBean)object;

System.out.println(bean.getMessage());
}
}

*/