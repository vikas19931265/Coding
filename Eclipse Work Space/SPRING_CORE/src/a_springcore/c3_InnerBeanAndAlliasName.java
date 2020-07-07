package a_springcore;
/*
Inner Bean Definitations
-------------------------
An inner bean definitation is the concept similar to Inner classes in Java.

Spring allows Inner Beans declaration.

we can declare a bean inside a bean. 

Inner Beans are like annonymous beans.
this beans cannot be used outside the enclosing beans. 

while working with Inner beans using "id" is optional.

Ex:
---
Employee.java
--------------
public class Employee {
	private int id;
	private String name;
	private Address address;
//setters and getters
}
Address.java
------------
public class Address {
	private String street;
	private String city;
	private String pincode;
//setters and getters
}
application-context.xml
------------------------
<beans>
<bean id="employeeBean" class="Employee">
<property name="id" value="9999" />
<property name="name" value="Ramesh" />

<property name="address">
   <!-- Inner bean configuration -->
  <bean class="Address">
	<property name="street">
	<value>Ameerpet</value>
  	</property>
	<property name="city">
	<value>Hyderabad</value>
	</property>
	<property name="pincode">
	<value>500038</value>
	</property>
   </bean>
</property>
</bean>
</beans>

Here Address bean acts as inner bean.

client
-------
--
--
ApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");

Employee employee = (Employee) context.getBean("employeeBean");
//display the data from employee object using sop.

output
------
Ramesh
9999
ameerpet 
hyd
5000038

Bean Aliasing
-------------
Bean alias name can be used to define multiple names for a configured spring bean.
We can define alias names with "name" attribute of <bean> tag.

In general bean aliasing is used for ease maintenance of the configuration.

Using following method we can get all the bean alias names.

String[] getAliases(String name);

Eample
-----
public class HelloBean {
//properties setters and gettes
}
xml
---
<beans>
<bean id="helloBean" name="hello1, hello2, hello3" class="HelloBean">
    <property name="message" value="Hello....."></property>
  </bean>
</beans>

Client
------
//imports
ApplicationContext context = new ClassPathXmlApplicationContext("hello.xml");
HelloBean bean = context.getBean("helloBean", HelloBean.class);
System.out.println(bean.getMessage());

String aliases[] = context.getAliases("helloBean");

System.out.println("The following are Alias names of helloBean");
for (int i = 0; i < aliases.length; i++) {
System.out.println(aliases[i]);
}
}
}
output
------
hello...

Alias names:
hello1
hello2
hello3

NOTE: we can configure the spring bean using "name" attribute without "id" attribute

Ex:
<beans>
 <bean name="hello1, hello2, hello3" class="HelloBean">
    <property name="message" value="Hello....."></property>
  </bean>
</beans>

in the client
--
--
HelloBean bean = context.getBean("hello1", HelloBean.class);

Here the container treats 'hello1' as unique id reference, remaining references as aliases to that unique id.
Ex:
HelloBean bean = context.getBean("hello1", HelloBean.class);
String aliases[] = context.getAliases("hello1");
--
--

output
------
hello....
hello2
hello3

here hello2 and hello3 are alias names.

NOTE:
Bean "id" attribute is used to define reference of configured spring bean. bean "id" value should be unique. 
where as bean "name" no need to be unique.

Generally most of the cases we use "id" attribute only but not "name" attribute.


NOTE:

"ref" attribute of <property> tag allows either "id" value or alias name value.

but "idref" attribute of <property> tag allows only "id" value not alias name.



*/


