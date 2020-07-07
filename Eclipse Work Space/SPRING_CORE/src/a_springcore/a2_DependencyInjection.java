package a_springcore;
/*
Dependency Injection
==============================

It is a design pattern.

Spring core is built based on Dependency Injection.

This design pattern helps you to avoid writing unnecessary code, while creating objects in the application.

To understand dependency injection, Let's look at these two words separately.

Here the dependency means an association between two classes. 

For example, class A is depends on class B. 
Student class depends on Address class.
Student Has a Address
EmployeeDAO depends on Connection.

Now, let's look at the second part, injection. this means class B will get injected(setting or passing) into 
class A by the Container

In spring, spring container creates the objects and those objects are injected into our application.

The following are some of the examples where dependency injection can be used in real world  applications.

--The DAO classes uses the DataSource which can be injected into DAO classes.

--The Service layer uses DAO class object, which can be injected into Service classes.

--The presentation or view layer(struts,jsf,wicket) uses service class object, which can be injected into presentation layer.

There are two types of Dependency Injection.

1.Setter Injection.
2.Constructor Injection.

NOTE:
-----
Dependency Injection also called as Inversion of Control(IOC). 

*/