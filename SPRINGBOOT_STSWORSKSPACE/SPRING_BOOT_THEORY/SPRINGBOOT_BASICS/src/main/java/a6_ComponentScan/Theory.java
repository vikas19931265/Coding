/*

@ComponentScan
=====================

@ComponentScan tells Spring in which packages you have annotated classes which should be managed by Spring. So,
for example, if you have a class annotated with @Controller which is in a package which is not scanned by Spring, 
you will not be able to use it as Spring controller.


Classes annotated with @Configuration is a new way of configuring Spring using annotations instead of XML files 
(it's called Java configuration). Spring needs to know which packages contain spring beans, otherwise you would 
have to register each bean individually. That's what @ComponentScan is used for.


*/