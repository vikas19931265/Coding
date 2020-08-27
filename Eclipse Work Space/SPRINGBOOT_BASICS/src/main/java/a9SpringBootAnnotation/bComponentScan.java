/*
ComponentScan( scans @Component, @Controller, @Service, and @Repository)
=============================================================================

In this tutorial, we'll cover component scanning in Spring. When working with Spring, we can annotate our
classes in order to make them into Spring beans. But, besides that, we can tell Spring where to search 
for these annotated classes as not all of them must become beans in this particular run.


With Spring, we use the @ComponentScan annotation along with @Configuration annotation to specify 
the packages that we want to be scanned.

@ComponentScan without arguments tells Spring to scan the current package and all of its sub-packages.

Spring can auto scan all classes annotated with the stereotype annotations
@Component, @Controller, @Service, and @Repository

It uses basePackages attribute to specify packages and its subpackages.


		@ComponentScan(basePackages="com.pgk.test")

*/