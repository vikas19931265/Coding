

/*
Evolution of JDBC:
=================================================

1. If we want to communicate with Database by using C OR C++, compulsory we have to use
   database specific Libraries in our Application directly.


C/ C++ Application        --------->   ORACLE
(Use Oracle Libraries)    <---------  



2. In the above Diagram C OR C++ Application uses Oracle specific Libraries directly.
 
3. The Problem in this Approach is, if we want to migrate Database to another Database then we
   have to rewrite Total Application once again by using new Database specific Libraries.


C/ C++ Application        --------->   MySQL
(Use Oracle Libraries)    <---------  


4.  The Application will become Database Dependent and creates Maintenance Problems.

5.  To overcome this Problem, Microsoft People introduced "ODBC" Concept in 1992. It is
    Database Independent API.

6  With ODBC API, Application can communicate with any Database just by selecting
   corresponding ODBC Driver.

7  We are not required to use any Database specific Libraries in our Application. Hence our
Application will become Database Independent.



                           Oracle
          ------------>    ODBC Driver Oracle---------->OracleDB
          |                 
          |                 
C/ C++    |                 MySql
Application ---------->     ODBC Driver MySql---------->MySqlDB
          |  
          |  
          |                  Sybase
          |------------>     ODBC Driver Sybase ------->SybaseDB
                


Limitations of ODBC:
=================================


1) ODBC Concept will work only for Windows Machines. It is Platform Dependent Technology.

2) ODBC Drivers are implemented in C Language. If we use ODBC for Java Applications, then
Performance will be down because of internal conversions from Java to C and C to Java.

3) Because of above Reasons, ODBC Concept is not suitable for Java Applications.

4) For Java Applications, SUN People introduced JDBC Concept.

5) JDBC Concept Applicable for any Platform. It is Platform Independent Technology.

6) JDBC Drivers are implemented in Java. If we use JDBC for Java Applications, then internal
Conversions are not required and hence there is no Effect on Performance.



                           Oracle
          ------------>    JDBC Driver Oracle---------->OracleDB
          |                 
          |                 
C/ C++    |                MySql
Application ---------->    JDBC Driver MySql---------->MySqlDB
          |  
          |  
          |                Sybase
          |------------>   JDBC Driver Sybase ------->SybaseDB
                



***Note:
1) ODBC Concept is applicable for any Database and for any Language, but only for Windows
Platform.

2) JDBC Concept is Applicable for any Platform and for any Database, but only for Java Language.

*/