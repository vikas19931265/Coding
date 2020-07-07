package a_springcore;
/*
BeanFactoryPostProcessor
=========================

BeanFactoryPostProcessor operates on bean definition i.e. before the bean instance is
getting created it gets executed

Example we can use propertyplaceholderconfig which can read the value from property files
before creation of any bean bean.

In that way before creating any bean for every enviornment mode a different property value can be
read.

This step happens before creation of any bean object.


NOTE: to configure properties file key in the spring xml we have to use following syntax.

${key in the properties}

NOTE: if the configured key not available in the properties file it throws the Exception.



Working with multiple properties files.
=================================================
if we have only one properties file in the appliation we have to use "location" to load the properties file.

<beans>
<bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
<property name="location">
<value>database.properties</value>
</property>
</bean>
</beans>

If we have multiple properties files, to load all these properties files we have to use "locations" property.

<beans>
<bean class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
<property name="locations">
	<list>
	<value>hello.properties</value>
	<value>hello1.properties</value>
	</list>
</property>
</bean>	
</beans>


refer pgm for more info and more learning will be in DAO section.
*/

