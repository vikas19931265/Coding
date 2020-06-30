package springCore;
/*
Setter Injection
=========================

We can inject the dependency by setter method also. The <property> subelement of <bean> is used for setter injection.
Here we are going to inject

primitive and String-based values
Dependent object (contained object)
Collection values etc.

Spring container uses default constructor and setter methods to create bean object and populate 
bean the properties. this concept is called setter injection.

If we are not placing default constructor(if class only having parameterised constructor) spring will throws the exception.
i.e org.springframework.beans.factory.BeanCreationException.

If we are not placing setter method for the configured property spring throws exception.
i.e org.springframework.beans.NotWritablePropertyException.


*/