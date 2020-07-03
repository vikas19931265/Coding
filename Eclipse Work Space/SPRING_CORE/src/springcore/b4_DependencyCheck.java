/*
Dependency Check
=====================


In case of constructor injection, all the dependent objects are mandatory to be passed via <constructor-arg> 
tag while defining the bean.

But in case of setter injection injecting dependent objects are not mandatory.

So, if we want see setter properties mandatory like constructor properties then we need to use Dependency Check.

Dependency check has been removed from Spring 3.0 and is available before 3.0(2.5).

From spring 3.0 it has been replaced with @Required annotation.

In order to perform the mandatory check on setter properties you need to enable dependency check.

So In order to enable dependency check you have to use "dependency-check" attribute of bean tag.

This attribute takes any one of the four following values.
1.none(it won't check whether dependencies injected or not) 
2.simple(it checks all primitive dependencies injected or not)
3.objects(it checks all the object type dependencies injected or not)
4. all(it checks both primitives and object type dependencies injected or not)

NOTE: the default value is "none".

In case if we forgot to set any value either primitive or objective type it throws an exception saying
UnsatisfiedDependencyException.


*/