/*
Dependency scopes
====================

In Applications, some dependencies are required to all phases of the project lifecycle like compile,
test, run,... and some other required only some of phases of the project lifecycle.

In order to limit the dependencies for the lifecycle phases we will use Dependency Scopes.


There are 6 scopes available in MAVEN
1.  Compile
2.  Provided
3.  Runtime
4.  Test
5.  System
6.  Import


1. Compile:
---------------
It is the default scope in MAVEN . This scope will make the dependencies to avail all phases like
compile, test, run,....

EX:

1. <dependency>
	2. <groupId>org.hibernate</groupId>
	3. <artifactId>hibernate-core</artifactId>
	4. <version>3.5.6-Final</version>
	5. <scope>compile</scope>
6. </dependency>

Note: In general, hibernate-core library is required for all phases of the application.

2. Provided:
------------------

This scope will make the dependency libraries to avail upto compilation and and upto testing, not
for runtime, because, at runtime, JDKs or Containers will provide the required dependencies at
runtime.

EX:

In web applications, Servlet API is required expliclty to compile and test the project, but, Servlet
API is provided by the container at runtime automatically, so that, they are not required to be
exported at runtime.

1. <dependency>
	2. <groupId>javax.servlet</groupId>
	3. <artifactId>servlet-api</artifactId>
	4. <version>3.0.1</version>
	5. <scope>provided</scope>
6. </dependency>

3. Runtime
--------------------------

This scope indicates that the dependency is not required for compilation, but is for execution. It is
in the runtime and test class paths, but not the compile class path.

EX:

1. <dependency>
	2. <groupId>com.thoughtworks.xstream</groupId>
	3. <artifactId>xstream</artifactId>
	4. <version>1.4.4</version>
	5. <scope>runtime</scope>
6. </dependency>

4. Test:
------------------

This scope indicates that the dependency is not required for normal use of the application, and is
only available for the test compilation and execution phases. This scope is not transitive.

1. <dependency>
	2. <groupId>junit</groupId>
	3. <artifactId>junit</artifactId>
	4. <version>4.12</version>
	5. <scope>test</scope>
6. </dependency>

5. System:
------------------------


Dependencies with system are similar to ones with scope provided. The only difference is system
dependencies are not retrieved from remote repository. They are present under project’s
subdirectory and are referred from there.

EX:

1. <dependency>
	2. <groupId>Explicit_Dependency</groupId>
	3. <artifactId>Explicit_Dependency</artifactId>
	4. <scope>system</scope>
	5. <version>1.0</version>
	6. <systemPath>apps\app.war\WEB-INF\lib\Explicit_Dependency.jar </systemPath>

7. </dependency>

6. Import:
----------------------------

It is available in Maven 2.0.9 or later.
Import scope is only supported on a dependency of type pom in the dependencyManagement
section. It indicates the dependency to be replaced with the effective list of dependencies in the
specified POM’s dependencyManagement section.

1. <dependencyManagement>
		2. <dependencies>
				3. <dependency>
						4. <groupId>other.pom.group.id</groupId>
						5. <artifactId>other-pom-artifact-id</artifactId>
						6. <version>SNAPSHOT</version>
						7. <scope>import</scope>
						8. <type>pom</type>
				9. </dependency>
		10. </dependencies>
11.</dependencyManagement>
*/
