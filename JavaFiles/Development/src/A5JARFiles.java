/*

JAR Files
===================

If several dependent files are available then it is never recommended to set each 
class file individually in the classpath. We have to group all those .class files
into a single zip file. We have to make the zip file available in the class path.


This zip file is nothing but the JAR file

Example

    To develop servlet all the required .class files are available in Servlet-api.jar.
We have to make this jar file available in the classpath then only the servlet will be
compiled.

Similarly we have to place ojdbc14.jar in the classpath in order to write an ojdbc 
program.

To run JDBC program, all the required dependent classes are available in the ojdbc14.jar.
To run the jdbc program we have to place this jar file into the classpath


To use the log4j in our application dependent classes are available in log4j.jar. We have
to place this jar file into the classpath then only log 4j based application can run.

*/
