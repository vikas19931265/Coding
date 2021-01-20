/*

Type-1 Driver: (WORST DRIVER)
==================================

1. Also known as JDBC-ODBC Bridge Driver OR Bridge Driver.


               ------->                         -------->           --------->
java application           jdbc-odbc bridge driver        odbc driver            Database
               <-------                         <--------           <---------

-------------------------client machine---------------------------

2. This Driver provided by Sun Micro Systems as the Part of JDK. But this Support is available until 1.7
   Version only.


3.  Internally this Driver will take Support of ODBC Driver to communicate with Database.

4.  Type-1 Driver converts JDBC Calls (Java Calls) into ODBC Calls and ODBC Driver converts ODBC Calls
    into Database specific Calls.

5.  Hence Type-1 Driver acts as Bridge between JDBC and ODBC.




Advantages :
------------------

1. It is very easy to use and maintain.

2. We are not required to install any separate Software because it is available as the Part of JDK.

3. Type-1 Driver won't communicates directly with the Database. Hence it is Database
Independent Driver. Because of this migrating from one Database to another Database will
become Easy.


Limitations:
---------------------

1. It is the slowest Driver among all JDBC Drivers (Snail Driver), because first it will convert JDBC
   Calls into ODBC Calls and ODBC Driver converts ODBC Calls into Database specific Calls.

2. This Driver internally depends on ODBC Driver, which will work only on Windows Machines.
   Hence Type-1 Driver is Platform Dependent Driver.

3. No Support from JDK 1.8 Version onwards.


Note:
Because of above Limitations it is never recommended to use Type-1 Driver.


*/
