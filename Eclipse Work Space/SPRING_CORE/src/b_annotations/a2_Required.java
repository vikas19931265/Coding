/*
Required Annotation
=======================

Before spring3, spring has "dependency-check" attribute to check dependecy beans injected or not.

if we are using dependency-check we should inject all the properties(either primitives(simple) or objects(objects)).

if we want to inject only limited primivite or objects properties instead of using dependency-check use @Required.

Ex:

public class Employee {
	private int id;
	private String name;

	@Required
	public void setId(int id) {
	this.id = id;
	}

	@Required
	public void setName(String name) {
	this.name = name;
	}
	//getters
}

xml
---
<beans>
<context:annotation-config />
<bean id="employee" class="Employee">
<property name="id" value="100"></property>
<property name="name" value="Ramesh"> </property>
</bean>
</beans>

NOTE:
Simply apply the @Required annotation will not enough for the property checking, 
you need to register a RequiredAnnotationBeanPostProcessor to aware of the @Required annotation
 in bean configuration file.

The RequiredAnnotationBeanPostProcessor can be enabled in two ways.

1.add following tag in the xml file

<context:annotation-config />

2. configure RequiredAnnotationBeanPostProcessor directly in bean configuration file.

<beans>
<bean 
class="org.springframework.beans.factory.annotation.RequiredAnnotationBeanPostProcessor"/>

<!-- other beans configured here -->

</beans>

client
-------
--
ApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");
//get the bean and use that bean
--
--	
--

*/
