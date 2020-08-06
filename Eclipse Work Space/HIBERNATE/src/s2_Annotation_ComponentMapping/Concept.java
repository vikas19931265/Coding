package s2_Annotation_ComponentMapping;
/*
Component Mapping
==================

In this example you will learn how to map components using Hibernate Annotations. 
Consider the following relationship between Student and Address entity.

According to the relationship each student should have a unique address.

Since the Student and Address entities are strongly related (composition relation), it is better to 
store them in a single table. 


@Embedded
============

The @Embedded annotation is used to specify the Address entity should be stored in the STUDENT table as a component.

@Embeddable
=================
 
annotation is used to specify the Address class will be used as a component. The Address class cannot have 
a primary key of its own, it uses the enclosing class primary key.

*/