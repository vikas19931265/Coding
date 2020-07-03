/*
Bean Defination Inheritance
==============================

Inheritance is the concept of reusing the existing functionality.

In spring Bean definitation inheritance, it talks about how to re use the existing bean 
configuration instead of configuring again. 

Ex:

If a class contains 10 properties, if you want to configure this class in the configuration file,
you need to inject values for 10 properties via constructor or setter injection.

If we want to create 10 beans of that class, we need to configure for all the 10 beans using setter 
or constructor injection. In case if most of the properties has same value then also we need to 
configure all the properties. This leads to duplicate configuration in the configuration file.

In order to overcome this problem we will go for inheritance.

NOTE
If we configured one property in parent and child bean configuration, child bean property overrides parent bean property.

"abstract" attribute of <bean> tag
-----------------------------------
it allows boolean value. the default value is false.
if it is true, spring container doesn't creates the bean object.

if we are getting abstract bean defination object, we will get the exception
 i.e org.springframework.beans.factory.BeanIsAbstractException

<beans>
<bean id="parentCar" class="com.rameshit.inheritance.Car" abstract="true">
--
--
</bean>
--
</beans>


*/