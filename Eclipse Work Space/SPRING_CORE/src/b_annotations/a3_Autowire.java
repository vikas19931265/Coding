/*
Autowire
===========

we can use autowire using @Autowired annotation instead of configuration approach.

In Spring, you can use @Autowired annotation to autowire bean on the setter method, constructor or a field. 

Note
@Autowired will performs autowiring "byType".

NOTE: If spring container found more than one bean it will exception. To resolve this will go for @Qualifier.

Right now m discussing only autowire on property.

@Autowired(required = false)
----------------------------
By default,dependency is required in the case of @Autowired like @Required, but you can turn off 
it by passing required=false to @Autowired as argument.

The default value for required is true.


*/