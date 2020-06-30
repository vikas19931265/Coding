/*
Project Description
========================

In pom file, initial we will identify "Projection Description", it contains Project name, version
number, packaged type,.....

To specify the above details, we need to use the following XML tags.

<project ..... >
	<!-- Project Description -->
		<modelVersion> --- </modelVersion>
		<groupid> --- </groupid>
		<artifactid> -- </artifactid>
		<version> -- </version>
 </project>


WHERE

project is the root element of the xml.

Where "<modelVersion>" tag declared which version of the MAVEN we are
using.<modelVersion> tag will take  4.0.0 to support for MAVEN2.x/3.x versions.

Where "<groupid>" tag will take  an unique ID for an organization, or a project.Normally we
use a group ID  similar to the root Java package name of the project.

Where "<artifactid>" tag will take name of the project.The artifact ID is used as name for a
sub directory  under the group ID directory in the Maven repository and as part of the
name of the JAR file produced when  building the project.The build result, a JAR, WAR
or EAR file, is called an artifact in Maven.

Where "<versin>" tag will take Project version number.

Where "<packaging>" tag will take different packaging formats inorder to delivery the
project like jar, war,  ear,...

example
===========

1. <project ..... >
2. <!-- Project Description -->
		3. <modelVersion>4.0.0</modelVersion>
		4. <groupid>com.durgasoft.banking</groupid>
		5. <artifactid>icici.accounts</artifactid>
		6. <version>1.0</version>
		7. <name>Account Application</name>
		8. <description> Application for Accounts module in icici Bank project </description>
9. -----
10.</project>


*/