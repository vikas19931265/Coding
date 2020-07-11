/*
Component scan
===============

We can also use component scan configuration in order to detect all the supplied annotations.

We can also use this detect any class to be used in bean which is outside the package.


	<context:component-scan base-package="com.rameshit.customer" />
	
If we write this line all the classes in this package can be detected by the application container and bean
creation is possible.


*/