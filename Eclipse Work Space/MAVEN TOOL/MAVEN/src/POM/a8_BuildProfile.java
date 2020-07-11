/*
Build Profile
================

6) Build Profiles:
=====================

IN general, profiles are used to customize the build lifecycle for different environments like
development, testing, production,.....

Example:

6) Build Profiles:
IN general, profiles are used to customize the build lifecycle for different environments like
development, testing, production,.....

Example:

1. <profiles>
				2. <profile>
				3. <id>development</id>
				4. <activation>
				5. <activeByDefault>true</activeByDefault>
				6. </activation>
					7. <properties>
							8. <jdbc.connection.url>jdbc:oracle:thin:@localhost:1521:xe</jdbc.connection.url>
					9. </properties>
				10. </profile>
				11. <profile>
				12. <id>test</id>
						13. <properties>
						14. <jdbc.connection.url>jdbc:mysql://localhost:3306/durgadb</jdbc.connection.url>
						15. </properties>
				16. </profile>
17.</profiles>

Where each and every profile has its own id, it can be used to access the respective environment
or profile.

In src/main/resources/db.properties
 jdbc.connection.url = ${jdbc.connection.url}

If we provide the above setups like above then at compilation time, the respective jdbc URL will be
injected to the "jdbc.connection.url" property depending on the target environment.

Where each and every profile has its own id, it can be used to access the respective environment
or profile.





*/