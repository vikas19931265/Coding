/*
Constructor Injection ( to be used with parameterized constructor )
============================================================================

If the spring container uses parameterized constructor to inject the bean properties then it call 
as constructor injection.

if we configured one property by using <constructor-arg> tag, then spring container performs constructor injection.

<beans>
<bean id="helloBean" class="----">
<constructor-arg>
<value>HelloWorld</value>
</constructor-arg>
</bean>
</beans>

In case of constructor injection injecting dependent objects are mandatory. If you are not injecting using 
<contructor-arg> container will through exception saying  org.springframework.beans.BeanInstantiationException

<bean id="helloBean" class="----">
</bean>

above configuration is invalid while working with constructor injection.

If we configured one bean class property using <contructor-arg> tag, bean class should contain 
parameterized constructor. other wise it throws exception sayingorg.springframework.beans.BeanInstantiationException.

NOTE:
if we configured one property by using setter injection and constructor injection, Spring container creates 
the bean object using parameterized constructor, and it initialize the bean property using setter methods.

Ex:
<beans>
<bean id="helloBean" class="com.rameshit.spring.HelloBean">
<property name="message">
<value>Hello India...</value>
</property>
<constructor-arg>
<value>Hello World...</value>
</constructor-arg>
</bean>
</beans>


*/