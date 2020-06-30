/*
Build Configuration
=======================

In MAVEN , Build Configuration is mainly for plugin configurations, resources
configurations,.....which are required in MAVEN Project.

MAVEN is simply the collection of plugins, where plugins are used to perform the actions like
creating jar files, creating war files, compile Source code, executing unit test code, create project
documentation, ......

MAVEN is having "Plugin Execution Framework" at its heart inorder to execute all plugins.

In MAVEN , there are two types of Plugins.
1.  Build Plugins
2.  Reporting Plugins


1.Build Plugins: 
=====================


These plugins are executed during the build and they should be configured in
the <build/> element from the POM.

EX

1.Clean : It is used when you want to remove files generated at build-time in a
project's directory.

2.Compiler: Compiles Java source code.

3.Deploy: It can be used to store artifacts in remote repository while deploying the
applications in order to share to other projects .

4.Install: It can be used to install artifacts into local repository.

5.Resources: It will include all the project resources in output directory while  creating
JAR files.

6.Ear: create ear file from the current project.

7.jar: creates jar file from the current project.

8.war: creates war file from the current project.

9.rar: creates rar file from the current project.

Reporting plugins: 
=======================
 
These plugins are executed during the site generation and they should be
configured in the <reporting/> element from the POM.

EX:

1.changelog: Generate a list of recent changes from your SCM[Software Configuration
Management].

2.changes: Generate a report from an issue tracker or a change document.

3.javadoc: Generate Javadoc for the project.

4.project-info-resports: Generate standard project reports.

5.surfire-report: Generate a report based on the results of unit tests.


IN general, we will use MAVEN compiler plugin inorder to perform Compilation, for this we have to
use the following xml tags in pom.xml file.

1. <project ---- >
		2. <build>
				3. <plugins>
						4. <plugin>
								5. <groupId>org.apache.maven.plugins</groupId>
								6. <artifactId>maven-compiler-plugin</artifactId>
								7. <configuration>
								8. <source>1.8</source>
								9. <target>1.8</target>
								10. </configuration>
						11. </plugin>
				12. </plugins>
		13. </build>
14.</project>

By default, all files placed in "src\main\config" are packaged into the generated project artifact and
any file which we placed in "src\test\resources" are available in project classpath during unit tests.
If we want to provide our own customized resources location in project then we have to configure
them in pom.xml file under <build> tag like below.

<build>
2. ----
	3. <resources>
		4. <resource>
				5. <directory>src/main/config</directory</directory>
				6. </resource>
				7. <resource>
				8. <directory>src/main/resources</directory</directory>
		9. </resource>
		10. ----
	11. </resources>
12. ----
13.</build>

*/