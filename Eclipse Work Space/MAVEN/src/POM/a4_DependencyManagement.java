/*
 Dependency management
 ==========================
 
In Applications, Dependencies are  the libraries[Collection of JARs] which are required to compile,
test and run our applications.

In General, in application development, we will download the required libraries from internet and
we will store them in application directory structer.

The main Advantage of MAVEN in applications development is that we do need not to store any Dependent
JAR files in Project Directory Structure by downloading them explicitly, MAVEN has given flexibility
to the developers like to specify dependent JAR files names in pom file, where MAVEN will search
for them in the repositories and MAVEN will load them into the project directory structure
automatically.

If we need any Library in MAVEN based applications then we have to declare them in pom file like
below.
 
 
 1. <dependencies>
		2. <dependency>
				3. <groupId>org.hibernate</groupId>
				4. <artifactId>hibernate-core</artifactId>
				5. <version>3.5.6-Final</version>
				6. <scope>provided</scope>
		7. </dependency>
8. </dependencies>


If we provide the dependency like above then MAVEN will search for the hibernate library with the
name like
http://repo1.maven.org/maven2/org/hibernate/hibernate-core/3.5.6-Final/

MAVEN is following "Transitive Dependencies Mechanism", that is, if our dependencies are
required any other libraries then MAVEN will get them automatically without loading them explicitly
by the developers.
 
 */
