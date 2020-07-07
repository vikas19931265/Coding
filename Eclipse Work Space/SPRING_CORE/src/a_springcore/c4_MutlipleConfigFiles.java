package a_springcore;
/*
working with multiple spring configuration files
-----------------------------------------------
When the spring configuration file size is huge, it is difficult to maintain, so it is recommended to
divide the configuration into multiple files.

For example in the realworld applications DAO classes configured in DAO realted xml file and 
service layer classes are configured in service related xml file.

Generally there are 2 ways to work with multiple configuration files.

l. By importing other spring file into the current configuration file.

Ex: 

In main xml file we import other xml files

application-context.xml
-------------------------
<beans>
<import resource="dao-context.xml/ >
<import resource="services-context.xml/ >
</beans>

here dao-context.xml contains dao classes configuration
services-context.xml contains service classes configuration.

2 By passing all spring bean configuration files as a string array to the constructor of the container

 Ex:
 ApplicationContext context = new ClassPathXmlApplicationContext(new String[] { "dao-context.xml", "services-context.xml" });

for more information refer the program.
*/