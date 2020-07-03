package springcore;
/*

Autowire
============

Spring provides the Autowiring facility to wire(inject) the dependencies automatically without configuration.

Instead of manually configuring the injection, we done it automatically by using auto wiring

To enable autowiring we have to use "autowire" attribute of <bean> tag.

the following values are possible values to the "autowire" attribute.


no
========


This is default value, which means no autowiring applied and you should use explicit bean reference for wiring. 
This is what we already have seen in previous applications.

byName:
-------

Mainly it checks for 3 conditions, if all these are valid then it injects the values by setter approach.

1. Dependency bean name
2. Configured bean id
3. Setter method name

-- If dependency name is "address", bean configuration should be "address" and setter method should be "setAddress(Address address)" 
spring container performs autowiring.

byType:
-------
Autowiring by property datatype.

byType mainly it checks for 3 conditions. if all these are valid then it injects the values by setter approach.
1. Dependency bean Type
2. Configured bean Type
3. Setter method Argument Type

<bean id="employee" class="---" autowire="byType">
<bean id="address1" class="-------">

NOTE:
-----
byName, byType both will uses setter injection.

Constructor
==============

Constructor
-----------
constructor mainly it checks for 3 conditions. if all these are valid then it injects the values by constructor approach.

1.Dependency bean Type
2.Configured bean Type
3.Constructor Argument Type 

autowire by constructor uses constructor injection, so we have to place parameterized constructor in Employee class.

public class Employee
{
Address address;

public Employee(Address address){
this.address=address;
}
//setters are not required.
} 
xml
---
<bean id="employee" class="----" autowire="constructor">

Note: since not used in daily life hence not writing program for this.

autodetect	
--------------------

It is deprecated since Spring 3 so not discussing much.

*/