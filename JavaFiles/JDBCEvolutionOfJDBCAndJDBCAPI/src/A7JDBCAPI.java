
/*

JDBC API
===========================

1. JDBC API provides several Classes and Interfaces.

2. Programmer can use these Classes and Interfaces to communicate with the Database.

3. Driver Software Vendor can use JDBC API while developing Driver Software.

JDBC API defines 2 Packages

1) java.sql Package:
        It contains basic Classes and Interfaces which can be used for Database Communication.


Interfaces
----------------

Driver
Connection
Statement
PreparedStatement
CallableStatement
ResultSet
ResultSetMetaData
DataBaseMetaData

classes
------------------

DriverManager
Date
Time
TimeStamp
Types



2) javax.sql Package:

    It defines more advanced Classes and Interfaces which can be used for Database
    Communication.

There are multiple Sub Packages are also available

javax.sql.rowset;
javax.sql.rowset.serial;
javax.sql.rowset.spi;



Interfaces
---------------
DataSource
RowSet
RowSetListener
ConnectionEventListener
StatementEventListener

Classes
-----------------

1) ConnectionEvent
2) RowSetEvent
3) StatementEvent
:::::::::::::::::::

  Programmers are not responsible to provide Implementation for JDBC API Interfaces.

  Most of the times Database Vendor is responsible to provide Implementation as the Part of
  Driver Software.

  Every Driver Software is a Collection of Classes implementing various Interfaces of JDBC API,
  which can be used to communicate with a particular Database.



            java application----------> DriverSoftware ------------------>DB 
                                       (collection of implementation
                                         classes of jdbc api)



  for Example, Driver Software of Oracle means Collection of Implementation Classes of JDBC API, 
  which can be used to communicate with Oracle Database.

  Every Driver Software is identified with some Special Class which is nothing but Driver Class. It
  is the Implementation Class of Driver Interface present in. java.sql Package.

  As the Part of JDK, SUN People provided one Built-In Driver Software which implements JDBC
  API, which is nothing but Type-1 Driver (JDBC-ODBC Bridge Driver).

  The corresponding Driver Class Name is:


                sun.jdbc.odbc. JdbcOdbcDriver
                Package          Driver class
                Name


*/