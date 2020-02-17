/*

Java is database independent but Driver is database Dependent
=============================================================================

1. Lets write a java application to communicate with database using database API.

2. Now, I want to use this application to communicate  with oracle , mysql and sybase database.

3. So we have  only 1 java application but 3 DB.

4. We are not required to write  3 java application to connect with 3 databases here.

5. If  Java application want to communicate to DB  then we have to use driver specific to  oracle , mysql , sybase
   to which our java application want to communicate.

6. Java application can communicate with oracle driver and oracle driver can connect to oracle db

7. Here driver is responsible to convert java calls to db and db calls to java.

8.In similar manner when we want to connect with mysql database then again we will connect to MySql Driver
  which will further connect to MySql Database.

9. Now java application can connect with Driver for Mysql and driver can further connect with db converting java calls to db and db calls to  
  java

10. Similarly for the sybase database as well.


11. Now here we have three databases but have only single java applications
    For any number of databases we need to have only one application

12. so java is database independent

13. Here java has been database independent but driver is database dependent.

14 .Because of the driver only java application has become database indpedent.


Similar terminology for java being platform independent but JVM platform dependent
==================================================================================


1.This java application can be run on any platform like windows mac, unix, windows

How this is going to happen??

2. So lets assume we have windows , linux and mac platform

3. We have single application here which can run on different machines.

But who is making it platform independent(JVM)

4. If we compile this program with java compiler then we will
   get .class file which is byte code file.

    This byte code is platform independent code which can run anywhere.

5. If we want to run this on windows then we have to go for jvm for windows 

6. JVM will take byte code and convert it into windows platform specific code.

7. Similarly if we want to run the same application on linux platform then
   we need jvm for linux which will convert byte code to linux platform understandable code

   Similarly we have to do for the mac platform also.


8. Here also we have only one application but different platforms.

9. This platform nature is coming due to JVM.

Here java is platform independent as we have 3 machines but single pgm

But jvm is platform dependent as we need different jvm for every platforms.


*/