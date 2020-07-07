package a_springcore;
/*
Bean scopes
==================

Spring framework supports five type of scopes for bean instantiation.
singleton
prototype
request
session
globalSession

to configure the scope to the <bean> tag we have to use "scope" attribute.
Ex:
<bean id="helloBean" class="HelloBean" scope="singleton/prototype/request....">

singleton
---------
Specifies to container to create the configured spring bean only once in the container.

It is default scope for the bean.

if the scope is singleton it creates only one object. if we call multiple times getBean(-), it returns existing object.
it won't create multiple objects.

NOTE: default value for "scope" is singleton. So by default all spring beans are "Singletons".

NOTE: If we configured one bean(HelloBean) class multiple times using different bean ids it creates multiples objects.

Ex:
<bean id="helloBean1" class="---" scope="singleton"></bean>
<bean id="helloBean2" class="---" scope="singleton"></bean>
<bean id="helloBean3" class="---" scope="singleton"></bean>

in client
---------
getBean(helloBean1)
getBean(helloBean2)
getBean(helloBean3)

Above code creates three HelloBean objects even scope is singleton.




*/