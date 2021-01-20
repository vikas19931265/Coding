/*

Aggregation in Java
=============================

If a class have an object reference, it is known as Aggregation. Aggregation represents HAS-A relationship.

Consider a situation, Employee object contains many information such as id, name, emailId etc. 
It contains one more object named address, which contains its own information such as city, state, country, zipcode etc. as given below.

class Employee{  
int id;  
String name;  
Address address;//Address is a class  
...  
}  

In such case, Employee has an entity reference address, so relationship is Employee HAS-A address.

Why use Aggregation?
========================

For Code Re usability.

When use Aggregation?
==========================

Code reuse is also best achieved by aggregation when there is no is-a relationship.

Inheritance should be used only if the relationship is-a is maintained throughout the 
lifetime of the objects involved; otherwise, aggregation is the best choice.




*/