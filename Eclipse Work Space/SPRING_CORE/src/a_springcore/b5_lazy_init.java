package a_springcore;
/*
Lazy init concept
==================

1. As we know that scope of bean is singleton by default. So all the object of bean will be created at the time
   of the xml load.
   
   
2. But lets say that in case i dont want some object to be created during the time of xml load but instead wants it 
   to be created on demand then we can set the property of lazy-init to true.
   
   Note: concept applicable for only those beans not to be injected.
   
by ramesh
=============

In ApplicationContext containter, beans are instantiated when we activated spring container. So when we
 call getBean(-) method just it returns already created object.

By default ApplicationContext doesn't perform lazy instantiation. if we want to see the lazy instantiation, 
we have to use "lazy-init" attribute of <bean> tag or "default-lazy-init" attribute of <beans> tag.

Example
-------
<bean id="helloBean" class="com.rameshit.scope.HelloBean" lazy-init="true">
<property name="message">
<value>hello...</value>
</property>
</bean>

"lazy-init" attribute takes boolean value.
the default value is "false".
   
  
lazy init at global level
============================

If we want all the classes to follow lazy init then we can define lazy init at the global level and the property
will become applicable to all.

beans xmlns="http://www.springframework.org/schema/beans" default-lazy-init="false"


   ====for more info refer program=========

*/