/*
Repository
=============

If we use Dependencies in MAVEN Project then MAVEN will search for the dependent JARs in Repositories.
MAVEN will use three types of Repositories in order to get dependencies.


Local repository
--------------------------

It is a location to manage and supply all dependencies, it will be created by MAVEN when we
execute any MAVEN command first time.
In general, MAVEN will create Local Repository at "C:/Users/User_Name/.m2/repository"
EX: C:\Users\LENOVO\.m2\repository

Central repository
-----------------------------

It is a default Repository for MAVEN, it is located at "http://repo1.maven.org/maven2".
IN MAVEN applications, we can use some other repositories explicitly as well

	1. http://repository.jboss.org/nexus/content/groups/public
	2. http://mvnrepository.com

In MAVEN applications, if we want to use the above explicitly repositories then we have to configure
them in pom file by using the following xml tags.

1. <repositories>
		2. <repository>
				3. <id>jboss</id>
				4. <name>jboss repo</name>
				5. <url>http://repository.jboss.org/nexus/content/groups/public/</url>
		6. </repository>
7. </repositories>

Remote repository
--------------------

Remote Repository is a developer's own custom repository containing required libraries or other
project jars.

*/