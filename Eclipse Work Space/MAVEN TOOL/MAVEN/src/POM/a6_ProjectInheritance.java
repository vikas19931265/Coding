/*
Project Inheritance:
===========================

In MAVEN based applications, it is possible to inherit configurations from one pom file to another
pom file inorder to avoid configurations redundency.

To declare parent pom , we have to use "pom" as value to <packaging> tag in parent pom file


1. <project ... >
		2. <modelVersion>4.0.0</modelVersion>
		3. <groupId>com.durgasdoft</groupId>
		4. <artifactId>my-parent</artifactId>
		5. <version>0.0.1-SNAPSHOT</version>
		6. <packaging>pom</packaging> -- important
7. ---
8. </project>

If we want to inherit parent pom configuration details into a particular chaild pom then we have to
configure parent pom in child  pom

EX:

 <project  ..... >
2. -----
	3. <parent>
			4. <groupId>com.durgasoft</groupId>
			5. <artifactId>my-parent</artifactId>
			6. <version>0.0.1-SNAPSHOT</version>
	7. </parent>
	8. ------
9. </project>


Note:

Note: In JAVA, java.lang.Object class is common and default super class for every java class
inorder to provide 11 common and default methods to each and every java classs,similarily , there
is a common and default super pom file is existed in maven inorder to provide all common
configurations and settings to the chaild pom file.

In general, parent pom contains the following configurations

1.  Common data – Developers’ names, SCM address, distribution management etc.
2.  Constants – Such as version numbers
3.  Common dependencies – Common to all child. It has same effect as writing them several
times in individual pom files.
4.  Properties – For example plugins, declarations, executions and IDs.
5.  Configurations
6.  Resources

*/