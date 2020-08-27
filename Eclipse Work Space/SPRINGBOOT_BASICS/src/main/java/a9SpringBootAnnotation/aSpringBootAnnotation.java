/*

@SpringBootAnnotation
===========================


The trick with Spring Boot is that many things happen implicitly. We use the @SpringBootApplication 
annotation, but it's just a combination of three annotations:

@Configuration
@EnableAutoConfiguration
@ComponentScan

Spring needs to know which packages to scan for annotated components in order to add them to the IoC container. 
In a Spring Boot project, we typically set the main application class with the @SpringBootApplication annotation. 
Under the hood, @SpringBootApplication is a composition of the @Configuration, @ComponentScan, and @EnableAutoConfiguration
annotations. With this default setting, Spring Boot will auto scan for components in the current package 
(containing the @SpringBoot main class) and its sub packages.


Note: It is recommended that you locate your main application class in a root package above the component
classes of the application


*/