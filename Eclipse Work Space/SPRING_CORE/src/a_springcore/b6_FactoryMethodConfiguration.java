package a_springcore;
/*
Factory method configuration
===================================

Any method in java class, which returns same class object or other class object is called factory method.

When we configure a class as spring bean in the configuration file, Spring container will instantiate the bean 
by using the new keyword. 

some times we can creates the object using factory methods also. for example singleton classes.

Generally there are two types of factory methods.

Static factory method.
Non static factory method.

For working and refer the pgm.


Non static factory method
--------------------------
to configure non static factory method we have to use "factory-method" and "factory-bean" attributes of <bean> tag.

*/