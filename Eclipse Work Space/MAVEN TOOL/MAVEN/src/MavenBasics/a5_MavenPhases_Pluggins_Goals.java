package MavenBasics;
/*
Maven build phases
================

Maven has below phases.

1. Validate

		validates if project is correct and all necessary information is there.
		
2. Compile
	
		Source code is compiled in this phase.
		
3. Test
	
		Test the compiled source code.
		
4. package

	  This phase creates a jar/war mentioned in the pom.xml file.
	  
5. install

	This phase installs the package in local/remote repository
	
6. Deploy

	copies final package to the remote repository.
	
	
	
Note:

		If we execute one phase then all the phase before that are automatically executed.
		
We can also use mvn clean to remote all the pre exisiting dot class files from the target.	

Goals
============

Goals represent the certain tasks needed to complete the phase. Each goal is tied to some pluggin. Example
test compile is tied to maven compiler pluggin. Compiler is the default pluggin available anyway.

Similar to this we can have any plugin and use its goals to accomplish some tasks. Example we can download tomcat pluggin
and use its goals like starting server stopping server to do additional things other then just deployement.

therfore pluggins with there goals give us some extra feature. Like tomcat pluggin can give us a goal to start or stop server.



*/