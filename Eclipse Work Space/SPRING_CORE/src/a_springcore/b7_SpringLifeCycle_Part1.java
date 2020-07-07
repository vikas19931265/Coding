package a_springcore;
/*
 Spring bean lifecycle
 ==============================

Servlet has life cycle methods i.e init(-), service(-) and destroy(-) methods. these methods are called by the 
container after creating the servlet object. so if we write any logic in these life cycle methods, this logic is 
executed by the containers.

Spring container controls the life cycle methods of spring bean i.e. from instantiation to destruction.

Spring bean has following life cycle states:

1 Instantiation
2 Initialization 
3 Ready to use
4 Destruction

 initialization method, destruction method can be given to spring bean in the following ways

1.Programatic Approach
----------------------
In this approach we have to implement spring provided interfaces i.e InitializingBean and DisposableBean

InitializingBean having only one method. i.e afterPropertiesSet()
DisposableBean having only one method. i.e destroy().

Ex:
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class HelloBean implements InitializingBean, DisposableBean{

private String message;
public HelloBean() {
System.out.println("default constructor");
}

public void setMessage(String message) {
System.out.println("setter called");
this.message = message;
}
public String getMessage() {
return message;
}

public void afterPropertiesSet() throws Exception {
System.out.println("afterPropertiesSet called.");
}
public void destroy() throws Exception {
System.out.println("destroy method called.");		
}
}//class

lifecycle.xml
-------------
similar to hello application.

client
------
--
--
AbstractApplicationContext context = new ClassPathXmlApplicationContext("lifecycle.xml");

HelloBean bean = context.getBean("helloBean", HelloBean.class);
System.out.println(bean.getMessage());
context.registerShutdownHook();
}
}

output
------
default constructor
setter called
afterPropertiesSet method called.
Hello.....
destroy method called.

In the above client application if we are not using AbstractApplicationContext container and 
registerShutdownHook() method, container won't call destory() method.

So spring container wants to call destroy() method of DisposableBean bean interface we need to register a
shutdown hook using registerShutdownHook() method that is defined in the AbstractApplicationContext class. 

This will ensures a graceful shutdown and calls the relevant destroy methods.

In this approach each bean has to implements InitializingBean and DisposableBean interfaces. and Spring bean classes
depends on Spring API.

2.Declarative approach
=======================================
In this approach we have to use "init-method" and "destroy-method" attributes of <bean> tag.

public class HelloBean {
	private String message;
	public HelloBean() {
	System.out.println("default constructor");
	}

	//setters and getters

	public void myInit() {
	System.out.println("MyInit called");
	}
	public void myDestroy() {
	System.out.println("myDestroy called");
	}
}
xml
---
<beans>
<bean id="helloBean" class="HelloBean" init-method="myInit" destroy-method="myDestroy">

<property name="message" value="Hello..."></property>
</bean>
</beans>


NOTE:
if the multiple bean classes having myInit() and myDestroy() methods we have to configure these methods
for each bean configuration

instead of configuring myInit and myDestroy methods multiple times as local, it is recomnanded to configure as 
global using  default-init-method and  default-destroy-method attributes of <beans> tag..
 
 
3. Annotation based approach

We will discuss about the annotation approach while we are dealing with annotations.


There are more steps in bean lifecycle used by container but not developer.


lifecycle
---------

instantiation

populate properties

setBeanName

setBeanFactory

pre initialization

initialization of Bean(afterpropertiesset  or myInit)

post initialization

Ready to use

destroy (destroy() or myDestroy).

 */









